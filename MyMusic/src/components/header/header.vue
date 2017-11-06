<template>
	<div class="header">
		<div class="header-content">
			<i class="iconfont icon-menu" @click='showMenu'></i>
			<div class="centerMenu" @click='hideMenu'>
				<router-link to='/myMusic' class='textDirection'>
					<i class="iconfont icon-music"></i>
				</router-link>
				<router-link to='/findMusic' class='textDirection'>
					<i class="iconfont icon-wangyiyun"></i>
				</router-link>
				<router-link to='/community' class='textDirection'>
					<i class="iconfont icon-Community"></i>
				</router-link>
			</div>
			<i class="iconfont icon-search"></i>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			showMenu(){
				this.$store.dispatch('showMenu')
			},
			hideMenu(){
				this.$store.dispatch('hideMenu')
			}
		}
	}
</script>

<style scoped>
    @import url('../../fonts/font/iconfont.css');
    *{
    	padding: 0;
    	margin: 0;
    }
	.header{
		width: 100%;
		height: 55px;
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		background-color: #c62f2f;
	}
	.header-content{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	[class^='icon']{
		padding: 10px 15px;
		color: #fff;
		font-size: 25px;
	}
	.centerMenu{
		margin-top: 11px;
	}
	.textDirection{
		text-decoration: none;
	}
</style>