import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    const min = 0,
      max = 910;
    const users = JSON.parse(readFileSync('users.json', 'utf-8'));
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    return users[index];
  }
}
