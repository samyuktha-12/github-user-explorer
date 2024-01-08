import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {SearchpageComponent} from './components/searchpage/searchpage.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FollowersComponent } from './components/followers/followers.component';
const routes: Routes = [
{
   path: '',
   component: HomeComponent
},
{
    path : 'searchuser',
    component: SearchpageComponent
},
{
   path : 'user/:id/searchrepositories',
   component: RepositoriesComponent
},
{
   path : 'user/:id',
   component: UserDetailPageComponent
},
{
   path : 'user/:id/searchfollowers',
   component: FollowersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
