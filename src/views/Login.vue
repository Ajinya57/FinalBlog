<template>
	<div class="rth-586672fe">
		<main>
			<div class="rth-18dc9da6">
				<span
					class="rth-9d446b4a"
					tabindex="0"
					role="tab"
					@click="formType = 'login'"
					:aria-selected="formType === 'login'"
					>Login</span
				><span
					class="rth-9d446b4a"
					tabindex="0"
					role="tab"
					@click="formType = 'signup'"
					:aria-selected="formType === 'signup'"
					>Sign Up</span
				><span
					class="rth-9d446b4a"
					tabindex="0"
					role="tab"
					@click="formType = 'reset'"
					:aria-selected="formType === 'reset'"
					>Reset Password</span
				>
			</div>
			<div class="rth-0569cf87" tabindex="0"></div>
			<template v-if="formType === 'login'">
				<form>
					<input
						name="username"
						type="text"
						pattern="[A-Za-z0-9]{1,15}"
						title="Username length must be between 5-8 characters"
						autocomplete="username"
						placeholder="Username"
						value=""
						required
					/>
					<input
						name="email"
						type="email"
						autocomplete="email"
						placeholder="Email or Phone #"
						value=""
						required
					/>
					<input
						name="password"
						type="password"
						autocomplete="current-password"
						placeholder="Password"
						value=""
						required
					/>
					<button type="submit" @click="login">Login</button>
				</form>
			</template>
			<template v-else-if="formType === 'signup'">
				<form>
					<input
						name="email"
						type="email"
						autocomplete="username"
						placeholder="Email or Phone #"
						value=""
					/>
					<input
						name="password"
						type="password"
						autocomplete="new-password"
						placeholder="Password"
						value=""
					/>
					<input
						type="password"
						autocomplete="new-password"
						placeholder="Confirm Password"
						value=""
					/>
					<button type="submit">Sign Up</button>
				</form>
			</template>
			<template v-else-if="formType === 'reset'">
				<form>
					<input
						name="email"
						type="email"
						autocomplete="username"
						placeholder="Email or Phone #"
						value=""
					/>
					<input
						name="password"
						type="password"
						autocomplete="new-password"
						placeholder="Current Password"
						value=""
					/>
					<input
						type="password"
						autocomplete="new-password"
						placeholder="New Password"
						value=""
					/>
					<button type="submit">Reset Password</button>
				</form>
			</template>
		</main>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const formType = ref("login");

const store = useStore();
const router = useRouter();
const login = () => {
	// 这里的user对象应该是你的登录逻辑返回的用户信息
	const user = {
		name: "admin",
	};
	store.dispatch("setUser", user);
	router.push("/home");
};
</script>

