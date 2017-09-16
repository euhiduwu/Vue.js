import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex);
//初始状态
const state = {
	Note6: {
		name: '魅蓝 note6',
		soc: '骁龙 625 处理器',
		socDetail: '14nm 节能强力制程',
		battery: '4000mAh 快充电池',
		batteryDetail: '18W 疾速高效快充',
		camera: '双摄人影背景虚化',
		cameraDetail: 'Dual PD 全像素双核对焦',
		light: '双色温自然补光',
		lightDetail: '4-LED 流水式闪光灯',
		storge_1: '选配 4GB 大内存',
		storgeDetail: '支持 64GB 大闪存组合',
		frontCamera: '虹软美颜算法自拍',
		frontCameraDetail: '1600 万像素前置相机',
		storge: {
			'3+16GB': '￥1099',
			'3+32GB': '￥1299',
			'4+64GB': '￥1699'
		},
		colors:{
			'黑色': 'https://github.com/euhiduwu/Vue.js/blob/master/Shopping%20Cart/src/images/black.png',
			'蓝色': 'https://github.com/euhiduwu/Vue.js/blob/master/Shopping%20Cart/src/images/blue.png',
			'银色': 'https://github.com/euhiduwu/Vue.js/blob/master/Shopping%20Cart/src/images/silver.png',
			'金色': 'https://github.com/euhiduwu/Vue.js/blob/master/Shopping%20Cart/src/images/gold.png'
		},
		activeColor: '黑色',
		activeImageUrl: 'https://github.com/euhiduwu/Vue.js/blob/master/Shopping%20Cart/src/images/black.png',
		activeStorge: '',
		price: '￥1099 - 1699',
		isSelected: true
	},
	cart: []
};

const CHANGE_COLOR='CHANGE_COLOR';
const CHANGE_STORGE='CHANGE_STORGE';
const ADD_ITEM='ADD_ITEM';
const REMOVE_ITEM='REMOVE_ITEM';

//相关的 mutations
const mutations={
	[CHANGE_COLOR](state,obj){
		state.Note6.activeColor=obj.color;
		state.Note6.activeImageUrl=obj.styleUrl;
	},
	[CHANGE_STORGE](state,obj){
		state.Note6.activeStorge=obj.storge;
		state.Note6.price=obj.price;
		state.Note6.isSelected=false;
	},
	[ADD_ITEM](state){
		const activeColor=state.Note6.activeColor;
        const type=activeColor+'，'+state.Note6.activeStorge;
        const cartInfo={
        	type: type,
        	count: 1,
        	price: state.Note6.price
        };
        state.cart.push(cartInfo);
	},
	[REMOVE_ITEM](state,cartInfo){
		const index=state.cart.indexOf(cartInfo);
		state.cart.splice(index,1);
	}
};

export default new Vuex.Store({
	state,
	mutations,
	actions
});