import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [CalendarComponent],
})
export class CalendarModule {}
