<template>
	<div class="err404">
		<span>
			<router-link to="/home" class="go-home">Home Page</router-link>
		</span>
	</div>
</template>

<!-- <script setup>
import { onMounted, nextTick } from "vue";
onMounted(() => {
	nextTick(() => {
		$("a").click(function () {
			$(this).addClass("click");
		});
	});
});
</script> -->

<style lang="less">
.err404 {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(/img/404.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.err404 .go-home {
	width: 130px;
	height: 38px;
	background: #c9141d;
	line-height: 38px;
	font-size: 16px;
	text-align: center;
	display: inline-block;
	border-radius: 2px;
}
</style>
