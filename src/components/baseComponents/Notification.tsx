"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type NotificationProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  site?: string;
  iconUrl?: string;
  blogUrl?: string;
  duration?: number;
  className?: string;
};

export function Notification({
  show,
  onClose,
  title,
  message,
  site,
  iconUrl,
  blogUrl,
  duration = 4000,
  className = "",
}: NotificationProps) {
  // handle click anywhere on the card
  const handleClick = () => {
    if (blogUrl) window.open(blogUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          onClick={handleClick}
          className={`fixed bottom-5 left-5 z-50 flex max-w-[90vw] w-96 cursor-pointer items-center justify-between rounded-md border border-dashed border-neutral-700/60 p-3 shadow-lg backdrop-blur-sm hover:border-purple-400 hover:bg-neutral-800/50 transition-all duration-300 ${className}`}
        >
          <div className="flex items-start gap-3">
            {iconUrl && (
              <img
                src={iconUrl}
                alt="site icon"
                className="h-8 w-8 rounded-full border border-grey-600"
              />
            )}

            <div className="flex flex-col">
              <span className="text-sm text-neutral-100">
                {title}
              </span>
              {site && <span className="text-xs text-gray-500">{site}</span>}
            </div>
          </div>

          {/* Stop propagation so the X button doesn't trigger the blog link */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="ml-2 text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
