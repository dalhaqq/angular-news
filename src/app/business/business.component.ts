import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  businessNewsResult:any=[];
  ngOnInit(): void {

    this.service.businessNews().subscribe((result)=>{
      console.log(result);
      this.businessNewsResult = result.articles;
    })
  }

}

