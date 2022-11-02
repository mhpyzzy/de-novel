<template>
	<div class="home">
		<van-tabbar route>
			<van-tabbar-item replace to="/message">消息</van-tabbar-item>
			<van-tabbar-item replace to="/create">创作</van-tabbar-item>
			<van-tabbar-item replace to="/center">我</van-tabbar-item>
		</van-tabbar>
		<router-view />
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
</script>

<style lang="less" scoped>
.home {
	padding-bottom: 50px;
}
</style>
