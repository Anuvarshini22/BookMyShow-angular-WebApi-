import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauroselComponent } from './Components/caurosel/caurosel.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';



@NgModule({
  declarations: [
    CauroselComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
