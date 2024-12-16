"use client";

import Image from "next/image";

const IndustryDetail = () => {
  return (
    <>
      <section className="py-32">
        <div className="container mx-auto p-5">
          {/* Main Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Image Section */}
              <div className="mb-6">
                <Image
                  width={953}
                  height={546}
                  src="/assets/images/industry/critical-infrastructure.jpg" // Replace with your image path
                  alt="Critical Infrastructure"
                  className="rounded-lg w-full h-auto"
                />
              </div>

              {/* Title Section */}
              <h1 className="text-2xl font-bold mb-4">North American Critical Infrastructure Sector</h1>
              <p className="text-gray-600 mb-6">
                Critical infrastructure, including energy grids, transportation systems, water supply, and communication networks, forms the backbone
                of North America's economy and security. Protecting these essential systems from cyber threats, natural disasters, and other
                vulnerabilities is paramount.
              </p>

              {/* Market Overview */}
              <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
              <p className="text-gray-600 mb-6">
                With increasing reliance on digital solutions, the critical infrastructure protection market is projected to exceed $130 billion
                globally by 2030, driven by innovations in cybersecurity, IoT, and AI. North America leads this growth with advanced systems for
                resilience and security.
              </p>

              {/* Challenges Section */}
              <h2 className="text-2xl font-bold mb-4">Challenges in the Sector</h2>
              <ul className="grid grid-cols-2 gap-4 text-primary mb-6">
                <li>Cybersecurity Risks</li>
                <li>Data Silos</li>
                <li>Aging Systems</li>
                <li>Natural Disasters</li>
                <li>Regulatory Complexities</li>
                <li>Limited Public Awareness</li>
              </ul>

              {/* Solutions Section */}
              <h2 className="text-2xl font-bold mb-4">How We Plug in Our Challenges</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  <strong>Smart Infrastructure Upgrades:</strong> IoT solutions for real-time monitoring and digital twins for resilience.
                </li>
                <li>
                  <strong>Cybersecurity Solutions:</strong> Advanced threat detection, encryption tools, and incident response platforms.
                </li>
                <li>
                  <strong>Utility and Asset Management Systems:</strong> Centralized systems for tracking and predictive maintenance.
                </li>
                <li>
                  <strong>Regulatory Compliance Tools:</strong> Automated reporting, blockchain-based documentation, and real-time dashboards.
                </li>
                <li>
                  <strong>Public Awareness Campaigns:</strong> Digital outreach, community dashboards, and emergency preparedness tools.
                </li>
                <li>
                  <strong>Emergency Preparedness and Disaster Recovery:</strong> AI-powered tools for natural disaster simulations and recovery
                  platforms.
                </li>
                <li>
                  <strong>Branding and Corporate Responsibility:</strong> Showcasing ESG compliance and sustainability leadership.
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-4">
                  {[
                    "Smart Infrastructure Upgrades",
                    "Cybersecurity Solutions",
                    "Utility and Asset Management Systems",
                    "Regulatory Compliance Tools",
                    "Public Awareness Campaigns",
                    "Emergency Preparedness and Disaster Recovery",
                    "Branding and Corporate Responsibility"
                  ].map((category, index) => (
                    <li
                      key={index}
                      className="text-primary hover:underline cursor-pointer">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Download</h3>
                <div className="space-y-2">
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600">Download PDF</button>
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Download DOC</button>
                </div>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Ask a Question</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    placeholder="Write Message..."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={4}></textarea>
                  <button className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-orange-600">Ask Question Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryDetail;
