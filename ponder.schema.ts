import { onchainTable } from "ponder";

export const sferpOwner = onchainTable("sferp", (t) => ({
  id: t.hex().primaryKey(),
  owner: t.hex().notNull(),
  chainId: t.bigint().notNull(),
}));