import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [ScheduleModule.forRoot(), SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
