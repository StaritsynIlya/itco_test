<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Описание</th>
          <th scope="col">Фото</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td> <img :src="project.photo"> </td>
          <td>
            <div class="row gap-3">
              <router-link :to="{ name: 'ProjectsCreate', params: { id: project.id } }" class="p-2 col border btn btn-success">
                Изменить
              </router-link>
              <button @click="deleteProject(project.id)" type="button"
                class="p-2 col border btn btn-danger">Удалить</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/projectgal');
      this.projects = response.data;
    } catch (error) {
      console.error(error.response.data);
    }
  },
  methods: {
    async deleteProject(id) {
      try {
        if (confirm("Удалить выбранный проект?")) {
        await axios.delete(`/api/projectgal/${id}`);
        this.projects = this.projects.filter(project => project.id !== id);
        }
      } catch (error) {
        console.error(error.response.data);
      }
    }
  }
}
</script>