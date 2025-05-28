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
  createdAt?: Date;

  constructor(user: User) {
    console.log(user);
    this._id = user._id.toString();
    this.fullName = user.fullName;
    this.email = user.email;
    this.createdAt = user.createdAt;
  }
}
