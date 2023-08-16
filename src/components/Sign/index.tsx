import * as React from "react";
import { recoverMessageAddress } from "viem";
import type { Address } from "wagmi";
import { useSignMessage } from "wagmi";

export const SignMessage = () => {
  const [recoveredAddress, setRecoveredAddress] = React.useState<Address>();
  const [inputMessage, setInputMessage] = React.useState<string>("");
  const { data: signature, variables, error, isLoading, signMessage } = useSignMessage();

  React.useEffect(() => {
    (async () => {
      if (variables?.message && signature) {
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature,
        });
        setRecoveredAddress(recoveredAddress);
      }
    })();
  }, [signature, variables?.message]);

  const sign = () => {
    signMessage({
      message: inputMessage,
    });
  };

  return (
    <div>
      <input
        required
        name="message"
        type="text"
        value={inputMessage}
        onChange={(e: any) => {
          setInputMessage(e.target.value);
        }}
      />
      <button type="button" disabled={isLoading} onClick={sign}>
        {isLoading ? "Check Wallet" : "Sign Message"}
      </button>

      {signature && (
        <div>
          <div>signature {signature}</div>
          <div>recovered address {recoveredAddress}</div>
        </div>
      )}

      <div>{error && (error?.message ?? "Failed to sign message")}</div>
    </div>
  );
};
