import { defineStore } from 'pinia';
import queryString from 'query-string'
/* import { queryString } from 'query-string'; */
export const usewebsiteRankings = defineStore('websiterankingsStore', {
    state: () => ({
        websiteRankings: [] as websiterankingDto[],
        statusLogin: [] as isLoginDto[],
        profile: [] as profileDto[]
    }),
    actions: {
        async fetchData(search: websiterankingPayload) {
            return await useFetch('/api?search=' + search, { method: 'GET' })
                .then(response => {
                    this.websiteRankings = response as unknown as websiterankingDto[]
                    return response;
                }) as websiterankingDto[]
        },
        async loginFunc(username: isLoginPayload, password: isLoginPayload) {
            const { data: response, pending, error, refresh }: any = await useFetch('/api/login?', {
                method: 'POST',
                body: {
                    username: username,
                    password: password
                }
            })
            if (response.value === null) {
                this.statusLogin = error.value.data as isLoginDto[]
            } else {
                this.statusLogin = response as isLoginDto[]
            }
        },
        async profileFetch(token: string) {
            const { data: response }: any = await useFetch('/api/profile', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            this.profile = response as profileDto[]
        }
    },
})