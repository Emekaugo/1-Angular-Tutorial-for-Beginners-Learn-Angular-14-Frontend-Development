import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { component: CalendarComponent, path: '' },
  { component: TaskListComponent, path: 'tasks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
