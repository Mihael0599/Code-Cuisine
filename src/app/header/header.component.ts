import { Component, computed, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() logoColor: 'white' | 'green' = 'white';

  logoSrc = computed(() =>
    this.logoColor === 'white'
      ? 'header-logo-white.png'
      : 'header-logo-green.png'
  );
}
