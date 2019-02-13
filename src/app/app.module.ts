import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardsService} from './services/cards.service';
import {UrlService} from './services/url.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { MenuComponent } from './components/menu/menu.component';
import { FeaturedCardsComponent } from './components/featured-cards/featured-cards.component';
import { AddCardComponent } from './components/cards/add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeaturedCardsComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [CardsService, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
