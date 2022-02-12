import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { WorksComponentComponent } from './works-component/works-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'about', component: AboutComponentComponent},
  {path: 'works', component: WorksComponentComponent},
  {path: 'contact', component: ContactComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponentComponent, AboutComponentComponent, WorksComponentComponent, ContactComponentComponent]