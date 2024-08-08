import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './componetes/menu-title/menu-title.component';
import { BigCardComponent } from './componetes/big-card/big-card.component';
import { SmalCardComponent } from './componetes/smal-card/smal-card.component';
import { MenuBarComponent } from './componetes/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmalCardComponent,
    MenuBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
