import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'who-we-are',
    component: WhoWeAreComponent
  },
  {
    path: 'industries',
    component: IndustriesComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
