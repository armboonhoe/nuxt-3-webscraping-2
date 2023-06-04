<template>
    <div>
        <h1>Login</h1>
        <div v-if="isLoginFailed">{{ isLoginFailed }}</div>
        <form @submit="isLogin">
            Username : <input type="text" v-model="username"><br />
            Password : <input type="password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script >
import { usewebsiteRankings } from '~/store/websiteranking';
import queryString from 'query-string';

export default {
    data() {
        return {
            isLoginFailed: ref(''),
            username: '',
            password: ''
        }
    },
    methods: {
        async isLogin(e) {
            e.preventDefault();
            await usewebsiteRankings().loginFunc(this.username, this.password);
            this.isLoginFailed = usewebsiteRankings().statusLogin.message;
            const token = usewebsiteRankings().statusLogin.data;
            if (token) {
                localStorage.setItem('token', token);
                return navigateTo('/')
            }
        }
    }
}
</script>