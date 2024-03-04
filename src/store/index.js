import { createStore } from "vuex";

export default createStore({
	state: {
		user: localStorage.getItem("user") || null,
		blogContent: sessionStorage.getItem("blogContent") || "",
		tags: localStorage.getItem("tags") || [], // [["tag1", id1], ["tag2", id2]]
		categories: localStorage.getItem("categories") || null, // ["category1" : [category_id, ["tag1": tag1_id, "tag2": tag2_id]]]
		blogs: localStorage.getItem("blogs") || [], // [{blog1}, {blog2}, {blog3}] blog1 = {title, abstract, tags, category, date}
		tempBlogs: sessionStorage.getItem("tempBlogs") || [], // [{blog1}, {blog2}, {blog3}]
		totalBlogs: localStorage.getItem("totalBlogs") || -1,
	},
	mutations: {
		SET_TOTALBLOGS(state, totalBlogs) {
			state.totalBlogs = totalBlogs;
			localStorage.setItem("totalBlogs", totalBlogs);
		},
		SET_USER(state, user) {
			state.user = user;
			localStorage.setItem("user", user);
		},
		SET_BLOGCONTENT(state, blogContent) {
			state.blogContent = blogContent;
			sessionStorage.setItem("blogContent", blogContent);
		},
		SET_BLOGS(state, blogs) {
			state.blogs = blogs;
			localStorage.setItem("blogs", blogs);
		},
		SET_TEMPBLOGS(state, tempBlogs) {
			state.tempBlogs = tempBlogs;
			sessionStorage.setItem("tempBlogs", tempBlogs);
		},
		SET_TAGS(state, tags) {
			state.tags = tags;
			localStorage.setItem("tags", tags);
		},
		SET_CATEGORIES(state, categories) {
			state.categories = categories;
			localStorage.setItem("categories", categories);
		},
		ADD_PROPERTY(state, { property, value }) {
			state.user = { ...state.user, [property]: value };
			localStorage.setItem("user", state.user);
		},
		REMOVE_PROPERTY(state, property) {
			const { [property]: _, ...rest } = state.user;
			state.user = rest;
			localStorage.setItem("user", state.user);
		},
		LOGOUT(state) {
			state.user = null;
			localStorage.removeItem("user");
		},
	},
	actions: {
		setTotalBlogs({ commit }, totalBlogs) {
			commit("SET_TOTALBLOGS", totalBlogs);
		},
		setUser({ commit }, user) {
			commit("SET_USER", user);
		},
		setBlogContent({ commit }, blogContent) {
			commit("SET_BLOGCONTENT", blogContent);
		},
		setBlogs({ commit }, blogs) {
			commit("SET_BLOGS", blogs);
		},
		setTempBlogs({ commit }, tempBlogs) {
			commit("SET_TEMPBLOGS", tempBlogs);
		},
		setTags({ commit }, tags) {
			commit("SET_TAGS", tags);
		},
		setCategories({ commit }, categories) {
			commit("SET_CATEGORIES", categories);
		},
		addProperty({ commit }, payload) {
			commit("ADD_PROPERTY", payload);
		},
		removeProperty({ commit }, property) {
			commit("REMOVE_PROPERTY", property);
		},
		logout({ commit }) {
			commit("LOGOUT");
		},
	},
	getters: {
		user: (state) => state.user,
		blogs: (state) => JSON.parse(state.blogs),
		tags: (state) => JSON.parse(state.tags),
		categories: (state) => JSON.parse(state.categories),
		blogContent: (state) => state.blogContent,
		tempBlogs: (state) => state.tempBlogs,
		totalBlogs: (state) => state.totalBlogs,
	},
});
