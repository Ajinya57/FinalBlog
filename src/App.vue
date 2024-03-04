<template>
	<router-view></router-view>
</template>

<!-- <script>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
// 	name: "App",
// 	components: { HelloWorld },
// };
export default {
	name: "App",
	components: {},
	created() {
		// 清除特定键名为 "page" 的 localStorage 值
		localStorage.removeItem("page");
	},
};
</script> -->

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

onMounted(() => {
	// 清除特定键名为 "page" 的 localStorage 值
	localStorage.removeItem("page");
});

onMounted(async () => {
	if (store.getters.totalBlogs == -1) {
		const response = await axios.get("/api/getBlogs.php");
		store.dispatch("setBlogs", JSON.stringify(response.data.blogs));
		store.dispatch("setTotalBlogs", response.data.totalBlogs);
		store.dispatch("setBlogContent", "123");
		store.dispatch("setTags", JSON.stringify(response.data.tags));
		store.dispatch(
			"setCategories",
			JSON.stringify(response.data.categories)
		);
	}
});
</script>

<!-- <style lang="less">
#app {
	margin: 0;
	padding: 0;
}
</style> -->