<style lang="less" scoped>
.rth-586672fe {
	align-items: center;
	animation: rth-63e8bb79 0.25s linear;
	display: flex;
	height: 100%;
	justify-content: center;
	margin: 0 auto;
	overflow: hidden;
	position: fixed;
	text-align: center;
	width: 100%;
}
.rth-586672fe input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-color: var(--b-alpha-5);
	border: 1px solid transparent;
	border-radius: 5px;
	color: var(--txt-b-pure);
	display: block;
	font-size: 16px;
	margin-top: 15px;
	padding: 10px 15px;
	width: 100%;
	transition: 0.25s;
}
.rth-586672fe input:hover {
	border-color: var(--b-alpha-10);
}
.rth-586672fe input:focus {
	background-color: transparent;
	border-color: var(--theme-color);
}
.rth-586672fe main {
	background-color: var(--bg-w-p);
	border: 1px solid var(--b-alpha-10);
	border-radius: 10px;
	box-shadow: var(--login-box-shadow);
	margin: 0 auto;
	max-width: 100%;
	padding: 30px;
	transition: all 0.25s;
	width: 400px;
}
.rth-586672fe main button {
	background-color: var(--theme-color);
	border: none;
	color: #fff;
	display: block;
	font-size: 16px;
	margin: 15px 0;
	width: 100%;
}
.rth-586672fe main button:hover {
	filter: brightness(1.1);
}
.rth-586672fe main button:active {
	background-color: #048;
}
// .rth-586672fe .rth-03fca3ef {
// 	background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
// 		radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%),
// 		url(https://assets.retiehe.com/blur/lost-lake.jpg);
// }
.rth-586672fe .rth-e33bbcb1 {
	display: flex;
	margin-top: 15px;
}
.rth-586672fe .rth-e33bbcb1 input {
	margin: 0;
}
.rth-586672fe .rth-e33bbcb1 button {
	background-color: rgba(0, 102, 204, 0.1);
	border: 1px solid transparent;
	color: var(--secondary-color);
	line-height: 1.2;
	margin: 0 0 0 10px;
	white-space: nowrap;
	width: auto;
}
.rth-586672fe .rth-e33bbcb1 button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
.rth-586672fe .rth-e33bbcb1 button:enabled:hover {
	background-color: var(--theme-color);
	color: #fff;
}
.rth-586672fe .rth-e33bbcb1 button:enabled:active {
	color: rgba(255, 255, 255, 0.6);
}
.rth-18dc9da6 {
	background-color: var(--bg-w-s);
	border-radius: 5px;
	display: inline-flex;
	font-size: 0;
	margin-bottom: 15px;
	overflow: hidden;
	padding: 3px;
}
.rth-9d446b4a {
	background-color: transparent;
	border-radius: 3px;
	color: var(--b-alpha-60);
	cursor: pointer;
	font-size: 14px;
	padding: 5px 15px;
	transition: 0.25s;
}
.rth-9d446b4a:hover {
	color: var(--b-alpha-80);
}
.rth-9d446b4a:active {
	opacity: 0.6;
}
.rth-9d446b4a[aria-selected="true"] {
	background-color: var(--bg-w-p);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	color: var(--secondary-color);
	cursor: default;
	pointer-events: none;
}
@media screen and (max-width: 500px) {
	.rth-9d446b4a {
		font-size: 16px;
	}
}
.rth-0569cf87 {
	background-color: var(--theme-color);
	background-image: url(/img/rth-icon-192.png);
	background-size: cover;
	border-radius: 5px;
	cursor: pointer;
	height: 60px;
	margin: 15px auto 30px;
	transition: all 0.25s;
	width: 60px;
}
.rth-0569cf87:hover {
	box-shadow: 0 0 30px rgba(0, 102, 204, 0.35);
	filter: brightness(1.1);
}
.rth-0569cf87:active {
	transform: scale(0.95);
}
::-webkit-scrollbar {
	height: 6px;
	width: 6px;
}
::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.4);
}
::-webkit-scrollbar-thumb:active {
	background-color: var(--theme-color);
}
.rth-586672fe {
	--b-alpha-5: rgba(0, 0, 0, 0.05);
	--b-alpha-10: rgba(0, 0, 0, 0.1);
	--b-alpha-15: rgba(0, 0, 0, 0.15);
	--b-alpha-20: rgba(0, 0, 0, 0.2);
	--b-alpha-30: rgba(0, 0, 0, 0.3);
	--b-alpha-35: rgba(0, 0, 0, 0.35);
	--b-alpha-40: rgba(0, 0, 0, 0.4);
	--b-alpha-50: rgba(0, 0, 0, 0.5);
	--b-alpha-60: rgba(0, 0, 0, 0.6);
	--b-alpha-70: rgba(0, 0, 0, 0.7);
	--b-alpha-80: rgba(0, 0, 0, 0.8);
	--b-alpha-90: rgba(0, 0, 0, 0.9);
	--bg-filter: rgba(245, 245, 245, 0.7);
	--bg-w-active: rgb(175, 175, 175);
	--bg-w-hover: rgb(205, 205, 205);
	--bg-w-p: white;
	--bg-w-s: rgb(245, 245, 245);
	--bg-w-235: rgb(245, 245, 245);
	--foreground-color: rgba(0, 0, 0, 0.75);
	--gold: rgb(217, 184, 93);
	--gold-1: rgb(174, 121, 38);
	--gold-2: rgb(192, 147, 60);
	--gold-3: rgb(217, 184, 93);
	--login-box-shadow: rgba(0, 0, 0, 0.1) 0 20px 50px;
	--red: rgb(221, 82, 77);
	--secondary-color: rgb(0, 102, 204);
	--theme-color: rgb(0, 102, 204);
	--theme-color-tint: rgba(0, 102, 204, 0.1);
	--txt-b-pure: black;
	--txt-b-tip: rgba(0, 0, 0, 0.8);
	--txt-w-pure: white;
	--w-alpha-5: rgba(255, 255, 255, 0.05);
	--w-alpha-10: rgba(255, 255, 255, 0.1);
	--w-alpha-15: rgba(255, 255, 255, 0.15);
	--w-alpha-20: rgba(255, 255, 255, 0.2);
	--w-alpha-30: rgba(255, 255, 255, 0.3);
	--w-alpha-50: rgba(255, 255, 255, 0.5);
	--w-alpha-60: rgba(255, 255, 255, 0.6);
	--w-alpha-70: rgba(255, 255, 255, 0.7);
	--w-alpha-80: rgba(255, 255, 255, 0.8);
	--w-alpha-90: rgba(255, 255, 255, 0.9);
}
* {
	box-sizing: border-box;
	scrollbar-color: rgba(0, 0, 0, 0.25) white;
	scrollbar-width: thin;
}
*:focus:not(:focus-visible) {
	outline: none;
}
*:focus-visible {
	outline: 2px solid var(--theme-color);
}
body {
	background-color: var(--bg-w-235) !important;
	color: var(--foreground-color);
	cursor: default;
	// font-family: PingFang SC, Microsoft YaHei, sans-serif;
	margin: 0;
	-webkit-tap-highlight-color: transparent;
	-webkit-text-size-adjust: 100% !important;
	-moz-text-size-adjust: 100%;
	text-size-adjust: 100%;
	-webkit-user-select: none !important;
	-moz-user-select: none;
	user-select: none;
}
button {
	background-color: transparent;
	border: 1px solid var(--b-alpha-10);
	border-radius: 5px;
	color: var(--foreground-color);
	cursor: pointer;
	font-size: 14px;
	line-height: 20px;
	padding: 10px 15px;
	transition: all 0.25s;
}
button:hover {
	background-color: var(--theme-color);
	color: #fff;
}
button:active {
	color: rgba(255, 255, 255, 0.5);
}
button:disabled {
	cursor: not-allowed;
	opacity: 0.5;
	pointer-events: none;
}
html {
	touch-action: manipulation;
}
input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	border-radius: 5px;
	display: block;
	width: 100%;
}
input:focus {
	outline: none;
}
input[type="checkbox"] {
	height: 100%;
	margin: 0;
}
</style>
