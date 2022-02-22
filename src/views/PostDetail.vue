<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <div class="card p-4">
            <h3>{{this.dataDisplay.title}}</h3>
            <hr>
            <div>
              {{time}} menit membaca
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="row mt-4">
        <div class="col">
          <div class="card p-4">
            {{this.dataDisplay.value}}
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
        post: [],
      },

      WORDS_PER_MINUTE: 250,

      dataDisplay: null
    };
  },

  computed: {
    time() {
      const words = this.dataDisplay.value.split(' ').length;
      return Math.ceil(words / this.WORDS_PER_MINUTE);
    }
  },

  beforeMount() {
    this.datapostingan = data;

    this.datapostingan.post.forEach(element => {
      if(element.id == this.$route.params.id) {
        this.dataDisplay = element
      }
    });
  },

};
</script>

<style></style>
