// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SoftwareLeaderComponent } from './software-leader/software-leader.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



// Add the following import
import { FormsModule } from '@angular/forms';
import { WebAgencyDetailsComponent } from './web-agency-details/web-agency-details.component';
import { FooterComponent } from './footer/footer.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeInfoComponent } from './about-me-info/about-me-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SoftwareLeaderComponent,
    ServicesComponent,
    FormComponent,
    WebAgencyDetailsComponent,
    FooterComponent,
    BlogPostComponent,
    TeamComponent,
    AboutComponent,
    HomeComponent,
    AboutMeComponent,
    AboutMeInfoComponent,
    ProjectInfoComponent,
    ChooseUsComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    ContactComponent,
    CareersComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
