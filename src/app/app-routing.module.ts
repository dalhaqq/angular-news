import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechnewsComponent } from './technews/technews.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SportComponent } from './sport/sport.component';
import { AmerikaComponent } from './amerika/amerika.component';
import { KoreaComponent } from './korea/korea.component';
import { UkComponent } from './uk/uk.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',component:HeadlinesComponent},
  {path:'technology',component:TechnewsComponent},
  {path:'health',component:HealthComponent},
  {path:'science', component: ScienceComponent },
  {path:'business', component: BusinessComponent },
  {path:'aboutus', component: AboutusComponent },
  {path:'sport', component: SportComponent },
  {path: 'amerika', component: AmerikaComponent },
  {path: 'korea', component: KoreaComponent },
  { path: 'uk', component: UkComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
