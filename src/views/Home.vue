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
		<div class="desktop-content">
			<ul>
				<li v-for="blog in blogs">
					<ul class="breadcrumbs" id="post-source">
						<li>
							<a href="#"><i class="fa fa-file-text"></i></a>
						</li>
						<!-- category -->
						<li>
							<a href="#">{{ blog.category }}</a>
						</li>
						<!-- tag -->
						<li>
							<a href="#">{{ blog.tag }}</a>
						</li>

						<li id="post-title">
							<!-- blog title -->
							<router-link
								:to="{ name: 'blog', params: { id: blog.id } }"
								:title="blog.title"
								>{{
									truncateTitle(blog.title, 12)
								}}</router-link
							>
						</li>
					</ul>

					<div class="post-table">
						<table>
							<tr>
								<th></th>
								<th>
									<!-- blog title and time -->
									<span class="table-title"
										>File: {{ blog.title }}
									</span>
									<span>{{ blog.date }}</span>
								</th>
							</tr>
							<tr>
								<td class="table-linenum" id="table-linenum">
									content
								</td>
								<td>
									<!-- if has abstract, show here -->
									<h2 id="写在前面">
										<a
											href="#写在前面"
											class="headerlink"
											title="写在前面"
										></a
										>写在前面
									</h2>
									<!-- abstract content -->
									<div v-html="blog.abstract"></div>
								</td>
							</tr>
						</table>
					</div>
				</li>
			</ul>
			<div class="paginator">
				<a
					class="extend prev"
					rel="prev"
					href="#"
					@click="prev"
					v-show="pageState.isPrev"
					>Prev</a
				>
				<!-- Loop over the page numbers array and render the elements -->
				<template v-for="pageNumber in pageNumbers">
					<!-- Otherwise, use span -->
					<span
						v-if="pageNumber.text === page"
						class="page-number current"
						>{{ pageNumber.text }}</span
					>
					<!-- If the text is not ... or the current page, just display the text -->
					<a
						:key="pageNumber.text"
						class="page-number"
						v-else-if="
							pageNumber.text !== '...' &&
							pageNumber.text !== page
						"
						href="#"
						@click="toPage(pageNumber.text)"
						>{{ pageNumber.text }}</a
					>
					<span v-else class="space">&hellip;</span>
				</template>
				<a
					class="extend next"
					rel="next"
					href="#"
					@click="next"
					v-show="pageState.isNext"
					>Next</a
				>
			</div>
		</div>

		<div class="desktop-category">
			<ul class="breadcrumbs">
				<li>
					<a href="#"><i class="fa fa-th-list"></i></a>
				</li>
				<li><a href="#">category</a></li>
				<li><a href="#">tree</a></li>
			</ul>

			<ul class="category-list">
				<li class="category-list-item" v-for="category in categories">
					<a class="category-list-link" href="/categories/Code/">{{
						category
					}}</a>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/BigData/Hadoop/"
								>Hadoop</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/BigData/"
						>BigData</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/BigData/Hadoop/"
								>Hadoop</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/Code/"
						>Code</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/Android/"
								>Android</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/Assembly/"
								>Assembly</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/GUI/"
								>GUI</a
							>
							<ul class="category-list-child">
								<li class="category-list-item">
									<a
										class="category-list-link"
										href="/categories/Code/GUI/Qt/"
										>Qt</a
									>
								</li>
							</ul>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/Java/"
								>Java</a
							>
							<ul class="category-list-child">
								<li class="category-list-item">
									<a
										class="category-list-link"
										href="/categories/Code/Java/maven/"
										>maven</a
									>
								</li>
							</ul>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/OpenGL/"
								>OpenGL</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/Python/"
								>Python</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/SDK/"
								>SDK</a
							>
							<ul class="category-list-child">
								<li class="category-list-item">
									<a
										class="category-list-link"
										href="/categories/Code/SDK/ArcSoft/"
										>ArcSoft</a
									>
								</li>
							</ul>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Code/others/"
								>others</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/Database/"
						>Database</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Database/MySQL/"
								>MySQL</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/Linux/"
						>Linux</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Linux/CentOS/"
								>CentOS</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Linux/Gentoo/"
								>Gentoo</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Linux/Problem/"
								>Problem</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Linux/Shell/"
								>Shell</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Linux/Ubuntu/"
								>Ubuntu</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Linux/common/"
								>common</a
							>
							<ul class="category-list-child">
								<li class="category-list-item">
									<a
										class="category-list-link"
										href="/categories/Linux/common/tmux/"
										>tmux</a
									>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a
						class="category-list-link"
						href="/categories/Microcomputer/"
						>Microcomputer</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Microcomputer/51/"
								>51</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Microcomputer/Arduino/"
								>Arduino</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Microcomputer/Pi/"
								>Pi</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a
						class="category-list-link"
						href="/categories/NeuralNetwork/"
						>NeuralNetwork</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/NeuralNetwork/OpenVINO/"
								>OpenVINO</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/NeuralNetwork/yolov5/"
								>yolov5</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/OS/">OS</a>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/OpenCV/"
						>OpenCV</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/OpenCV/QRCode/"
								>QRCode</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/Python/"
						>Python</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Python/MySQL/"
								>MySQL</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Python/pyqt5/"
								>pyqt5</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/Tool/"
						>Tool</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Tool/Intellij-IDEA/"
								>Intellij IDEA</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Tool/VSCode/"
								>VSCode</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Tool/Visual-Studio/"
								>Visual Studio</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Tool/gitbook/"
								>gitbook</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/WEB/"
						>WEB</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/WEB/AMap/"
								>AMap</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/WEB/Spring/"
								>Spring</a
							>
						</li>
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/WEB/others/"
								>others</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/Windows/"
						>Windows</a
					>
					<ul class="category-list-child">
						<li class="category-list-item">
							<a
								class="category-list-link"
								href="/categories/Windows/others/"
								>others</a
							>
						</li>
					</ul>
				</li>
				<li class="category-list-item">
					<a class="category-list-link" href="/categories/others/"
						>others</a
					>
				</li>
				<li class="category-list-item">
					<a
						class="category-list-link"
						href="/categories/%E5%8D%9A%E5%AE%A2/"
						>博客</a
					>
				</li>
				<li class="category-list-item">
					<a
						class="category-list-link"
						href="/categories/%E6%96%87%E7%AB%A0/"
						>文章</a
					>
				</li>
			</ul>
		</div>

		<div class="desktop-tag">
			<ul class="breadcrumbs">
				<li>
					<a href="#"><i class="fa fa-folder"></i></a>
				</li>
				<li><a href="#">tag</a></li>
				<li><a href="#">dir</a></li>
			</ul>

			<div id="list-cloud" class="list-cloud">
				<router-link
					v-for="tag in tags"
					:to="{ name: 'tags', params: { id: tag.id } }"
					style="font-size: 10px"
					>{{ tag.name }}</router-link
				>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCommonLogic } from "/js/page.js";
