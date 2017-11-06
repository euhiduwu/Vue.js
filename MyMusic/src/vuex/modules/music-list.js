const musicList={
	state: {
		isShow: 0
	},
	mutations: {
		hideMusicList(state){
			state.isShow = !state.isShow
		},
		showMusicList(state){
			state.isShow = !state.isShow
		},
		setMusicListIsShow(state, data){
			state.isShow = data
		}
	},
	actions: {
		hide_musicList({ commit }){
			commit('hideMusicList')
		},
		show_musicList({commmit }){
			commit('showMusicList')
		},
		set_musicListIsShow({ commit }, data){
			commit('setMusicListIsShow', data)
		}
	},
	getters: {
		isShow : state => state.isShow
	}
}

export default musicList