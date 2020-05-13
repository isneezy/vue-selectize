<template>
  <div
    class="selectize-control"
    tabindex="0"
    :class="controlClassName"
    v-on:focus="onFocus"
    v-click-outside="onBlur"
  >
    <div
      :class="inputClassName"
      class="selectize-input items"
      @click="onFocus"
      @keydown.tab="onBlur"
    >
      <div
        :key="item[keyBy]"
        v-for="item in selectedItems"
        class="item"
        :data-value="item[keyBy]"
      >
        <slot name="item" v-bind:item="item">{{ item[label] }}</slot>
      </div>

      <input
        @input="onSearch"
        ref="input"
        :value="searchText"
        :disabled="disabled"
        :placeholder="computedPlaceholder"
        autocomplete="off"
        tabindex="-1"
        :style="inputStyle"
        @keyup.up="activatePrevious"
        @keyup.down="activateNext"
        @keyup.delete="popOption"
        @keyup.enter="selectActiveOption"
      />
    </div>
    <div
      class="selectize-dropdown"
      :class="dropdownClassName"
      :style="dropdownStyle"
    >
      <div class="selectize-dropdown-content">
        <div
          v-on:mouseover="activateOption(option)"
          data-selectable
          :key="option[keyBy]"
          v-for="option in filteredOptions"
          class="option"
          :class="getOptionClassName(option)"
          :data-value="option[keyBy]"
          @click="selectOption(option)"
        >
          <slot name="option" v-bind:option="option">{{ option[label] }}</slot>
        </div>

        <div
          v-if="
            !filteredOptions.length &&
              searchText.length &&
              typeof createItem === 'function'
          "
          class="option create active"
          @click="selectActiveOption"
          data-selectable
        >
          <slot name="create-item" v-bind:text="searchText"
            >Add <strong>{{ searchText }}</strong></slot
          >
        </div>
      </div>
    </div>
    <div class="spinner">
      <slot name="spinner">
        <span class="spinner_bg"></span>
      </slot>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import ClickOutside from 'vue-click-outside'
