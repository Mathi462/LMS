
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatRadioModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatRadioModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatRadioModule],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
