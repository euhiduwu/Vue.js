import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu.js'
import audio from './modules/audio.js'
import musicList from './modules/music-list.js'
import play_detail from './modules/play-detail.js'
import bottom_menu from './modules/bottom-menu.js'
import play_list from './modules/play-list.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu: menu,
    audio: audio,
    musicList: musicList,
    playDetail: play_detail,
    bottomMenu: bottom_menu,
    playList: play_list
  }
})

export default store