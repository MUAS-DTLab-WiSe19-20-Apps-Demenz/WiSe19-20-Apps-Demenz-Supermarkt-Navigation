import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'shoppingList', component: ShoppingListComponent},
  { path: '', component: StartPageComponent } // Erste bzw. default-Seite
];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ShoppingListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false }
      ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
