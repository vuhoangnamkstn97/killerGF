import { Component } from '@angular/core';
import { ConsoleToggleService } from './services/console-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private consoleToggleService: ConsoleToggleService) {
    this.consoleToggleService.disableConsoleInProduction();
  }
}
