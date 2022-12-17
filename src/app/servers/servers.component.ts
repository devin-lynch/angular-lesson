import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers', // generally use this one for components!
  // template:  // ALWAYS need a template/templateUrl component! 
  //   `<app-server></app-server> serv
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false

  serverDelay = setTimeout(() => {
    this.allowNewServer = true;
  }, 2000)
 
}
