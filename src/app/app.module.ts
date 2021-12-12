import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';
import { HeadlinesComponent } from './headlines/headlines.component';
import { NewsApiService } from './Service/news-api.service';
import { TechnewsComponent } from './technews/technews.component';
import { HealthComponent } from './health/health.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AmerikaComponent } from './amerika/amerika.component';
import { KoreaComponent } from './korea/korea.component';
import { UkComponent } from './uk/uk.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TechnewsComponent,
    HealthComponent,
    ScienceComponent,
    BusinessComponent,
    AboutusComponent,
    AmerikaComponent,
    KoreaComponent,
    UkComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
