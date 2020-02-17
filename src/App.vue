<template>
	<div id="app">
		<div>
		<v-tooltip initText="Hello World!">
			<button class="button">Click me</button>
		</v-tooltip>
		</div>

		<div>
		<v-tooltip initText="Hello World!">
			<button class="button">Click me</button>
		</v-tooltip>
		</div>
	</div>
</template>

<script>
import ToolTip from './components/TheToolTip'

export default {
	name: 'app',
	components: {
    	'v-tooltip': ToolTip
  	}
};
</script>

<style>
div {
	display: flex;
	flex-direction: row;
}
</style>