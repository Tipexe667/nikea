import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string(),
  GOOGLE_CLIENT_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
  NEXTAUTH_SECRET: zod.string(),
  NEXTAUTH_URL: zod.string(),
  SECRET: zod.string(),
});

const env = envSchema.parse({
  DATABASE_URL: "mongodb+srv://hubaulouen:abT6TlQAItntJS5u@cluster0.md8ve.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0",
  GOOGLE_CLIENT_ID: "630039385758-uhb7jup2uvisem0v0uu3a903jgun36bn.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "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",
  NEXTAUTH_SECRET: "68414aa030d5cb6e524f07ee4b611c47",
  NEXTAUTH_URL: "http://localhost:3000",
});

export default env;
