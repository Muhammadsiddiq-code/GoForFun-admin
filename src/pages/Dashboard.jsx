import {
  Users,
  Building2,
  Calendar,
  DollarSign,
  TrendingUp,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for charts - Updated for Telegram WebApp and correct revenue model
const platformIncomeData = [
  { day: "Mon", income: 144000 }, // 12% service fee collected
  { day: "Tue", income: 228000 },
  { day: "Wed", income: 180000 },
  { day: "Thu", income: 264000 },
  { day: "Fri", income: 336000 },
  { day: "Sat", income: 420000 },
  { day: "Sun", income: 384000 },
];

const gamesData = [
  { month: "Jul", games: 12 },
  { month: "Aug", games: 19 },
  { month: "Sep", games: 15 },
  { month: "Oct", games: 22 },
  { month: "Nov", games: 28 },
  { month: "Dec", games: 35 },
];

function Dashboard() {
  // Revenue calculation example:
  // Stadium base price: 250,000 UZS
  // Platform service fee: +12% = 30,000 UZS
  // Total paid by users: 280,000 UZS
  const monthlyPlatformIncome = 5433600; // Total 12% service fees collected this month

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">Admin Dashboard</h1>
        <p className="text-gray-600">Telegram WebApp Platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Total Users from Telegram */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="text-blue-600" size={20} />
            </div>
            <span className="text-green-600 text-xs flex items-center gap-1">
              <TrendingUp size={12} />
              12%
            </span>
          </div>
          <p className="text-gray-600 text-xs mb-1">Telegram Users</p>
          <p className="text-gray-900">24,583</p>
        </div>

        {/* Total Organizers */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Building2 className="text-purple-600" size={20} />
            </div>
            <span className="text-green-600 text-xs flex items-center gap-1">
              <TrendingUp size={12} />
              8%
            </span>
          </div>
          <p className="text-gray-600 text-xs mb-1">Organizers</p>
          <p className="text-gray-900">342</p>
        </div>

        {/* Active Games/Events */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Calendar className="text-orange-600" size={20} />
            </div>
            <span className="text-green-600 text-xs flex items-center gap-1">
              <TrendingUp size={12} />
              15%
            </span>
          </div>
          <p className="text-gray-600 text-xs mb-1">Active Games</p>
          <p className="text-gray-900">128</p>
        </div>

        {/* Today's Payments */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-green-50 rounded-lg">
              <Activity className="text-green-600" size={20} />
            </div>
            <span className="text-green-600 text-xs flex items-center gap-1">
              <TrendingUp size={12} />
              24%
            </span>
          </div>
          <p className="text-gray-600 text-xs mb-1">Today's Payments</p>
          <p className="text-gray-900">89</p>
        </div>
      </div>

      {/* Monthly Platform Income Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 shadow-lg text-white">
        <div className="flex items-center justify-between mb-1">
          <p className="text-blue-100 text-xs">Monthly Platform Income</p>
          <DollarSign size={20} className="text-blue-200" />
        </div>
        <p className="text-white mb-1">
          {(monthlyPlatformIncome / 1000).toFixed(0)}K UZS
        </p>
        <p className="text-blue-200 text-xs">12% service fee collected</p>
      </div>

      {/* Revenue Model Explanation Card */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border-2 border-purple-200">
        <h3 className="text-gray-900 mb-2">Revenue Model Example</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-xs">Stadium Base Price:</span>
            <span className="text-gray-900">250,000 UZS</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 text-xs">+ Platform Fee (12%):</span>
            <span className="text-blue-700">30,000 UZS</span>
          </div>
          <div className="border-t border-purple-200 pt-2 flex justify-between items-center">
            <span className="text-gray-900">Total Paid by Users:</span>
            <span className="text-purple-700">280,000 UZS</span>
          </div>
        </div>
      </div>

      {/* Weekly Platform Income Chart */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-gray-900 mb-3">
          Weekly Platform Income (12% Fees)
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={platformIncomeData}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorIncome)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Games Activity Chart */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-gray-900 mb-3">Games/Events Growth (6 Months)</h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={gamesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="games" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 text-xs mb-1">Avg. Game</p>
          <p className="text-gray-900">280K</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 text-xs mb-1">Team Fill Rate</p>
          <p className="text-gray-900">92%</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-600 text-xs mb-1">Satisfaction</p>
          <p className="text-gray-900">4.8/5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
