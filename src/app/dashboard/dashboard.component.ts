import { Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
// import {faRefresh, faGear} from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/angular-fontawesome'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  // iconfarefresh =faRefresh;
  // iconsGear =faGear;
  constructor( media: MediaMatcher,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    
  }

  ngOnDestroy(): void {
    //  this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}