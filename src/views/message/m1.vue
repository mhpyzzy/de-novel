<template>
	<div class="m1">
		<van-image fit="fill" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
		<div class="detail">
			<div class="detail-item">
				<div class="left">
					<div class="title">代币名称</div>
					<div class="f1">ZRC</div>
				</div>
				<div class="right">
					<div class="title">小说名称</div>
					<div class="f2">择日飞升</div>
				</div>
			</div>
			<div class="detail-item">
				<div class="left">
					<div class="title">募集数量</div>
					<div class="f1">15,000,000 <span class="f2">ZRC</span></div>
				</div>
				<div class="right">
					<div class="title">代币类型</div>
					<div class="f2">ERC-20</div>
				</div>
			</div>
			<div class="detail-item">
				<div class="left">
					<div class="title">募集价格</div>
					<div class="f1">0.1 <span class="f2">USDT / ZRC</span></div>
				</div>
				<div class="right">
					<div class="title">代币总量</div>
					<div class="f2">100,000,000</div>
				</div>
			</div>
			<div class="detail-item">
				<div class="left">
					<div class="title">完成度</div>
					<div class="progress f1">
						<div>80</div>
						<div class="f2">&nbsp;&nbsp;%</div>
						<van-progress :show-pivot="false" :percentage="80" stroke-width="8" />
					</div>
				</div>
				<div class="right">
					<div class="title">接受代币</div>
					<div class="f2">USDT</div>
				</div>
			</div>
		</div>

		<div class="footer">
			<div class="status-title">版权包状态</div>
			<div class="status">创建审核已通过</div>

			<van-button round type="primary">开启募集</van-button>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const show = ref(false);
const showPopup = () => {
	show.value = true;
};
</script>

<style lang="less" scoped>
.m1 {
	padding: 20px;
	& .van-image {
		width: 100%;
		height: 190px;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(#111d30, 10%);
		overflow: hidden;
	}

	.detail {
		margin-top: 24px;

		&-item {
			margin-bottom: 14px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				.progress {
					display: flex;
					align-items: flex-end;
				}
				.van-progress {
					width: 80px;
					margin-left: 10px;
					margin-bottom: 6px;
				}
			}
			.right {
				text-align: right;
			}
			.title {
				font-size: 12px;
				color: @--color-3;
				margin-bottom: 4px;
			}
			.f1 {
				font-size: 24px;
				color: @--color-1;
			}
			.f2 {
				font-size: 14px;
				color: @--color-2;
			}
		}
	}

	.footer {
		margin-top: 30px;
		text-align: center;
	}
	.status-title {
		font-size: 12px;
		color: @--color-4;
		margin-bottom: 10px;
	}
	.status {
		font-size: 18px;
		color: #35a143;
		margin-bottom: 30px;
	}
	/deep/.van-button__text {
		font-size: 18px;
	}
}
</style>
