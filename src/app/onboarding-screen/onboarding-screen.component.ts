import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-onboarding-screen',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './onboarding-screen.component.html',
  styleUrl: './onboarding-screen.component.scss',
})
export class OnboardingScreenComponent {

}
