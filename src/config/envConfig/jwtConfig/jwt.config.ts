import { registerAs } from "@nestjs/config";

export interface JwtConfig {
    accessSecret: string;
    accessDuration: string;
    refreshSecret: string;
    refreshDuration: string;
}

export const jwtConfig = registerAs('JWT', (): JwtConfig => ({
    accessSecret: process.env.JWT_ACCESS_SECRET!,
    accessDuration: process.env.JWT_ACCESS_DURATION!,
    refreshSecret: process.env.JWT_REFRESH_SECRET!,
    refreshDuration: process.env.JWT_REFRESH_DURATION!,
}));
