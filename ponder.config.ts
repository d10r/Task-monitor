import { createConfig } from "ponder";

import { weth9Abi } from "./abis/weth9Abi";
import { ERC721abi } from "./abis/ERC721abi";

const SFERPAddress = "0xcd4e576ba1B74692dBc158c5F399269Ec4739577";

export default createConfig({
  ordering: "multichain",
  chains: {
    base: {
      id: 8453,
      rpc: process.env.PONDER_RPC_URL_8453,
    },
    optimism: {
      id: 10,
      rpc: process.env.PONDER_RPC_URL_10,
    },
    polygon: {
      id: 137,
      rpc: process.env.PONDER_RPC_URL_137,
    },
  },
  contracts: {
    SFERP: {
      abi: ERC721abi,
      startBlock: "latest",
      chain: {
        base: { address: SFERPAddress },
        optimism: { address: SFERPAddress },
        polygon: { address: SFERPAddress },
      },
    },
  },
});
