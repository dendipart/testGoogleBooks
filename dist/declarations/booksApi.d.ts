export interface VolumeQueryParams {
    query?: string;
    maxResults?: number;
    startIndex?: number;
    volumeId?: string;
}
export interface VolumesQueryResponse {
    items: ItemBook[];
    totalItems: number;
}
export interface ItemBook {
    id: string;
    volumeInfo: {
        imageLinks: {
            medium: string;
            thumbnail: string;
            smallThumbnail: string;
            extraLarge: string;
        };
        title: string;
        authors: string[] | any;
        categories: string[];
        mainCategory: string;
    };
}
