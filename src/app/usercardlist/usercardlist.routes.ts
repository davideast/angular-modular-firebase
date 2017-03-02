import { RouterModule, Routes } from '@angular/router';
import { UserCardList } from './usercardlist.component';

export const USERCARDLIST_ROUTES: Routes = [
  { path: '', component: UserCardList }
];

export const UserCardListRoutes = RouterModule.forChild(USERCARDLIST_ROUTES)