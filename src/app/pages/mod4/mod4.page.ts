import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mod4',
  templateUrl: './mod4.page.html',
  styleUrls: ['./mod4.page.scss'],
})
export class Mod4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(address) {

    this.router.navigate([address])
  }
}
