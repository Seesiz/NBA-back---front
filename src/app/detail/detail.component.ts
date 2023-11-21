import { Component } from '@angular/core';
import { ActionService } from '../MyService/action.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  second: number = 0;
  intervalId: any;
  minut: number = 0;
  isStart: boolean = false;
  action: any[] = [];
  actionToDo: any;

  constructor(private actionApi: ActionService) {}

  async getAction() {
    this.action = await this.actionApi.getAction();
  }

  async ngOnInit() {
    this.getAction();
  }

  makeStart() {
    this.intervalId = setInterval(() => {
      this.second++;
      if (this.second == 60) {
        this.minut++;
        this.second = 0;
      }
    }, 1000);
    this.isStart = true;
  }

  makePause() {
    clearInterval(this.intervalId);
    this.isStart = false;
  }

  setAction(action: any) {
    this.actionToDo = action;
  }
}
