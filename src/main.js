import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App.vue'
import CreateNotes from './views/CreateNotes.vue'
import Notes from './views/Notes.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/create', component: CreateNotes },
  { path: '/create/:id', component: CreateNotes },  
  { path: '/', component: Notes }  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
