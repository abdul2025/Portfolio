import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Experience, Skills, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Abdulwahab Alshehri - Portfolio');
  protected readonly mobileMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  // Listen for scroll events to add scrolled class to navbar
  @HostListener('window:scroll', [])
  protected onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  // Toggle mobile menu open/closed
  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
    
    // Prevent body scroll when mobile menu is open
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close mobile menu on escape key press
  @HostListener('document:keydown.escape', ['$event'])
  protected onEscapeKey(event: KeyboardEvent): void {
    if (this.mobileMenuOpen()) {
      this.toggleMobileMenu();
    }
  }

  // Close menu when window is resized to desktop size
  @HostListener('window:resize', ['$event'])
  protected onResize(event: any): void {
    if (window.innerWidth > 768 && this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
      document.body.style.overflow = '';
    }
  }
}