<template>
	<div class="my-music">
		<main-list iconClass='icon-music' title='我的音乐' count='28'></main-list>
		<main-list iconClass='icon-zuijinbofang' title='最近播放' count='18'></main-list>
		<main-list iconClass='icon-radio' title='我的电台' count='50'></main-list>
		<main-list iconClass='icon-iconcollection' title='我的收藏' count='3'></main-list>
		<music-sheet v-for="(item, index) in items" :item="item" :index="index"></music-sheet>
	</div>
</template>

<script>
	import main_list from '../main-list/main-list.vue'
	import music_sheet from '../music-sheet/music-sheet.vue'
	import store from '../../vuex/index.js'
	export default{
		computed: {
			items(){
				return this.$store.getters.getMusicAllList
			}
		},
		components: {
			'main-list': main_list,
			'music-sheet': music_sheet
		}
	}
</script>

<style scoped>
	.my-music{
		width: 100%;
		z-index: 10;
		position: fixed;
		overflow: auto;
		left: 0;
		top: 55px;
		bottom: 50px;
		background-color: rgb(247, 247, 247);
	}
</style>