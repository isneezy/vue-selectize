(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-selectize"] = factory();
	else
		root["vue-selectize"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+rLv":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("dyZX").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/media/storage/repos/vue-selectize-component/node_modules/.cache/vue-loader","cacheIdentifier":"02bea4b2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VSelectize.vue?vue&type=template&id=2484c51c&scoped=true
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onBlur),expression:"onBlur"}],staticClass:"selectize-control",class:_vm.controlClassName,attrs:{"tabindex":"0"},on:{"focus":_vm.onFocus}},[_c('div',{staticClass:"selectize-input items",class:_vm.inputClassName,on:{"click":_vm.onFocus,"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.onBlur($event)}}},[_vm._l((_vm.selectedItems),function(item){return _c('div',{key:item[_vm.keyBy],staticClass:"item",attrs:{"data-value":item[_vm.keyBy]}},[_vm._t("item",[_vm._v(_vm._s(item[_vm.label]))],{item:item})],2)}),_c('input',{ref:"input",style:(_vm.inputStyle),attrs:{"disabled":_vm.disabled,"placeholder":_vm.computedPlaceholder,"autocomplete":"off","tabindex":"-1"},domProps:{"value":_vm.searchText},on:{"input":_vm.onSearch,"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.activatePrevious($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.activateNext($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }return _vm.popOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.selectActiveOption($event)}]}})],2),_c('div',{staticClass:"selectize-dropdown",class:_vm.dropdownClassName,style:(_vm.dropdownStyle)},[_c('div',{staticClass:"selectize-dropdown-content"},[_vm._l((_vm.filteredOptions),function(option){return _c('div',{key:option[_vm.keyBy],staticClass:"option",class:_vm.getOptionClassName(option),attrs:{"data-selectable":"","data-value":option[_vm.keyBy]},on:{"mouseover":function($event){_vm.activateOption(option)},"click":function($event){_vm.selectOption(option)}}},[_vm._t("option",[_vm._v(_vm._s(option[_vm.label]))],{option:option})],2)}),(!_vm.filteredOptions.length && _vm.searchText.length && typeof _vm.createItem === 'function')?_c('div',{staticClass:"option create active",attrs:{"data-selectable":""},on:{"click":_vm.selectActiveOption}},[_vm._t("create-item",[_vm._v("Add "),_c('strong',[_vm._v(_vm._s(_vm.searchText))])],{text:_vm.searchText})],2):_vm._e()],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VSelectize.vue?vue&type=template&id=2484c51c&scoped=true

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("INYr");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("dRSK");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("OG14");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rGqo");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("yt8O");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("xfY5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("VRzm");

// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js
var dist_fuse = __webpack_require__("/+cc");
var fuse_default = /*#__PURE__*/__webpack_require__.n(dist_fuse);

// EXTERNAL MODULE: ./node_modules/vue-click-outside/index.js
var vue_click_outside = __webpack_require__("5n2/");
var vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(vue_click_outside);

// EXTERNAL MODULE: ./node_modules/lodash.difference/index.js
var lodash_difference = __webpack_require__("YY/H");
var lodash_difference_default = /*#__PURE__*/__webpack_require__.n(lodash_difference);

// CONCATENATED MODULE: ./src/components/utils.js
function isPromise(funct) {
  if ('then' in funct && 'catch' in funct) {
    return true;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VSelectize.vue?vue&type=script&lang=js








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var VSelectizevue_type_script_lang_js = ({
  name: 'v-selectize',
  props: {
    /**
     * Allows multiple selection if true
     */
    multiple: {
      default: false,
      type: Boolean
    },

    /**
     * Input placeholder
     */
    placeholder: {
      default: '',
      type: String
    },

    /**
     * Array of selectable options
     */
    options: {
      default: function _default() {
        return [];
      },
      type: Array
    },

    /**
     * Selectable option identifier key
     */
    keyBy: {
      default: 'id',
      type: String
    },

    /**
     * Option label key
     */
    label: {
      default: 'label',
      type: String
    },

    /**
     * Keys used during search and sorting options
     */
    keys: {
      default: function _default() {
        return ['label'];
      }
    },

    /**
     * The value of the component
     */
    value: {
      default: null,
      type: [Array, Object, String, Number]
    },

    /**
     * The limit/max of options to show in dropdown
     */
    limit: {
      default: 0,
      type: [Number]
    },

    /**
     * Allows input to be disabled and hides dropdown options
     */
    disabled: {
      default: false,
      type: Boolean
    },

    /**
     * Allows disable the built in search engine
     */
    disableSearch: {
      default: false,
      type: Boolean
    },

    /**
     * Function to be called when user creates new option
     * Set to false to disable new option creation
     */
    createItem: {
      default: function _default(text) {
        return Promise.resolve(text);
      },
      type: [Function, Boolean]
    },
    searchFn: {
      default: false,
      type: [Boolean, Function]
    },

    /**
     * Selectize theme
     */
    theme: {
      default: '',
      type: String
    }
  },
  data: function data() {
    return {
      inputWidth: 0,
      hasFocus: false,
      searchText: '',
      activeOptionKey: '',
      selected: [],
      busy: false
    };
  },
  mounted: function mounted() {
    this.setSelectedValue(this.value);
    this.updateInputWidth();
  },
  computed: {
    computedPlaceholder: function computedPlaceholder() {
      return this.selectedItems.length ? '' : this.placeholder;
    },

    /**
     * Internally formatted selected options
     * @returns {any[]}
     */
    selectedItems: function selectedItems() {
      var _this = this;

      return this.selected.map(function (item) {
        return _this.formatOption(item);
      });
    },

    /**
     * Internally formatted selectable options
     */
    formattedOptions: function formattedOptions() {
      var _this2 = this;

      var options = this.hasFocus && !this.multiple ? this.options : lodash_difference_default()(this.options, this.selected);
      return options.map(function (option) {
        return _this2.formatOption(option);
      });
    },

    /**
     * returns options filtered and sorted
     * @returns {any}
     */
    filteredOptions: function filteredOptions() {
      var fuse = new fuse_default.a(this.formattedOptions, {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: this.keys
      });
      var options = this.searchText.length && !this.disableSearch ? fuse.search(this.searchText) : this.formattedOptions;
      return this.limit > 0 ? options.slice(0, this.limit) : options;
    },

    /**
     * return the calculated active option
     * @returns {null}
     */
    activeOption: function activeOption() {
      var _this3 = this;

      var option = this.filteredOptions.find(function (option) {
        return option[_this3.keyBy] === _this3.activeOptionKey;
      });
      if (!option) return this.filteredOptions.length ? this.filteredOptions[0] : null;
      return option;
    },

    /**
     * returns the calculated active option index relative to filtered option
     */
    activeOptionIndex: function activeOptionIndex() {
      var _this4 = this;

      return this.filteredOptions.findIndex(function (option) {
        return option[_this4.keyBy] === _this4.activeOptionKey;
      });
    },

    /**
     * returns true if this component has available options to show
     * @returns {boolean}
     */
    hasOptions: function hasOptions() {
      return !!this.options.length;
    },

    /**
     * Unused reserved for future use
     * returns true if the selected options reached the maximum selectable number of option
     * @returns {boolean}
     */
    isFull: function isFull() {
      return false;
    },

    /**
     * returns the classes to the .selectize-control element
     * @returns {{}}
     */
    controlClassName: function controlClassName() {
      var className = {};
      className[this.theme] = true;
      className['multi'] = this.multiple;
      className['single'] = !this.multiple;
      className['loading'] = this.busy;
      return className;
    },

    /**
     * returns the classes to the .selectize-input element
     * @returns {{}}
     */
    inputClassName: function inputClassName() {
      var className = {};
      className['focus'] = this.hasFocus;
      className['input-active'] = this.hasFocus;
      className['dropdown-active'] = this.hasFocus;
      className['not-full'] = !this.isFull;
      className['has-options'] = this.hasOptions;
      className['has-items'] = !!this.selected.length;
      return className;
    },

    /**
     * returns the style for the input element
     * @returns {{}}
     */
    inputStyle: function inputStyle() {
      // width: 4px; opacity: 1; position: relative; left: 0px;
      var style = {};
      style['width'] = "".concat(this.inputWidth, "px");
      style['opacity'] = 1;
      style['position'] = 'relative';
      style['left'] = '0px';
      return style;
    },

    /**
     * return classes for the .selectize-dropdown element
     * @returns {{}}
     */
    dropdownClassName: function dropdownClassName() {
      var className = {};
      className[this.theme] = true;
      className['multi'] = this.multiple;
      className['single'] = !this.multiple;
      return className;
    },

    /**
     * returns the style for the .selectize-dropdown element
     * @returns {{}}
     */
    dropdownStyle: function dropdownStyle() {
      var style = {};
      style['display'] = this.hasFocus && (this.filteredOptions.length || this.searchText.length && typeof this.createItem === 'function') ? 'block' : 'none';
      style['width'] = "100%";
      return style;
    }
  },
  methods: {
    /**
     * Action performed when component is focused
     */
    onFocus: function onFocus() {
      if (!this.disabled) {
        this.hasFocus = !this.disabled;
        this.$refs.input.focus();
      }
    },

    /**
     * Action performed when component looses focus
     */
    onBlur: function onBlur() {
      this.activeOptionKey = '';
      this.searchText = '';
      this.updateInputWidth();
      this.$refs.input.blur();
      this.hasFocus = false;
    },

    /**
     * Action performed when user types into the input element
     * @param e
     */
    onSearch: function onSearch(e) {
      if (this.selected.length && !this.multiple) {
        e.target.value = this.searchText;
        return;
      }

      this.searchText = e.target.value;
      this.$emit('search', this.searchText);

      if (typeof this.searchFn === 'function') {
        this.onAjaxStart();
        this.searchFn(this.searchText, this.onAjaxDone);
      }

      this.updateInputWidth();
    },

    /**
     * Formats an option for internal usage
     * @param option
     * @returns {*}
     */
    formatOption: function formatOption(option) {
      if (_typeof(option) !== 'object') {
        var item = {};
        item['formatted'] = true;
        item[this.keyBy] = option;
        item[this.label] = option;
        return item;
      }

      return option;
    },

    /**
     * Calculates and updates the input element width
     * to fit the searched text or the placeholder
     */
    updateInputWidth: function updateInputWidth() {
      this.canvas = this.canvas || document.createElement('div');
      this.canvas.style.visibility = 'hidden';
      this.canvas.style.position = 'absolute';

      if (this.$el) {
        this.$el.appendChild(this.canvas);
      }

      this.canvas.innerText = this.selected.length ? this.searchText : this.placeholder;
      this.inputWidth = this.canvas.clientWidth + 4;

      if (this.$el) {
        this.$el.removeChild(this.canvas);
      }
    },

    /**
     * Activates a selectable option
     * @param option
     */
    activateOption: function activateOption(option) {
      this.activeOptionKey = option[this.keyBy];
    },

    /**
     * Activates previous option if available
     * this is relative to filtered option
     */
    activatePrevious: function activatePrevious() {
      if (this.activeOptionIndex > 0 && this.filteredOptions.length) {
        this.activateOption(this.filteredOptions[this.activeOptionIndex - 1]);
      }
    },

    /**
     * Activates the next option if available
     * this is relative to filtered computed options
     */
    activateNext: function activateNext() {
      if (this.filteredOptions.length - 1 > this.activeOptionIndex) {
        this.activateOption(this.filteredOptions[this.activeOptionIndex + 1]);
      }
    },

    /**
     * returns the classes to be used in the .option element
     * @param option
     * @returns {{}}
     */
    getOptionClassName: function getOptionClassName(option) {
      var className = {};
      className['active'] = option[this.keyBy] === this.activeOption[this.keyBy];
      return className;
    },

    /**
     * Selects an option and emits input evant to the parent component
     * @param option
     */
    selectOption: function selectOption(option) {
      if (!option) return;

      if (this.multiple) {
        this.onFocus();
      } else {
        this.onBlur();
      }

      var value = option['formatted'] ? option[this.label] : option;

      if (this.multiple) {
        this.selected.push(value);
      } else {
        this.selected = [value];
      }

      this.searchText = '';
      this.emitInput();
      this.updateInputWidth();
    },

    /**
     * Select an active option
     */
    selectActiveOption: function selectActiveOption() {
      var _this5 = this;

      this.setBusy();
      if (this.activeOption) this.selectOption(this.activeOption);else if (typeof this.createItem === 'function' && this.searchText.length) {
        var option = this.createItem(this.searchText);

        if (isPromise(option)) {
          option.then(function (o) {
            _this5.selectOption(_this5.formatOption(o));

            _this5.searchText = '';

            _this5.setNotBusy();
          }).catch(function (e) {
            _this5.setNotBusy();

            return Promise.reject(e);
          });
        } else {
          this.selectOption(this.formatOption(option));
          this.searchText = '';
          this.setNotBusy();
        }
      }
    },

    /**
     * Removes the last selected option
     */
    popOption: function popOption() {
      this.deleteOnNextCall = this.deleteOnNextCall === 0 ? -1 : this.searchText.length;

      if (this.deleteOnNextCall === -1 || !this.multiple) {
        var option = this.selected.pop();

        if (_typeof(option) === 'object' && option !== undefined) {
          option = option[this.label];
        }

        if (this.multiple) {
          this.searchText = option !== undefined ? option : '';
        }

        this.emitInput();
        this.updateInputWidth();
      }
    },

    /**
     * Emits input with the correct value
     * the whole selected array of data if multiple otherwise
     * the first element of the selected array or null
     */
    emitInput: function emitInput() {
      if (this.multiple) {
        this.$emit('input', this.selected);
      } else {
        this.$emit('input', this.selected.length ? this.selected[0] : null);
      }
    },

    /**
     * Correctly sets the component internal mutable value
     * @param value
     */
    setSelectedValue: function setSelectedValue(value) {
      if (Array.isArray(value)) {
        this.selected = value.slice();
      } else if (value) {
        this.selected = [value];
      } else {
        this.selected = [];
      }
    },
    onAjaxStart: function onAjaxStart() {
      this.setBusy();
    },
    onAjaxDone: function onAjaxDone() {
      this.setNotBusy();
    },
    setBusy: function setBusy() {
      this.busy = true;
    },
    setNotBusy: function setNotBusy() {
      this.busy = false;
    }
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.setSelectedValue(value);
      },
      deep: true
    }
  },
  directives: {
    ClickOutside: vue_click_outside_default.a
  }
});
// CONCATENATED MODULE: ./src/components/VSelectize.vue?vue&type=script&lang=js
 /* harmony default export */ var components_VSelectizevue_type_script_lang_js = (VSelectizevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/VSelectize.vue?vue&type=style&index=0&id=2484c51c&scoped=true&lang=css
var VSelectizevue_type_style_index_0_id_2484c51c_scoped_true_lang_css = __webpack_require__("6YLC");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VSelectize.vue






/* normalize component */

var component = normalizeComponent(
  components_VSelectizevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2484c51c",
  null
  
)

/* harmony default export */ var VSelectize = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VSelectize);



/***/ }),

/***/ "/+cc":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.2.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    // console.log('score', score, finalScore)

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // console.log('FINAL SCORE', finalScore)

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        this._log('\n\nOutput:\n\n', JSON.stringify(results));
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),

