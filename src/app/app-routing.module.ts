import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HdComponent } from './hd/hd.component';
import { IntroComponent } from './intro/intro.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'hd', component: HdComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'shop', component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
