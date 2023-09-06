<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td>
            <div class="row gap-3">
              <router-link :to="{ name: 'ProjectsCreate', params: { id: project.id } }" class="p-2 col border btn btn-success">
                Edit
              </router-link>
              <button @click="deleteProject(project.id)" type="button"
                class="p-2 col border btn btn-danger">Delete</button>
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
        await axios.delete(`/api/projectgal/${id}`);
        this.projects = this.projects.filter(project => project.id !== id);
      } catch (error) {
        console.error(error.response.data);
      }
    }
  }
}
</script>