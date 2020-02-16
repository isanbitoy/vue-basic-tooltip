import Vue from 'vue'
import ToolTip from './TheToolTip'

const Plugin = {
	install(Vue) {
		Vue.component('v-tooltip', ToolTip)
	}
};

Object.keys(Plugin).forEach(name => {
	Vue.component(name, Plugin[name])
})

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Plugin)
}

export { ToolTip }
export default Plugin