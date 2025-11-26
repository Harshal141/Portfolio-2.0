"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ExpandedExperienceContextType = {
  expandedKeys: Set<string>;
  toggleExpanded: (key: string) => void;
  isExpanded: (key: string) => boolean;
};

const ExpandedExperienceContext = createContext<ExpandedExperienceContextType | undefined>(undefined);

export function ExpandedExperienceProvider({ children }: { children: ReactNode }) {
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  const toggleExpanded = (key: string) => {
    setExpandedKeys((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const isExpanded = (key: string) => expandedKeys.has(key);

  return (
    <ExpandedExperienceContext.Provider value={{ expandedKeys, toggleExpanded, isExpanded }}>
      {children}
    </ExpandedExperienceContext.Provider>
  );
}

export function useExpandedExperience() {
  const context = useContext(ExpandedExperienceContext);
  if (!context) {
    throw new Error("useExpandedExperience must be used within an ExpandedExperienceProvider");
  }
  return context;
}
