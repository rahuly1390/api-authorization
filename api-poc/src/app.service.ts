import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from 'dto/create-album.dto';
import { Album } from 'entities/album.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly albums : Album[] = [
    {id:1,name:'Black', artist:'Metallica'},
    {id:2,name:'Red', artist:'Taylor Swift'},
  ];

  findAll():Album[] {
    return this.albums;
  }

  findOne(id:number):Album{
    return this.albums.find((album) => album.id === id);
  }

  create(album: CreateAlbumDto): Album{
    const newAlbum = { id:Date.now(), ...album};
    this.albums.push(newAlbum);
    return newAlbum;
  }
}
