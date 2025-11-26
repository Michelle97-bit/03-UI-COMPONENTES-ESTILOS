// src/app/shared/components/pagination/pagination.ts (o la ruta correcta)

import { Component, Input, computed, signal, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- 1. Importar la directiva

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterLink], // <-- 2. Añadir RouterLink a los imports
  templateUrl: './pagination.html', // Asumiendo que esta es la plantilla que mostraste
  // ...
})
export class PaginationComponent implements OnInit {
    // Entradas requeridas por el HTML
    @Input() pages!: number; // Total de páginas
    @Input() currentPage!: number;

    // Signals o lógica que usa el HTML
    // Ejemplo de cómo podrías definir estas señales si no vienen de un servicio:
    activePage = signal(1); // O inicializar con this.currentPage

    // Función de ejemplo usada en el HTML
    getPagesList() {
        // Generar una lista simple de páginas para el for loop
        return Array.from({ length: this.pages }, (_, i) => i + 1);
    }

    // Funciones de ejemplo usadas en el HTML
    previousPage() {
        if (this.activePage() > 1) {
            this.activePage.update(p => p - 1);
        }
    }

    nextPage() {
        if (this.activePage() < this.pages) {
            this.activePage.update(p => p + 1);
        }
    }

    ngOnInit() {
        this.activePage.set(this.currentPage || 1);
    }
}
