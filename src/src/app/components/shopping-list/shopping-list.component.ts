import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonManagementService } from 'src/app/services/button-management.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})



export class ShoppingListComponent implements OnInit
{
  
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(private router: Router, public bM: ButtonManagementService, private listService: ShoppingListService)
  {
    
  }

  ngOnInit()
  {

  }

  returnToStartPage(): void
  {
    this.router.navigate(["/"]);
  }

  toAngebote(): void
  {
    this.router.navigate(["Angebote"]);
  }

  toSortiments():void
  {
    this.router.navigate(["Sortiments"])
  }

  enableNavigationButton(): void
  {
    // Damit der "Navigation starten" Button klickbar wird.
    this.bM.navigationButtonDisabled = false;

    this.returnToStartPage();
  }

  disableNavigationButton(): void
  {
    this.bM.navigationButtonDisabled = true;

    this.returnToStartPage();
  }
}
