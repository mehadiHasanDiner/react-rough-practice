import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const studentData = [
  {
    id: 1,
    name: "John Doe",
    physics: 85,
    chemistry: 90,
    biology: 78,
  },
  {
    id: 2,
    name: "Jane Smith",
    physics: 36,
    chemistry: 68,
    biology: 72,
  },
  {
    id: 3,
    name: "Alice Johnson",
    physics: 92,
    chemistry: 78,
    biology: 84,
  },
  {
    id: 4,
    name: "Bob Brown",
    physics: 88,
    chemistry: 85,
    biology: 79,
  },
  {
    id: 5,
    name: "Eva Davis",
    physics: 32,
    chemistry: 44,
    biology: 56,
  },
  {
    id: 6,
    name: "Michael Wilson",
    physics: 75,
    chemistry: 80,
    biology: 95,
  },
  {
    id: 7,
    name: "Sophia Lee",
    physics: 82,
    chemistry: 86,
    biology: 91,
  },
  {
    id: 8,
    name: "Oliver Rodriguez",
    physics: 10,
    chemistry: 45,
    biology: 30,
  },
  {
    id: 9,
    name: "Mia Martinez",
    physics: 87,
    chemistry: 91,
    biology: 77,
  },
  {
    id: 10,
    name: "Daniel Wilson",
    physics: 79,
    chemistry: 84,
    biology: 88,
  },
  {
    id: 11,
    name: "Emily Davis",
    physics: 53,
    chemistry: 27,
    biology: 88,
  },
  {
    id: 12,
    name: "Matthew Johnson",
    physics: 50,
    chemistry: 40,
    biology: 60,
  },
];


    return (
        <div>
            <LineChart
            width={1000}
            height={500}
            data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line stroke="red" dataKey="physics"></Line>
                <Line stroke="blue" dataKey="chemistry"></Line>
                <Line stroke="orange" dataKey="biology"></Line>
                <XAxis stroke="cyan" dataKey="name" />
                <YAxis stroke="cyan" />
                <Tooltip />
      <Legend />

            </LineChart>
        </div>
    );
};

export default Dashboard;