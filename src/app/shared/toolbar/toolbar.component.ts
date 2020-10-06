import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  loading = true;
  user: User;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.userService.user.subscribe(res => {
      this.user = res;
    })
  }
  logout() {
    this.userService.userData.next(null);
    this.userService.logout();
  }
  redirect(link) {
    this.router.navigate([link]);
  }
}
