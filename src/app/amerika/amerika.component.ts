import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-amerika',
  templateUrl: './amerika.component.html',
  styleUrls: ['./amerika.component.css']
})
export class AmerikaComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  usNewsResult:any =[];

  ngOnInit(): void {
    this.service.usNews().subscribe((result)=>{
      console.log(result);
      this.usNewsResult = result.articles;
    })
  }

}

