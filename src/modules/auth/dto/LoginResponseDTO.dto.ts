import { UserResponseDTO } from "src/modules/users/dto/UserResponseDTO";
import { Tokens } from "../interfaces/Auth.types";

export interface LoginResponse {
    user: UserResponseDTO;
    isVerified: boolean;
    tokens?: Tokens;
}