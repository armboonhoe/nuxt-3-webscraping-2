import { defineStore } from 'pinia';
import queryString from 'query-string'
/* import { queryString } from 'query-string'; */
export const usewebsiteRankings = defineStore('websiterankingsStore', {
    state: () => ({
        websiteRankings: [] as websiterankingDto[]
    }),
    actions: {
        async fetchData(search: websiterankingPayload) {
            return await useFetch('/api?search=' + search, { method: 'GET' })
                .then(response => {
                    this.websiteRankings = response as unknown as websiterankingDto[]
                    return response;
                }) as websiterankingDto[]
        },
    }
})