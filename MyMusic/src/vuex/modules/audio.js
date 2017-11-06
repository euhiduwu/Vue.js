const audio={
	state: {
		// audio 元素
		audioelement: '',
		audiowqw: {
			id: 0,
			song: '',
			singer: '',
			img_url: '',
			mp3_url: '',
			lyric: ''
		},
		// 所有歌曲信息，包括歌单、歌名
		musicAllList: [],
		// 当前列表下的音乐
		musicList: [],
		// 记录下一次操作的列表，判断是否更新
		newMusicList: [],
		// 记录当前播放歌曲在当前列表下的索引，默认为0
		musicIndex: 0,
		// 记录当前正在播放的歌曲
		//song: [],
		// 是否进行播放
		isPlaying: false,
		// 记录播放方式 0：顺序 1：单曲 2：随机
		type: 0
	},
	getters: {
		// 获取歌曲全部信息
		getMusicAllList: state => state.musicAllList,
		// 获取当前歌单列表
		getMusicList: state => state.musicList,
		// 点击更新列表
		getNewMusicList: state => state.newMusicList,
		// 获取当前播放歌曲在当前列表下的索引
		getMusicIndex: state => state.musicIndex,
		// 获取当前播放的歌曲
		getCurrentMusic: state => state.musicList.detail[state.musicIndex],
		// 获取知否在进行播放
		getIsPlaying: state => state.isPlaying,
		// 获取播放类型
		getType: state => state.type
	},
	mutations: {
		set_MusicAllList(state, obj){
			state.musicAllList = obj
		},
		set_musicList(state, obj){
			state.musicList = obj
		},
		set_audioElement(state, obj){
			state.audioelement = obj
		},
		play(state){
			state.audioelement.setAttribute('src', state.musicList.
				                                   detail[state.musicIndex].mp3_url);
			state.audioelement.play();
			state.isPlaying = true;
		},
		set_pause(state){
			state.audioelement.pause();
			state.isPlaying = false;
		},
		set_newMusicList(state,obj){
			state.newMusicList = obj
		},
		set_musicIndex(state,index){
			state.musicIndex = index
		},
		updata_musicList(state, obj){
			state.musicList = state.newMusicList
		},
		set_playPre(state){
			var type = state.type
			var length = state.musicList.count
			if (type === 0) {
				state.musicIndex --
				if (state.musicIndex < 0) {
					state.musicIndex = length-1
				}
				state.audioelement.setAttribute('src', state.musicList.
				                                   detail[state.musicIndex].mp3_url)
			}
			if (type === 1) {
				state.audioelement.currentTime = 0
			}
			if (type === 2) {
				state.musicIndex = Math.floor(Math.random() * length)
				state.audioelement.setAttribute('src', state.musicList.
				                                   detail[state.musicIndex].mp3_url)				
			}
			state.playing = true
			state.audioelement.load()
			state.audioelement.play()
		},
		set_playNext(state){
			var type = state.type
			var length = state.musicList.count
			if (type === 0) {
				state.musicIndex ++
				if (state.musicIndex >= length) {
					state.musicIndex = 0
				}
				state.audioelement.setAttribute('src', state.musicList.
				                                   detail[state.musicIndex].mp3_url)
			}
			if (type === 1) {
				state.audioelement.currentTime = 0
			}
			if (type === 2) {
				state.musicIndex = Math.floor(Math.random() * length)
				state.audioelement.setAttribute('src', state.musicList.
				                                   detail[state.musicIndex].mp3_url)
				
			}
			state.playing = true
			state.audioelement.load()
			state.audioelement.play()
		},
		set_changeType(state){
			if(state.type < 2){
				state.type++;
			}else{
				state.type = 0;
			}
		},
		setListPlay(state, index){
			state.musicIndex = index
		},
		toggle_play(state){
			if(state.isPlaying){
				state.isPlaying = false;
				state.audioelement.pause()
			}else{
				state.isPlaying = true;
				state.audioelement.play()
			}
		}
	},
	actions: {
		setMusicAllList({ commit }, obj){
			commit('set_MusicAllList',obj)
		},
		setMusicList({ commit }, obj){
			commit('set_musicList', obj)
		},
		setSong({ commit }, obj){
			commit('updata_musicList', obj.item)
			commit('set_musicIndex', obj.index);
		},
		setAudioElement({ commit }, obj){
			commit('set_audioElement', obj)
		},
		setPlay({ commit }){
			commit('play')
		},
		setPause({ commit }){
			commit('set_pause')
		},
		setNewMusicList({ commit }, obj){
			commit('set_newMusicList', obj)
		},
		setPlayPre({ commit }){
			commit('set_playPre')
		},
		setPlayNext({ commit }){
			commit('set_playNext')
		},
		changeType({ commit }){
			commit('set_changeType')
		},
		set_listPlay({ commit }, index){
			commit('setListPlay', index)
		},
		musicEnd({ commit }){
			commit('set_playNext')
		},
		togglePlay({ commit }){
			commit('toggle_play')
		}
	}
}

export default audio