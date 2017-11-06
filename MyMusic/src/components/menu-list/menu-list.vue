<template>
	<div class="menu-list">
		<i class="iconfont icon-font" :class="icon_class"></i>
		<span class="title">{{ menu_title }}</span>
		<span class="detail" v-if='show'>{{ menu_detail }}</span>
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
			detail: {
				type: String,
				default: '  '
			}
		},
		data(){
			return {
				icon_class: this.iconClass,
				menu_title: this.title,
				menu_detail: this.detail
			}
		},
		computed: {
			show(){
				return this.menu_detail.length
			}
		}
	}
</script>

<style scoped>
	@import url('../../fonts/font/iconfont.css');
	[class^='icon']{
		color: black;
	}
	.menu-list{
		width: 100%;
		height: 38px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		z-index: 100;
	}
	.icon-font{
		font-size: 16px;
		line-height: 38px;
		margin-left: 20px;
	}
	.title{
		font-size: 15px;
		line-height: 38px;
		margin-left: 5px;
	}
	.detail{
		font-size: 14px;
		line-height: 38px;
		position: absolute;
		right: 5px;
	}
</style>