import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SidenavService } from '../core/services/sidenav.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.width < 600) {
        this.sidenavService.close();
      }
    });

  }
  ngOnInit(): void {

  }
  public get width() {
    return window.innerWidth;
  }


}
