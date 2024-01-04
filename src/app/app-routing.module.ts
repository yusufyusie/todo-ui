import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  {path: 'task', component: TaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
