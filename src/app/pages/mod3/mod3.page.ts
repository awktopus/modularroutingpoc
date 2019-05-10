import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mod3',
  templateUrl: './mod3.page.html',
  styleUrls: ['./mod3.page.scss'],
})
export class Mod3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(address) {

    this.router.navigate([address])
  }


}