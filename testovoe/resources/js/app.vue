require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import ProjectsIndex from './components/projects/ProjectsIndex.vue';
import ProjectsCreate from './components/projects/ProjectsCreate.vue';
import ProjectsEdit from './components/projects/ProjectsEdit.vue';

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')