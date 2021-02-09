import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main/card-details/:name', component: CardDetailsComponent , data: { title: 'Card Details'} },
  { path: 'main', component: MainComponent , data: { title: 'Main Page'} },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
