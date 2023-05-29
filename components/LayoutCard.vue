<template>
    <div>
        <div class="container">
            <div v-if="$props.isLoading">Loading...</div>
            <div v-else v-for=" website  in  getWebsites " class="item">
                <Card :data="website" />
            </div>
        </div>
    </div>
</template>
<script>
import { usewebsiteRankings } from '~/store/websiteranking';

export default {
    props: {
        isLoading: {
            type: Boolean,
        }
    },
    computed: {
        getWebsites() {
            return usewebsiteRankings().websiteRankings.data;
        }
    },
}
</script>
<style>
.container {
    justify-content: center;
    display: flex;
    margin: auto;
    width: 100%;
    flex-wrap: wrap;
}

.item {
    margin: 1rem;
    padding: 2.5rem;
    border: 1px solid #000;
    border-radius: 2rem;
    display: flex;
    width: 33.33333%;
}

@media only screen and (max-width:991px) {
    .item {
        width: 50%;
    }
}
</style>