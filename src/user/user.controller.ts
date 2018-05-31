import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {UserModel} from './user.model';
import {UserService} from './user.service';
import {CreateUserDto} from './create-user.dto';
import {UpdateUserDto} from './update-user.dto';

@Controller('user')
export class UserController {

  constructor(private service: UserService) {
  }

  @Get()
  index(): UserModel[] {
    return this.service.list();
  }

  @Get(':id')
  view(@Param('id') id): UserModel {
    const user = this.service.get(+id);
    if (!user || user.length === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user[0];
  }

  @Post()
  create(@Body() params: CreateUserDto) {
    return this.service.create(params);
  }

  @Put(':id')
  update(@Param('id') id, @Body() params: UpdateUserDto): UserModel {
    const model = this.service.get(+id);
    if (model.length === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.service.update(+id, params);
  }

  @Delete(':id')
  delete(@Param('id') id): boolean {
    const model = this.service.get(+id);
    if (model.length === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.service.delete(+id);
  }
}
