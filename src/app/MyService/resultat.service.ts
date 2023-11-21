import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ResultatService {
  constructor() {}

  async getData() {
    try {
      const response = await axios.get(
        'https://nba-production-a20f.up.railway.app/scores'
      );
      return response.data;
    } catch (error) {
      alert(error);
    }
  }
}
