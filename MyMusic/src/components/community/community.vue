<template>
	<div class="community">
		<div class="text">
			欢迎加入社区！
		</div>
	</div>
</template>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.community{
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
	.text{
		width: 100%;
		height: 60px;
		font-size: 24px;
		line-height: 60px;
		text-align: center;
	}
</style>