import { useStore } from "vuex";
import { ref, computed, reactive, watch } from "vue";

const store = useStore();
const user = computed(() => store.getters.user);
// const blogs = computed(() => store.getters.blogs);
const totalBlogs = computed(() => store.getters.totalBlogs);
const tags = computed(() => store.getters.tags);
const categories = computed(() => store.getters.categories);
const blogsPerPage = 10;
const pageState = reactive({
	isPrev: false,
	isNext: false,
});
const page = ref(Number(localStorage.getItem("page")) || 1);
const blogs = computed(() => {
	const startIndex = (page.value - 1) * blogsPerPage;
	const endIndex = page.value * blogsPerPage;
	return store.getters.blogs.slice(startIndex, endIndex);
});
// Initialize an array to store the page numbers
var pageNumbers = reactive([]);

const logout = () => {
	store.dispatch("logout");
};

const prev = () => {
	page.value--;
	localStorage.setItem("page", page.value);
};
const next = () => {
	page.value++;
	localStorage.setItem("page", page.value);
};

const toPage = (pageNum) => {
	page.value = Number(pageNum);
	localStorage.setItem("page", page.value);
};

useCommonLogic();

// 截断标题的方法
const truncateTitle = (title, length) => {
	if (title.length > length) {
		return title.substring(0, length) + "...";
	} else {
		return title;
	}
};

// Define a function to get the page numbers to display
const getPageNumbers = () => {
	// Calculate the total pages based on the total blogs and the blogs per page
	const totalPages = Math.ceil(totalBlogs.value / blogsPerPage);
	pageNumbers = reactive([]);
	if (totalPages <= 1) {
		pageNumbers.push({ text: 1 });
		return;
	}

	// If page is 1, add Prev as disabled
	if (page.value === 1) {
		pageState.isPrev = false;
	} else {
		// Otherwise, add Prev with the previous page link
		pageState.isPrev = true;
	}

	if (totalPages <= 8) {
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push({ text: i });
		}
	} else {
		// If page is less than or equal to 4, add the first 4 pages
		if (page.value <= 2) {
			for (let i = 1; i <= 4; i++) {
				pageNumbers.push({ text: i });
			}
		} else {
			// Otherwise, add the first page and a space
			pageNumbers.push({ text: 1 });
			pageNumbers.push({ text: "..." });
		}

		// If page is between 5 and totalPages - 4, add the current page and the two pages before and after it
		if (page.value >= 3 && page.value <= totalPages - 3) {
			for (let i = page.value - 1; i <= page.value + 1; i++) {
				pageNumbers.push({ text: i });
			}
		}

		// If page is greater than or equal to totalPages - 3, add the last 4 pages
		if (page.value >= totalPages - 2) {
			for (let i = totalPages - 2; i <= totalPages; i++) {
				pageNumbers.push({ text: i });
			}
		} else {
			// Otherwise, add a space and the last page
			pageNumbers.push({ text: "..." });
			pageNumbers.push({ text: totalPages });
		}
	}

	// If page is equal to totalPages, add Next as disabled
	if (page.value === totalPages) {
		pageState.isNext = false;
	} else {
		// Otherwise, add Next with the next page link
		pageState.isNext = true;
	}
};
getPageNumbers();
watch(page, (newValue, oldValue) => {
	getPageNumbers();
});
</script>
