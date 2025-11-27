import { map, switchMap } from 'rxjs'; // Necesitas switchMap para reaccionar a la Signal

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons-service';
import { PaginationService } from '../../services/pagination-service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';


@Component({
  selector: 'app-simpson-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent],
  templateUrl: './simpsons-page.html',
  
})
export class SimpsonsPageComponent {
    private simpsonsService = inject(SimpsonsService);
    paginationService = inject(PaginationService);

    simpsonsResource = toSignal(
      toObservable(this.paginationService.currentPage).pipe(
        switchMap(page => this.simpsonsService.getCharacters(page))
      ),
      { initialValue: null }
    );
}
