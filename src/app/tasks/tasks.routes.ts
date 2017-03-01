import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';

export const TASKS_ROUTES: Routes = [
  { path: '', component: TasksComponent }
];

export const TasksRoutes = RouterModule.forChild(TASKS_ROUTES)