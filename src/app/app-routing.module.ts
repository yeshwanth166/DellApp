import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';   

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: DisplayComponent
    },
    {
        path: '**',
        component: DisplayComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }