import { BrowserModule } from '@angular/platform-browser'; //004  library modules
import { NgModule } from '@angular/core'; //004  library modules

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { GreetingModule } from './greeting/greeting.module';
import { PipesModule } from './pipes/pipes.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    GreetingModule.forRoot({ userName: 'Miss Marple' }),
    PipesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent], //004 The components, directives, and pipes that belong to this NgModule.

  bootstrap: [AppComponent] //004 The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.
})
export class AppModule {}

//002 Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts.

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
