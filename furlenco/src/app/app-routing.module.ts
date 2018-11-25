import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantDetailsModule} from './restaurant-details/restaurant-details.module';

const routes: Routes = [
    {
      path: '',
      loadChildren: './main/main.module#MainModule'
    },
    {
      path: ':location',
      loadChildren: './list/list.module#ListModule'
    },
    {
      path: ':location/:id',
      loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsModule'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
