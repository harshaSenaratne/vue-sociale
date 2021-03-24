<template>
  <div>
    <v-container>
      <h1>Home</h1>
  

      <v-layout row class="mt-5">
        <v-dialog v-model="loading" fullscreen persistent max-width="500px" transition="dialog-transition">
          <v-container fill-height>
            <v-layout row justify-center align-center>
              <v-progress-circular indeterminate :size="70" :width="7" color="#424242"></v-progress-circular>
            </v-layout>
          </v-container>
        </v-dialog>
      </v-layout>

      <v-flex xs12>
        <v-carousel v-if=" posts.length > 0" v-bind="{'cycle': true}" interval="3000" hide-controls>
          <v-carousel-item v-for="post in posts" :key="post.title" :src="post.imageUrl">
            <h1 id="carousel__title">{{post.title}}</h1>
          </v-carousel-item>
        </v-carousel>
      </v-flex>

      <v-container grid-list-xs>

        <ul v-for="post in posts" :key="post.id">
          <li>{{ post.title }}</li>
          <li>{{ post.description}}</li>
          <li>{{ post.likes }}</li>
          <li>{{ post.body }}</li>

        </ul>

      </v-container>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import { gql } from "apollo-boost";

export default {
  name: "home",
  apollo:{
    getPosts:{
      query:gql`

       query{
        getPosts{
          _id,
         title,
         imageUrl,
         description,
         likes,
         body 
        }
      }
      `
     
    }
  },
  data() {
    return {};
  },
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    // posts(){
    //   return this.$$store.getters.posts
    // },
    // loading(){
    //   return this.$$store.getters.loading
    // }
    ...mapGetters(["loading", "posts"])
  },
  methods: {
    handleGetCarouselPosts() {
      // reach out to Vuex Store, fire action that gets posts from carousel
      this.$store.dispatch("getPosts");
    }
  }
};
</script>

<style scoped>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>