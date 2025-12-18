// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Organizer from "./pages/Organizer";
// import AllUsers from "./pages/AllUsers";
// import Statict from "./pages/Statict";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <>
//       <div>
//         <Routes>
//           <Route index element={<Dashboard />} />
//           <Route path="/oranizers" element={<Organizer />} />
//           <Route path="/allusers" element={<AllUsers />} />
//           <Route path="/statict" element={<Statict />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>

//       <Sidebar />
//     </>
//   );
// }

// export default App;









import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  DollarSign,
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import AllUsers from "./pages/AllUsers";
import AllOrganizers from "./pages/Organizer";
import Reports from "./pages/Reports";
import Revenue from "./pages/Revenue";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <AllUsers />;
      case "organizers":
        return <AllOrganizers />;
      case "reports":
        return <Reports />;
      case "revenue":
        return <Revenue />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 max-w-[480px] mx-auto">
      {/* Main Content Area with smooth transitions */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="animate-[fadeIn_0.3s_ease-in-out]">{renderPage()}</div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white border-t border-gray-200 px-4 py-2 shadow-lg safe-area-inset-bottom">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              currentPage === "dashboard"
                ? "text-blue-600 bg-blue-50 scale-105"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="text-xs">Dashboard</span>
          </button>

          <button
            onClick={() => setCurrentPage("users")}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              currentPage === "users"
                ? "text-blue-600 bg-blue-50 scale-105"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Users size={20} />
            <span className="text-xs">Users</span>
          </button>

          <button
            onClick={() => setCurrentPage("organizers")}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              currentPage === "organizers"
                ? "text-blue-600 bg-blue-50 scale-105"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Building2 size={20} />
            <span className="text-xs">Organizers</span>
          </button>

          <button
            onClick={() => setCurrentPage("reports")}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              currentPage === "reports"
                ? "text-blue-600 bg-blue-50 scale-105"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FileText size={20} />
            <span className="text-xs">Reports</span>
          </button>

          <button
            onClick={() => setCurrentPage("revenue")}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              currentPage === "revenue"
                ? "text-blue-600 bg-blue-50 scale-105"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <DollarSign size={20} />
            <span className="text-xs">Revenue</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;