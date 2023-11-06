import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import { registerSchema } from "~/validation/auth";

const SALT_ROUNDS = 10;

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const { username, password } = input;

      const exists = await ctx.db.user.findFirst({
        where: { username },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists.",
        });
      }

      const salt = bcrypt.genSaltSync(SALT_ROUNDS);
      const hash = bcrypt.hashSync(password, salt);

      const result = await ctx.db.user.create({
        data: { username, password: hash },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: result.username,
      };
    }),
});