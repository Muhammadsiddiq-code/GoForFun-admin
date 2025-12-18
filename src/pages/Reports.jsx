    import {
      TrendingUp,
      TrendingDown,
      Users,
      DollarSign,
      Calendar,
      Trophy,
    } from "lucide-react";
    import {
      LineChart,
      Line,
      BarChart,
      Bar,
      PieChart,
      Pie,
      Cell,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      ResponsiveContainer,
    } from "recharts";

    // Monthly revenue data - showing correct add-on fee model
    const monthlyBreakdown = [
      {
        week: "Week 1",
        stadiumPrice: 7000000,
        platformFee: 840000,
        totalPaid: 7840000,
        participants: 280,
      },
      {
        week: "Week 2",
        stadiumPrice: 10250000,
        platformFee: 1230000,
        totalPaid: 11480000,
        participants: 410,
      },
      {
        week: "Week 3",
        stadiumPrice: 9000000,
        platformFee: 1080000,
        totalPaid: 10080000,
        participants: 360,
      },
      {
        week: "Week 4",
        stadiumPrice: 11400000,
        platformFee: 1368000,
        totalPaid: 12768000,
        participants: 456,
      },
    ];

    // Organizer performance with correct model
    const organizerStats = [
      {
        name: "Sport Arena UZ",
        stadiumTotal: 6250000,
        platformFees: 750000,
        games: 25,
      },
      {
        name: "Fitness Pro",
        stadiumTotal: 5600000,
        platformFees: 672000,
        games: 32,
      },
      {
        name: "Cultural Events",
        stadiumTotal: 4900000,
        platformFees: 588000,
        games: 18,
      },
      {
        name: "Gaming League",
        stadiumTotal: 3650000,
        platformFees: 438000,
        games: 16,
      },
      {
        name: "Tech Meetups",
        stadiumTotal: 2240000,
        platformFees: 268800,
        games: 12,
      },
    ];

    // Game type distribution
    const gameTypeDistribution = [
      { name: "Sports", value: 35, color: "#3b82f6" },
      { name: "Cultural", value: 25, color: "#8b5cf6" },
      { name: "Tech/Gaming", value: 20, color: "#f59e0b" },
      { name: "Education", value: 20, color: "#10b981" },
    ];

    function Reports() {
      // Calculate totals
      const totalStadiumPrice = monthlyBreakdown.reduce(
        (sum, item) => sum + item.stadiumPrice,
        0
      );
      const totalPlatformFee = monthlyBreakdown.reduce(
        (sum, item) => sum + item.platformFee,
        0
      );
      const totalPaidByUsers = monthlyBreakdown.reduce(
        (sum, item) => sum + item.totalPaid,
        0
      );
      const totalParticipants = monthlyBreakdown.reduce(
        (sum, item) => sum + item.participants,
        0
      );
      const totalGames = 103;

      return (
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="mb-2">
            <h1 className="text-gray-900 mb-1">Monthly Reports</h1>
            <p className="text-gray-600">December 2024 CRM Analytics</p>
          </div>

          {/* Revenue Model Breakdown Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
            <h3 className="text-gray-900 mb-3">
              Revenue Breakdown (This Month)
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                <span className="text-gray-600 text-xs">
                  Stadium/Base Prices:
                </span>
                <span className="text-gray-900">
                  {(totalStadiumPrice / 1000000).toFixed(1)}M UZS
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-100 rounded-lg">
                <span className="text-blue-700 text-xs">
                  + Platform Service Fee (12%):
                </span>
                <span className="text-blue-900">
                  {(totalPlatformFee / 1000000).toFixed(1)}M UZS
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                <span className="text-white">Total Paid by Users:</span>
                <span className="text-white">
                  {(totalPaidByUsers / 1000000).toFixed(1)}M UZS
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={18} />
                <p className="text-green-100 text-xs">Platform Income</p>
              </div>
              <p className="text-white mb-1">
                {(totalPlatformFee / 1000000).toFixed(2)}M
              </p>
              <div className="flex items-center gap-1 text-green-100 text-xs">
                <TrendingUp size={12} />
                <span>+18.2% from Nov</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Users size={18} />
                <p className="text-purple-100 text-xs">Participants</p>
              </div>
              <p className="text-white mb-1">{totalParticipants}</p>
              <div className="flex items-center gap-1 text-purple-100 text-xs">
                <TrendingUp size={12} />
                <span>+12.5% from Nov</span>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-gray-600 text-xs mb-1">Total Games</p>
                <p className="text-gray-900">{totalGames}</p>
                <div className="flex items-center justify-center gap-1 text-green-600 text-xs mt-1">
                  <TrendingUp size={10} />
                  <span>15%</span>
                </div>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-gray-600 text-xs mb-1">Avg. Stadium</p>
                <p className="text-gray-900">
                  {Math.round(totalStadiumPrice / totalGames / 1000)}K
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600 text-xs mt-1">
                  <TrendingUp size={10} />
                  <span>8%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-xs mb-1">Completion</p>
                <p className="text-gray-900">94%</p>
                <div className="flex items-center justify-center gap-1 text-red-600 text-xs mt-1">
                  <TrendingDown size={10} />
                  <span>2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Revenue Breakdown Chart */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-3">Weekly Revenue Components</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="week"
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value) => `${(value / 1000).toFixed(0)}K UZS`}
                />
                <Legend wrapperStyle={{ fontSize: "11px" }} />
                <Bar
                  dataKey="stadiumPrice"
                  fill="#10b981"
                  name="Stadium Price"
                  stackId="a"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="platformFee"
                  fill="#3b82f6"
                  name="Platform Fee (12%)"
                  stackId="a"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Participants & Platform Fee Trend */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-3">
              Participants vs Platform Income
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="week"
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "11px" }} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="platformFee"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Platform Fee"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="participants"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="Participants"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Organizer Performance */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-3">Top Organizers Revenue</h3>
            <div className="space-y-2">
              {organizerStats.map((org) => (
                <div key={org.name} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-orange-500" />
                      <p className="text-gray-900 text-xs">{org.name}</p>
                    </div>
                    <p className="text-gray-700 text-xs">{org.games} games</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-green-700 text-xs">Stadium Total</p>
                      <p className="text-green-900 text-xs">
                        {(org.stadiumTotal / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div className="bg-blue-100 rounded p-2">
                      <p className="text-blue-700 text-xs">Platform Fees</p>
                      <p className="text-blue-900 text-xs">
                        {(org.platformFees / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Game Type Distribution */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-3">Game Type Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={gameTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                  labelLine={false}
                >
                  {gameTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {gameTypeDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div className="flex items-start gap-3">
              <Calendar className="text-orange-600 mt-1" size={20} />
              <div>
                <h3 className="text-gray-900 mb-1">December Summary</h3>
                <p className="text-gray-600 text-xs mb-2">
                  {totalGames} games/events completed with {totalParticipants}{" "}
                  total participants. Platform collected{" "}
                  {(totalPlatformFee / 1000000).toFixed(2)}M UZS in service fees
                  (12% added to stadium prices).
                </p>
                <div className="flex items-center gap-1 text-orange-700 text-xs">
                  <TrendingUp size={12} />
                  <span>
                    Projected:{" "}
                    {((totalPlatformFee * 1.15) / 1000000).toFixed(2)}M UZS in
                    January
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Reports;