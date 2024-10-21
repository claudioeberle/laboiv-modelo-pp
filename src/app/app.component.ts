import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeladosModule } from './helados/helados.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeladosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ModeloParcial';
}
