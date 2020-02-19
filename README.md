# vue-basic-tooltip
a basic vuejs based tooltip

## Install
```
npm install --save-dev bue-basic-tooltip
```

## Usage
```js
import Vue from 'vue'
import { Tooltip } from 'vue-basic-tooltip'

Vue.component('v-tooltip', Tooltip)
```
or
```html
<template>
	<div id="app">
		<button class="button">
			<v-tooltip initText="Hello World!">
				Click me
			</v-tooltip>
		</button>
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
```
<button class="button">
	<v-tooltip initText="Hello World!" textSize="24">
		Hover me
	</v-tooltip>
</button>
```
### Custom text color
```html
<button class="button">
	<v-tooltip initText="Hello World!" textSize="24" textColor="#000">
		Hover me
	</v-tooltip>
</button>
```
### Custom box color
```html
<button class="button">
	<v-tooltip initText="Hello World!" textSize="24" textColor="#000" boxColor="#FF69B4">
		Hover me
	</v-tooltip>
</button>
```

## Available Options
| Props | Type | Values | default |
| :---: | :---:	| :---: | :---: |
| initText | String | text to display |  |
| textSize | Number | 0 - 100 | 14 |
| textColor | String | Color | #FFFFFF |
| boxColor | String | Color | #33CC99 |