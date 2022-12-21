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

  serverCreationStatus = 'No server was created!'

  serverName = 'Testserver'

  serverCreated = false

  serverDelay = setTimeout(() => {
    this.allowNewServer = true;
  }, 2000)

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
