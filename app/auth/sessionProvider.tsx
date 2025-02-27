"use client"; // Add this line
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const SessionFile = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionFile;
