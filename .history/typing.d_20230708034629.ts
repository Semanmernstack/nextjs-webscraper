

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
    job_id: string
}
type Content = {
    url: string
    page: number
    results: Results
    last_visible_page: number 
    parse_status_code: number
}

type Results = {
    paid: any[]
    filters: Filter[]
    organic: Organic[]
    search_information: {
        query: string;
        showing_results_for: number

    };

};
type Filter = {
    name: string;
    values: Value[]
}
type Value = {
    url: string
    value: string
}
type Organic = {
    pos: number
    url: string
    type: string
    price: number
    title: string
    currency: string
    marchant: {
        price_str: string
        pos_overall: number
    }
}