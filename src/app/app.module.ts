import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JInputModule } from './components/j-input/j-input.module';
import { JTextareaModule } from './components/j-textarea/j-textarea.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JInputModule,
    JTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
