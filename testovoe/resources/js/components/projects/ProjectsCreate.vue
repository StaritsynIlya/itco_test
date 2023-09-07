<template>
  <div>
    <h2 v-if="isNewProject">Добавить проект</h2>
    <h2 v-else>Изменить проект</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Имя:</label>
        <input class="form-control" type="text" id="name" v-model="project.name" required />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Описание:</label>
        <textarea class="form-control" id="description" v-model="project.description" required></textarea>
      </div>
      <div class="mb-3">
        <input type="file" accept="image/jpeg,image/png" @change="onFileChange">
        <img v-if="project.photo" :src="project.photo" />
      </div>
      <div class="mb-3">
        <button v-if="project.photo" @click="removeImage" class="btn btn-danger">Удалить изображение</button>
      </div>
      <button type="submit" v-if="isNewProject" class="btn btn-primary">Добавить</button>
      <button type="submit" v-else class="btn btn-primary">Обновить</button>
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
        description: '',
        photo: ''
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
    onFileChange(e) {
      const file = e.target.files[0];
      this.createImage(file);
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.project.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.project.photo = '';
    },
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