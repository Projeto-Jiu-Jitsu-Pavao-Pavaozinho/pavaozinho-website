export interface Article {
    data: {
        page: {
            titulo: string,
            corpo: string, 
            paragrafos: Array<string>;
        }
    }
}
