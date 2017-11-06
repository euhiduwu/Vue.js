<template>
	<div class="bottom" @click='show_play_detail()'>
		<img :src="list[musicIndex].img_url" class="bottom-img">
		<div class="content-right">
		    <p class="bottom-name">{{ list[musicIndex].song }}</p>
			<p class="bottom-count">{{ list[musicIndex].singer }}</p>
			<i class="bottom-play iconfont" :class="isPlaying ? 'icon-pause':'icon-play24px'" @click.stop='togglePlay()'></i>
			<i class="bottom-menu iconfont icon-list" @click.stop='showPlayList()'></i>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		computed: {
			list(){
				return this.$store.getters.getMusicList.detail
			},
			musicIndex(){
				return this.$store.getters.getMusicIndex
			},
			isPlaying(){
				return this.$store.getters.getIsPlaying
			}
		},
		methods: {
			show_play_detail(){
				this.$store.dispatch('setPlayDetailIsShow', 1)
			},
			togglePlay(){
				this.$store.dispatch('togglePlay');
			},
			showPlayList(){
				this.$store.dispatch('showPlayList')
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
	.bottom{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		z-index: 12;
		background-color: #f3f3f3;
	}
	.bottom-img{
		display: inline-block;
		width: 40px;
		height: 40px;
		position: absolute;
		top: 5px;
		left: 5px;
	}
	.content-right{
		font-size: 16px;
		line-height: 25px;
		height: 100%;
	}
	.bottom-name{
		position: absolute;
		top: 0;
		left: 55px;
	}
	.bottom-count{
		position: absolute;
		top: 25px;
		left: 55px;
		font-size: 14px;
	}
	.bottom-play{
		position: absolute;
		right: 40px;
		top: 12px;
		font-size: 16px;
	}
	.bottom-menu{
		position: absolute;
		right: 10px;
		top: 12px;
		font-size: 16px;
	}
</style>