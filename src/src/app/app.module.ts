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
import { MatCardModule } from "@angular/material/card";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatSelectModule} from '@angular/material/';

import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngeboteComponent } from './components/angebote/angebote.component';
import { SortimentsComponent } from './components/sortiments/sortiments.component';
import { ProductComponent } from './components/product/product.component';
import { ShopNavigationComponent } from './components/shop-navigation/shop-navigation.component';

const appRoutes: Routes = [
  { path: 'Navigation', component: NavigationComponent},
  { path: 'shoppingList', component: ShoppingListComponent},
  { path: '', component: StartPageComponent }, // Erste bzw. default-Seite
  { path: 'Angebote', component: AngeboteComponent},
  { path: 'Sortiments', component: SortimentsComponent},  
  { path: 'shopNavigation', component: ShopNavigationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ShoppingListComponent,
    NavigationComponent,
    AngeboteComponent,
    SortimentsComponent,
    ProductComponent,
    ShopNavigationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false }
      ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    MatSelectModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
