<template>
	<div id="app">
        <!-- Header Content -->
		<header class="app__header">
			<div class="header__first-child">
                <a :href="github_link" target="_blank">
                    <span :title="github_link">
                        <i class="fa fa-github"></i>
                    </span>
                </a>
                <h2>vue-basic-tooltip</h2> 
            </div>
            <div><p>a simple tooltip for vue</p></div>
            <div class="header__last-child">
                <h3 class="install--command">npm install --save vue-basic-tooltip</h3>
            </div>
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

        <!-- Main Content -->
		<main class="app__content">
			<section class="content__box left">
				<h2 class="header--line">Usage</h2>
				<code class="code--usage A">
                    <pre>{{ usageCodeA }}</pre>
                </code>
                <h3>or</h3>
                <code class="code--usage B">
                    <pre>{{ usageCodeB }}</pre>
                </code>
			</section>

			<section class="content__box right">
				<h2>Example</h2>
				<div>
					<code class="code--sample A">
						<pre>{{ sampleA }}</pre>
					</code>
					<v-tooltip initText="Hello World!">
						<button class="button">Click me</button>
					</v-tooltip>
				</div>
				<div>
					<code class="code--sample B">
						<pre>{{ sampleB }}</pre>
					</code>
					<v-tooltip initText="custom text size" textSize="22">
						<button>Hover me</button>
					</v-tooltip>
				</div>
				<div>
					<code class="code--sample C">
						<pre>{{ sampleC }}</pre>
					</code>
					<v-tooltip initText="custom text and box color" textColor="#111" boxColor="#FF33FF">
						<div>Hover me</div>
					</v-tooltip>
				</div>
			</section>
		</main>
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
`<v-tooltip initText="custom text size" textSize="22">
    <h1>Hover me</h1>
</v-tooltip>`,
			sampleC:
`<v-tooltip initText="custom text and box color" 
textColor="#111" boxColor="#FF33FF">
    <h1>Hover me</h1>
</v-tooltip>`
  		}
  	}
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>