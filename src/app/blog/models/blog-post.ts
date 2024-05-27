export interface BlogPost {
    titulo: string,
    slug: string,
    _firstPublishedAt: string,
    corpo: any,
    capa: {
        url: string,
        alt: string
    },
    _seoMetaTags: Array<{tag: string, content: string, attributes: {name: string, content: string, property: string}}>
}
