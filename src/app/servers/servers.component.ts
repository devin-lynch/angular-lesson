import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers', // generally use this one for components!
  template:  // ALWAYS need a template/templateUrl component! 
    `<app-server></app-server> 
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
