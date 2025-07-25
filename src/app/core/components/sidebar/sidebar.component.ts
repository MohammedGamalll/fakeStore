import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  themeService = inject(ThemeService);
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkModeEnabled(): boolean {
    return this.themeService.isDarkModeEnabled();
  }
}
