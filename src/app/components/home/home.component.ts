import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = false;
  foto:string = 'assets/img/crud.png'


    // variáveis de string com concatenação
      // this.anuncio = '0'




    constructor() {

      console.log('Nome do produto', this.nomeProduto);
      console.log('Anuncio', this.anuncio);
      console.log('ID', this.idProduto);
      console.log('Preço', this.precoProduto);
      console.log('Promoção', this.promocao);


    }

  }

