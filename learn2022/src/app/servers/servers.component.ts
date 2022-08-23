import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowserver = false;
  serverCreatedStatus = 'No server was created!';

  constructor() { 
    setTimeout(() => {
      this.allowserver = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreated() {
    this.serverCreatedStatus = 'Server was created!';
  }

}
