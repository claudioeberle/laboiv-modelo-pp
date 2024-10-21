import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';
import { SesionService } from '../../services/sesion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  imgSource:string = '';
  nombre:string = 'Julio Leiva';
  bio = 'Soy un periodista';
  sesionIniciada: boolean = false;

  constructor(private router:Router, private getDataService: GetDataService, private sesion:SesionService){}

  ngOnInit(): void {
    this.sesion.sessionState$.subscribe(state => {
      this.sesionIniciada = state;
    });

    this.getDataService.getAvatarUrl().subscribe(url => {
      this.imgSource = url;
    });

    this.getDataService.getBio().subscribe(bio => {
      this.bio = bio;
    });

    this.getDataService.getName().subscribe(nombre => {
      this.nombre = nombre;
    });
  }

  goTo(componente: string){
    this.router.navigateByUrl(componente);
  }

}
