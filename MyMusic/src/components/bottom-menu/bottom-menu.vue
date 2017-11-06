<template>
	<div class="bottom-menu" v-if='isShow'>
		<div class="header">
			<span class="title">{{ title }}</span>
			<i class="icon_close iconfont icon-close-empty" @click='hideMenu()'></i>
		</div>
		<main-list v-for='(item, $key) in list' :iconClass="item.iconfont" :title="item.name" count=''></main-list>
	</div>
</template>

<style scoped>
    @import url('../../fonts/font/iconfont.css');
	*{
		margin: 0;
		padding: 0;
	}
	.bottom-menu{
		width: 100%;
		height: auto;
		background-color: #f3f3f3;
		z-index: 30;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.header{
		width: 100%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		position: relative;
	}
	.title{
		display: inline-block;
		margin-left: 15px;

	}
	.icon_close{
		position: absolute;
		right: 10px;
		color: #c62f2f;
	}
</style>

<script>
    import store from '../../vuex/index.js'
    import main_list from '../main-list/main-list.vue'
	export default{
		data(){
			return {

			}
		},
		computed: {
			list(){
				return this.$store.getters.getBottomMenuList
			},
			title(){
				return this.$store.getters.getBottomMenuTitle
			},
			isShow(){
				return this.$store.getters.getBottomMenuIsShow
			}
		},
		methods: {
			hideMenu(){
				this.$store.dispatch('hideBottomMenu')
			}
		},
		components: {
			'main-list': main_list
		}
	}
</script>