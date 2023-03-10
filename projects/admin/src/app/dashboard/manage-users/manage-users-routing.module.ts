import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    title: 'Users',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageUsersRoutingModule {}
