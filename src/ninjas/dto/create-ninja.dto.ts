import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['swords', 'nunchucks', 'stars'], { message: 'Use correct value' })
  weapon: 'swords' | 'nunchucks' | 'stars';

  id: number;
}
