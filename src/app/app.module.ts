import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseViewComponent } from './business/view/page/base-view/base-view.component';
import { HeaderComponent } from './business/view/page/header/header.component';
import { BodyComponent } from './business/view/page/body/body.component';
import { FooterComponent } from './business/view/page/footer/footer.component';
import { MainComponent } from './business/view/page/main/main.component';
import { AsideBodyComponent } from './business/view/page/aside-body/aside-body.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BaseViewComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MainComponent,
    AsideBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
