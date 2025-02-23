import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  @Cron(CronExpression.EVERY_10_SECONDS) // Runs every minute
  async processActions() {
    this.logger.log('Checking for actions to process...');
    console.log('Checking for actions to process...');
  }
}
