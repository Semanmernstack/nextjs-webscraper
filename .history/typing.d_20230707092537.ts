export type SearchParams ={
    pages?: string;
    sor: string
    min_Price?: string
    max_Price?: string
}
type PageResult = {
    content: Content
    created_at: string
    updated_at: string
    page: number
    url: string
    perser_type: string
    status_code: number
}