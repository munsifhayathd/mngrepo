"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const surveyingStats = [
  { 
    name: "Active Surveyors", 
    value: "147",
    change: "+15.2%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  { 
    name: "Active Projects", 
    value: "34",
    change: "+8.1%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  { 
    name: "Survey Accuracy", 
    value: "99.8%",
    change: "+0.3%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  { 
    name: "Equipment Utilization", 
    value: "87%",
    change: "+5.7%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const projectData = [
  { name: 'Perth Infrastructure Development', personnel: 28, pending: 4, completed: 24 },
  { name: 'Pilbara Resource Survey', personnel: 22, pending: 3, completed: 19 },
  { name: 'Brisbane Land Development', personnel: 18, pending: 2, completed: 16 },
  { name: 'Melbourne Utility Mapping', personnel: 15, pending: 1, completed: 14 },
  { name: 'Sydney Coastal Survey', personnel: 12, pending: 2, completed: 10 },
  { name: 'Darwin Port Expansion', personnel: 8, pending: 1, completed: 7 },
];

const complianceData = [
  { name: 'Certified Surveyors', value: 134, color: '#f15a29' },
  { name: 'Pending Certification', value: 8, color: '#4D4D4F' },
  { name: 'Requires Training', value: 5, color: '#8B7355' },
];

const surveyingTrend = [
  { month: 'Jan', surveys: 42, completions: 38, equipment: 34 },
  { month: 'Feb', surveys: 48, completions: 44, equipment: 40 },
  { month: 'Mar', surveys: 55, completions: 51, equipment: 47 },
  { month: 'Apr', surveys: 62, completions: 58, equipment: 54 },
  { month: 'May', surveys: 59, completions: 61, equipment: 52 },
  { month: 'Jun', surveys: 68, completions: 64, equipment: 61 },
];

const projectCostData = [
  { project: 'Perth Infrastructure Development', cost: 285000, surveys: 18 },
  { project: 'Pilbara Resource Survey', cost: 420000, surveys: 14 },
  { project: 'Brisbane Land Development', cost: 195000, surveys: 12 },
  { project: 'Melbourne Utility Mapping', cost: 165000, surveys: 10 },
  { project: 'Sydney Coastal Survey', cost: 235000, surveys: 8 },
  { project: 'Darwin Port Expansion', cost: 145000, surveys: 6 },
];

const certificationExpiry = [
  { month: 'This Month', expiring: 12, renewed: 8 },
  { month: 'Next Month', expiring: 18, renewed: 6 },
  { month: 'In 3 Months', expiring: 25, renewed: 4 },
  { month: 'Beyond', expiring: 86, renewed: 2 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Surveying Operations Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Land surveying and spatial solutions across Australia</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          Export Report
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {surveyingStats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 cursor-pointer"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 opacity-0"
              whileHover={{ opacity: 0.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <motion.p 
                  className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {stat.name}
                </motion.p>
                <motion.p 
                  className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.p>
              </div>
              <motion.div 
                className="rounded-full bg-primary/10 p-3 text-primary dark:bg-primary/20"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
            </div>
            <motion.div 
              className={`mt-4 flex items-center text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.4 }}
            >
              <motion.svg 
                className="mr-1 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  y: stat.change.startsWith('+') ? [-2, 2, -2] : [2, -2, 2]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.change.startsWith('+') ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
              </motion.svg>
              {stat.change}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {/* Personnel by Project Chart */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.2 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personnel by Project</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="personnel" fill="#D71638" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Compliance Status Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            delay: 0.8,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 2,
            transition: { duration: 0.3 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Compliance Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={complianceData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => `${value}`}
              >
                {complianceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} personnel`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Travel Cost by Project */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateZ: 5 }}
          animate={{ opacity: 1, x: 0, rotateZ: 0 }}
          transition={{ 
            delay: 1.0,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            rotateZ: -1,
            transition: { duration: 0.3 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Travel Costs by Project</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectCostData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" fontSize={12} />
              <YAxis dataKey="project" type="category" width={80} fontSize={10} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']} />
              <Bar dataKey="cost" fill="#0072BC" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Mobilisation Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mobilisation & Travel Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={surveyingTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="surveys" stroke="#D71638" strokeWidth={3} name="Surveys" />
              <Line type="monotone" dataKey="completions" stroke="#0072BC" strokeWidth={3} name="Completions" />
              <Line type="monotone" dataKey="equipment" stroke="#4D4D4F" strokeWidth={2} name="Equipment Utilization" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Certification Expiry Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: -2,
            transition: { duration: 0.3 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-bl from-green-500/5 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -top-4 -left-4 w-28 h-28 bg-green-500/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certification Expiry Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={certificationExpiry}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expiring" fill="#D71638" name="Expiring" radius={[4, 4, 0, 0]} />
              <Bar dataKey="renewed" fill="#0072BC" name="Renewed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Mobilisation Activity */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="flex items-center justify-between mb-6 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2 
            className="text-lg font-semibold text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Recent Mobilisation Activity
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="sm">View All</Button>
          </motion.div>
        </motion.div>
        <div className="flow-root">
          <ul className="space-y-4">
            {[
              { action: "Personnel Allocated", detail: "Sarah Johnson allocated to Perth Infrastructure Development", time: "2 hours ago", type: "allocation", priority: "high" },
              { action: "Survey Completed", detail: "Pilbara Resource Survey completed successfully", time: "4 hours ago", type: "survey", priority: "medium" },
              { action: "Training Completed", detail: "Brisbane Land Development training completed", time: "6 hours ago", type: "training", priority: "low" },
            ].map((activity, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full relative z-10 ${
                    activity.type === 'allocation' ? 'bg-primary/10' : 
                    activity.type === 'survey' ? 'bg-blue-100' : 'bg-green-100'
                  }`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {activity.type === 'allocation' && (
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {activity.type === 'survey' && (
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )}
                  {activity.type === 'training' && (
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </motion.div>
                <div className="flex-auto min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{activity.action}</h3>
                      {activity.priority === 'high' && (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                          High Priority
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 truncate">
                    {activity.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}