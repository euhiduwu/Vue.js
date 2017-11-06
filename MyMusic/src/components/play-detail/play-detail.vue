<template>
	<div class="play-detail" v-if='PlayDetailIsShow'>
		<div class="header">
		    <i class="icon_back iconfont icon-back" @click='close_play_detail()'></i>
			<p class="head-song">{{ item.song }}</p>
			<p class="head-singer">{{ item.singer }}</p>
			<i class="icon_share iconfont icon-share"></i>
		</div>

		<div class="background">
			<p class="line"></p>
			<div class="hand">
				<img class="hand-img" src="static/images/swith.png">
			</div>
			<div class="cd">
				<img class='cd-img' src="http://oiq8j9er1.bkt.clouddn.com/music_You%E2%80%99re%20Not%20Alone.jpg">
			</div>
			<div class="select">
				<i class="iconfont icon-favourite"></i>
				<i class="iconfont icon-45"></i>
				<i class="iconfont icon-commenticon"></i>
				<i class="iconfont icon-weibiaoti1"></i>
			</div>
		</div>

		<div class="footer">
		    <div class="time"></div>
			<div class="bottom">
				<i class="left iconfont" :class='type' @click='changePlayType()'></i>
				<i class="center iconfont icon-prev" @click='playPre()'></i>
				<i class="right iconfont" :class="isPlaying ? 'icon-pause':'icon-play24px'" @click.stop='togglePlay()'></i>
				<i class="center iconfont icon-next" @click='playNext()'></i>
				<i class="left iconfont icon-list" @click.stop='showPlayList()'></i>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import url('../../fonts/font/iconfont.css');
    *{
    	padding: 0;
    	margin: 0;
    }
    .play-detail{
    	width: 100%;
    	height: 100%;
    	background-color: #f3f3f3;
    	z-index: 20;
    	position: fixed;
    	top: 0;
    	left: 0;
    }
    .header{
    	width: 100%;
    	height: 60px; 
    	position: relative;
    }
    .icon-back,.icon-share{
    	font-size: 24px;
    	line-height: 60px;
    	position: absolute;
    	top: 0;
    }
    .head-song,.head-singer{
    	font-size: 14px;
    	line-height: 30px;
    	position: absolute;
    }
    .icon_back{
    	left: 10px;
    }
    .icon_share{
    	right: 10px;
    }
    .head-song{
    	top: 0;
    	left: 60px;
    }
    .head-singer{
    	top: 30px;
    	left: 60px;
    }
    .background{
    	width: 100%;
    	height: 70%;
    }
    .line{
    	width: 100%;
    	height: 1px;
    	background-color: black;
    }
    .hand{
    	display: inline-block;
    	width: 100%;
    	height: 30%;
    	margin-top: 0px;
    }
    .hand-img{
    	width: 8%;
    	height: 100%;
    	margin: -0.31% 0 0 46%;
    }
    .cd{
    	width: 20%;
    	height: 60%;
    	margin: -2.5% 0 0 40%;
    	border: 20px solid black;
    	border-radius: 100%;
    	box-sizing: border-box;
    }
    .cd-img{
    	display: inline-block;
    	width: 100%;
    	height: 100%;
    	border-radius: 100%;
    }
    .select{
    	width: 100%;
    	height: 15%;
    	display: flex;
    	align-items: flex-end;
    	justify-content: space-around;
    }
    .select i{
    	font-size: 20px;
    }
    .footer{
    	width: 100%;
    	height: calc(30%-60px);
    	height: -moz-calc(30% - 60px);
        height: -webkit-calc(30% - 60px);
    }
    .time{
    	width: 100%;
    	height: 30%;
    	background-color: #eee;
    }
    .bottom{
    	width: 100%;
    	height: 70%;
    	display: flex;
    	align-items: center;

    	justify-content: space-around;
    }
    .bottom i{
    	
    	display: inline-block;
    }
    .left{
    	font-size: 20px;
    	line-height: 100%;
    }
    .center{
    	font-size: 28px;
    }
    .right{
    	font-size: 46px;
    }
</style>

<script>
	export default{
		data(){
			return {

			}
		},
		computed: {
			// audio.js
			item(){
				return this.$store.getters.getCurrentMusic
			},
			// play-detail.js
			PlayDetailIsShow(){
				return this.$store.getters.getPlayDetailIsShow
			},
            isPlaying(){
                return this.$store.getters.getIsPlaying
            },
            type(){
                var number = this.$store.getters.getType;
                if(number == 0){
                    return 'icon-loop'
                }else if(number == 1){
                    return 'icon-danquxunhuan'
                }else{
                    return 'icon-random'
                }
            }
		},
		methods: {
			close_play_detail(){
				this.$store.dispatch('setPlayDetailIsShow', 0)
			},
            togglePlay(){
                this.$store.dispatch('togglePlay');
            },
            playPre(){
            	this.$store.dispatch('setPlayPre');
            },
            playNext(){
            	this.$store.dispatch('setPlayNext');
            },
            changePlayType(){
                this.$store.dispatch('changeType');
            },
            showPlayList(){
                this.$store.dispatch('showPlayList')
            }
		}
	}
</script>