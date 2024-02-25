<template></template>

<script>
export default {
	name: "Blog",
	data() {
		return {
			users: [],
		};
	},
	created() {
		this.axios.get("/api/axios.php").then((response) => {
			this.users = response.data;
			console.log(this.users);
		});
	},
};
</script>
