import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainpageComponent } from './components/main/mainpage/mainpage.component';
import { HeaderComponent } from './components/general/header/header.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { BuildingInfoComponent } from './components/main/building-info/building-info.component';
import { AddbuttonComponent } from './components/general/addbutton/addbutton.component';
import { AddBuildingComponent } from './components/main/add-building/add-building.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    SidebarComponent,
    BuildingInfoComponent,
    AddbuttonComponent,
    AddBuildingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
