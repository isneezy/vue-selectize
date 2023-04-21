---
title: Props
---

## multiple

Equivalent to the `multiple` attribute on a `<select>` input.

```js
multiple: { default: false, type: Boolean },
```

## placeholder

Equivalent to the placeholder attribute on an `<input>` input.

```js
placeholder: { default: '', type: String },
```

## options

An array of strings or objects to be used as dropdown choices.
If you are using an array of objects, vue-selectize will look for an `id` and `label` key  
Ex. `[{id: 'MZ', label: 'Mozambique'}]`    
A custom label key can be set with the [label](#label) prop.

```js
options: { default: () => [], type: Array },
```

## keyBy

Selectable option unique identifier key, each option must have a unique identifier.
Use this prop to change the default behavior

```js
keyBy: { default: 'id', type: String },
```

## label

Tells vue-selectize what key to use when generating option labels when each option
is an object.

```js
label: { default: 'label', type: String },
```

## keys

vue-selectize internally uses [fuse.js](https://fusejs.io/examples.html#search-object-array) to perform its search capabilities, this props tell witch keys to use for searching.

```js
keys: {
  default() {
    return [this.label, this.keyBy]
  },
},
```

## value

Contains the currently selected value. Very similar to a value attribute on an `<input>`.  
You can listen for changes using `input` event using v-on.

```js
value: { default: null, type: [Array, Object, String, Number] },
```

## limit

The limits the number of options that are visible in the dropdown

```js
limit: { default: 0, type: [Number] },
```

## disabled

Disable the entire component.

```js
disabled: { default: false, type: Boolean },
```

## disableSearch

Disable the built-in search engine

```js
disableSearch: { default: false, type: Boolean },
```

## createItem

User-defined function for adding Options. Set to false to disable adding an option

```js
createItem: {
  default: function(text) {
    return Promise.resolve(text)
  },
  type: [Function, Boolean]
},
```

## searchFn

User-defined function for searching

```js
searchFn: { default: false, type: [Boolean, Function] },
```

## theme

Selectize.js theme

```js
theme: { default: '', type: String }
```

## clearSearchText

Allows component to delete whole option

```js
clearSearchText: { default: false, type: Boolean }
```
