<template>
	<div class="music-list" v-if='list_show'>
		<div class="list-head">
			<i class="icon-back iconfont icon-music" @click='close_music_list()'></i>
			<span class="head-music">歌单</span>
			<i class="icon_search iconfont icon-search"></i>
			<i class="icon_setting iconfont icon-list"></i>
		</div>

		<div class="list-content">
			<img class="content-img" :src="list.detail[0].img_url">
			<p class="content-name">{{ list.name }}</p>
			<div class="content-user">
				<img class="content-user-img" :src='list.user.head'>
				<span class="content-user-name">{{ list.user.name }}</span>
				<i class="content-user-font iconfont icon-right"></i>
			</div>
		</div>

		<div class="comment">
			<div class="comment-share">
				<i class="comment-font iconfont icon-favourite"></i>
				<p class="comment-down">收藏</p>
			</div>
			<div class="comment-share">
				<i class="comment-font iconfont icon-commenticon"></i>
				<p class="comment-down">评论</p>
			</div>
			<div class="comment-share">
				<i class="comment-font iconfont icon-share"></i>
				<p class="comment-down">分享</p>
			</div>
			<div class="comment-share">
				<i class="comment-font iconfont icon-45"></i>
				<p class="comment-down">下载</p>
			</div>
		</div>
		<song-list></song-list>
	</div>
</template>

<script>
    import store from '../../vuex/index.js'
	import song_list from'../song-list/song-list.vue'
    export default{
    	data(){
    		return{

    		}
    	},
    	computed: {
    		list(){
    			return this.$store.getters.getMusicList
    		},
    		list_show(){
    			return this.$store.getters.isShow
    		}
    	},
    	methods: {
    		close_music_list(){
				// music-list.js
				this.$store.dispatch('set_musicListIsShow', 0)
    		}
    	},
    	components: {
    		'song-list': song_list
    	}
    }
</script>

<style scoped>
    @import url('../../fonts/font/iconfont.css');
    *{
    	margin: 0;
    	padding: 0;
    }
	.music-list{
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		bottom: 50px;
		z-index: 11;
	}
	.list-head{
		width: 100%;
		height: 50px;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #667aff;
		font-size: 20px;
		line-height: 50px;
		color: white;
	}
	.icon-back{
		position: absolute;
		top: 0;
		left: 10px;
	}
	.head-music{
		position: absolute;
		top: 0;
		left: 40px;
	}
	.icon_search{
		position: absolute;
		top: 0;
		right: 60px;
	}
	.icon_setting{
		position: absolute;
		top: 0;
		right: 20px;
	}
	.list-content{
		width: 100%;
		height: 120px;
		background-color: #667aff;
		position: relative;
		
		margin: 50px 0 0 0;
		padding: 20px 0;
	}
	.content-img{
		display: inline-block;
		width: 120px;
		height: 120px;
		margin-left: 30px;
	}
	.content-name{
		font-size: 16px;
		position: absolute;
		top: 30px;
		left: 190px;
	}
	.content-user{
		position: absolute;
		left: 190px;
		bottom: 30px;
		width: 70%;
		height: 30px;
		display: flex;
		align-items: center;
	}
	.content-user-img{
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 100%;
	}
	.content-user-name,.content-user-font{
		line-height: 30px;
		margin-left: 10px;
		font-size: 16px;
	}
	.comment{
		background-color: #667aff;
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.comment-share{
		display: inline-block;
		text-align: center;
	}
	.comment-down{
		padding: 10px 0;
	}
</style>