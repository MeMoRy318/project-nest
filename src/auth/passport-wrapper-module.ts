import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { BearerStrategy } from './bearer.strategy';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

@Global()
@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: 'secret',
        signOptions: {
          expiresIn: '24h',
        },
      }),
    }),
  ],
  providers: [BearerStrategy, UsersService],
  exports: [PassportModule],
})
export class PassportWrapperModule {}
