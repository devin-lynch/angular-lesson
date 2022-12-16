import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // single template
  // styleUrls: ['./app.component.css']
  styles: [` 
    h3 {
      color: dodgerblue;
    }
  `] // may have multiple style files/definitions. can choose between inline/external
})
export class AppComponent {
}
