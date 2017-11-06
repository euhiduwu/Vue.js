<template>
	<div class="find-music">
		<router-link class='list' to='/findMusic/recomment'>
			<p>个性推荐</p>
		</router-link>
		<router-link class='list' to='/findMusic/song'>
			<p>歌单</p>
		</router-link>
		<router-link class='list' to='/findMusic/radio'>
			<p>电台</p>
		</router-link>
		<router-link class='list' to='/findMusic/rank'>
			<p>排行榜</p>
		</router-link>
		<router-view></router-view>
	</div>
</template>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.find-music{
		width: 100%;
		height: calc(100%-105px);
		z-index: 10;
		position: fixed;
		top: 55px;
		left: 0;
		bottom: 50px;
		background-color: white;
		display: flex;
	}
	.list{
		flex: 1;
		width: 25%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		text-align: center;
		text-decoration: none;
		color: #c62f2f;
		border-bottom: 2px solid #fff;
	}
	.list:focus{
		border-color: #c62f2f;
	}
</style>

<script></script>