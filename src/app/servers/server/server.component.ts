import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((praram) => {
      this.server = this.serversService.getServer(+praram['id']);
    });
  }

  editServer() {
    // the following is example how to use merge(add) queryParams
    // to preserve use preserve
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParams: { allowEdit: this.server.id === 3 ? '1' : '0' },
      queryParamsHandling: 'merge',
    });
  }
}
