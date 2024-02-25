import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/css/blog.css";
import axios from "axios";
import VueAxios from "vue-axios";

// createApp(App).use(store).use(router).mount("#app");
const app = createApp(App).use(store).use(router);
// app.config.globalProperties.$axios = axios;
app.use(VueAxios, axios);
app.mount("#app");
