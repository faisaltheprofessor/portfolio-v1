"use client";
import { Card } from "@tremor/react";
interface Props {
  averageVisitorsPerDay: string;
  amountOfVisitorsToday: number;
}
const AnalyticsDashboard = ({
  averageVisitorsPerDay,
  amountOfVisitorsToday,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Average visitors per day
          </p>
          <p className="text-3xl text-tremor-content-strong font-semibold">
            {averageVisitorsPerDay}
          </p>
        </Card>

        <Card className="w-full mx-auto max-w-xs">
          <p className="text-tremor-default text-dark-tremor-content">
            Visitors Today
          </p>
          <p className="text-3xl text-tremor-content-strong font-semibold">
            {amountOfVisitorsToday}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
