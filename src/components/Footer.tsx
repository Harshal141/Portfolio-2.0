"use client";
import { useState } from "react";
import { personalEmail } from "@/lib/ResumeData";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 500); // revert after 1.5s
    });
  };

  return (
    <div className="footer mt-10 mb-10">
      <div className="border-t border-dashed border-[#2e2e2e] mb-2"></div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-xs text-gray-500">
          ALL RIGHTS RESERVES <span style={{ color: "#2e2e2e" }}>MAYBE</span>{" "}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <button
            onClick={copyToClipboard}
            className="cursor-pointer transition-colors hover:text-purple-500"
            aria-label="Copy email"
          >
            {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
          </button>
          <span>{personalEmail}</span>
        </div>
      </div>
    </div>
  );
}
