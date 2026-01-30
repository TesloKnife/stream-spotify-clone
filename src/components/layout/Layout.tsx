import type { PropsWithChildren } from "react";
import { LeftSidebar } from "./left-sidebar/LeftSidebar";
import { RightSidebar } from "./right-sidebar/RightSidebar";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen h-full grid grid-cols-[1fr_4fr_1.2fr]">
      <LeftSidebar />
      <main className="p-layout">{children}</main>
      <RightSidebar />
    </div>
  );
}
