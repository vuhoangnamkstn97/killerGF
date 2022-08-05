import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstScreenComponent } from './screens/first-screen/first-screen.component';
import { SecondScreenComponent } from './screens/second-screen/second-screen.component';

const routes: Routes = [
  { path: 'first-component', component: FirstScreenComponent },
  { path: 'second-component', component: SecondScreenComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
