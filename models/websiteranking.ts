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

interface websiterankingFilterText {
    filterText: string
}