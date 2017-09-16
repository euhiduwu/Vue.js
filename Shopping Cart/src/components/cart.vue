<template>
	<div id='begin'>
		<div class="header">
			<span class="headerLeft">购物车</span>
			<span class="headerRight">{{ totalPrice }}</span>
			<span class="headerRight">总计 :</span>
		</div>
		<div class="content" v-if='cart.length'>
			<ul>
				<li v-for='item in cart'>
					<span class="delete" @click='removeItem(item)'><img src="../images/close.png"></span>
					<span v-text='Note6.name'></span>
					<span class="style" v-text='item.type'></span>
					<span class="number" v-text='item.count'></span>
					<span class="price" v-text='item.price'></span>
				</li>
			</ul>
		</div>
		<div class="tips" v-else>空空荡荡！</div>
		<div class="footer">
			<button class="count">结算</button>
		</div>
	</div>
</template>

<style scoped>
	#begin{
		width: 53%;
		margin-left: 23.5%;
		border: 2px solid red;
		border-radius: 5px;
	}
	.header{
		width: 100%;
		height:40px;
		background-color: #f2dede;
		line-height: 40px;
	}
	.headerLeft{
		margin-left: 20px;
		color: #a94442;
	}
	.headerRight{
		float: right;
		margin-right: 10px;
		color: #a94442;
	}
	.content ul{
		display: inline-block;
		width: 100%;
		padding: 0;
	}
	.content li{
		list-style: none;
		margin-bottom: 5px;
		margin-left: 10px;
	}
	.content span{
		display: inline-block;
		font-size: 16px;
		margin-left: 5px;
	}
	.delete{
		width: 16px;
		height: 18px;
		border-radius: 100%;
		border: 1px solid red;
	}
	.style{
		padding: 5px;
		background-color: #5cb85c;
		color: white;
		border-radius: 5px;
		font-size: 12px;
	}
	.price{
		float: right;
		color: #c0392b;
		margin-right: 10px;
	}
	.number{
		background-color: red;
		width: 20px;
		height: 20px;
		text-align: center;
		border-radius: 100%;
		color: white;
	}
	.footer{
		width: 100%;
		height: 30px;
		background-color: #f5f5f5;
	}
	.count{
		display: inline-block;
		width: 100%;
		height: 100%;
		background-color: #d9534f;
		border-style: none;
		font-size: 14px;
		line-height: 30px;
		color: white;
		border-color: #d43f3a;
	}
	.tips{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
</style>
<script>
	import { mapState } from 'vuex';
	import store from '../vuex/index'
	export default{
		name: 'Cart',
		computed: {
			'totalPrice': function(){
				let price=0;
				for(var i=0;i<store.state.cart.length;i++){
					price+=parseInt(store.state.cart[i].price.substring(1,5));
				}
				return price;
			},
			...mapState(['Note6','cart']),
		},
		methods:{
			removeItem(cartInfo){
				this.$store.dispatch('removeItem',cartInfo);
			}
		}
	}
</script>