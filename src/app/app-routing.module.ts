import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { AddBuildingComponent } from './components/main/add-building/add-building.component';
import { BuildingInfoComponent } from './components/main/building-info/building-info.component';
import { MainpageComponent } from './components/main/mainpage/mainpage.component';
import { SignInPageComponent } from './components/sign-in/sign-in-page/sign-in-page.component';

const fallbackRoute: Route = { path: '**', component: HomepageComponent };

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'buildings',
    component: MainpageComponent,
    children: [
      { path: '', component: BuildingInfoComponent },
      { path: 'add-building', component: AddBuildingComponent },
    ],
  },
  { path: 'sign-in', component: SignInPageComponent },
  fallbackRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
