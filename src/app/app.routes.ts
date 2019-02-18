import { Routes } from '@angular/router';
import {FeaturedCardsComponent} from './components/featured-cards/featured-cards.component';
import {CardDetailComponent} from './components/cards/card-detail/card-detail.component';

export const routes: Routes = [
  { path: '', component: FeaturedCardsComponent },
  { path: 'cards/:id', component: CardDetailComponent },
];