/***/ "/e88":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "0/R4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "1TsA":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2OiF":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "3Lyj":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("KroJ");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "4R4u":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "4jy/":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5n2/":
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "69bn":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("y3w9");
var aFunction = __webpack_require__("2OiF");
var SPECIES = __webpack_require__("K0xU")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "6FMO":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var isArray = __webpack_require__("EWmC");
var SPECIES = __webpack_require__("K0xU")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "6YLC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelectize_vue_vue_type_style_index_0_id_2484c51c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4jy/");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelectize_vue_vue_type_style_index_0_id_2484c51c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelectize_vue_vue_type_style_index_0_id_2484c51c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelectize_vue_vue_type_style_index_0_id_2484c51c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9gX7":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "Afnz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("LQAc");
var $export = __webpack_require__("XKFU");
var redefine = __webpack_require__("KroJ");
var hide = __webpack_require__("Mukb");
var Iterators = __webpack_require__("hPIQ");
var $iterCreate = __webpack_require__("QaDb");
var setToStringTag = __webpack_require__("fyDq");
var getPrototypeOf = __webpack_require__("OP3Y");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "CkkT":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("m0Pp");
var IObject = __webpack_require__("Ymqv");
var toObject = __webpack_require__("S/j/");
var toLength = __webpack_require__("ne8i");
var asc = __webpack_require__("zRwo");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "DVgA":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("zhAb");
var enumBugKeys = __webpack_require__("4R4u");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "EWmC":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("LZWt");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "EemH":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("UqcF");
var createDesc = __webpack_require__("RjD/");
var toIObject = __webpack_require__("aCFj");
var toPrimitive = __webpack_require__("apmT");
var has = __webpack_require__("aagx");
var IE8_DOM_DEFINE = __webpack_require__("xpql");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("nh4g") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "FJW5":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa");
var anObject = __webpack_require__("y3w9");
var getKeys = __webpack_require__("DVgA");

