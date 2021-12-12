import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  sportNewsResult:any =[];

  ngOnInit(): void {

    this.service.sportNews().subscribe((result)=>{
      console.log(result);
      this.sportNewsResult = result.articles;
    })
  }

}   