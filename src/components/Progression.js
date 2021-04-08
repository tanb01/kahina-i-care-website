import React, { Components } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts';

export default function Progression() {

  const data = [
    { name: "Mo", Mood: 3200000000 },
    { name: "Tu", Mood: 1500500000 },
    { name: "We", Mood: 1500000050 },
    { name: "Th", Mood: 5000000000 },
    { name: "Fr", Mood: 100000000 },
    { name: "Sa", Mood: 100000000 },
    { name: "Su", Mood: 100000000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>

      <div className="App">
        <BarChart
          width={300}
          height={150}
          data={data}

          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />

          <Tooltip />
          <Legend></Legend>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Mood" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