module.exports = __webpack_require__("nh4g") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "GZEu":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("m0Pp");
var invoke = __webpack_require__("MfQN");
var html = __webpack_require__("+rLv");
var cel = __webpack_require__("Iw71");
var global = __webpack_require__("dyZX");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("LZWt")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "H6hf":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("y3w9");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "I8a+":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("LZWt");
var TAG = __webpack_require__("K0xU")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "INYr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("XKFU");
var $find = __webpack_require__("CkkT")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("nGyu")(KEY);


/***/ }),

/***/ "IU+Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("Mukb");
var redefine = __webpack_require__("KroJ");
var fails = __webpack_require__("eeVq");
var defined = __webpack_require__("vhPU");
var wks = __webpack_require__("K0xU");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "Iw71":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var document = __webpack_require__("dyZX").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "J+6e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("I8a+");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var Iterators = __webpack_require__("hPIQ");
module.exports = __webpack_require__("g3g5").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "K0xU":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VTer")('wks');
var uid = __webpack_require__("ylqs");
var Symbol = __webpack_require__("dyZX").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "KroJ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var hide = __webpack_require__("Mukb");
var has = __webpack_require__("aagx");
var SRC = __webpack_require__("ylqs")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("g3g5").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "Kuth":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("y3w9");
var dPs = __webpack_require__("FJW5");
var enumBugKeys = __webpack_require__("4R4u");
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Iw71")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("+rLv").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "LQAc":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "LZWt":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "M6Qj":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("hPIQ");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "MfQN":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "Mukb":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa");
var createDesc = __webpack_require__("RjD/");
module.exports = __webpack_require__("nh4g") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "OG14":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("IU+Z")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "OP3Y":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("aagx");
var toObject = __webpack_require__("S/j/");
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "QaDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Kuth");
var descriptor = __webpack_require__("RjD/");
var setToStringTag = __webpack_require__("fyDq");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("Mukb")(IteratorPrototype, __webpack_require__("K0xU")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "RYi7":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "RjD/":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "S/j/":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("vhPU");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "SlkY":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("m0Pp");
var call = __webpack_require__("H6hf");
var isArrayIter = __webpack_require__("M6Qj");
var anObject = __webpack_require__("y3w9");
var toLength = __webpack_require__("ne8i");
var getIterFn = __webpack_require__("J+6e");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "UqcF":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "VRzm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("LQAc");
var global = __webpack_require__("dyZX");
var ctx = __webpack_require__("m0Pp");
var classof = __webpack_require__("I8a+");
var $export = __webpack_require__("XKFU");
var isObject = __webpack_require__("0/R4");
var aFunction = __webpack_require__("2OiF");
var anInstance = __webpack_require__("9gX7");
var forOf = __webpack_require__("SlkY");
var speciesConstructor = __webpack_require__("69bn");
var task = __webpack_require__("GZEu").set;
var microtask = __webpack_require__("gHnn")();
var newPromiseCapabilityModule = __webpack_require__("pbhE");
var perform = __webpack_require__("nICZ");
var userAgent = __webpack_require__("ol8x");
var promiseResolve = __webpack_require__("vKrd");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("K0xU")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("3Lyj")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("fyDq")($Promise, PROMISE);
__webpack_require__("elZq")(PROMISE);
Wrapper = __webpack_require__("g3g5")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("XMVh")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "VTer":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("g3g5");
var global = __webpack_require__("dyZX");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("LQAc") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "XKFU":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var core = __webpack_require__("g3g5");
var hide = __webpack_require__("Mukb");
var redefine = __webpack_require__("KroJ");
var ctx = __webpack_require__("m0Pp");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "XMVh":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("K0xU")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "Xbzi":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var setPrototypeOf = __webpack_require__("i5dc").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "YTvA":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("VTer")('keys');
var uid = __webpack_require__("ylqs");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "YY/H":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = difference;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "Ymqv":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("LZWt");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "aCFj":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("Ymqv");
var defined = __webpack_require__("vhPU");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "aagx":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "apmT":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("0/R4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "d/Gc":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("RYi7");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "dRSK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("XKFU");
var $find = __webpack_require__("CkkT")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("nGyu")(KEY);


/***/ }),

