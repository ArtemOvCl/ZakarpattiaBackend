import { ApiProperty } from "@nestjs/swagger";

import { User } from "../user.schema";

export class UserResponseDTO {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  createdAt?: Date;

  constructor(user: User) {
    this._id = user._id.toString();
    this.fullName = user.fullName;
    this.email = user.email;
    this.role = user.roleId;
    this.createdAt = user.createdAt;
  }
}
