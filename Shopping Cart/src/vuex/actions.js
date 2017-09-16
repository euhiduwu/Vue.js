export default{
	changeColor({ commit },{color,styleUrl}){
		commit('CHANGE_COLOR',{
			color: color,
			styleUrl: styleUrl
		});
	},
	changeStorge({ commit },{storge,price}){
		commit('CHANGE_STORGE',{
			storge: storge,
			price: price
		});
	},
	addItem({ commit }){
		commit('ADD_ITEM');
	},
	removeItem({ commit }, cartInfo){
		commit('REMOVE_ITEM',cartInfo);
	}
}