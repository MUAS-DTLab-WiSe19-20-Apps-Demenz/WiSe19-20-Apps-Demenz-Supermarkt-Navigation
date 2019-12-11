import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toShoppingList(): void 
  {
    this.router.navigate(["shoppingList"]);
  }

  public static updateNavigationButton(input: boolean): void
  {
    const test = document.getElementById("para1");
    console.log(document);
    console.log(test);
//    test.removeAttribute("disabled");
  }
}
