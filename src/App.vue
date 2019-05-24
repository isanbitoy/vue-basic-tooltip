<template>
	<div id="app">
		<header class="header">
			<span class="header__first-child">
                <a :href="github_link" target="_blank">
                    <span :title="github_link">
                        <i class="fa fa-github"></i>
                    </span>
                </a>
                <h2>vue-basic-tooltip</h2> 
            </span>
            <span><p>a simple tooltip for vue</p></span>
            <span class="header__last-child">
                <h3 class="install--command">npm install --save vue-basic-tooltip</h3>
            </span>
            <nav>
                <a :href="github_link" target="_blank">
                    <img :src="github_star" />
                </a>
                <a :href="npm_link" target="_blank">
                    <img :src="npm_version" />
                    <img :src="npm_download" />
                </a>
                <a :href="vue_link">
                    <img :src="vue_svg" />
                </a>
            </nav>
		</header>
		<section class="app__content">
			<div class="content__box left">
				<h2 class="header--line">Usage</h2>
				<code class="code--usage A">
                    <pre>{{ usageCodeA }}</pre>
                </code>
                <h3>or</h3>
                <code class="code--usage B">
                    <pre>{{ usageCodeB }}</pre>
                </code>
			</div>
			<div class="content__box right">
				<h2>Example</h2>
				<code class="code--sample A">
					<pre>{{ sampleA }}</pre>
				</code>
				<v-tooltip initText="Hello World!">
					<button><h4>Hover me</h4></button>
				</v-tooltip>

				<code class="code--sample B">
					<pre>{{ sampleB }}</pre>
				</code>
				<v-tooltip initText="hello this is sample" textSize="18">
					<h4>Hover me</h4>
				</v-tooltip>
			</div>
		</section>
	</div>
</template>

<script>
import ToolTip from './components/TheToolTip'

export default {
	name: 'app',
  	components: {
    	'v-tooltip': ToolTip
  	},
  	data: function() {
  		return {
  			usageCodeA: 
`import Vue from 'vue' 
import ToolTip from 'vue-basic-tooltip' 

Vue.component('v-tooltip', ToolTip)`,
			usageCodeB:
`<template>
    <div class="app">
        <v-tooltip>
            <div>...</div>
        </v-tooltip>
    </div>
</template> 

<script>
import { ToolTip } from 'vue-basic-tooltip'

export default {
	el: '#app',
	components: {
		'v-tooltip': ToolTip
	},
	data: function() {
		return {
			...
		}
	}
}
<script>`,
			sampleA:
`<v-tooltip initText="Hello World!">
    <h1>Hover me</h1>
</v-tooltip>`,
			sampleB: 
`<v-tooltip initText="" textSize="18"/>`
  		}
  	}
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>