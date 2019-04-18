import Vue from 'vue';
import VueRouter from 'vue-router';
 
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
    {
       path:'/',
       component:()=>import('./views/index/Index.vue'),
       children:[
           {path:'home', name:'home', component:() => import('./views/index/home.vue'),meta:{tabNumber:0},
         children:[
             {path :'nowPlaying',name:'nowPlaying',component:() => import('./components/FilmNowPalying.vue')},
             {path :'comingSoon',name:'comingSoon' ,component:() => import('./components/FilmComingsoon.vue')},
         ]  
        },
           {path:'list', name: 'list',component:() => import('./views/index/List.vue'),meta:{tabNumber:1}},
           {path:'cat', name: 'cat',component: () => import('./views/index/Cat.vue'),meta:{tabNumber:2}},
           {path:'', redirect:'/home'}
       ]
    },
    { path: '/detail/:id', name:'dateail' ,component:() => import('./views/detail/Index.vue')},
    { path: '/mak/:id', name:'mak',component:() =>import('./views/detail/child.vue')},
    {path :'/cit', name:'cit',component:() => import('./components/city.vue')},
    {path :'/shousuo',name:'shousuo',component:()=> import('./components/shousuo.vue')},
    {path: '*',redirect:'/home'}
    ]  
})