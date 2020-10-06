import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss', './loader-responsive.component.scss']
})
export class LoaderComponent implements OnInit, OnChanges {
  @Input() message;
  @Input() mode;
  constructor() { }
  timeout = false;
  ngOnInit() {
    setTimeout(() => {
      this.timeout = true;
    }, 20000);
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  refreshApp() {
    window.location.reload(true);
  }

}
