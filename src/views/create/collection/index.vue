<!-- 藏品主页面 所有藏品的集合 -->
<template>
	<div class="activity">
		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<div class="item" v-for="(item, index) in list" :key="index" @click="$router.push('/collection_list')">
				<div class="imgs">
					<div class="img-wrap">
						<van-image fit="cover" :src="url" v-for="(url, index) in item.src" :key="index" />
					</div>
				</div>
				<!-- <van-space wrap fill align="center">
					<van-image fit="cover" :src="url" v-for="(url, index) in item.src" :key="index" />
				</van-space> -->
				<div class="footer">
					<div class="left">
						<van-image round :src="item.avatar" />
						<div class="name"># 庆尘</div>
					</div>
					<div class="right">
						<div><i class="price">0.3</i> <span>ETH</span> <b>&nbsp;&nbsp;地板价</b></div>
						<div><i class="count">205.3</i> <span>ETH</span> <b>&nbsp;&nbsp;交易量</b></div>
					</div>
				</div>
			</div>
		</van-list>

		<van-button round type="primary">创建藏品</van-button>
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
				avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
				author: '庆尘',
				src: [
					'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
					'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
					'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
					'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
				],
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
	// background: #f0f0f0;

	.item {
		background: #fff;
		border-radius: 10px;
		overflow: hidden;
		background: #ebebeb;
		width: 320px;
		margin: 0 auto 24px;
		.imgs {
			padding: 10px;
			background: #ebebeb;
			.img-wrap {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				border-radius: 10px;
				overflow: hidden;
				height: 300px;
				.van-image {
					width: 145px;
					height: 145px;
					margin-bottom: 10px;
				}
			}
		}
		.footer {
			padding: 4px 14px 10px;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;
				.van-image {
					width: 50px;
					height: 50px;
					margin-right: 8px;
				}
			}

			.right {
				font-size: 12px;
				.price {
					font-size: 23px;
					font-weight: bold;
				}
				.count {
					font-size: 14px;
					font-style: normal;
					font-weight: bold;
					color: @--color-3;
				}
				b {
					color: @--color-4;
				}
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
