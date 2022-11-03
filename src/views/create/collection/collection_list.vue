<!-- 藏品列表页面 -->
<template>
	<div class="activity">
		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<div class="item" v-for="(item, index) in list" :key="index">
				<van-image fit="cover" :src="item.src" />
				<div class="footer">
					<div class="left">
						<div class="name">楚君归</div>
						<div class="icons">
							<van-icon name="like" />
							<span>2000</span>
							<van-icon name="checked" />
						</div>
					</div>
					<van-button size="small" round type="primary">铸造</van-button>
				</div>
			</div>
		</van-list>
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
				author: '庆尘',
				src: 'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
				price: '0.3',
				count: '205.3',
				unit: 'ETH',
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
	padding: 24px 20px;
	background: #f0f0f0;

	.item {
		background: #fff;
		border-radius: 10px;
		overflow: hidden;
		margin: 0 auto 24px;

		.van-image {
			width: 100%;
			height: 145px;
		}
		.footer {
			padding: 4px 14px 10px;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				.name {
					margin-bottom: 10px;
				}
				.icons {
					font-size: 12px;
				}
				.van-icon-like {
					color: @--red;
				}
				span {
					font-size: 10px;
					margin: 0 10px 0 5px;
				}
				.van-icon-checked {
					color: @--green;
				}
			}

			.van-button--round {
				padding: 6px 24px;
			}
		}
	}
}
</style>
