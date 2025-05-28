import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {

    const state = this.connection.readyState;

    if (state === 1) {
      this.logger.log('Database connected');
    } else {
      this.logger.error('Database not connected');
    }
  }
}
