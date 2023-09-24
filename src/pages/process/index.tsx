import { Suspense } from "react";
import { Actions } from "@/components/actions";
import PlaceholderCard from "@/components/placeholder-card";
import DashboardLayout from './layout';

export default function Overview() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-screen p-8 space-y-6 items-center">
        <h1 className="font-cal text-xl font-bold dark:text-white text-center">
          Altitude80 AI Code Machine
        </h1>

        <Suspense
          fallback={
            <div className="flex flex-wrap justify-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <PlaceholderCard key={i} />
              ))}
            </div>
          }
        >
          <Actions />
        </Suspense>
      </div>
    </DashboardLayout>
  );
}
