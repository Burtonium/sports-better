import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const eventsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ eventName: z.string().min(1), odds: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.event.create({
        data: {
          ...input,
          createdById: ctx.session.user.id 
        }
      });
    }),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.event.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
    });
  }),
});
