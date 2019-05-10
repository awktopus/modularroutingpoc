import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.page.html',
  styleUrls: ['./mod2.page.scss'],
})
export class Mod2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(address) {

    this.router.navigate([address])
  }

}
