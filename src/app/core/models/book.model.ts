import { environment } from 'src/environments/environment';

export class Address {
  id: string;
  title: string;
  authors: string[];
  cover: {};
  constructor(json?) {
    if (json) {
      this.id = json.id;
      this.title = json.title;
      this.authors = json.string
      this.cover = json.cover;
    }
  }

}
