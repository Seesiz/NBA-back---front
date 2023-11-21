import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent {
  @Output() makeStart: EventEmitter<void> = new EventEmitter<void>();
}
