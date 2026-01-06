import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-purple-400">Admin Dashboard</h1>
            <Link href="/" className="text-gray-300 hover:text-purple-400">
              ← Back to Site
            </Link>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-white mb-8">Welcome to Admin Panel</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-gray-400 text-sm mb-2">Total Events</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-gray-400 text-sm mb-2">Team Members</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-gray-400 text-sm mb-2">Achievements</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-gray-400 text-sm mb-2">Users</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Manage Events</h3>
            <p className="text-gray-400 mb-4">Create, edit, and delete events</p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition">
              Manage Events
            </button>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Manage Team</h3>
            <p className="text-gray-400 mb-4">Add or remove team members</p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition">
              Manage Team
            </button>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Manage Content</h3>
            <p className="text-gray-400 mb-4">Edit website text and content</p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition">
              Manage Content
            </button>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Settings</h3>
            <p className="text-gray-400 mb-4">Configure site settings</p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
