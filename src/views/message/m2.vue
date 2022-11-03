<template>
	<div class="m2">
		<div class="title">每日读者付费数据</div>
		<div class="time">2022-06-14</div>

		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<div class="item" v-for="(item, index) in list" :key="index">
				<van-image fit="cover" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
				<div class="content">
					<div class="name">夜的命名术</div>
					<div class="other">
						<div class="other-item">
							<span>日付人数</span>
							<span class="up">+2,6800 人<van-icon name="down" /></span>
						</div>
						<div class="other-item">
							<span>日付金额</span>
							<span class="down">+35,000 USDT<van-icon name="down" /></span>
						</div>
					</div>
				</div>
			</div>
		</van-list>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const onLoad = () => {
	// 异步更新数据
	// setTimeout 仅做示例，真实场景中一般为 ajax 请求
	setTimeout(() => {
		for (let i = 0; i < 10; i++) {
			list.value.push(list.value.length + 1);
		}

		// 加载状态结束
		loading.value = false;

		// 数据全部加载完成
		if (list.value.length >= 40) {
			finished.value = true;
		}
	}, 1000);
};
</script>

<style lang="less" scoped>
.m2 {
	padding: 20px;
	background: #f0f0f0;
	.title {
		text-align: center;
	}
	.time {
		text-align: center;
		font-size: 12px;
		color: @--color-3;
		margin-bottom: 20px;
	}

	.item {
		background: #fff;
		margin-bottom: 14px;
		padding: 10px;
		border-radius: 10px;
		display: flex;
		align-items: center;

		.van-image {
			width: 90px;
			height: 90px;
			border-radius: 10px;
			overflow: hidden;
		}
		.content {
			height: 100px;
			flex: 1;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.other {
				font-size: 14px;
				color: @--color-3;

				&-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 6px;

					.up {
						.van-icon-down {
							transform: rotate(180deg);
							color: @--green;
						}
					}
					.down {
						.van-icon-down {
							color: @--red;
						}
					}
				}
			}
		}
	}
}
</style>
