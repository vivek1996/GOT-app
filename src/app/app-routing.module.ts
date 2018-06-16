import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharaterViewComponent } from './charater-view/charater-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books/:bookId', component: BookViewComponent },
  { path: 'houses/:houseId', component: HouseViewComponent },
  { path: 'characters/:characterId', component: CharaterViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
