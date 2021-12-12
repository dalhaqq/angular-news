import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  topHeadlinesApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=id&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  techNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  healthNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  scienceNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  businessNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  sportNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  usNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  krNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  ukNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=d01e6e7c67ec4886901874f58348c6e2';

  searchNewsApiUrl = this.proxyUrl + 'https://newsapi.org/v2/everything?apiKey=d01e6e7c67ec4886901874f58348c6e2&q=';

  topHeadlines():Observable<any>
  {
    return this.http.get(this.topHeadlinesApiUrl);
  }

  technologyNews():Observable<any>
  {
    return this.http.get(this.techNewsApiUrl);
  }

  healthNews(): Observable<any> {
    return this.http.get(this.healthNewsApiUrl);
  }

  scienceNews(): Observable<any> {
    return this.http.get(this.scienceNewsApiUrl);
  }

  businessNews(): Observable<any> {
    return this.http.get(this.businessNewsApiUrl);
  }

  sportNews(): Observable<any> {
    return this.http.get(this.sportNewsApiUrl);
  }

  usNews(): Observable<any> {
    return this.http.get(this.usNewsApiUrl);
  }

  krNews(): Observable<any> {
    return this.http.get(this.krNewsApiUrl);
  }

  ukNews(): Observable<any> {
    return this.http.get(this.ukNewsApiUrl);
  }

  searchNews(keyword:string):Observable<any> {
    return this.http.get(this.searchNewsApiUrl + keyword);
    }

}


