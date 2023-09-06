<template>
    <div>
      <h2 v-if="isNewProject">Add Project</h2>
      <h2 v-else>Edit Project</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input class="form-control" type="text" id="name" v-model="project.name" required />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description:</label>
            <textarea class="form-control" id="description" v-model="project.description" required></textarea>
          </div>
          <button type="submit" v-if="isNewProject" class="btn btn-primary">Add Project</button>
          <button type="submit" v-else class="btn btn-primary">Update Project</button>
        </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        project: {
          name: '',
          description: ''
        }
      }
    },
    computed: {
      isNewProject() {
        return !this.$route.path.includes('edit');
      }
    },
    async created() {
      if (!this.isNewProject) {
        const response = await axios.get(`/api/projectgal/${this.$route.params.id}`);
        this.project = response.data;
      }
    },
    methods: {
      async submitForm() {
        try {
          if (this.isNewProject) {
            await axios.post('/api/projectgal', this.project);
          } else {
            await axios.put(`/api/projectgal/${this.$route.params.id}`, this.project);
          }
          this.$router.push('/');
        } catch (error) {
          console.error(error.response.data);
        }
      }
    }
  }
  </script>