import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/infrastructure/modules/UserModule';

@Module({
  imports: [UserModule],
})
export class AppModule {}
