import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JInputModule } from './components/j-input/j-input.module';
import { JTextareaComponent } from './components/j-textarea/j-textarea.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JInputModule,
    JTextareaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
