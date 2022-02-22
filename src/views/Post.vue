<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <div class="card">
            <div class="m-4">
              <h2>Postingan</h2>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="row mt-2 postingan" v-for="i in datapostingan.post" :key="i.id" @click="goPost(i.id)">
        <div class="col">
          <div class="card">
            <div class="m-4">
              <h2> {{i.title}} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/postingan.json";
export default {
  data() {
    return {
      datapostingan: {
        amount: 0,
        post: []
      }
    }
  },

  methods: {
    goPost(value) {
      this.$router.push('/post/' + value)
    }
  },

  beforeMount() {
    this.datapostingan = data;
  }

}
</script>

<style>
.postingan:hover {
  background: #c2c2c2;
  cursor: pointer;
}
</style>