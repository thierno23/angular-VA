import { Produit } from '../model/produit.model';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : Produit[]; //un tableau de chaînes de caractères

  constructor(private produitService: ProduitService) {

    this.produits = produitService.listeProduits();

  }


  listeProduits():Produit[] {

    return this.produits;
  }


  ngOnInit(): void {
  }

}
