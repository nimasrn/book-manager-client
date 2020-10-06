import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input('title') title;
  constructor(private sidenav: SidenavService) { }


  ngOnInit(): void {
  }
  toggleNav() {
    this.sidenav.toggle();
  }
  public get width() {
    return window.innerWidth;
  }
}
