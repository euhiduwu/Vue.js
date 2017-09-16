<template>
	<div id='header'>
		<div>
			<ul class="headerUl">
				<li>
					<a class="Shopping">Shopping Cart</a>
				</li>
				<li class="back">
					<a class="phone" href="#"><router-link to='/index'>魅蓝 Note6</router-link></a>
				</li>
				<li class="back">
					<a href="#" class="cart" ><router-link to='/cart'>购物车</router-link></a>
					<sup class="number" v-text='cart.length' v-if='cart.length!=0'></sup>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	#header{
		width: 100%;
		padding: 10px;
	}
	.headerUl{
		display: inline-block;
	}
	#header li{
		display: inline-block;
		list-style: none;
		padding: 5px;
		position: relative;
	}
	#header li a{
		display: inline-block;
		line-height: 40px;
		text-decoration: none;
		color: black;
	}
	.Shopping{
		font-size: 22px;
	}
	.number{
		font-size: 14px;
		width: 18px;
		height: 18px;
		display: inline-block;
		background-color: red;
		border-radius: 100%;
		color: white;
		text-align: center;
	}
	.back{
		
		border-radius: 5px;
	}
	a:focus{
		background-color: #e7e7e7;
	}
</style>

<script>
	import { mapState } from 'vuex'
	export default{
		name: 'Nav',
		data(){
			return{

			}
		},
		computed: mapState(['cart'])
	}
</script>