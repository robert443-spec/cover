import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { CrazyComponent } from './crazy/crazy.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'crazy',
    component:CrazyComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  },{
    path:"app-cover-photo",
    component:CoverPhotoComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
