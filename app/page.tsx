"use client";

import { useState } from "react";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: "💻",
    title: "Website Design",
    text: "We design websites which is modern and responsive in any types of device.",
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    text: "Designing banners , Logos and social media creatives that are very attractive.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    text: "Smart campaigns in Facebook and Google which bring conversions.",
  },
  {
    icon: "🛒",
    title: "Shopify Website Development",
    text: "Custom Shopify stores which can be customized according to your needs.",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    text: "Rank your portfolio,blogging and many types of website in a search engine.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    text: "Post your stories in social media platforms to attract more followers.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          {/* <a href="#home" className="text-2xl font-bold text-indigo-600">
            Clickora Digital
          </a> */}
   <img
  src="/clickora-logo.png"
  alt="Clickora Digital Logo"
  width={200} height={50}
/>
          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-gray-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>

         

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 pb-5 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-indigo-600 px-5 py-3 text-center font-semibold text-white hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className=""
      >
    <img
  src="/clickora-banner.png"
  alt="Clickora Digital Banner"
  className="w-full"
/>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">Why Choose Us?</h2>

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
                <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{feature.text}</p>
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
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
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
      <footer id="services" className="bg-gray-900 px-6 pt-16 text-gray-300">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Our Services</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Everything your business needs to look good and grow online.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-700 bg-gray-800/60 p-6 transition hover:border-indigo-500 hover:bg-gray-800"
              >
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-gray-700 pt-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-white">Clickora Digital</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
                We design and develop any type of website like E-commerce, Portfolio,Business, Blogs, ERP using technology like PHP, Laravel,Magento and Shopify.We also run degital campains in Facebook and Google
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:hello@example.com" className="hover:text-white">
                    hello@example.com
                  </a>
                </li>
                <li>9354178376</li>
                <li>College Chawk , Bahadur Ganj </li>
                <li>Kishanganj, Bihar </li>
                  <li>855101</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 py-6 text-center text-sm text-gray-500">
            © 2026 Clickora Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
