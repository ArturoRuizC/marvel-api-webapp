export interface Heroe {
    name: string,
    description: string,
    modified: string,
    thumbnail: Thumbnail,
}

export interface Thumbnail {
    path: string,
    extension: string
}

export interface EventoItem {
    name: string
}

export interface SeriesItem {
    name: string
}

export interface HistoriasItem {
    name: string
}

export interface ComicsItem {
    name: string
}

export interface Urls {
    url: string
    type: string
}

