import { Injectable } from '@angular/core';

// Class imports
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Article {
  article: string
}

@Injectable({
  providedIn: 'root'
})

export class ViewsService {

  constructor(
    private http: HttpClient,
  ) { }

  updateViews(article) {
    // let url = "https://nicmeister.cloud/views";
    let url = "http://localhost:8001/views";

    return this.http
      .post<Article>(url, article)
      .pipe(
        map(data => {
          return data;
        })
      );
  }
}
