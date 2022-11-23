import { Component } from '@angular/core';
import {
  faShoppingBasket,
  faAngleRight,
  faCheck,
  faPlayCircle,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faShoppingBasket = faShoppingBasket;
  faAngleRight = faAngleRight;
  faCheck = faCheck;
  faPlayCircle = faPlayCircle;
  faCircle = faCircle;

  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  year = new Date().getFullYear();
}
