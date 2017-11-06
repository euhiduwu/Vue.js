const play_detail={
	state:{
		isShow: 0
	},
	mutations:{
		set_playDetailIsShow(state,data){
			state.isShow = data
		}
	},
	actions:{
		setPlayDetailIsShow({ commit }, data){
			commit('set_playDetailIsShow',data)
		}
	},
	getters:{
		getPlayDetailIsShow: state => state.isShow
	}
}

export default play_detail