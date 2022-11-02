<template>
	<div class="message">
		<div class="message-item" v-for="item in state.list" :key="item.id" @click="$router.push('/m1')">
			<van-badge :dot="item.unread == 1">
				<div :class="['message-item-tag', item.type == 1 ? 'red' : item.type == 2 ? 'blue' : '']">{{ item.tag }}</div>
			</van-badge>
			<div class="message-item-right">
				<div class="desc">{{ item.desc }}</div>
				<div class="time">{{ item.time }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const show = ref();
const state = reactive({
	list: [
		{ id: 1, type: '1', unread: 1, tag: '日常', desc: '昨日读者付费数据', time: '2022-06-14 00:00:00' },
		{ id: 2, type: '2', unread: 1, tag: '系统', desc: '择日飞升 付费阅读人数达到20万', time: '2022-06-14 00:00:00' },
		{ id: 3, type: '3', unread: 0, tag: '择日飞升', desc: '昨日读者付费数据', time: '2022-06-14 00:00:00' },
		{ id: 4, type: '3', unread: 0, tag: '择日飞升', desc: '昨日读者付费数据', time: '2022-06-14 00:00:00' },
	],
});
</script>

<style lang="less" scoped>
.message {
	padding: 0 20px;
	&-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ebebeb;
		padding: 14px 0;
		font-size: 14px;
		color: #999;
		&-tag {
			color: @--color-1;
			background: #fdd5aa;
			padding: 4px 10px;
			border-radius: 10px;
			&.red {
				background: #fcbfd2;
			}
			&.blue {
				background: #aaddfd;
			}
		}
		&-right {
			text-align: right;
			.desc {
				color: @--color-3;
				margin-bottom: 4px;
			}
			.time {
				color: @--color-4;
				font-size: 10px;
			}
		}
	}
}
</style>
