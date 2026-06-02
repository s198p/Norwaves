import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './core/menubar/menubar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HeroComponent } from './shared/hero/hero.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { CtaBannerComponent } from './shared/cta-banner/cta-banner.component';
import { IndustryCardComponent } from './shared/industry-card/industry-card.component';
import { StatsCardComponent } from './shared/stats-card/stats-card.component';
import { FeatureCardComponent } from './shared/feature-card/feature-card.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
    HomeComponent,
    WhoWeAreComponent,
    IndustriesComponent,
    ContactUsComponent,
    HeroComponent,
    SectionHeaderComponent,
    CtaBannerComponent,
    IndustryCardComponent,
    StatsCardComponent,
    FeatureCardComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
