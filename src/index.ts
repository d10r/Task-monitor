import { ponder } from "ponder:registry";
import { sferpOwner } from "ponder:schema";

ponder.on("SFERP:Transfer", async ({ event, context }) => {
  await context.db
    .insert(sferpOwner)
    .values({
      id: event.transaction.hash,
      owner: event.args.to,
      chainId: BigInt(context.chain.id),
    })
    .onConflictDoUpdate((row) => ({ owner: event.args.to }));
});