import { Contract, ContractInterface } from "@ethersproject/contracts";
import { ChainId } from "config/constants/chainId";
import { Providers } from "config/providers";
import { useMemo } from "react";

export const createStaticContract = <TContract extends Contract = Contract>(ABI: ContractInterface) => {
  return (address: string, chainId: ChainId) => {
    const provider = Providers.getStaticProvider(chainId);
    return useMemo(() => new Contract(address, ABI, provider) as TContract, [address, provider]);
  };
};
