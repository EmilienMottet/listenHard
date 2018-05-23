import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import List from '@/components/Playlist_List'
import Detail from '@/components/Playlist_Detail'
import Files from '@/components/Files'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/files',
      name: 'files',
      component: Files
    }
  ]
})
