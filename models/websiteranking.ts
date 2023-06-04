interface websiterankingDto {
    rank: number
    title: string
    description: string
    url: string
    site_name: string
    image: string
    icon: string
    keywords: string[] | string
    success: boolean
}

interface websiterankingPayload {
    search: string
}

interface isLoginDto {
    message: string,
    data: string,
    success: boolean,
}
interface isLoginPayload {
    username: string,
    password: string,
}

interface profileDto {
    sucecss: boolean,
    data: {
        id: number,
        username: string,
        name: string,
    }
}

interface websiterankingFilterText {
    filterText: string
}