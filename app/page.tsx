import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/50 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI & Data Club
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#events" className="text-gray-300 hover:text-purple-400 transition">Events</a>
              <a href="#team" className="text-gray-300 hover:text-purple-400 transition">Team</a>
              <Link href="/admin" className="text-gray-300 hover:text-purple-400 transition">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Welcome to AI & Data Club
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering students to become job-ready for the AI & Data market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
              Explore Events
            </a>
            <a href="#about" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300">
                To help students at Innovation University become industry-ready professionals in AI and Data Science through hands-on learning, workshops, and real-world projects.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h3>
              <p className="text-gray-300">
                Building a community of skilled AI and Data professionals who can drive innovation and solve real-world problems using cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition">
                <div className="h-40 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-white">Event Title {i}</h3>
                <p className="text-gray-400 text-sm mb-4">Coming soon...</p>
                <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full mb-4"></div>
                <h3 className="text-lg font-bold text-white">Member {i}</h3>
                <p className="text-gray-400 text-sm">Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 AI & Data Club - Innovation University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
