import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainOffersComponent } from './main-offers/main-offers.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
