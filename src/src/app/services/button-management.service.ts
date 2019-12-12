import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonManagementService
{
  public navigationButtonDisabled: boolean = true;

  constructor() { }
}
