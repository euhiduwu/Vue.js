import Vue from 'vue'
import Router from 'vue-router'
import my_music from '../components/my-music/my-music.vue'
import find_music from '../components/find-music/find-music.vue'
import findMusicRecomment from '../components/recomment/findMusicRecomment.vue'
import findMusicSong from '../components/song/findMusicSong.vue'
import findMusicRadio from '../components/radio/findMusicRadio.vue'
import findMusicRank from '../components/rank/findMusicRank.vue'
import community from '../components/community/community.vue'
Vue.use(Router)

export default new Router({
    routes: [{
	    path: '/',
	    component: my_music
	},
    {
    	path: '/myMusic',
    	component: my_music,
    },
    {
    	path: '/findMusic',
    	component: find_music,
        children: [
            {
                path: '/findMusic/recomment',
                component: findMusicRecomment
            },
            {
                path: '/findMusic/radio',
                component: findMusicRadio
            },
            {
                path: '/findMusic/song',
                component: findMusicSong
            },
            {
                path: '/findMusic/rank',
                component: findMusicRank
            },
            {
                path: '/',
                component: findMusicRecomment
            }
        ]
    },
    {
        path: '/community',
        component: community
    }
  ]
})
