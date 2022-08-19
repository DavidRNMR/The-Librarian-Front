import { VolumeInfoBD } from './addbookbd';
export interface Books {
  items: Item[];
}

export interface Item {
  id: string;
  volumeInfo: VolumeInfo;

}

export interface VolumeInfo {
  title:               string;
  authors:             string[];
  publishedDate:       string;
  isbn:                string;
  description:         string;
  imageLinks:          ImageLinks;
  pageCount:           number;
  categories:          string[];
  language:            Language;
  industryIdentifiers: IndustryIdentifier[];
  previewLink:         string;

}


export interface Language {
  en: string;
  es: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail:      string;
}

export interface IndustryIdentifier {
  identifier: string;
}

export enum Idioma {
  En = "en",
  Es = "es",
}
