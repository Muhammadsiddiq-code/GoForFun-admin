import { useState } from "react";
import {
  Search,
  AtSign,
  Calendar,
  ListFilter,
  Hash,
  CircleUser,
} from "lucide-react";

// Mock Telegram user data
const mockUsers = [
  {
    id: 1,
    telegramId: 987654321,
    name: "Aziz Karimov",
    username: "aziz_k",
    status: "Active",
    joinDate: "2024-12-10",
  },
  {
    id: 2,
    telegramId: 876543210,
    name: "Nodira Yusupova",
    username: "nodira_y",
    status: "Active",
    joinDate: "2024-12-08",
  },
  {
    id: 3,
    telegramId: 765432109,
    name: "Jasur Rahimov",
    username: "jasur_rahimov",
    status: "Inactive",
    joinDate: "2024-12-05",
  },
  {
    id: 4,
    telegramId: 654321098,
    name: "Dilnoza Akbarova",
    username: "dilnoza_a",
    status: "Active",
    joinDate: "2024-12-12",
  },
  {
    id: 5,
    telegramId: 543210987,
    name: "Bobur Tursunov",
    username: "bobur_t",
    status: "Active",
    joinDate: "2024-12-11",
  },
  {
    id: 6,
    telegramId: 432109876,
    name: "Zarina Olimova",
    username: "zarina_o",
    status: "Active",
    joinDate: "2024-12-09",
  },
  {
    id: 7,
    telegramId: 321098765,
    name: "Sardor Aliyev",
    username: "sardor_aliyev",
    status: "Inactive",
    joinDate: "2024-11-28",
  },
  {
    id: 8,
    telegramId: 210987654,
    name: "Madina Saidova",
    username: "madina_said",
    status: "Active",
    joinDate: "2024-12-13",
  },
  {
    id: 9,
    telegramId: 109876543,
    name: "Timur Bekmurodov",
    username: "timur_bek",
    status: "Active",
    joinDate: "2024-12-07",
  },
  {
    id: 10,
    telegramId: 998765432,
    name: "Feruza Nazarova",
    username: "feruza_n",
    status: "Active",
    joinDate: "2024-12-14",
  },
  {
    id: 11,
    telegramId: 887654321,
    name: "Sherzod Mirzayev",
    username: "sherzod_m",
    status: "Inactive",
    joinDate: "2024-11-25",
  },
  {
    id: 12,
    telegramId: 776543210,
    name: "Nilufar Hamidova",
    username: "nilufar_h",
    status: "Active",
    joinDate: "2024-12-06",
  },
];

function AllUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.telegramId.toString().includes(searchQuery);
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-gray-900 mb-1">All Users</h1>
        <p className="text-gray-600">
          From Telegram WebApp • {mockUsers.length} users
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by name, username or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2">
        <ListFilter size={16} className="text-gray-600" />
        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter("All")}
            className={`px-3 py-1 rounded-full text-xs transition-colors ${
              statusFilter === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("Active")}
            className={`px-3 py-1 rounded-full text-xs transition-colors ${
              statusFilter === "Active"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("Inactive")}
            className={`px-3 py-1 rounded-full text-xs transition-colors ${
              statusFilter === "Inactive"
                ? "bg-gray-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* User List */}
      <div className="space-y-2">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CircleUser className="text-blue-600" size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{user.name}</h3>

                  {/* Telegram Username */}
                  <div className="flex items-center gap-1 text-blue-600 mb-1">
                    <AtSign size={14} />
                    <span className="text-xs">{user.username}</span>
                  </div>

                  {/* Telegram ID */}
                  <div className="flex items-center gap-1 text-gray-500 mb-1">
                    <Hash size={14} />
                    <span className="text-xs">ID: {user.telegramId}</span>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar size={14} />
                    <span className="text-xs">Joined: {user.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.status === "Active"
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No users found</p>
        </div>
      )}
    </div>
  );
}

export default AllUsers;
