<template>
	<div class="spilt" :style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
</template>

<script>
	export default{
		data(){
			return {

			}
		},
		props: {
			background: {
				type: String,
				default: '#fff'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '100%'
			}
		},
		computed: {
			bgColor(){
				return this.background
			},
			bgWidth(){
				return this.width
			},
			bgHeight(){
				return this.height
			}
		}
	}
</script>