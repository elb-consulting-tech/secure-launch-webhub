
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

// -- Data from Executive Report --

const threatsData = [
  { name: 'DoS/DDoS', value: 85, fill: '#ef4444' }, // red-500
  { name: 'MITM', value: 65, fill: '#3b82f6' },     // blue-500
  { name: 'FDIA', value: 45, fill: '#a855f7' },     // purple-500
  { name: 'Backdoor', value: 30, fill: '#eab308' }, // yellow-500
];

const vulnData = [
  { name: 'Software Vulns', value: 30 },
  { name: 'Network Weakness', value: 25 },
  { name: 'Human Factors', value: 20 },
  { name: 'Policy Gaps', value: 15 },
  { name: 'Legacy Systems', value: 10 },
];

const defenseData = [
  { name: 'Model-Based', Accuracy: 85, Complexity: 75 },
  { name: 'Data-Driven', Accuracy: 80, Complexity: 65 },
  { name: 'Hybrid', Accuracy: 90, Complexity: 85 },
];

const COLORS = ['#ef4444', '#3b82f6', '#a855f7', '#eab308', '#22c55e'];

export const ThreatsBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={threatsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis label={{ value: 'Prevalence (%)', angle: -90, position: 'insideLeft' }} />
      <Tooltip cursor={{ fill: 'transparent' }} />
      <Bar dataKey="value" radius={[4, 4, 0, 0]} name="Prevalence" />
    </BarChart>
  </ResponsiveContainer>
);

export const VulnerabilityPieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={vulnData}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {vulnData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export const DefenseComparisonChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={defenseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Accuracy" fill="#3b82f6" name="Detection Accuracy" radius={[4, 4, 0, 0]} />
      <Bar dataKey="Complexity" fill="#f97316" name="Implementation Complexity" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
