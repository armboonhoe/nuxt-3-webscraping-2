
<template>
    <button @click="logout">Logout</button>
    <div v-if="profiles" v-for="profile in profiles.data">
        {{ profile }}
    </div>
</template>

<script setup>
import { usewebsiteRankings } from '~/store/websiteranking';

if (process.client) {
    const token = localStorage.getItem('token');
    await usewebsiteRankings().profileFetch(token);
}
const profiles = computed(() => usewebsiteRankings().profile);
const logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    return navigateTo('/login')
}
</script>