import { Component } from '@angular/core';
import { TrainersComponent } from "../../presentation/components/home/trainers/trainers.component";

@Component({
  selector: 'app-home',
  imports: [TrainersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
