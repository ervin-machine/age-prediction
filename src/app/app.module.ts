import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { interceptorProviders } from './interceptors';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNameComponent } from './components/add-name/add-name.component';
import { AlphabeticalSortListComponent } from './components/alphabetical-sort-list/alphabetical-sort-list.component';
import { AgeSortListComponent } from './components/age-sort-list/age-sort-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AddNameComponent,
    AlphabeticalSortListComponent,
    AgeSortListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [interceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
