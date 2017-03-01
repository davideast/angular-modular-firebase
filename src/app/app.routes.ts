import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { UserCardList } from './usercardlist/usercardlist.component';

export const ROUTES = [
  { path: '', component: UserCardList },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' }
];

export const AppRoutes = RouterModule.forRoot(ROUTES);