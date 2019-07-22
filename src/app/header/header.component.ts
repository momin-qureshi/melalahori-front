import { HostListener, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  route: string;
  collapsed: boolean = true;

  constructor(location: Location, router: Router) {
    // within our constructor we can define our subscription
    // and then decide what to do when this event is triggered.
    // in this case I simply update my route string.
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
      document.getElementById("navHome").classList.toggle("active", false);
      document.getElementById("navExplore").classList.toggle("active", false);
      if(this.route=="Home"){
        document.getElementById("navHome").classList.toggle("active", true);
      }
      else if(this.route=="/explore"){
        document.getElementById("navExplore").classList.toggle("active", true);
      }
      window.scrollTo(0, 0);
    });
  }
  ngOnInit() {
  }

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
  }

  /*
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var navbar = document.getElementById("navbar");

    if (number == 0) {
      console.log('Top');
      navbar.className="navbar fixed-top navbar-expand-lg";
    } else {
      console.log('Not Top');
      navbar.className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark";
    }
  }*/

  open:boolean = false;
  toggleNav() {
    this.open = !this.open;
    document.getElementById("mobNav").classList.toggle('open');
    document.getElementById("hamb").classList.toggle('open');
  }
}
