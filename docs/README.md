---
home: true
footer: MIT Licensed | Copyright © 2018-present Lisandro Bitoy
---

[![Foo](https://img.shields.io/github/stars/isanbitoy/vue-skill-bar.svg?style=social&label=Star)](https://github.com/isanbitoy/vue-skill-bar/)	[![Foo](https://img.shields.io/npm/v/vue-skill-bar.svg)](https://www.npmjs.com/package/vue-skill-bar)	[![Foo](https://img.shields.io/npm/dm/vue-skill-bar.svg)](https://www.npmjs.com/package/vue-skill-bar)	[![Foo](https://img.shields.io/badge/vue-3.0-green.svg)](https://vuejs.org/)

## Installation

```shell
npm install --save-dev vue-basic-tooltip
```

## Usage

```js
import Vue from 'vue'
import { ToolTip } from 'vue-basic-tooltip' 

Vue.component('v-tooltip', ToolTip)
```

### or

```html
<template>
	<div id="app">
		<v-tooltip initText="Hello World!">
			<button class="button">Click me</button>
		</v-tooltip>
	</div>
</template>
```
```js
<script>
import { ToolTip } from 'vue-basic-tooltip'

export default {
	components: {
		'v-tooltip': ToolTip
	},
	data: function() {
		return {
			...
		}
	}
}
</script>
```

## Example

### Custom text size
```html
<v-tooltip initText="Hello World!" textSize="24" />
```

<SampleA/>

### Custom text color
```html
<v-tooltip initText="Hello World!" textSize="24" textColor="#000" />
```

<SampleB/>

### Custom box color
```html
<v-tooltip initText="Hello World!" textSize="24" textColor="#000" boxColor="#FF69B4" />
```

<SampleC/>

## Available Options
| Props | Type | Values | default |
| :---: | :---:	| :---: | :---: |
| initText | String | text to display |  |
| textSize | Number | 0 - 100 | 14 |
| textColor | String | Color | #FFFFFF |
| boxColor | String | Color | #33CC99 |

