import "dotenv/config";

export const appEnv = {
  dbUrl: process.env.DB_URL,
  port: Number(process.env.PORT ?? 8080) as number,
  secret: process.env.SECRET as string,
};
