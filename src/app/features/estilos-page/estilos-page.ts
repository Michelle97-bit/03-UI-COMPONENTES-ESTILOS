import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from '../signal-box/signal-box';


// ... otros imports ...
@Component({
  selector: 'app-estilos-page',
  standalone: true,
  templateUrl: './estilos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalBoxComponent]
})
export class EstilosPage {}
