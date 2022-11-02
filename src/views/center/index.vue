<template>
	<div class="center">center</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const show = ref(false);
const showPopup = () => {
	show.value = true;
};
</script>

<style lang="less" scoped>
.center {
}
</style>
