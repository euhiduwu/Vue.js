const bottomMenu={
	state: {
		isShow: false,
		title: '',
		list: []
	},
	mutations: {
		show_bottomMenu(state, obj){
			state.isShow = true
			state.title = obj.title
			state.list = obj.content
		},
		hide_bottomMenu(state){
			state.isShow = false
			state.title = ''
			state.list = []
		}
	},
	actions: {
		showBottomMenu({ commit }, amount){
			commit('show_bottomMenu', amount)
		},
		hideBottomMenu({ commit }){
			commit('hide_bottomMenu')
		}
	},
	getters: {
		getBottomMenuList: state => state.list,
		getBottomMenuTitle: state => state.title,
		getBottomMenuIsShow: state => state.isShow,
	}
}

export default bottomMenu