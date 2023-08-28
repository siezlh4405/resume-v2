import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ProfileComponent } from './resume/components/profile/profile.component';
import { AboutMeComponent } from './resume/components/about-me/about-me.component';
import { SkillComponent } from './resume/components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProfileComponent,
    AboutMeComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
