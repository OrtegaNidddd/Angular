import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Card } from '../card/card';

@Component({
  selector: 'app-home',
  imports: [Header, Sidebar, Card],
  templateUrl: './home.html',
  styles: ``
})
export class Home {

}
