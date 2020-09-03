---
title: Slots
---

<tip>
<tempalet slot="title">WARN</tempalet>
This content is under revision and it is incomplete.
</tip>

<tip class="mt-2">
VueSelectize leverages scoped slots to allow for total customization of the presentation layer.
Slots can be used to change the look and feel of the UI, or to simply swap out text.
</tip>

## item  

The text displayed to represent each selected item.
- `item {Object|String}` - A selected option

<ItemSlot />

<<< @/docs/.vuepress/components/ItemSlot.vue

## option

The option within the dropdown.
- `option {Object}` - The currently isolated option from `filteredOptions`

<OptionSlot />

<<< @/docs/.vuepress/components/OptionSlot.vue
  

## create-item
## spinner
