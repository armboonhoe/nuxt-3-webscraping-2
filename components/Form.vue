<template>
    <div>
        <form @submit="handleSubmit">
            <div>search : {{ searchTxt }}</div>
            <input type="text" v-model="searchTxt">
            <button type="submit">Submit</button>
        </form>
        <div>filter : {{ filterTxt }}</div>
        <input type="text" v-model="filterTxt">
        <button @click="filtereText()">Filter</button>

    </div>
</template>

<script>
import { usewebsiteRankings } from '~/store/websiteranking';
const filterTxt = ref('');
const searchTxt = ref('');
export default {
    emit: {
        updateLoadingStatus: {
            type: Boolean,
        }
    },
    props: {
        isLoading: {
            type: Boolean,
        }
    },
    setup(props, { emit }) {
        const store = usewebsiteRankings();
        const handleSubmit = async (event) => {
            event.preventDefault();
            emit('updateLoadingStatus', true)
            await store.fetchData(searchTxt.value);
            emit('updateLoadingStatus', false)
        }
        const filterFunc = async (event) => {
            event.preventDefault();
            console.log(filtereText.value);
        }
        const filtereText = computed(() =>
            store.websiteRankings.data = store.websiteRankings.data.filter(
                (p) => p.site_name?.includes(filterTxt.value) |
                    p.title?.includes(filterTxt.value) |
                    p.description?.includes(filterTxt.value) |
                    p.keywords?.includes(filterTxt.value)
            ) || []
        )
        return { searchTxt, handleSubmit, filterFunc, store, filterTxt, filtereText }
    }
}

</script>