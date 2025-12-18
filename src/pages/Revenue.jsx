import {
  DollarSign,
  TrendingUp,
  Building2,
  Percent,
  ArrowRight,
  Plus,
  Users,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// CORRECT REVENUE MODEL:
// Stadium base price: 250,000 UZS (goes to stadium/organizer)
// Platform service fee: +12% = 30,000 UZS (added on top, goes to platform)
// Total paid by users: 280,000 UZS

// Total amounts this month
const totalStadiumPrices = 37650000; // Total paid to stadiums/organizers
const totalPlatformFees = 4518000; // Total 12% service fees collected by platform (37,650,000 × 0.12)
const totalPaidByUsers = 42168000; // Total paid by users (37,650,000 + 4,518,000)

// Revenue breakdown by organizer
const revenueByOrganizer = [
  {
    name: "Sport Arena UZ",
    stadiumPrice: 6250000, // What stadium gets
    platformFee: 750000, // 12% added on top
    userTotal: 7000000, // What users actually paid
    games: 25,
  },
  {
    name: "Fitness Pro",
    stadiumPrice: 5600000,
    platformFee: 672000,
    userTotal: 6272000,
    games: 32,
  },
  {
    name: "Cultural Events",
    stadiumPrice: 4900000,
    platformFee: 588000,
    userTotal: 5488000,
    games: 18,
  },
  {
    name: "Gaming League",
    stadiumPrice: 3650000,
    platformFee: 438000,
    userTotal: 4088000,
    games: 16,
  },
  {
    name: "Tech Meetups",
    stadiumPrice: 2240000,
    platformFee: 268800,
    userTotal: 2508800,
    games: 12,
  },
];

// Monthly trend showing correct model
const monthlyTrend = [
  {
    month: "Jul",
    stadiumTotal: 23333000,
    platformFee: 2799960,
    usersPaid: 26132960,
  },
  {
    month: "Aug",
    stadiumTotal: 27083000,
    platformFee: 3249960,
    usersPaid: 30332960,
  },
  {
    month: "Sep",
    stadiumTotal: 24833000,
    platformFee: 2979960,
    usersPaid: 27812960,
  },
  {
    month: "Oct",
    stadiumTotal: 29333000,
    platformFee: 3519960,
    usersPaid: 32852960,
  },
  {
    month: "Nov",
    stadiumTotal: 32000000,
    platformFee: 3840000,
    usersPaid: 35840000,
  },
  {
    month: "Dec",
    stadiumTotal: 37650000,
    platformFee: 4518000,
    usersPaid: 42168000,
  },
];

// Pie chart data
const revenueDistribution = [
  {
    name: "Stadium/Organizer",
    value: totalStadiumPrices,
    color: "#10b981",
    percentage: 89.3,
  },
  {
    name: "Platform Fee (12%)",
    value: totalPlatformFees,
    color: "#3b82f6",
    percentage: 10.7,
  },
];

function Revenue() {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-gray-900 mb-1">Revenue Breakdown</h1>
        <p className="text-gray-600">Platform add-on fee model</p>
      </div>

      {/* Total Paid by Users Card */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-5 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <DollarSign size={24} />
          </div>
          <div className="flex items-center gap-1 text-purple-100 text-xs">
            <TrendingUp size={14} />
            <span>+17.7% this month</span>
          </div>
        </div>
        <p className="text-purple-100 text-xs mb-1">
          Total Paid by Users (December)
        </p>
        <p className="text-white mb-1">
          {(totalPaidByUsers / 1000000).toFixed(2)}M UZS
        </p>
        <p className="text-purple-100 text-xs">
          From 1,506 participants across 103 games
        </p>
      </div>

      {/* Revenue Model Explanation */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
        <h3 className="text-gray-900 mb-3">How Platform Revenue Works</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
                1
              </div>
              <p className="text-gray-900 text-xs">Stadium sets base price</p>
            </div>
            <div className="ml-8 flex justify-between items-center">
              <span className="text-gray-600 text-xs">
                Example: Football field
              </span>
              <span className="text-green-700">250,000 UZS</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Plus className="text-blue-600" size={20} />
          </div>

          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                2
              </div>
              <p className="text-gray-900 text-xs">
                Platform adds 12% service fee
              </p>
            </div>
            <div className="ml-8 flex justify-between items-center">
              <span className="text-gray-600 text-xs">12% of 250,000</span>
              <span className="text-blue-700">+30,000 UZS</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ArrowRight className="text-gray-400" size={20} />
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3 text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs">
                3
              </div>
              <p className="text-white text-xs">Total charged to users</p>
            </div>
            <div className="ml-8 flex justify-between items-center">
              <span className="text-white text-xs">Final price per team</span>
              <span className="text-white">280,000 UZS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Split Cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* Stadium/Organizer Amount */}
        <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-green-600 rounded-lg">
              <Building2 className="text-white" size={16} />
            </div>
          </div>
          <p className="text-green-700 text-xs mb-1">Stadium Revenue</p>
          <p className="text-green-900">
            {(totalStadiumPrices / 1000000).toFixed(2)}M
          </p>
          <p className="text-green-600 text-xs mt-1">Base prices</p>
        </div>

        {/* Platform Fee */}
        <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Percent className="text-white" size={16} />
            </div>
          </div>
          <p className="text-blue-700 text-xs mb-1">Platform Income</p>
          <p className="text-blue-900">
            {(totalPlatformFees / 1000000).toFixed(2)}M
          </p>
          <p className="text-blue-600 text-xs mt-1">12% service fees</p>
        </div>
      </div>

      {/* Visual Revenue Distribution */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-gray-900 mb-3">Payment Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={revenueDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {revenueDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${(value / 1000000).toFixed(2)}M UZS`}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-2 mt-2">
          {revenueDistribution.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
              <span className="text-xs text-gray-900">
                {item.percentage.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue by Organizer */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-gray-900 mb-3">Revenue Breakdown by Organizer</h3>
        <div className="space-y-2">
          {revenueByOrganizer.map((org) => (
            <div key={org.name} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-900 text-xs">{org.name}</p>
                <p className="text-purple-700">
                  {(org.userTotal / 1000).toFixed(0)}K total
                </p>
              </div>

              {/* Breakdown bars */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-green-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-green-600 h-full rounded-full"
                      style={{ width: "89.3%" }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-16 text-right">
                    {(org.stadiumPrice / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "10.7%" }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-16 text-right">
                    {(org.platformFee / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-green-100 rounded p-1.5 text-center">
                  <p className="text-green-700 text-xs">Stadium</p>
                </div>
                <div className="bg-blue-100 rounded p-1.5 text-center">
                  <p className="text-blue-700 text-xs">Platform (+12%)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Revenue Trend */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-gray-900 mb-3">6-Month Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={monthlyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value) => `${(value / 1000000).toFixed(2)}M UZS`}
            />
            <Legend wrapperStyle={{ fontSize: "11px" }} />
            <Bar
              dataKey="stadiumTotal"
              fill="#10b981"
              name="Stadium Total"
              stackId="a"
            />
            <Bar
              dataKey="platformFee"
              fill="#3b82f6"
              name="Platform Fee"
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Payment Flow Visual */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
        <h3 className="text-gray-900 mb-3">Payment Flow</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
              <Users size={18} />
            </div>
            <div className="flex-1 bg-white rounded-lg p-2">
              <p className="text-gray-900 text-xs">
                Users pay via Telegram WebApp
              </p>
              <p className="text-purple-700 text-xs">
                280,000 UZS (stadium + 12% fee)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pl-5">
            <ArrowRight className="text-gray-400" size={20} />
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">
              89%
            </div>
            <div className="flex-1 bg-white rounded-lg p-2">
              <p className="text-gray-900 text-xs">
                Stadium/Organizer receives
              </p>
              <p className="text-green-700 text-xs">250,000 UZS (base price)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
              11%
            </div>
            <div className="flex-1 bg-white rounded-lg p-2">
              <p className="text-gray-900 text-xs">Platform keeps</p>
              <p className="text-blue-700 text-xs">30,000 UZS (service fee)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 text-xs mb-1">Avg. Stadium</p>
          <p className="text-green-600">
            {Math.round(totalStadiumPrices / 103 / 1000)}K
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 text-xs mb-1">Avg. Fee/Game</p>
          <p className="text-blue-600">
            {Math.round(totalPlatformFees / 103 / 1000)}K
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 text-xs mb-1">Total Games</p>
          <p className="text-purple-600">103</p>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
