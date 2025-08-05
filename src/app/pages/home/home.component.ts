import { Component } from '@angular/core';
import { TrainersComponent } from "../../presentation/components/home/trainers/trainers.component";
import { HomeHeroComponent } from "../../presentation/components/home/home-hero/home-hero.component";
import { SecondSectionComponent } from "../../presentation/components/home/second-section/second-section.component";
import { PropagandaComponent } from "../../presentation/components/home/propaganda/propaganda.component";
import { DifferencesComponent } from "../../presentation/components/home/differences/differences.component";
import { GymPlansComponent } from "../../presentation/components/home/gym-plans/gym-plans.component";
import { TestimoniesComponent } from "../../presentation/components/home/testimonies/testimonies.component";
import { VideoComponent } from "../../presentation/components/home/video/video.component";
import { MeetTheSpaceComponent } from "../../presentation/components/home/meet-the-space/meet-the-space.component";
import { ModalitiesComponent } from "../../presentation/components/home/modalities/modalities.component";

@Component({
  selector: 'app-home',
  imports: [TrainersComponent, HomeHeroComponent, SecondSectionComponent, PropagandaComponent, DifferencesComponent, GymPlansComponent, TestimoniesComponent, VideoComponent, MeetTheSpaceComponent, ModalitiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
