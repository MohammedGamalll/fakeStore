import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('theme') === 'dark') {
        this.isDarkMode.set(true);
        document.body.classList.add('dark');
      }
    }
  }
  private isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode()) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  isDarkModeEnabled(): boolean {
    return this.isDarkMode();
  }
}
