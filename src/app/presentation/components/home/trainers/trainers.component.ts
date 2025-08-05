import { Component } from '@angular/core';
import { TrainerCardComponent } from "./trainer-card/trainer-card.component";

@Component({
  selector: 'app-trainers',
  imports: [TrainerCardComponent],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {

}
