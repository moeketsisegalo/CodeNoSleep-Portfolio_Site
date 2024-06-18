import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';

import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';

import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent }, // Route to the About component
  { path: '', component: HomeComponent }, // Set HomeComponent as the default component
  { path: 'service1', component: Service1Component },
  { path: 'service2', component: Service2Component },
  { path: 'service3', component: Service3Component },
  { path: 'service4', component: Service4Component },
  { path: 'contact', component: ContactComponent },
  {path: 'careers',  component: CareersComponent},
  { path: 'portfolio', component: PortfolioComponent },



  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
