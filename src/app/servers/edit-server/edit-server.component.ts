import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // The following is just an exmaple how to get queryParamas & Fragment
    const id = +this.route.snapshot.queryParams['id'];
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    this.route.queryParams.subscribe((queryParamas: Params) => {
      this.allowEdit = queryParamas['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.route.snapshot.fragment);
    console.log(this.route.snapshot.queryParams);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
