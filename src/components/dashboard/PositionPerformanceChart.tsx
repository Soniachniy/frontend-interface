import { ChartArea } from "../charts/ChartArea";

export const PositionPerformanceChart = () => {
  //fix height
  return (
    <ChartArea
      chartConfig={{
        position: {
          label: "position",
          color: "var(--chart-1)",
        },
      }}
      chartData={[
        { date: "2024-04-01", position: 1000 },
        { date: "2024-04-02", position: 1000 },
        { date: "2024-04-03", position: 1000 },
        { date: "2024-04-04", position: 1004 },
        { date: "2024-04-05", position: 2000 },
        { date: "2024-04-06", position: 2000 },
        { date: "2024-04-07", position: 2000 },
        { date: "2024-04-08", position: 2000 },
      ]}
      title="Position Performance"
      value="2004$"
      valueTooltip="“Positions” indicator consists of the sum of all deposits and profits. “YARD reward” is calculated based on the projected FDV."
    />
  );
};
