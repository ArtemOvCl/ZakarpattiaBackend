import * as path from 'path';

export function getEnvFilePath(): string {
  const env = process.env.NODE_ENV || 'development';
  return path.resolve(__dirname, `../../env/.env.${env}`);
}
