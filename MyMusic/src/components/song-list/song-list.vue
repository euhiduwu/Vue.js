<template>
	<div class="song-list">
		<div class="head">
			<i class="iconmusic iconfont icon-music"></i>
			<span class="head-all">播放全部</span>
			<span class="head-count">(共{{ list.length }}首)</span>
			<i class="iconmenu iconfont icon-menu"></i>
			<span class="selectAll">多选</span>
		</div>
		<div class="content" v-for='(item,index) in list' @click='set_song(item,index)'>
			<span class="number">{{ index+1 }}</span>
			<p class="song">{{ item.song }}</p>
			<p class="singer">{{ item.singer }}</p>
			<i class="icon_right iconfont icon-weibiaoti1"></i>
		</div>
		<!-- 给播放栏使用，增加一栏空白的 -->
		<div class="content"></div>
	</div>
</template>

<style scoped>
    *{
    	margin: 0;
    	padding: 0;
    }
	.song-list{
		width: 100%;
		background-color: white;
		color: #aaa;
	}
	.head{
		width: 100%;
		height: 40px;
		font-size: 16px;
		line-height: 40px;
		position: relative;
	}
	.iconmusic{
		margin-left: 10px;
	}
	.head-all{
		margin-left: 0px;
	}
	.head-count{
		font-size: 14px;
	}
	.iconmenu{
		position: absolute;
		right: 50px;
	}
	.selectAll{
		position: absolute;
		right: 10px;
	}
	.content{
		width: 100%;
		height: 50px;
		border-top: 1px solid rgba(7,17,27,0.1);
		position: relative;
	}
	.number{
		font-size: 18px;
		line-height: 50px;
		margin-left: 20px;
	}
	.song{
		position: absolute;
		font-size: 16px;
		line-height: 25px;
		top: 0;
		left: 50px;
		color: #333;
	}
	.singer{
		position: absolute;
		font-size: 14px;
		line-height: 25px;
		bottom: 0;
		left: 50px;
	}
	.icon_right{
		position: absolute;
		right: 10px;
		line-height: 50px;
	}
</style>

<script>
	export default{
		data(){
			return {

			} 
		},
		computed: {
			list(){
				return this.$store.getters.getNewMusicList.detail
			}
		},
		methods: {
			set_song(item,index){
				this.$store.dispatch('setSong', { item, index });
				this.$store.dispatch('setPlay');
			}
		}
	}
</script>