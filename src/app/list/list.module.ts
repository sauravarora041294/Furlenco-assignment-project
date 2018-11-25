import {ListComponent} from "./list.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ListRowModule} from "../list-row/list-row.module";
import {ListRoutingModule} from "./list-routing.module";

@NgModule({
  imports: [
    ListRoutingModule,
    CommonModule,
    ListRowModule
  ],
  declarations: [
    ListComponent
  ]
})

export class ListModule {}
