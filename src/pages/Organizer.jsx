import { useState } from "react";
import { Search, MapPin, Calendar, ChevronRight, Trophy } from "lucide-react";

// Mock organizer data - updated for games/events
const mockOrganizers = [
  {
    id: 1,
    name: "Sport Arena UZ",
    city: "Tashkent",
    district: "Chilonzor",
    gamesCount: 24,
    games: [
      "Football Match - 12 Players",
      "Basketball Game - 10 Players",
      "Volleyball - 12 Players",
    ],
  },
  {
    id: 2,
    name: "Cultural Events Group",
    city: "Tashkent",
    district: "Yunusabad",
    gamesCount: 18,
    games: [
      "Music Festival - 200 Guests",
      "Art Exhibition - 150 Guests",
      "Theater Show - 180 Guests",
    ],
  },
  {
    id: 3,
    name: "Tech Meetups Samarkand",
    city: "Samarkand",
    district: "Center",
    gamesCount: 12,
    games: [
      "Startup Pitch - 50 People",
      "Developer Conference - 120 People",
      "AI Workshop - 30 People",
    ],
  },
  {
    id: 4,
    name: "Educational Hub",
    city: "Bukhara",
    district: "Old City",
    gamesCount: 15,
    games: [
      "Language Course - 25 Students",
      "Science Fair - 80 Students",
      "Career Workshop - 60 People",
    ],
  },
  {
    id: 5,
    name: "Fitness Pro",
    city: "Tashkent",
    district: "Mirzo Ulugbek",
    gamesCount: 32,
    games: [
      "Yoga Session - 20 People",
      "CrossFit Challenge - 15 Teams",
      "Marathon - 200 Runners",
    ],
  },
  {
    id: 6,
    name: "Business Network",
    city: "Tashkent",
    district: "Shaykhontohur",
    gamesCount: 9,
    games: [
      "Networking Event - 100 People",
      "Business Summit - 150 People",
      "Investment Forum - 80 People",
    ],
  },
  {
    id: 7,
    name: "Kids Entertainment",
    city: "Andijan",
    district: "Center",
    gamesCount: 21,
    games: [
      "Birthday Party - 30 Kids",
      "Magic Show - 50 Kids",
      "Puppet Theater - 40 Kids",
    ],
  },
  {
    id: 8,
    name: "Gaming League UZ",
    city: "Tashkent",
    district: "Yashnobod",
    gamesCount: 16,
    games: [
      "Dota 2 Tournament - 10 Teams",
      "FIFA Championship - 16 Players",
      "Mobile Legends - 20 Teams",
    ],
  },
];

const cities = ["All", "Tashkent", "Samarkand", "Bukhara", "Andijan"];
const districtsMap = {
  Tashkent: [
    "All",
    "Chilonzor",
    "Yunusabad",
    "Mirzo Ulugbek",
    "Shaykhontohur",
    "Yashnobod",
  ],
  Samarkand: ["All", "Center"],
  Bukhara: ["All", "Old City"],
  Andijan: ["All", "Center"],
};

function AllOrganizers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filteredOrganizers = mockOrganizers.filter((organizer) => {
    const matchesSearch = organizer.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCity = cityFilter === "All" || organizer.city === cityFilter;
    const matchesDistrict =
      districtFilter === "All" || organizer.district === districtFilter;
    return matchesSearch && matchesCity && matchesDistrict;
  });

  const availableDistricts =
    cityFilter !== "All" ? districtsMap[cityFilter] || ["All"] : ["All"];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-gray-900 mb-1">All Organizers</h1>
        <p className="text-gray-600">
          Total: {mockOrganizers.length} organizers
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
          placeholder="Search organizers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* City Filter */}
      <div>
        <p className="text-gray-600 text-xs mb-2">Filter by City</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => {
                setCityFilter(city);
                setDistrictFilter("All");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                cityFilter === city
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* District Filter */}
      {cityFilter !== "All" && (
        <div>
          <p className="text-gray-600 text-xs mb-2">Filter by District</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {availableDistricts.map((district) => (
              <button
                key={district}
                onClick={() => setDistrictFilter(district)}
                className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                  districtFilter === district
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {district}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Organizer List */}
      <div className="space-y-3">
        {filteredOrganizers.map((organizer) => (
          <div
            key={organizer.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{organizer.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <MapPin size={14} />
                    <span className="text-xs">
                      {organizer.city}, {organizer.district}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg flex items-center gap-1">
                    <Trophy size={14} />
                    <p className="text-xs">{organizer.gamesCount} games</p>
                  </div>
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() =>
                  setExpandedId(
                    expandedId === organizer.id ? null : organizer.id
                  )
                }
                className="flex items-center gap-1 text-blue-600 text-xs mt-2"
              >
                <span>
                  {expandedId === organizer.id ? "Hide" : "Show"} Games/Events
                </span>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${
                    expandedId === organizer.id ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            {/* Expanded Games List */}
            {expandedId === organizer.id && (
              <div className="bg-gray-50 p-4 border-t border-gray-100 space-y-2">
                <p className="text-gray-600 text-xs mb-2">
                  Created Games/Events:
                </p>
                {organizer.games.map((game, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white p-2 rounded-lg"
                  >
                    <Calendar size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-700">{game}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredOrganizers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No organizers found</p>
        </div>
      )}
    </div>
  );
}

export default AllOrganizers;
