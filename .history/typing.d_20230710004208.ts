

export type SearchParams ={
    pages?: string;
    sor: string
    min_Price?: string
    max_Price?: string
}
type PageResult  = {
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
    merchant: {
        url: string
        name: string
    }
    price_str: string
    pos_overall: number
}

export type ProductPage = {
    content: string
    created_at: string
    updated_at: string
    page: number
    url: string
    perser_type: string
    status_code: number
    job_id: string

}
export type ProductContent = {
    url: string
    title: string
    images: {
        full_size: string[];
        thumbnails: string[]
    };
    highlights?: string[]
    description:string
    
    reviews: {
        rating: number
        top_review: {
            text: string
            title: string
            ratings: string
            author: string
            source: string
        }
        rating_stars: number;
        review_count: number;
        review_by_stars: {
            [starRating]: {
                url: string;
                reviews_count: number;
            };
        };
    }
    pricing: {
        online: [
            {
                price: number
                seller: string
                details: string
                currency: string
                condition: string
            }
        ];
    };
    specification: [
        {
            items: [
                {
                    title: string
                    value: string
                }
            ];
            specification_title: string
        }
    ]

}