<template>
  <div class="container">
    <header>
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: rgb(0, 0, 0);"><svg
                    class="bi d-block mx-auto mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M4.5 21q-.625 0-1.063-.438T3 19.5v-1.9l4-3.55V21H4.5ZM8 21v-4h8v4H8Zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.438 1.063T19.5 21H17ZM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525q.275 0 .537.088T13 3.9l2 1.775L3 16.25Z" />
                  </svg>Список проектов</router-link>
              </li>
              <li>
                <router-link to="/projects/create" class="nav-link text-white"
                  style="text-decoration: none; color: rgb(0, 0, 0);"><svg class="bi d-block mx-auto mb-1" width="24"
                    height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M7 9h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21ZM3 21V3h18v8.7q-.725-.35-1.463-.525T18 11q-.275 0-.513.013t-.487.062V11H7v2h6.1q-.425.425-.787.925T11.675 15H7v2h4.075q-.05.25-.063.488T11 18q0 .825.15 1.538T11.675 21H3Z" />
                  </svg>Добавить проект</router-link>
              </li>
              <button @click="deleteProject" type="button" class="btn" style="text-decoration: none; color: white;"> <svg
                class="bi d-block mx-auto mb-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                  style="fill:#FFFFFF;">
                  <path
                    d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z">
                  </path>
                </svg>Удалить</button>

            </ul>
          </div>
        </div>
      </div>
    </header>

    <div class="card">
      <div class="card-body">
        <div class="container-fluid">
          <router-view @update:selectedItems="selectedItems = $event"></router-view>
        </div>
      </div>
    </div>

  </div>
</template>
    
<script>
export default {
  name: 'App',
  methods: {
    deleteProject() {
      this.$root.emitter.emit('delete-items');
    }
  }
}
</script>