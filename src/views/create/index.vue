<template>
	<div class="create">
		<div class="create-item" v-if="state.list.length == 0">
			<van-image fit="fill" src="error" />
			<div class="name">创建我的第 1 本书</div>
			<van-field label=" " v-model="state.new_name" placeholder="请输入书名，字数15字以内" />
			<div class="tip">书名可在发布前随时修改</div>
		</div>
		<van-swipe :loop="false" v-else>
			<van-swipe-item v-for="item in state.list" :key="item.id">
				<div class="create-item">
					<van-image fit="fill" :src="item.cover" />
					<div class="name">{{ item.name }}</div>
					<div class="edit">
						<van-button block type="primary" @click="$router.push('/upload')">编辑章节</van-button>
					</div>
					<div class="more">更多编辑...</div>
					<div class="steps">
						<div class="step" @click="$router.push('/activity')">
							<span><van-icon name="point-gift" /> 活动</span>
							<van-icon name="checked" color="#59BF31" v-if="item.activity == 1" />
							<van-icon name="clear" v-else />
						</div>
						<div class="step" @click="$router.push('/collection')">
							<span><van-icon name="diamond" /> 藏品 </span>
							<van-icon name="checked" color="#59BF31" v-if="item.collection == 1" />
							<van-icon name="clear" v-else />
						</div>
						<div class="step" @click="$router.push('/award')">
							<span><van-icon name="award" /> 版权包</span>
							<van-icon name="checked" color="#59BF31" v-if="item.copyright == 1" />
							<van-icon name="clear" v-else />
						</div>
					</div>
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const state = reactive({
	new_name: '',
	list: [
		{
			id: '1',
			cover: 'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
			name: '夜的命名术',
			activity: 1,
			collection: 1,
			copyright: 0,
		},
		{
			id: '1',
			cover: 'https://pic3.ntimg.cn/pic/20220218/33810373_141012571121_4.jpg',
			name: '夜的命名术',
			activity: 1,
			collection: 1,
			copyright: 0,
		},
	],
});
</script>

<style lang="less" scoped>
.create {
	height: calc(100vh - 50px);
	padding: 24px;

	.van-swipe {
		height: 100%;
	}
	.van-field {
		margin-top: 24px;
		width: 80%;
		border-radius: 10px;
	}
	/deep/.van-field__label {
		display: none;
	}
	&-item {
		height: 100%;
		background: #f0f0f0;
		border-radius: 10px;
		margin: 0 10px;
		box-shadow: 0 4px 12px rgba(#111d30, 10%);
		display: flex;
		flex-direction: column;
		align-items: center;

		& .tip {
			font-size: 14px;
			color: @--color-3;
			margin-top: 14px;
		}

		& .van-image {
			width: 150px;
			height: 218px;
			margin-top: 40px;
		}
		& .name {
			font-size: 24px;
			margin-top: 20px;
			color: @--color-2;
		}
		& .edit {
			width: 210px;
			height: 52px;
			margin-top: 16px;
			.van-button--primary {
				border-radius: 10px;
			}
		}
		& .more {
			color: @--color-3;
			margin-top: 10px;
		}
		& .steps {
			width: 120px;
			margin-top: 16px;
			.step {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: @--color-3;
				margin-top: 10px;
			}
		}
	}
}
</style>
