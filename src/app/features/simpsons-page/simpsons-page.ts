import { map, switchMap } from 'rxjs'; // Necesitas switchMap para reaccionar a la Signal

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons-service';
import { PaginationComponent } from '../../services/pagination/pagination-service';


@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  // 3. Añade el PaginationComponent a los imports para usar <app-pagination> en el HTML
  imports: [CommonModule, RouterModule, PaginationComponent],
  templateUrl: './simpsons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  // 4. Inyecta el SERVICIO de Paginación
  paginationService = inject(PaginationComponent);

  // Crea un Observable que reacciona a los cambios en la Signal de la página actual
  simpsonsResource = toSignal(
    this.paginationService.currentPage!!pipe( // <--- Observable que emite la página actual
      // Reacciona al nuevo número de página para llamar al servicio de personajes
      switchMap(page => this.simpsonsService.getCharacters(page)),
      map(res => res)
    ),
    { initialValue: null }
  );

}
