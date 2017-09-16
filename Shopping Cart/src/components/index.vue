<template>
    <div id='production'>
	    <div class="image">
		    <img :src="Note6.activeImageUrl">
	    </div>
        <div class="right">
			<div class="detail">
				<h4 v-text='Note6.soc'></h4>
				<p v-text='Note6.socDetail'></p>
			</div>
			<div class="detail">
				<h4 v-text='Note6.battery'></h4>
				<p v-text='Note6.batteryDetail'></p>
			</div>
			<div class="detail">
				<h4 v-text='Note6.light'></h4>
				<p v-text='Note6.lightDetail'></p>
			</div>
			<div class="detail">
				<h4 v-text='Note6.camera'></h4>
				<p v-text='Note6.cameraDetail'></p>
			</div>
			<div class="detail">
				<h4 v-text='Note6.storge_1'></h4>
				<p v-text='Note6.storgeDetail'></p>
			</div>
			<div class="detail">
				<h4 v-text='Note6.frontCamera'></h4>
				<p v-text='Note6.frontCameraDetail'></p>
			</div>

			<div class="price">
			    <span>价格：</span>
				<span v-text='Note6.price' class="priceText"></span>
			</div>

			<div class="price">
			    <span>存储：</span>
				<ul>
					<li class="storge" v-for='($key,value) in Note6.storge' @click='changeStorge(value,$key)' :class='{ active: Note6.price==$key }' v-text='value'></li>
				</ul>
			</div>

			<div class="price">
				<span>外观：</span>
				<ul>
					<li class="style" v-for='($key,value) in Note6.colors' @click='changeColor(value,$key)' :class='{ active: Note6.activeImageUrl==$key}' style="background: value" v-text='value'></li>
				</ul>
			</div>

			<div class="cart">
				<button @click='addItem()' :disabled='Note6.isSelected'>加入购物车</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
    *{
    	margin: 0;
    	padding: 0;
    	color: #515151;
    	background-color: #f9f9f9;
    }
	#production{
		width: 100%;
		height: 100%;
	}
	.right{
		float: right;
		width: 71%;
	}
	.detail{
		display: inline-block;
		width: 26%;
		padding: 3%;

	}
	.detail h4{
		color: #333;
		font-size: 24px;
		line-height: 36px;
	}
	.detail p{
		font-size: 16px;
		color: #999;
	}
	.price{
		height: 48px;
		line-height: 48px;
		font-size: 20px;
		margin-left: 25px;
		position: relative;
	}
	.priceText{
		color: #c0392b;
		font-size: 16px;
	}
	.price ul{
		display: inline-block;
		width: 40%;
	}
	.storge{
		width: 20%;
		border: 2px solid #dcdcdc;
		text-align: center;
		font-size: 16px;
		list-style: none;
		display: inline-block;
		margin-right: 10px;
		line-height: 24px;
	}
	.styleUl{
		height: 30px;
		left: 70px;
		top: 9px;
		position: absolute;
	}
	.style{
		width: 20%;
		border: 2px solid #dcdcdc;
		text-align: center;
		font-size: 16px;
		list-style: none;
		display: inline-block;
		margin-right: 10px;
		line-height: 24px;
	}
	.cart{
		margin-top: 10px;
		margin-left: 5px;
	}
	.cart button{
		width: 30%;
		height: 40px;
		margin-left: 20px;
		background-color: #d9534f;
		border-color: #d43f3a;
		color: white;
		font-size: 16px;
		border-radius: 10px;
		line-height: 40px;
		display: inline-block;
		border-style: none;
	}
	.image{
		width: 25%;
		float: left;
	}
	.image img{
		width: 100%;
		padding: 30px;
	}
	.active{
		border-color: #c0392b;
	}
</style>

<script>
	import { mapState } from 'vuex'
	export default{
		name: 'index',
		data(){
			return{
				
			}
		},
		computed: mapState(['Note6','cart']),
		methods:{
			changeStorge(storge,price){
				this.$store.dispatch('changeStorge',{storge,price});
			},
			changeColor(color,styleUrl){
				this.$store.dispatch('changeColor',{color,styleUrl});
			},
			addItem(){
				this.$store.dispatch('addItem');
			}
		}
	}
</script>