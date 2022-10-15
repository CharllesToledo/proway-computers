import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-ppesquisa',
  templateUrl: './barra-ppesquisa.component.html',
  styleUrls: ['./barra-ppesquisa.component.css']
})
export class BarraPpesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao}});
      return;
    }

    this.router.navigate(["produtos"]);
  }

}
