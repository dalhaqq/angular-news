import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  healthNewsResult:any =[];
  ngOnInit(): void {

    this.service.healthNews().subscribe((result)=>{
      console.log(result);
      this.healthNewsResult = result.articles;
    })
  }

}


