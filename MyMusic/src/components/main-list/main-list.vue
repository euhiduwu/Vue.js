<template>
	<div class="main-list">
		<i class="iconfont icon-font" :class='icon_class'></i>
		<span class="title">{{ Title }}</span>
		<span class="count" v-if='count_length'>({{ Count }})</span>
	</div>
</template>

<script>
	export default{
		props: {
			iconClass: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			count: {
				type: String,
				default: ''
			}
		},
		data(){
			return {
				icon_class: this.iconClass,
				Title: this.title,
				Count: this.count
			}
		},
		computed: {
			count_length(){
				return parseInt(this.Count)
			}
		}
	}
</script>

<style scoped>
	@import url('../../fonts/font/iconfont.css');
	[class^='icon']{
		color: #c62f2f;
		font-size: 20px;
	}
	.main-list{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		padding: 5px 0;
		position: relative;
		z-index: 10;
	}
	.title{
		display: inline-block;
		font-size: 16px;
		line-height: 40px;
		margin: 0px 0 0 15px;
	}
	.icon-font{
		display: inline-block;
		margin: 10px 0 0 20px;
	}
</style>