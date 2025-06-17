import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``
})
export class Card {
  @Input() titulo: string = "";	
  @Input() descripcion: string = "";
  @Input() imagenUrl: string = "";
  @Input() linkButton: string = "";
  @Input() buttonText: string = "";
}
