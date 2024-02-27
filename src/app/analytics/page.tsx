import { analytics } from "@/utils/analytics";
import React from "react";
import { getDate } from "@/utils";
import AnalyticsDashboard from "../components/analytics-dashboard";

const Page = async () => {
  const TRACKING_DAYS = 7;

  const pageviews = await analytics.retrieveDays("pageview", 7);

  const totalPageviews = pageviews.reduce((acc, curr) => {
    return (
      acc +
      curr.events.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!;
      }, 0)
    );
  }, 0);

  const averageVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1);
  const amountOfVisitorsToday = pageviews
    .filter((event) => event.date === getDate())
    .reduce((acc, curr) => {
      return (
        acc +
        curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0)
      );
    }, 0);

  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <AnalyticsDashboard
          averageVisitorsPerDay={averageVisitorsPerDay}
          amountOfVisitorsToday={amountOfVisitorsToday}
        />
      </div>
    </div>
    // <main className="flex items-center  justify-center w-full  xl:w-[50%] h-screen mx-auto flex-col md:w-1/2 gap-y-4">
    //   <h1 className={cn("text-7xl font-bold text-white", Calibre.className)}>
    //     {" "}
    //     <pre>{JSON.stringify(pageview)}</pre>
    //   </h1>
    // </main>
  );
};
export default Page;
