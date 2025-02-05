import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
import { Login } from 'entities/login.entity';
import { ApiNoContentResponse, ApiTags,ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Auth')
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @ApiNoContentResponse({type:Login})
    @ApiBadRequestResponse()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }