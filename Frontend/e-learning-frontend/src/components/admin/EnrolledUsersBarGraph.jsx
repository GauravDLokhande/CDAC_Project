import { ResponsiveBar } from '@nivo/bar';

const EnrolledUsersBarGraph = () => {
  const enrolledUsersData = [
    { course: 'Math', count: 50 },
    { course: 'Science', count: 80 },
    { course: 'History', count: 120 },
    { course: 'Literature', count: 70 },
    { course: 'Physics', count: 90 },
    { course: 'Chemistry', count: 100 },
    { course: 'Biology', count: 130 },
  ];

  return (
    <div style={{ height: '400px', backgroundColor: '#f4eeff', borderRadius: '16px', padding: '20px' }}>
      <ResponsiveBar
        data={enrolledUsersData}
        keys={['count']}
        indexBy="course"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        padding={0.3}
        colors={['#424874']} // Dark bars as per theme
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Course',
          legendOffset: 36,
          legendPosition: 'middle',
          legendTextColor: '#424874',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Enrolled Users',
          legendOffset: -40,
          legendTextColor: '#424874',
        }}
        labelTextColor="#f4eeff" 
        theme={{
          axis: {
            domain: {
              line: {
                stroke: '#424874',
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

export default EnrolledUsersBarGraph;
