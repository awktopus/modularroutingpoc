import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.page.html',
  styleUrls: ['./mod1.page.scss'],
})
export class Mod1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(address) {

    this.router.navigate([address])
  }

}
