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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { BuildingEffects } from './effects/building.effects';
import { LoadingSpinnerComponent } from './components/general/loading-spinner/loading-spinner.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { SignInPageComponent } from './components/sign-in/sign-in-page/sign-in-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    SidebarComponent,
    BuildingInfoComponent,
    AddbuttonComponent,
    AddBuildingComponent,
    LoadingSpinnerComponent,
    HomepageComponent,
    SignInPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([BuildingEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
