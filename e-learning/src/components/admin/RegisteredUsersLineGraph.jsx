import { ResponsiveLine } from '@nivo/line';

const RegisteredUsersLineGraph = () => {
  const userRegistrationData = [
    { month: 'January', count: 100 },
    { month: 'February', count: 120 },
    { month: 'March', count: 150 },
    { month: 'April', count: 180 },
    { month: 'May', count: 200 },
    { month: 'June', count: 250 },
    { month: 'July', count: 300 },
    { month: 'August', count: 320 },
    { month: 'September', count: 400 },
    { month: 'October', count: 450 },
    { month: 'November', count: 500 },
    { month: 'December', count: 550 },
  ];

  const graphData = [
    {
      id: "Registered Users",
      data: userRegistrationData.map(item => ({ x: item.month, y: item.count })),
    }
  ];

  return (
    <div style={{ height: '400px', backgroundColor: '#f4eeff', borderRadius: '16px', padding: '20px' }}>
      <ResponsiveLine
        data={graphData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: '0', max: 'auto' }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Month',
          legendOffset: 36,
          legendTextColor: '#424874',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Registered Users',
          legendOffset: -40,
          legendTextColor: '#424874',
        }}
        enableGridX={false}
        enableGridY={true}
        colors={['#424874']} // Dark line color as per theme
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: '#424874', // Dark color for axis lines
              },
            },
            ticks: {
              line: {
                stroke: '#424874',
              },
              text: {
                fill: '#424874',
                fontSize: '12px',
              },
            },
            legend: {
              text: {
                fill: '#424874',
                fontSize: '14px',
              },
            },
          },
          grid: {
            line: {
              stroke: '#424874',
              strokeWidth: 1,
              strokeDasharray: '4 4',
            },
          },
          legends: {
            text: {
              fill: '#424874',
            },
          },
          tooltip: {
            container: {
              background: '#f4eeff',
              color: '#424874',
            },
          },
        }}
      />
    </div>
  );
};

export default RegisteredUsersLineGraph;
