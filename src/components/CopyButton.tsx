'use client'

import { SuccessSnackBar } from "./SuccessSnackbar";
import { MdCopyAll } from "react-icons/md";
import { useState } from "react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);

    } catch (err) {
      console.error('Ошибка:', err);
    }
  };

  return (
    <div>
      <button
        onClick={() => copyTextToClipboard(text)}
        className="flex items-center justify-center gap-4 text-lg px-14 py-3 rounded-xl border font-medium transition outline-none bg-white text-black hover:bg-black hover:text-white hover:border-white sm:w-full sm:mb-5"
      >
        <span>{text}</span>
        <MdCopyAll />
      </button>
      <SuccessSnackBar status={copied} text="Copied" />
    </div>
  )
};

export { CopyButton };