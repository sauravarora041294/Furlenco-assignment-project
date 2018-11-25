import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ListRowComponent} from "./list-row.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListRowComponent
  ],
  exports: [
    ListRowComponent
  ]
})

export class ListRowModule {}
