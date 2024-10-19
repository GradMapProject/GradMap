import { Routes } from '@angular/router';
import { OnboardingScreenComponent } from './onboarding-screen/onboarding-screen.component';
import { PlansScreenComponent } from './plans-screen/plans-screen.component';

export const routes: Routes = [
    {path: 'onboarding', component: OnboardingScreenComponent},
    {path: 'plans', component: PlansScreenComponent}
];
