import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
  uri :"http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({defaultClient});


Vue.config.productionTip = false

new Vue({
  provide:apolloProvider.provide(),
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
