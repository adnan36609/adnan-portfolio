"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CheckCircle2, Info } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type?: "info" | "success";
}

interface ToastContextType {
  showToast: (message: string, type?: "info" | "success") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: "info" | "success" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 bg-base-850 text-contrast border border-muted-700 rounded-md shadow-2xl text-sm font-mono animate-in fade-in slide-in-from-bottom-3 duration-200"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-contrast" />
            ) : (
              <Info className="w-4 h-4 text-muted-400" />
            )}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
