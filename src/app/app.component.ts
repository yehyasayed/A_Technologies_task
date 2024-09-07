import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Technologies_task';
  ticket = 'تذكرة رقم #2342';
  onEdit() {
    console.log('Edit button clicked');
  }
  onArrowClick() {
    console.log('Arrow button clicked');
  }
}