import ArrayDifference from 'lodash.difference'
import { isPromise } from './utils.js'
export default {
  name: 'v-selectize',
  props: {
    /**
     * Allows multiple selection if true
     */
    multiple: { default: false, type: Boolean },

    /**
     * Input placeholder
     */
    placeholder: { default: '', type: String },

    /**
     * Array of selectable options
     */
    options: { default: () => [], type: Array },

    /**
     * Selectable option identifier key
     */
    keyBy: { default: 'id', type: String },

    /**
     * Option label key
     */
    label: { default: 'label', type: String },

    /**
     * Keys used during search and sorting options
     */
    keys: { default: () => ['label'] },

    /**
     * The value of the component
     */
    value: { default: null, type: [Array, Object, String, Number] },

    /**
     * The limit/max of options to show in dropdown
     */
    limit: { default: 0, type: [Number] },

    /**
     * Allows input to be disabled and hides dropdown options
     */
    disabled: { default: false, type: Boolean },

    /**
     * Allows disable the built in search engine
     */
    disableSearch: { default: false, type: Boolean },

    /**
     * Function to be called when user creates new option
     * Set to false to disable new option creation
     */
    createItem: {
      default: function(text) {
        return Promise.resolve(text)
      },
      type: [Function, Boolean]
    },

    searchFn: { default: false, type: [Boolean, Function] },

    /**
     * Selectize theme
     */
    theme: { default: '', type: String }
  },

  data: () => ({
    inputWidth: 0,
    hasFocus: false,
    searchText: '',
    activeOptionKey: '',
    selected: [],
    busy: false
  }),

  mounted() {
    this.setSelectedValue(this.value)
    this.updateInputWidth()
  },

  computed: {
    computedPlaceholder() {
      return this.selectedItems.length ? '' : this.placeholder
    },

    /**
     * Internally formatted selected options
     * @returns {any[]}
     */
    selectedItems() {
      return this.selected.map((item) => {
        return this.formatOption(item)
      })
    },

    /**
     * Internally formatted selectable options
     */
    formattedOptions() {
      const options =
        this.hasFocus && !this.multiple
          ? this.options
          : ArrayDifference(this.options, this.selected)
      return options.map((option) => {
        return this.formatOption(option)
      })
    },

    /**
     * returns options filtered and sorted
     * @returns {any}
     */
    filteredOptions() {
      const fuse = new Fuse(this.formattedOptions, {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: this.keys
      })
      const options =
        this.searchText.length && !this.disableSearch
          ? fuse.search(this.searchText).map(r => r.item)
          : this.formattedOptions
      return this.limit > 0 ? options.slice(0, this.limit) : options
    },

    /**
     * return the calculated active option
     * @returns {null}
     */
    activeOption() {
      let option = this.filteredOptions.find(
        (option) => option[this.keyBy] === this.activeOptionKey
      )
      if (!option)
        return this.filteredOptions.length ? this.filteredOptions[0] : null
      return option
    },

    /**
     * returns the calculated active option index relative to filtered option
     */
    activeOptionIndex() {
      return this.filteredOptions.findIndex(
        (option) => option[this.keyBy] === this.activeOptionKey
      )
    },

    /**
     * returns true if this component has available options to show
     * @returns {boolean}
     */
    hasOptions() {
      return !!this.options.length
    },

    /**
     * Unused reserved for future use
     * returns true if the selected options reached the maximum selectable number of option
     * @returns {boolean}
     */
    isFull() {
      return false
    },

    /**
     * returns the classes to the .selectize-control element
     * @returns {{}}
     */
    controlClassName() {
      const className = {}
      className[this.theme] = true
      className['multi'] = this.multiple
      className['single'] = !this.multiple
      className['loading'] = this.busy
      return className
    },

    /**
     * returns the classes to the .selectize-input element
     * @returns {{}}
     */
    inputClassName() {
      const className = {}
      className['focus'] = this.hasFocus
      className['input-active'] = this.hasFocus
      className['dropdown-active'] = this.hasFocus
      className['not-full'] = !this.isFull
      className['has-options'] = this.hasOptions
      className['has-items'] = !!this.selected.length
      return className
    },

    /**
     * returns the style for the input element
     * @returns {{}}
     */
    inputStyle() {
      // width: 4px; opacity: 1; position: relative; left: 0px;
      const style = {}
      style['width'] = `${this.inputWidth}px`
      style['opacity'] = 1
      style['position'] = 'relative'
      style['left'] = '0px'
      return style
    },

    /**
     * return classes for the .selectize-dropdown element
     * @returns {{}}
     */
    dropdownClassName() {
      const className = {}
      className[this.theme] = true
      className['multi'] = this.multiple
      className['single'] = !this.multiple
      return className
    },

    /**
     * returns the style for the .selectize-dropdown element
     * @returns {{}}
     */
    dropdownStyle() {
      const style = {}
      style['display'] =
        this.hasFocus &&
        (this.filteredOptions.length ||
          (this.searchText.length && typeof this.createItem === 'function'))
          ? 'block'
          : 'none'
      style['width'] = `100%`
      return style
    }
  },

  methods: {
    /**
     * Action performed when component is focused
     */
    onFocus() {
      if (!this.disabled) {
        this.hasFocus = !this.disabled
        this.$refs.input.focus()
      }
    },

    /**
     * Action performed when component looses focus
     */
    onBlur() {
      this.activeOptionKey = ''
      this.searchText = ''
      this.updateInputWidth()
      this.$refs.input.blur()
      this.hasFocus = false
    },

    /**
     * Action performed when user types into the input element
     * @param e
     */
    onSearch(e) {
      if (this.selected.length && !this.multiple) {
        e.target.value = this.searchText
        return
      }
      this.searchText = e.target.value
      this.$emit('search', this.searchText)
      if (typeof this.searchFn === 'function') {
        this.onAjaxStart()
        this.searchFn(this.searchText, this.onAjaxDone)
      }
      this.updateInputWidth()
    },

    /**
     * Formats an option for internal usage
     * @param option
     * @returns {*}
     */
    formatOption(option) {
      if (typeof option !== 'object') {
        const item = {}
        item['formatted'] = true
        item[this.keyBy] = option
        item[this.label] = option
        return item
      }
      return option
    },

    /**
     * Calculates and updates the input element width
     * to fit the searched text or the placeholder
     */
    updateInputWidth() {
      this.canvas = this.canvas || document.createElement('div')
      this.canvas.style.visibility = 'hidden'
      this.canvas.style.position = 'absolute'
      if (this.$el) {
        this.$el.appendChild(this.canvas)
      }

      this.canvas.innerText = this.selected.length
        ? this.searchText
        : this.placeholder

      this.inputWidth = this.canvas.clientWidth + 4

      if (this.$el) {
        this.$el.removeChild(this.canvas)
      }
    },

    /**
     * Activates a selectable option
     * @param option
     */
    activateOption(option) {
      this.activeOptionKey = option[this.keyBy]
    },

    /**
     * Activates previous option if available
     * this is relative to filtered option
     */
    activatePrevious() {
      if (this.activeOptionIndex > 0 && this.filteredOptions.length) {
        this.activateOption(this.filteredOptions[this.activeOptionIndex - 1])
      }
    },

    /**
     * Activates the next option if available
     * this is relative to filtered computed options
     */
    activateNext() {
      if (this.filteredOptions.length - 1 > this.activeOptionIndex) {
        this.activateOption(this.filteredOptions[this.activeOptionIndex + 1])
      }
    },

    /**
     * returns the classes to be used in the .option element
     * @param option
     * @returns {{}}
     */
    getOptionClassName(option) {
      const className = {}
      className['active'] = option[this.keyBy] === this.activeOption[this.keyBy]
      return className
    },

    /**
     * Selects an option and emits input evant to the parent component
     * @param option
     */
    selectOption(option) {
      if (!option) return
      if (this.multiple) {
        this.onFocus()
      } else {
        this.onBlur()
      }
      const value = option['formatted'] ? option[this.label] : option
      if (this.multiple) {
        this.selected.push(value)
      } else {
        this.selected = [value]
      }
      this.searchText = ''
      this.emitInput()
      this.updateInputWidth()
    },

    /**
     * Select an active option
     */
    selectActiveOption() {
      this.setBusy()
      if (this.activeOption) this.selectOption(this.activeOption)
      else if (
        typeof this.createItem === 'function' &&
        this.searchText.length
      ) {
        const option = this.createItem(this.searchText)
        if (isPromise(option)) {
          option
            .then((o) => {
              this.selectOption(this.formatOption(o))
              this.searchText = ''
              this.setNotBusy()
            })
            .catch((e) => {
              this.setNotBusy()
              return Promise.reject(e)
            })
        } else {
          this.selectOption(this.formatOption(option))
          this.searchText = ''
          this.setNotBusy()
        }
      }
    },

    /**
     * Removes the last selected option
     */
    popOption() {
      this.deleteOnNextCall =
        this.deleteOnNextCall === 0 ? -1 : this.searchText.length
      if (this.deleteOnNextCall === -1 || !this.multiple) {
        let option = this.selected.pop()
        if (typeof option === 'object' && option !== undefined) {
          option = option[this.label]
        }
        if (this.multiple) {
          this.searchText = option !== undefined ? option : ''
        }
        this.emitInput()
        this.updateInputWidth()
      }
    },

    /**
     * Emits input with the correct value
     * the whole selected array of data if multiple otherwise
     * the first element of the selected array or null
     */
    emitInput() {
      if (this.multiple) {
        this.$emit('input', this.selected)
      } else {
        this.$emit('input', this.selected.length ? this.selected[0] : null)
      }
    },

    /**
     * Correctly sets the component internal mutable value
     * @param value
     */
    setSelectedValue(value) {
      if (Array.isArray(value)) {
        this.selected = value.slice()
      } else if (value) {
        this.selected = [value]
      } else {
        this.selected = []
      }
    },

    onAjaxStart() {
      this.setBusy()
    },
    onAjaxDone() {
      this.setNotBusy()
    },
    setBusy() {
      this.busy = true
    },
    setNotBusy() {
      this.busy = false
    }
  },

  watch: {
    value: {
      handler(value) {
        this.setSelectedValue(value)
      },
      deep: true
    }
  },
  directives: { ClickOutside }
}
</script>

<style scoped>
.spinner {
  transition: opacity 0.2s;
  z-index: 2;
  position: absolute;
  top: 50%;
  right: 34px;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 0;
  opacity: 0;
}

.spinner .spinner_bg {
  background: url(../assets/images/spinner.gif);
  background-size: 16px 16px;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
.loading .spinner {
  opacity: 1;
}
</style>
