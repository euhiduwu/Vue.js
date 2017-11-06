const menu={
	state:{
		isShow: false,
		user: {
			name: '尼奥',
			level: 'Lv 9',
			background: 'static/images/bg.jpg',
			img: 'static/images/userlogo.jpg',
			vip: 'static/images/vip.png'
		}
	},
	mutations:{
		showMenu(state){
			if(!state.isShow){
				state.isShow = !state.isShow;
				console.log('showMenu');
			}
		},
		hideMenu(state){
			if(state.isShow){
				state.isShow = !state.isShow;
				console.log('hideMenu');
			}
		}
	},
	actions:{
		showMenu({ commit }){
			commit('showMenu');
		},
		hideMenu({ commit }){
			commit('hideMenu');
		}
	}
}

export default menu