import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ProfileComponent } from './resume/components/profile/profile.component';
import { AboutMeComponent } from './resume/components/about-me/about-me.component';
import { SkillComponent } from './resume/components/skill/skill.component';
import { ExperiencesComponent } from './resume/components/experiences/experiences.component';
import { SideProjectComponent } from './resume/components/side-project/side-project.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProfileComponent,
    AboutMeComponent,
    SkillComponent,
    ExperiencesComponent,
    SideProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
