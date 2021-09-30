import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app');
