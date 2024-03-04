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
		<div class="win">
			<div class="win-title">Archives</div>
			<div class="win-body">
				<div class="archive">
					<div>
						<a href="/archives/2021" class="archive-year"> 2021 </a>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/06/05/NeuralNetwork/yolo/yolov5train/"
									>
										<time
											datetime="2021-06-04T16:09:57.456Z"
											itemprop="datePublished"
										>
											2021-06-05
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/06/05/NeuralNetwork/yolo/yolov5train/"
										>
											yolov5使用自定义数据训练模型
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/05/25/osdev/osdev-diskread-dev01/"
									>
										<time
											datetime="2021-05-24T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-05-25
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/05/25/osdev/osdev-diskread-dev01/"
										>
											OS读取硬盘-dev01
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a href="/2021/05/10/Web/AMapSimpleUsage/">
										<time
											datetime="2021-05-09T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-05-10
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/05/10/Web/AMapSimpleUsage/"
										>
											高德地图API简单使用
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/05/05/osdev/osdev-environment-dev00/"
									>
										<time
											datetime="2021-05-04T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-05-05
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/05/05/osdev/osdev-environment-dev00/"
										>
											设置OS开发环境-dev00
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/05/02/Microcomputer/Raspberry/Raspberry2Raspberry/"
									>
										<time
											datetime="2021-05-01T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-05-02
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/05/02/Microcomputer/Raspberry/Raspberry2Raspberry/"
										>
											Raspberry通过网线连接Raspberry
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/05/02/Microcomputer/Raspberry/RaspberryArduinoSerialCommunication/"
									>
										<time
											datetime="2021-05-01T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-05-02
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/05/02/Microcomputer/Raspberry/RaspberryArduinoSerialCommunication/"
										>
											Raspberry与Arduino进行串口通信
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/02/06/Tool/Gitbook/Gitbook2GitHubPage/"
									>
										<time
											datetime="2021-02-05T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-02-06
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/02/06/Tool/Gitbook/Gitbook2GitHubPage/"
										>
											Gitbook发布到GitHub静态页面
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/01/07/Code/SDK/ArcSoft/ArcFaceUsage/"
									>
										<time
											datetime="2021-01-06T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-01-07
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/01/07/Code/SDK/ArcSoft/ArcFaceUsage/"
										>
											虹软人脸识别SDK使用
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/01/07/Code/SDK/ArcSoft/ArcSoftAPI/"
									>
										<time
											datetime="2021-01-06T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-01-07
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/01/07/Code/SDK/ArcSoft/ArcSoftAPI/"
										>
											虹软人脸识别API
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>

					<div class="archive-item">
						<article class="archive-article archive-type-post">
							<div class="archive-article-inner">
								<header class="archive-article-header">
									<a
										href="/2021/01/06/Code/SDK/ArcSoft/ArcSoftDataStruct/"
									>
										<time
											datetime="2021-01-05T16:00:00.000Z"
											itemprop="datePublished"
										>
											2021-01-06
										</time>
									</a>

									<h1 itemprop="name">
										<a
											href="/2021/01/06/Code/SDK/ArcSoft/ArcSoftDataStruct/"
										>
											虹软人脸识别-数据结构
										</a>
									</h1>
								</header>
							</div>
						</article>
					</div>
				</div>
				<div class="paginator">
					<span class="page-number current">1</span
					><a class="page-number" href="/archives/page/2/">2</a
					><a class="page-number" href="/archives/page/3/">3</a
					><span class="space">&hellip;</span
					><a class="page-number" href="/archives/page/10/">10</a
					><a class="extend next" rel="next" href="/archives/page/2/"
						>Next</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCommonLogic, archCommonLogic } from "/js/page.js";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const user = computed(() => store.getters.user);

const logout = () => {
	store.dispatch("logout");
};

useCommonLogic();
archCommonLogic();
</script>
