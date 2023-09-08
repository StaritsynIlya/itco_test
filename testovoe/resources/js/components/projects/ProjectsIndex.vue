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
          <td> <img :src="project.photo" class="img-thumbnail"> </td>
          <td>
            <div class="row gap-3">
              <router-link :to="{ name: 'ProjectsCreate', params: { id: project.id } }"
                class="p-2 col border btn btn-success">
                Изменить
              </router-link>
              <input type="checkbox" class="form-check-input" v-model="selectedItems" :value="project.id">
              <!-- <button @click="deleteProject(project.id)" type="button"
                class="p-2 col border btn btn-danger">Удалить</button> -->
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
      projects: [],
      selectedItems: []
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/projectgal');
      if (response && response.data) {
        this.projects = response.data;
      }
      this.$root.emitter.on('delete-items', this.deleteProject);
    } catch (error) {
      console.error(error.response.data);
    }
  },
  watch: {
    selectedItems() {
      this.$emit('update:selectedItems', this.selectedItems);
    }
  },
  methods: {
    async deleteProject() {
      try {
        await Promise.all(this.selectedItems.map(id => axios.delete(`/api/projectgal/${id}`)));
        this.projects = this.projects.filter(project => !this.selectedItems.includes(project.id));
      } catch (error) {
        console.error(error.response.data);
      }
    }
  },
  beforeDestroy() {
    this.$root.$off('delete-items', this.deleteProject);
  }
}
</script>