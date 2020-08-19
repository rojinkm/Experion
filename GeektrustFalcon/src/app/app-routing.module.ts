import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalfalconComponent } from './finalfalcon/finalfalcon.component';
import { FalconComponent } from './falcon/falcon.component';


const routes: Routes = [
  { path: 'finalfalcon', component: FinalfalconComponent },
  { path: '', component: FalconComponent },
  { path: 'falcon', component: FalconComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
