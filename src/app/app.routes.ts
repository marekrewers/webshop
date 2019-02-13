import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {FeaturedCardsComponent} from './components/featured-cards/featured-cards.component';
import {AddCardComponent} from './components/cards/add-card/add-card.component';

export const routes: Routes = [
  { path: '', component: FeaturedCardsComponent },
  { path: 'cards/add', component: AddCardComponent },
];
