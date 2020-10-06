import { MainService } from './core/services/main.service';
import { User } from './core/models/user.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UserService } from './core/services/user.service';
import { ErrorMessage } from './global/errorMessage';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Book managment';
  user: User;
  loading = true;
  header: boolean;
  constructor(
    private swUpdate: SwUpdate,
    private userService: UserService,
    private mainService: MainService,
  ) {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (confirm('the newsest version is Available please confirm to update')) {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        }
      });
    }
  }
  ngOnInit(): void {
    if (User.token()) {
      this.userService.getProfiel().subscribe(res => {
        this.userService.userData.next(res);
        this.loading = false;
      }, err => {
        this.mainService.showErrorSnackBar(ErrorMessage(err));
      });
    } else {
      this.loading = false;
    }
  }
}
