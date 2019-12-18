import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatNativeDateModule } from "@angular/material/core";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngeboteComponent } from './components/angebote/angebote.component';
const appRoutes: Routes = [
  { path: 'Navigation', component: NavigationComponent},
  { path: 'shoppingList', component: ShoppingListComponent},
  { path: '', component: StartPageComponent }, // Erste bzw. default-Seite
  { path:'Angebote', component: AngeboteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ShoppingListComponent,
    NavigationComponent,
    AngeboteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }
      ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
