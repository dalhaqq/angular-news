import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private service:NewsApiService, private router:Router) { }
  SearchNewsResult:any = [];
  keyword:string = "";


  ngOnInit(): void {
    let urlTree = this.router.parseUrl(this.router.url);
    this.keyword = urlTree.queryParams['q'];
    this.service.searchNews(this.keyword).subscribe((result) => {
          console.log(result);
          this.SearchNewsResult = result.articles;
  });


  }
}
