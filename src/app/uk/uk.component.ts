import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-uk',
  templateUrl: './uk.component.html',
  styleUrls: ['./uk.component.css']
})
export class UkComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  ukNewsResult:any =[];
  
  ngOnInit(): void {

    this.service.ukNews().subscribe((result)=>{
      console.log(result);
      this.ukNewsResult = result.articles;
    })

  }

}
