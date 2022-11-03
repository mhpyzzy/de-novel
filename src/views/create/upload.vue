<!-- 上传章节 -->
<template>
	<div class="upload">
		<van-field v-model="chapter" placeholder="请输入章节名" />
		<!-- <van-divider /> -->
		<van-field
			v-model="content"
			rows="1"
			autosize
			type="textarea"
			placeholder="请输入正文 注意：严禁上传任何情色、低俗、涉政等违法违规内容。一旦查实，视情节轻重程度全书屏蔽整改起步并取消福利，直至报警处理"
		/>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const chapter = ref('');
const content = ref('');
</script>

<style lang="less" scoped>
.upload {
	height: 100vh;
	padding: 24px;
	// background: #f0f0f0;

	.van-field {
		margin-top: 24px;
		width: 100%;
	}
	/deep/.van-field__label {
		display: none;
	}
	// /deep/textarea {
	// 	min-height: 400px;
	// }
}
</style>
