import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  scienceNewsResult:any =[];

  ngOnInit(): void {
    this.service.scienceNews().subscribe((result)=>{
      console.log(result);
      this.scienceNewsResult = result.articles;
    })
  }

}
