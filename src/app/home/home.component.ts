import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  goToservers() {
    // Following is an example of programatic routing of a relative route
    this.router.navigate(['servers'], { relativeTo: this.route });
  }

  editServerOne(id: any) {
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  logIn() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
  }
}
