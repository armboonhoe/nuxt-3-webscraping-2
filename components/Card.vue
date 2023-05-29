<template>
    <div>
        <h5>{{ data.rank }}. {{ data.title }}</h5>
        <p>{{ data.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        data: {}
    }
}
</script>

<style scoped>
h5 {
    margin: 0;
    padding: 0;
}
</style>