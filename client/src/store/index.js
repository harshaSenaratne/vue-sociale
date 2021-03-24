import Vue from 'vue'
import Vuex from 'vuex'
import {gql} from 'apollo-boost'
import {defaultClient as apolloClient} from '../main'

import {GET_POSTS, SIGNIN_USER} from '../queries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      posts:[]
  },
  mutations: {
    setPosts:(state,payload)=>{
     state.posts = payload; 
    },
    setLoading:(state,payload)=>{
        state.loading = payload;
    }
  },
  actions: {
    getPosts:({commit})=>{
     // commit('setLoading',true)


      apolloClient.query({
        query:GET_POSTS
      }).then(({data})=>{
        console.log(data);
      //  commit('setLoading',false)
          commit('setPosts',data.getPosts)

      }).catch(err=>{
        console.log(err);
        //commit('setLoading',false)

      })
    

    },

    signinUser:({commit},payload) =>{
      apolloClient.mutate({
          mutation:SIGNIN_USER,
          variables:payload
      }).then(({data})=>{
        console.log(data.signinUser);
      })
      .catch(err=>{
        console.log(err);
      });
    }
  },
  modules: {
  },
  getters:{
    posts:state => state.posts,
    loading:state => state.loading
  }
})
