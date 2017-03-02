import { RouterModule } from '@angular/router';

export const ROUTES = [
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'users', loadChildren: './usercardlist/usercardlist.module#UserCardListModule' }
];

export const AppRoutes = RouterModule.forRoot(ROUTES);