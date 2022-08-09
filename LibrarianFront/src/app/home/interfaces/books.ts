export interface Books {
  items: Item[];
}

export interface Item {
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title:               string;
  authors:             string[];
  publishedDate:       string;
  description:         string;
  imageLinks:          ImageLinks;
  pageCount:           number;
  categories:          string[];
  language:            Language;
  industryIdentifiers: IndustryIdentifier[];
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail:      string;
}

export interface IndustryIdentifier {
  identifier: string;
}

export enum Language {
  En = "en",
  Es = "es",
}
