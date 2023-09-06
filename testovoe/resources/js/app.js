import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import App from './components/App.vue';
import ProjectsIndex from './components/projects/ProjectsIndex.vue';
import ProjectsCreate from './components/projects/ProjectsCreate.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ProjectsIndex },
        // { path: '/projects/index', component: ProjectsIndex },
        { path: '/projects/create', component: ProjectsCreate },
        { path: '/products/:id/edit', component: ProjectsCreate },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');