import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoardsModule } from './boards/boards.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UserModule, BoardsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
