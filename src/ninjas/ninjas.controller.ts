import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from "@nestjs/common";
import { CreateNinjaDto } from "./dto/create-ninja.dto";
import { NinjasService } from "./ninjas.service";

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) { }

  //Get /ninjas?type=fast
  // GET /ninjas --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'swords' | 'nunchucks') {
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  // POST /ninjas --> {...}
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      ...createNinjaDto
      // name: createNinjaDto.name
    };
  }

  // PUT /ninjas/:id --> {...}
  @Put('id')
  updateNinja(@Param('id') id: string, @Body() createNinjaDto: CreateNinjaDto) {
    return {
      id,
      // ...createNinjaDto
      name: createNinjaDto.name
    };

  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja() {
    return {};
  }
}
