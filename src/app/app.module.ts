import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FollowersComponent } from './components/followers/followers.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    HeaderComponent,
    UserDetailPageComponent,
    HomeComponent,
    RepositoriesComponent,
    FollowersComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
