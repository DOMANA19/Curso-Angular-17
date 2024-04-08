import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { TimerComponent } from './timer/timer.component';
import { TrasclusionComponent } from './trasclusion/trasclusion.component';
import { LayoutComponent } from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent, TimerComponent, TrasclusionComponent, LayoutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Daniel';
  user = undefined;
  data = [1,2,3,4,5,6]; //[];
}
