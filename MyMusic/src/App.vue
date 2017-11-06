<template>
  <div id="app">
    <audio ref="audio" @ended="musicEnd"></audio>
    <!-- 顶部导航栏 -->
    <v-header></v-header>
    <!-- 侧边菜单栏 -->
    <v-menu></v-menu>
    <!-- 主界面 -->
    <music-list></music-list>
    <!-- 底部播放栏 -->
    <bottom-bar></bottom-bar>
    <!-- 歌词页 -->
    <play-detail></play-detail>
    <!-- 底部菜单弹出页 -->
    <bottom-menu></bottom-menu>
    <!-- 底部歌单弹出页 -->
    <play-list></play-list>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import menu from './components/menu/menu.vue'
import my_music from './components/my-music/my-music.vue'
import music_list from './components/music-list/music-list.vue'
import bottom_bar from './components/bottom-bar/bottom-bar.vue'
import play_detail from './components/play-detail/play-detail.vue'
import bottom_menu from './components/bottom-menu/bottom-menu.vue'
import play_list from './components/play-list/play-list.vue'
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import store from './vuex/index.js'

Vue.use(Vueaxios, axios)

export default {
  name: 'app',
  components:{
    'v-header': header,
    'v-menu': menu,
    'my-music': my_music,
    'music-list': music_list,
    'bottom-bar': bottom_bar,
    'play-detail': play_detail,
    'bottom-menu': bottom_menu,
    'play-list': play_list
  },
  computed: {
    
  },
  methods: {
    musicPlay(){
      this.$store.dispatch('setPlay');
    },
    musicPause(){

    },
    musicEnd(){
      this.$store.dispatch('musicEnd');
    }
  },
  created() {
    let LocalAPI = 'static/data.json'
    axios.get(LocalAPI).then((res) => {
      // 把所有的音乐数据给vuex的musicAllList
      store.dispatch('setMusicAllList', res.data.Sheets);
      // 初始化播放单
      this.$store.dispatch('setMusicList', res.data.Sheets[0].information[0]);
      // 初始化当前播放歌曲
      this.$refs.audio.setAttribute('src', store.getters.getCurrentMusic.mp3_url)
      // 给audio元素存在vuex 的state里面  方便日后调用
      this.$store.dispatch('setAudioElement', this.$refs.audio);
    }, (err) => {
      alert(err)
    })
  }
}
</script>

<style>
  #app{
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>