import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="centered-container dark:bg-black">
      <div className="centered-content">
        {children}
      </div>
    </div>
  );
}
