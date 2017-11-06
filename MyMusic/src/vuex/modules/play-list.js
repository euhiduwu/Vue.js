const playList={
	state: {
		isShow: false,
		listElelment: ''
	},
	mutations: {
		show_playList(state){
			state.isShow = true;
			/*
			因为存在覆盖问题，所以在这使用的为 display 属性
			 */
			state.listElelment.style.display = 'block'
		},
		hide_playList(state){
			state.isShow = false;
			state.listElelment.style.display = 'none';
		},
		set_listElement(state, obj){
			state.listElelment = obj
		}
	},
	actions: {
		showPlayList({ commit }, obj){
			commit('show_playList')
		},
		hidePlayList({ commit }, obj){
			commit('hide_playList')
		},
		setListElement({ commit }, obj){
			commit('set_listElement', obj)
		}
	},
	getters: {
		getPlayListIsShow: state => state.isShow
	}
}

export default playList