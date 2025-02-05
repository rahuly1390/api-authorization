import { Album } from './../entities/album.entity';
import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBadRequestResponse, ApiNoContentResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAlbumDto } from 'dto/create-album.dto';

@ApiTags('albums')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get(':id')
  // getSpecific(@Param('id') id:string): string {
  //   return id;
  // }

  @Get('')
  findAll(): Album[] {
    return this.appService.findAll();
  }

  @ApiOkResponse({type: Album, isArray:true})
  @Get(':id')
  findOne(@Param('id') id:string): Album {
    return this.appService.findOne(Number(id));
  }

  // @ApiResponse({status:201,description:'The record was created'})
  @ApiNoContentResponse({type:Album})
  @ApiBadRequestResponse()
  @HttpCode(204)
  @Post()
  async create(@Body() createAlbumDto:CreateAlbumDto){
    if(!createAlbumDto.artist){
      throw new BadRequestException();
    }
    return this.appService.create(createAlbumDto);
  }
}
