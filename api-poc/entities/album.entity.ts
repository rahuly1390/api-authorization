import { ApiProperty } from "@nestjs/swagger";

export class Album {
    @ApiProperty()
    id:number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    artist:string;
}