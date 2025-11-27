import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  private theme = signal<'claro' | 'obscuro'>(
    (localStorage.getItem('theme') as 'claro' | 'obscuro') ?? 'claro'
  );
  

  constructor() {
    this.applyTheme();
  }

  isObscuro() {
    return this.theme() === 'obscuro';
  }

  toggleTheme() {
    this.theme.update(t => (t === 'claro' ? 'obscuro' : 'claro'));
    this.applyTheme();
  }

  private applyTheme() {
    const value = this.theme();
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
  }
 }
