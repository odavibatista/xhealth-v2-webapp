import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trainer-card',
  imports: [],
  templateUrl: './trainer-card.component.html',
  styleUrl: './trainer-card.component.scss'
})
export class TrainerCardComponent {
  @Input() trainer = {
    id_trainer: '',
    imgUrl: '',
    name: '',
    instagramUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
  }
}
