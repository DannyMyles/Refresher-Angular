import { DeplistComponent } from './components/deplist/deplist.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EmpdetailsComponent } from './components/empdetails/empdetails.component';
import { EmplistComponent } from './components/emplist/emplist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepdetailsComponent } from './components/depdetails/depdetails.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

const routes: Routes = [
   { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'enroll', component: AboutComponent },
    { path: 'departments', component: DeplistComponent },
    { path: 'departments/:id', component: DepdetailsComponent },
    { path: 'reactive', component: ReactiveformComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [ HomeComponent, AboutComponent,EmplistComponent, EmpdetailsComponent,PageNotFoundComponent,DeplistComponent,DepdetailsComponent,ReactiveformComponent ];