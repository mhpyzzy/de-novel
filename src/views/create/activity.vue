<!-- 活动页面 -->
<template>
	<div class="activity">
		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<div class="item" v-for="(item, index) in list" :key="index">
				<van-image fit="cover" :src="item.cover" />
				<div class="footer">
					<div class="title">充值就送稀有NFT</div>
					<div class="time">2022-05-29 10:31:00</div>
				</div>
			</div>
		</van-list>

		<van-button round type="primary">创建活动</van-button>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const loading = ref(false);
const finished = ref(false);
const list = ref([]);

const onLoad = () => {
	// 异步更新数据
	// setTimeout 仅做示例，真实场景中一般为 ajax 请求
	setTimeout(() => {
		for (let i = 0; i < 10; i++) {
			list.value.push({
				id: list.value.length + 1,
				cover: 'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
				title: '充值就送稀有NFT',
				time: '2022-05-29 10:31:00',
			});
		}

		// 加载状态结束
		loading.value = false;

		// 数据全部加载完成
		if (list.value.length >= 30) {
			finished.value = true;
		}
	}, 1000);
};
</script>

<style lang="less" scoped>
.activity {
	min-height: 100vh;
	padding: 24px;
	background: #f0f0f0;

	.item {
		background: #fff;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 24px;
		.van-image {
			width: 100%;
			height: 152px;
		}
		.footer {
			padding: 4px 14px 10px;
			.title {
				font-size: 16px;
			}
			.time {
				font-size: 12px;
				color: @--color-4;
				margin-top: 4px;
			}
		}
	}

	.van-button--round {
		position: fixed;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
