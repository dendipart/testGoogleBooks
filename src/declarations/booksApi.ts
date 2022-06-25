import { Categories, Sorting } from "~/constants";

export interface VolumeQueryParams {
  query?: string;
  maxResults?: number;
  startIndex?: number;
  volumeId?: string;
  subject?: Categories | string;
  orderBy?: Sorting;
}

export interface VolumesQueryResponse {
  items: ItemBook[];
  totalItems: number;
}

export interface ItemBook {
  id: string;
  volumeInfo: {
    imageLinks: {
      large: string;
      medium: string;
      thumbnail: string;
      smallThumbnail: string;
      extraLarge: string;
    };
    title: string;
    authors: string[] | any;
    categories: string[];
    mainCategory: string;
    description: string;
  };
}
