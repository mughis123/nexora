
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600">
          Nova
        </h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
        </div>

        <a
          href="#contact"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-indigo-50 to-white px-6 py-24 text-center"
      >
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700 mb-6">
          Welcome to Nova
        </span>

        <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl font-bold leading-tight">
          Build Something
          <span className="text-indigo-600"> Amazing </span>
          Today
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
          Create better experiences with simple tools,
          smart solutions, and a modern approach to work.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-7 py-3 text-white font-semibold hover:bg-indigo-700"
          >
            Get Started →
          </a>

          <a
            href="#features"
            className="rounded-lg border border-gray-300 px-7 py-3 font-semibold hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Everything you need to get started.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Fast Performance",
                text: "Enjoy a smooth and fast experience on every device.",
              },
              {
                icon: "🎨",
                title: "Modern Design",
                text: "Beautiful layouts that look great on any screen.",
              },
              {
                icon: "🔒",
                title: "Reliable & Secure",
                text: "Build with confidence using modern web technology.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-5 text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="about"
        className="bg-indigo-600 px-6 py-16 text-center text-white"
      >
        <h2 className="text-3xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-indigo-100">
          Take the first step and bring your ideas to life.
        </p>
        <a
          id="contact"
          href="mailto:hello@example.com"
          className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-indigo-600 hover:bg-indigo-50"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nova. All rights reserved.
      </footer>
    </main>
  );
}
