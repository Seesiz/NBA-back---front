import { Component } from '@angular/core';
import { ResultatService } from '../MyService/resultat.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent {
  data: any[] = [];
  constructor(private resultatApi: ResultatService) {}

  async ngOnInit() {
    await this.getData();
    console.log(this.data);
  }

  async getData() {
    this.data = await this.resultatApi.getData();
  }
}
