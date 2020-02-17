<template>
	<button class="button">
		<div initText="Hello World!">Hover me</div>
	</button>
</template>

<style scoped>
[initText] {
	position: relative;
	width: 100%;
	height: auto;
	z-index: 999;
}
[initText]::before {
	content: attr(initText);
	position: absolute;
	display: block;
	visibility: hidden;
	opacity: 0;
	pointer-events: none;
	transition: all .5s ease-in-out;
  	transform: translateY(0px);
  	white-space: nowrap;
  	overflow: hidden;

	padding: 6px 8px; 
	top: 45%;
	margin: 0.5rem 0;
	border-radius: 0 8px 0 8px;
	text-align: center;
	line-height: 1.2;
  	font-size: 24px;
  	background: #33CC99;
  	color: #FFFFFF;
}
[initText]:hover::before {
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
