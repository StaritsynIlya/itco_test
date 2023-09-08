import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import mitt from 'mitt';

// Import components
import App from './components/App.vue';
import ProjectsIndex from './components/projects/ProjectsIndex.vue';
import ProjectsCreate from './components/projects/ProjectsCreate.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ProjectsIndex },
        { path: '/projects/create', component: ProjectsCreate },
        { path: '/projects/edit/:id', component: ProjectsCreate, name: 'ProjectsCreate' },
    ]
});

const emitter = mitt();
const app = createApp(App);
app.use(router);
app.config.globalProperties.emitter = emitter;
app.mount('#app');