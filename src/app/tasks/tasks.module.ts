import { NgModule } from '@angular/core';
import { FirebaseDatabaseModule } from '../firebase/database';
import { TasksComponent } from './tasks.component';
import { TasksRoutes } from './tasks.routes';

@NgModule({
  imports: [ FirebaseDatabaseModule, TasksRoutes ],
  exports: [ TasksComponent ],
  declarations: [ TasksComponent ]
})
export class TasksModule {}