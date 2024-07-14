import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss',
})
export class SharedHeaderComponent {
  @Input() headertext: string = '';
  @Input() headerArrowicon: any;
  @Input() headerArrowLink: any;
}
