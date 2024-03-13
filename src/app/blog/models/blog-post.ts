export interface BlogPost {
    titulo: string,
    slug: string,
    _firstPublishedAt: string,
    corpo: any,
    capa: {
        url: string,
        alt: string
    }
}
