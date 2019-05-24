<template>
	<div :tooltip-text="set_text" :style="set_dynamic_style">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'ToolTip',
	props: {
		'initText': {
			type: String,
			default: ''
		},
		'textSize': {
			default: 14
		},
		'textColor': {
			type: String,
			default: '#fff'
		},
		'boxColor': {
			type: String,
			default: '#42b983'
		}
	},
	computed: {
		set_text() {
			return this.initText
		},
		set_dynamic_style() {
			let style = {
				'--txtColor': this.textColor,
				'--txtSize': this.textSize + 'px',
				'--bgColor': this.boxColor
			}
			return style
		}
	}
};
</script>

<style scoped>
[v-cloak] { display: none; }
*, *::before, *::after {
	margin: 0; padding: 0;
	box-sizing: border-box;
}
:root {
	--txtColor: '';
	--txtSize: 0;
	--bgColor: '';
}
[tooltip-text] {
	position: relative;
	cursor: pointer;
	z-index: 999;
}
[tooltip-text]::before {
	position: absolute;
	display: block;
	visibility: hidden;
	opacity: 0;
	pointer-events: none;
	transition: all .5s ease-in-out;
  	transform: translateY(0px);
  	white-space: nowrap;
}
[tooltip-text]::before {
	content: attr(tooltip-text);
	padding: 6px 8px; 
	top: 75%; /*left: 50%;*/
	border-radius: 0 8px 0 8px;
	text-align: center;
  	font-size: var(--txtSize);
  	line-height: 1.2;
  	background: var(--bgColor);
  	color: var(--txtColor);
}
[tooltip-text]:hover::before {
	visibility: visible;
	opacity: 1;
  	transform: translateY(12px);
  	animation: animate 2s linear infinite;
}
@keyframes animate {
    0% {
        box-shadow: 0 0 0 0 rgba(10,74,61,0.4), 0 0 0 0 rgba(10,74,61,0.4);
    }
    40% {
        box-shadow: 0 0 0 6px rgba(10,74,61,0), 0 0 0 0 rgba(10,74,61,0.4);
    }
    80% {
        box-shadow: 0 0 0 6px rgba(10,74,61,0), 0 0 0 4px rgba(10,74,61,0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(10,74,61,0), 0 0 0 4px rgba(10,74,61,0);
    }
}
</style>