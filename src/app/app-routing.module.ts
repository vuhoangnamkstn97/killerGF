import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';

const routes: Routes = [{ path: '', component: MainScreenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
