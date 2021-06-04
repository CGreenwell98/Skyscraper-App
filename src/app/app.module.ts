import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainpageComponent } from './components/main/mainpage/mainpage.component';
import { HeaderComponent } from './components/general/header/header.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { BuildingInfoComponent } from './components/main/building-info/building-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    SidebarComponent,
    BuildingInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
