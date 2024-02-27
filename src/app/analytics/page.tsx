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
  );
};
export default Page;
