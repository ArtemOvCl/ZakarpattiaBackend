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
  avatarUrl?: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  isVerified: boolean;

  constructor(user: User) {
    this._id = user._id.toString();
    this.fullName = user.fullName;
    this.email = user.email;
    this.role = user.roleId.name;
    this.createdAt = user.createdAt;
    this.isVerified = user.isVerified;
  }
}

export class UserForLogin extends UserResponseDTO {
  @ApiProperty()
  hashedPassword: string;

  constructor(user: User) {
    super(user);
    this.hashedPassword = user.hashedPassword;
    this.isVerified = user.isVerified;
  }
}
