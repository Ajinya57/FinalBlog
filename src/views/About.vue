<template>
	<div class="milk-header">
		<nav class="header-nav">
			<ul class="nav-menu">
				<li id="Home">
					<i class="fa fa-home" aria-hidden="true"></i>
					<!-- <a href="/ ">Home</a> -->
					<router-link to="/home">Home</router-link>
				</li>

				<li id="Archives">
					<i class="fa fa-archive" aria-hidden="true"></i>
					<!-- <a href="/archives ">Archives</a> -->
					<router-link to="/archives">Archives</router-link>
				</li>

				<li id="About">
					<i class="fa fa-user-circle" aria-hidden="true"></i>
					<!-- <a href="/about ">About</a> -->
					<router-link to="/about">About</router-link>
				</li>
			</ul>

			<span class="nav-date">
				<i class="fa fa-calendar" aria-hidden="true"></i>
				<span id="date"></span>
			</span>

			<span class="nav-system" id="nav-system"></span>

			<span class="nav-access">
				<i class="fa fa-universal-access" id="nav-access"></i>
				<i class="fa fa-angle-down"></i>
				<div class="dropdown-content" id="dropdown-content">
					<ul class="social">
						<li>
							<a
								href="https://github.com/Ajinya57/FinalBlog"
								target="_blank"
								rel="noopener"
							>
								<i
									class="fa fa-github-alt"
									aria-hidden="true"
								></i>
							</a>
						</li>

						<li>
							<a href="mailto:zhongyejun168@gmail.com">
								<i
									class="fa fa-envelope"
									aria-hidden="true"
								></i>
							</a>
						</li>
					</ul>
					<ul>
						<li v-if="user">
							<span v-if="user.isRoot"
								>Power by
								<router-link :to="{ path: '/login' }">
									<a
										href="Login.vue"
										target="_blank"
										rel="noopener"
										>{{ user.name }}</a
									>
								</router-link>
							</span>
							<span v-else>Power by {{ user.name }} </span>
						</li>
						<li v-else>
							<span
								>Power by
								<router-link :to="{ path: '/login' }">
									<a
										href="Login.vue"
										target="_blank"
										rel="noopener"
										>***</a
									>
								</router-link>
							</span>
						</li>
					</ul>
					<ul v-if="user">
						<li>
							<span
								><router-link to="/home" @click="logout"
									>QUIT</router-link
								>
							</span>
						</li>
					</ul>
				</div>
			</span>
		</nav>
	</div>
	<div class="milk-body">
		<span>hello world</span>
	</div>
</template>

<script setup>
import { useCommonLogic } from "/js/page.js";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const user = computed(() => store.getters.user);

const logout = () => {
	store.dispatch("logout");
};

useCommonLogic();
</script>
