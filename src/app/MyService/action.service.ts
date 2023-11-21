import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  constructor() {}

  async getAction() {
    try {
      const response = await axios.get('http://localhost:8080/action');
      return response.data;
    } catch (error) {
      alert(error);
    }
  }
}
