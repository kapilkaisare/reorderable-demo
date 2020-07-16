import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReorderableModule } from '@kapilkaisare/reorderable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReorderableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
