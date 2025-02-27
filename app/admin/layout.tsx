import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex gap-1">
      <aside className="bg-slate-300 p-5">Asside page </aside>
      <main> {children}</main>
    </div>
  );
};

export default layout;
