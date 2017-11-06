<template>
	<div class="menu" v-if='isShow'>
		<div class="menu-head" :style="{ backgroundImage: 'url(' + user.background + ')'}">
			<div class="user-img">
				<img :src="user.img" width="56" class="img">
			</div>
			<div class="user-detail">
				<span class="name">{{ user.name }}</span>
				<img :src='user.vip' height="16" width="16">
				<span class="level">{{ user.level }}</span>
				<span class="sign border-radius">签到</span>
			</div>
		</div>

		<div class="menu-content">
			<menu-list iconClass='icon-email48' title='我的消息' detail=''></menu-list>
			<menu-list iconClass='icon-vip' title='我的会员' detail='2017.10.18'></menu-list>
			<menu-list iconClass='icon-market' title='商城' detail=''></menu-list>
			<split background='#e3e3e3' width='100%' height='5px'></split>
			<menu-list iconClass='icon-friend' title='我的好友' detail=''></menu-list>
			<menu-list iconClass='icon-location' title='附近的人' detail=''></menu-list>
			<split background='#e3e3e3' width='100%' height='5px'></split>
			<menu-list iconClass='icon-theme' title='个性换肤' detail='官方红'></menu-list>
			<menu-list iconClass='icon-shijian' title='定时播放' detail=''></menu-list>
			<menu-list iconClass='icon-alarm' title='音乐闹钟' detail=''></menu-list>
			<menu-list iconClass='icon-drive' title='驾驶模式' detail=''></menu-list>
			<menu-list iconClass='icon-Cloud-Upload' title='音乐云盘' detail=''></menu-list>
		</div>

		<div class="menu-footer">
			<div class="night-mode">
				<i class="iconfont icon-night"></i>
				<span class="night-span">夜间模式</span>
			</div>
			<div class="setting">
				<i class="iconfont icon-setting1"></i>
				<span class="setting-span">设置</span>
			</div>
			<div class="exit">
				<i class="iconfont icon-exit1"></i>
				<span class="exit-span">退出</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
    *{
    	padding: 0;
    	margin: 0;
    }
	.menu{
		width: 300px;
		height: 100%;
		border-right: 1px solid rgba(7,17,27,0.1);
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		background: rgb(247, 247, 247);
	}
	.menu-head{
		height: 180px;
	}
	.user-img{
	    position: absolute;
	    top: 80px;
	    left: 20px;
	}
	.img{
		display: inline-block;
		border-radius: 100%;
	}
	.user-detail{
		position: absolute;
		top: 140px;
		left: 20px;
		width: 100%;
		color: #fff;
	}
	.user-detail span{
		font-size: 16px;
		padding: 5px;
	}
	.user-detail img{
		margin-bottom: -2px;
	}
	.level{
		color: red;
	}
	.border-radius{
		border: 1px solid green;
		border-radius: 100%;
		display: inline-block;
		position: absolute;
		right: 30px;
	}
	.menu-content{
		width: 100%;
	}
	.menu-footer{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		box-sizing: border-box;
	}
	.night-mode,.setting,.exit{
		width: 96px;
		display: inline-block;
		text-align: center;
		padding: 5px 0;
	}
	.night-span,.setting-span,.exit-span{
		font-size: 18px;
		line-height: 40px;
	}
</style>

<script>
	import store from '../../vuex/index.js'
	import menulist from '../menu-list/menu-list.vue'
	import split from '../split/spilt.vue'
	export default{
		data(){
			return{
				
			}
		},
		computed: {
			isShow(){
				return store.state.menu.isShow
			},
			user(){
				return store.state.menu.user
			}
		},
		components: {
			'menu-list': menulist,
			'split': split
		}
	}
</script>