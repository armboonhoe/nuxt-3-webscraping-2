

<template>
    <div>
        <Form :isLoading="isLoading" @updateLoadingStatus="isLoading = $event" />
        <LayoutCard :isLoading="isLoading" />
    </div>
</template>

<script setup>
import { usewebsiteRankings } from '~/store/websiteranking';
const isLoading = ref(null);

definePageMeta({
    middleware: ['auth'],
})
</script>