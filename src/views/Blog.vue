<template></template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const userId = route.params.id;
const users = ref([]);

console.log(userId);

onMounted(async () => {
	const response = await axios.get("/api/axios.php");
	users.value = response.data;
	console.log(users.value);
});
</script>
