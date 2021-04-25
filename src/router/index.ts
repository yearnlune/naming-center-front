import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Login from "@/views/Login.vue";
import Search from "@/views/Search.vue";
import {accountService, ApiPath, TokenValidationRequest} from "@/service/accountService";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '*',
        redirect: '/search',
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        beforeEnter: (to, from, next) => {
            const jwt = window.localStorage.getItem('jwt');
            if (!jwt) {
                console.log('JWT NOT FOUND');
                next({path: '/signin'});
                return;
            }

            const token: TokenValidationRequest = {
                jwt: jwt
            }

            accountService.restfulPost(ApiPath.VALIDATE, token).then(() => {
                next();
            }).catch(() => {
                next({path: '/signin'});
            });
        }
    },
    {
        path: '/signin',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
