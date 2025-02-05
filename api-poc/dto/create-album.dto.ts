import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiProperty({
    description: 'Album Name',
    type: 'string',
  })
  name: string;
  @ApiProperty({
    description: 'Artist Name',
    type: 'string',
  })
  artist: string;
}
