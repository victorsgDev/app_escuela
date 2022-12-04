import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndiceComponent} from "./indice/indice.component";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [IndiceComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports: [
    IndiceComponent
  ]
})
export class ComponentsModule {
}
