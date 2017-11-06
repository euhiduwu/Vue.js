<template>
	<div class="music-sheet" @click='toggleShowDetail($event)'>
	    <div class="title">
			<i class="title-arrow iconfont icon-right" ref='toggleArrow'></i>
			<span class="title-name">{{ data_item.name }}</span>
			<span class="title-count">({{ data_item.count }})</span>
			<i class="title-setting iconfont icon-setting1" @click.stop='showBottomMenu(data_item.name)'></i>
		</div>
	
		<div class="detail" v-for="list in information" v-show='show_detail' @click='showMusicDetail(list)'>
			<div class="detail-content">
				<img :src="list.detail[0].img_url" class="detail-img">
				<div class="content-right">
					<p class="detail-name">{{ list.name }}</p>
					<p class="detail-count">{{ list.count }}首歌曲</p>
					<i class="detail-setting iconfont icon-weibiaoti1" @click.stop='showEdit(list.name)'></i>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import url('../../fonts/font/iconfont.css');
	*{
		margin: 0;
		padding: 0;
	}
	.music-sheet{
		width: 100%;
	}
	.title{
		height: 28px;
		line-height: 28px;
		font-size: 16px;
		background-color: #f3f3f3;
		position: relative;
	}
	.title-arrow{
		margin-left: 20px;
		display: inline-block;
	}
	.title-name{
		margin-left: 5px;
	}
	.title-setting{
		position: absolute;
		right: 10px;
	}
	.detail{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.detail-content{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.detail-img{
		display: inline-block;
		width: 40px;
		height: 40px;
		position: absolute;
		top: 10px;
		left: 20px;
	}
	.content-right{
		font-size: 16px;
		line-height: 30px;
	}
	.detail-name{
		position: absolute;
		top: 0;
		left: 80px;
	}
	.detail-count{
		position: absolute;
		top: 30px;
		left: 80px;
		font-size: 14px;
	}
	.detail-setting{
		position: absolute;
		right: 10px;
		top: 15px;
		font-size: 16px;
	}
</style>

<script>
	export default{
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		data(){
			return {
				data_item: {},
				information: {},
				show_detail: false
			}
		},
		methods:{
			toggleShowDetail($event){
				this.$refs.toggleArrow.style.transform = this.show_detail ? 'rotate(0deg) ' : 'rotate(90deg) ';
				this.show_detail = !this.show_detail;				
			},
			showMusicDetail(obj){
				// audio.js
				this.$store.dispatch('setNewMusicList', obj);
				// music-list.js
				this.$store.dispatch('set_musicListIsShow', 1)
			},
			showBottomMenu(name){
				this.$store.dispatch('showBottomMenu',{
				    title: `歌单：${name}`,
				    content: [
				        {
				        	iconfont: 'icon-delete8e',
				        	name: '删除'
				        }
				    ]
				})
			},
			showEdit(name){
				this.$store.dispatch('showBottomMenu',{
					title: `歌单：${name}`,
					content: [
					    {
					    	iconfont: 'icon-share-copy',
					    	name: '分享'
					    },
					    {
					    	iconfont: 'icon-edit2',
					    	name: '编辑'
					    },
					    {
					    	iconfont: 'icon-delete8e',
					    	name: '删除'
					    }
					]
				})
			}
		},
		mounted(){
			this.data_item = this.item;
			this.information = this.item.information
		}
	}
</script>