/***/ "dyZX":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "eeVq":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "elZq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("dyZX");
var dP = __webpack_require__("hswa");
var DESCRIPTORS = __webpack_require__("nh4g");
var SPECIES = __webpack_require__("K0xU")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "fyDq":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("hswa").f;
var has = __webpack_require__("aagx");
var TAG = __webpack_require__("K0xU")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "g3g5":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "gHnn":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var macrotask = __webpack_require__("GZEu").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("LZWt")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "hPIQ":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "hswa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("y3w9");
var IE8_DOM_DEFINE = __webpack_require__("xpql");
var toPrimitive = __webpack_require__("apmT");
var dP = Object.defineProperty;

exports.f = __webpack_require__("nh4g") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "i5dc":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("0/R4");
var anObject = __webpack_require__("y3w9");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("m0Pp")(Function.call, __webpack_require__("EemH").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "kJMx":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("zhAb");
var hiddenKeys = __webpack_require__("4R4u").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "m0Pp":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("2OiF");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "nGyu":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("K0xU")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("Mukb")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "nICZ":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "ne8i":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("RYi7");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "nh4g":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("eeVq")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ol8x":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "pbhE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("2OiF");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "qncB":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("XKFU");
var defined = __webpack_require__("vhPU");
var fails = __webpack_require__("eeVq");
var spaces = __webpack_require__("/e88");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "rGqo":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("yt8O");
var getKeys = __webpack_require__("DVgA");
var redefine = __webpack_require__("KroJ");
var global = __webpack_require__("dyZX");
var hide = __webpack_require__("Mukb");
var Iterators = __webpack_require__("hPIQ");
var wks = __webpack_require__("K0xU");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "vKrd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("y3w9");
var isObject = __webpack_require__("0/R4");
var newPromiseCapability = __webpack_require__("pbhE");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "vhPU":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "w2a5":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aCFj");
var toLength = __webpack_require__("ne8i");
var toAbsoluteIndex = __webpack_require__("d/Gc");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "xfY5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("dyZX");
var has = __webpack_require__("aagx");
var cof = __webpack_require__("LZWt");
var inheritIfRequired = __webpack_require__("Xbzi");
var toPrimitive = __webpack_require__("apmT");
var fails = __webpack_require__("eeVq");
var gOPN = __webpack_require__("kJMx").f;
var gOPD = __webpack_require__("EemH").f;
var dP = __webpack_require__("hswa").f;
var $trim = __webpack_require__("qncB").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("Kuth")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("nh4g") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("KroJ")(global, NUMBER, $Number);
}


/***/ }),

/***/ "xpql":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("nh4g") && !__webpack_require__("eeVq")(function () {
  return Object.defineProperty(__webpack_require__("Iw71")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "y3w9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "yLpj":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ylqs":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "yt8O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("nGyu");
var step = __webpack_require__("1TsA");
var Iterators = __webpack_require__("hPIQ");
var toIObject = __webpack_require__("aCFj");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("Afnz")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "zRwo":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("6FMO");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "zhAb":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("aagx");
var toIObject = __webpack_require__("aCFj");
var arrayIndexOf = __webpack_require__("w2a5")(false);
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-selectize.umd.js.map