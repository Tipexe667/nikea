import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// Utilisation des variables d'environnement directement depuis process.env
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "";

// Vérification pour éviter les erreurs si des variables sont manquantes
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !NEXTAUTH_SECRET) {
  throw new Error("Missing environment variables for NextAuth configuration.");
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: NEXTAUTH_SECRET,
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymousCartIntoUserCart(user.id);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
