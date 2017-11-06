<template>
	<div class="play-list" ref='playList'>
		<div class="header">
			<div class="playType">
				<i class="iconfont Font" :class='play_type'></i>
			    <span class="play">{{ playType }}</span>
			    <span class="play">({{ length }})</span>
			</div>
			<div class="collect">
				<i class="iconfont icon-favourite Font"></i>
				<span class="play">收藏</span>
			</div>
			<div class="clear">
				<i class="iconfont icon-close-empty Font"></i>
				<span class="play" @click.stop='hidePlayList()'>清空</span>
			</div>
		</div>
		<div class="content">
		<div class="list" v-for='(item, index) in list' @click.stop='set_song(index)'>
			<i class="iconfont icon-audio radioFont" v-if='index == musicIndex'></i>
			<span class="song">{{ item.song }}</span>
		</div>
		</div>
	</div>
</template>

<style scoped>
	.play-list{
		width: 100%;
		height: 300px;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
		display: none;
		padding-left: 20px;
		box-sizing: border-box;
		background-color: #f3f3f3;
	}
	.header{
		width: 100%;
		height: 40px;
		font-size: 16px;
		line-height: 40px;
		position: relative;
	}
	.Font{
		display: inline-block;
	}
	.playType{
		display: inline-block;
	}
	.collect{
		display: inline-block;
		position: absolute;
		top: 0;
		right: 100px;
	}
	.clear{
		display: inline-block;
		position: absolute;
		top: 0;
		right: 10px;
	}
	.content{
		width: 100%;
		height: 260px;
		overflow: scroll;
	}
	.list{
		width: 100%;
		height: 40px;
		font-size: 14px;
		line-height: 40px;
		border-top: 1px solid rgba(7,17,27,0.1);
	}
	.radioFont{
		color: #c62f2f;
	}
</style>

<script>
	export default{
		data(){
			return {

			}
		},
		computed: {
			play_type(){
				var type = this.$store.getters.getType;
				if(type == 0){
                    return 'icon-loop'
                }else if(type == 1){
                    return 'icon-danquxunhuan'
                }else{
                    return 'icon-random'
                }
			},
			playType(){
				var type = this.$store.getters.getType;
				if(type == 0){
                    return '循环播放'
                }else if(type == 1){
                    return '单曲循环'
                }else{
                    return '随机播放'
                }
			},
			list(){
				return this.$store.getters.getMusicList.detail
			},
			radioShow(){
				return this.$store.getters.getPlayListIsShow
			},
			length(){
				return this.$store.getters.getMusicList.count
			},
			musicIndex(){
				return this.$store.getters.getMusicIndex
			}
		},
		methods: {
			hidePlayList(){
				this.$store.dispatch('hidePlayList')
			},
			set_song(index){
				this.$store.dispatch('set_listPlay', index);
				this.$store.dispatch('setPlay');
			}
		},
		mounted(){
			this.$store.dispatch('setListElement', this.$refs.playList);
		}
	}
</script>