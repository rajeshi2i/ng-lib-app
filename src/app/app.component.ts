import { Component, OnInit } from '@angular/core';
import { HostLocationService } from './host-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-lib-app';

  constructor(
    private hls: HostLocationService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.router.initialNavigation();
    this.hls.handleNavigation();
  }
}
