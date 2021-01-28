import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }

  onResize(event) {
    let width = event.target.innerWidth;
    if (width >= 600) {
      if (this.isOpen) {
        this.isOpen = false;
      }
    }
  }

}
