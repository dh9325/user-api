import {ApiModelProperty} from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiModelProperty() readonly forename?: string;
  @ApiModelProperty() readonly surname?: string;
  @ApiModelProperty() readonly email?: string;
  readonly created = new Date();
}
