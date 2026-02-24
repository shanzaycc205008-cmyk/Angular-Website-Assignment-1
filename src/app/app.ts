import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class AppComponent {

  fact: string = '';

  constructor(private api: ApiService) {
    this.loadFact();
  }

  loadFact() {
    this.api.getFact().subscribe((res: any) => {
      this.fact = res.fact;
    });
  }
}