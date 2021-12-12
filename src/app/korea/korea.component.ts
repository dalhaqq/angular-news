import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';


@Component({
  selector: 'app-korea',
  templateUrl: './korea.component.html',
  styleUrls: ['./korea.component.css']
})
export class KoreaComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  krNewsResult:any =[];
  
  ngOnInit(): void {
    

    this.service.krNews().subscribe((result)=>{
      console.log(result);
      this.krNewsResult = result.articles;
    })

  }

}
