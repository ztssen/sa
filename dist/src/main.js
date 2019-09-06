import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "./components/header";
import VueSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.use(VueSwiper);
Vue.config.productionTip = false
Vue.component('Header', Header);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')