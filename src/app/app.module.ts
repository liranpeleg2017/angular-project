import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRouterModule, RoutingComponents } from "./app.router.module";
import { DatabaseService } from "./services/database/database.service"
import { JsonDatePipe } from "./pipes/JSONDate.pipe";
import { GlobalService } from "./services/global/global.service";
import { SessionService } from "./services/session/session.service";

import { MoviesModule } from "./modules/movies.module";


@NgModule({
  declarations: [
    AppComponent,
    JsonDatePipe,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    MoviesModule
  ],
  providers: [DatabaseService, GlobalService, SessionService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]


})
export class AppModule { }
