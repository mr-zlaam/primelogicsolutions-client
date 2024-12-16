// Water Sector
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
                  src="/assets/images/industry/water-sector.jpg" // Replace with your image path
                  alt="Cooling System"
                  className="rounded-lg w-full h-auto"
                />
              </div>

              {/* Title Section */}
              <h1 className="text-2xl font-bold mb-4">North American Water Industry</h1>
              <p className="text-gray-600 mb-6">
                Utilities and Municipalities with over 52,000 water utilities in the U.S. alone, advanced IT systems play a critical role in enabling
                efficient billing, distribution, and leak detection. These technologies ensure seamless service delivery across vast networks.
              </p>
              {/* <p className="text-gray-600 mb-6">
                Advancements in Technology: IoT, AI, and cloud platforms have revolutionized water operations, enabling smarter monitoring, predictive analytics, and efficient resource management.
              </p> */}

              {/* Mission Section */}
              <h2 className="text-2xl font-bold mb-4">Smart Water Technology Market</h2>
              <p className="text-gray-600 mb-6">
                The Smart Water Technology Market in North America is projected to surpass $33 billion by 2027, driven by innovations in IoT, SCADA
                systems, and AI-powered analytics, reflecting a strong focus on modernization and efficiency.
              </p>

              {/* Image Grid */}
              {/* <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="technician1.jpg" // Replace with your image path
                  alt="Technician Working"
                  className="rounded-lg"
                />
                <img
                  src="technician2.jpg" // Replace with your image path
                  alt="Technicians Installing"
                  className="rounded-lg"
                />
              </div> */}

              {/* Services Section */}
              <h2 className="text-2xl font-bold mb-4">Aging Infrastructure</h2>
              <p className="text-gray-600 mb-6">
                Over 30% of North America’s water infrastructure is over 50 years old, posing challenges in integrating modern IT solutions. High
                costs and outdated systems remain key obstacles to achieving digital transformation in the sector.
              </p>

              <h2 className="text-2xl font-bold mb-4">Challenges</h2>
              <ul className="grid grid-cols-2 gap-4 text-primary mb-6">
                <li>Cybersecurity Risks</li>
                <li>Data Silos</li>
                <li>High Implementation Costs</li>
                <li>Regulatory Complexities</li>
                <li>Limited Public Awareness</li>
                <li>Digital Divide</li>
              </ul>

              {/* FAQ Section */}
              <h2 className="text-2xl font-bold mb-4">How we plugin our challenges</h2>
              <div className="space-y-4">
                {/* FAQ Items */}
                {[
                  {
                    question: "Smart Infrastructure Upgrades",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        IoT and SCADA Integration: Retrofitting aging water systems with IoT sensors and SCADA systems for real-time monitoring of
                        pipelines, leak detection, and water quality.
                        <span className="block mt-4">
                          Cloud-Based Platforms: Centralizing data for seamless access and advanced analytics, reducing silos between departments.
                          AI-Powered Analytics: Forecasting water demand, optimizing distribution, and predicting maintenance to reduce downtime.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Cybersecurity Solutions",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Critical Infrastructure Protection: Implementing advanced encryption, firewalls, and incident response plans to prevent
                        cyberattacks.
                        <span className="block mt-4">
                          Data Privacy Compliance: Ensuring utilities adhere to federal and state data protection regulations.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Utility Management Systems",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Automated Billing Solutions: Streamlining customer billing processes with self-service portals and payment integrations.
                        <span className="block mt-4">
                          Predictive Maintenance Tools: Using machine learning to identify equipment failures before they disrupt operations.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Regulatory Compliance Tools",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Automated Reporting Platforms: Simplifying EPA and local compliance reporting with real-time updates and customized
                        dashboards.
                        <span className="block mt-4">
                          GIS-Integrated Systems: Mapping water infrastructure to ensure adherence to zoning and environmental regulations.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Public Awareness Campaigns",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Water Conservation Campaigns: Creating targeted social media, PPC, and content campaigns to educate communities about
                        sustainable water use.
                        <span className="block mt-4">
                          Interactive Engagement Tools: Developing water calculators and interactive dashboards to engage consumers and promote
                          conservation efforts.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Community Engagement and Outreach",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Localized SEO: Optimizing content to address region-specific water issues, such as droughts in California or flood prevention
                        in the Midwest.
                        <span className="block mt-4">
                          Social Media Strategies: Leveraging platforms like Instagram, LinkedIn, and Twitter to promote smart water technologies and
                          conservation practices.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Lead Generation for Utilities",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Targeted Advertising: Running digital ad campaigns to promote smart meters, leak detection systems, and water-saving devices.
                        <span className="block mt-4">
                          Email Marketing: Sharing newsletters with actionable tips, updates, and water-saving solutions for residential and
                          industrial users.
                        </span>
                      </p>
                    )
                  },
                  {
                    question: "Branding and Corporate Responsibility",
                    answer: (
                      <p className="mt-2 text-gray-600">
                        Sustainability Storytelling: Showcasing ESG initiatives through videos, blogs, and infographics to build trust and
                        credibility.
                        <span className="block mt-4">
                          Crisis Communication: Designing clear and effective communication strategies for emergencies like droughts, floods, or
                          contamination.
                        </span>
                      </p>
                    )
                  }
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="bg-gray-100 rounded-lg p-4 cursor-pointer">
                    <summary className="font-semibold text-lg">{faq.question}</summary>
                    {faq.answer}
                    {/* <p className="mt-2 text-gray-600">{faq.answer}</p> */}
                  </details>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                {/* <ul className="space-y-2">
                  {[
                    "Infrastructure Modernization",
                    "Data Analytics & Insights",
                    "Customer Engagement & Billing",
                    "Regulatory Compliance & Reporting",
                    "Cybersecurity & Infrastructure Protection",
                    "Digital Marketing & Public Awareness",
                    "Emergency & Climate Resilience Solutions",
                  ].map((category, index) => (
                    <li
                      key={index}
                      className="text-primary hover:underline cursor-pointer"
                    >
                      {category}
                    </li>
                  ))}
                </ul> */}
                <div className="space-y-4">
                  {/* FAQ Items */}
                  {[
                    {
                      question: "Infrastructure Modernization",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>IoT Deployment for real - time monitoring of pipelines and water systems.</li>
                            <li>SCADA System Integration for automation and centralized control.</li>
                            <li>Digital Twin Solutions for predictive maintenance and infrastructure simulation.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Campaigns showcasing modernization success stories.</li>
                            <li>Content marketing to educate stakeholders on the benefits of modern infrastructure.</li>
                          </ul>
                        </>
                      )
                    },
                    {
                      question: "Data Analytics & Insights",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Predictive Analytics for demand forecasting and operational optimization.</li>
                            <li>GIS Mapping to visualize water distribution networks and resources.</li>
                            <li>Centralized Data Platforms to unify operational and IoT data.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Data storytelling through infographics and blogs.</li>
                            <li>SEO campaigns focusing on technology-driven water solutions.</li>
                          </ul>
                        </>
                      )
                    },
                    {
                      question: "Customer Engagement & Billing",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Self-Service Portals for billing, issue reporting, and water usage insights.</li>
                            <li>Automated Billing Systems integrated with smart meters.</li>
                            <li>Mobile Applications for real-time updates and personalized conservation tips.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Interactive tools like water usage calculators for customer engagement.</li>
                            <li>Targeted PPC campaigns to promote smart billing solutions.</li>
                          </ul>
                        </>
                      )
                    },
                    {
                      question: "Regulatory Compliance Tools",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li> Automated Reporting Platforms for EPA and state compliance.</li>
                            <li>Blockchain for secure water rights and regulatory record management.</li>
                            <li>Real-Time Monitoring for compliance metrics on water quality and discharge.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Educational campaigns about regulatory requirements and solutions.</li>
                            <li>Video marketing to explain compliance tools to stakeholders.</li>
                          </ul>
                        </>
                      )
                    },
                    {
                      question: "Public Awareness Campaigns",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Interactive Dashboards for tracking conservation efforts.</li>
                            <li>Cloud-Based Campaign Management Platforms for government agencies.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Social media campaigns promoting water conservation.</li>
                            <li>Community engagement programs via email marketing and localized SEO</li>
                          </ul>
                        </>
                      )
                    },
                    {
                      question: "System Security",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Cyber Threat Detection systems for critical infrastructure.</li>
                            <li>Incident Response Planning and recovery solutions.</li>
                            <li>Data Encryption and Privacy Compliance tools for secure operations.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Awareness campaigns about the importance of cybersecurity in utilities.</li>
                            <li>Content marketing to highlight Prime Logic’s expertise in securing systems.</li>
                          </ul>
                        </>
                      )
                    },
                    {
                      question: "Public Engagement",
                      answer: (
                        <>
                          <p className="font-bold mt-4">IT Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Disaster Recovery Platforms for ensuring water supply continuity.</li>

                            <li>Flood and Drought Management Systems using AI and IoT.</li>
                            <li>Climate Impact Simulations for proactive planning.</li>
                          </ul>
                          <p className="font-bold mt-4">Digital Marketing Services:</p>
                          <ul className="px-4 mt-4 flex flex-col gap-2">
                            <li>Crisis communication strategies for utilities and municipalities.</li>
                            <li>Interactive simulations for public education on disaster preparedness.</li>
                          </ul>
                        </>
                      )
                    }
                  ].map((faq, index) => (
                    <details
                      key={index}
                      className="bg-gray-100 text-gray-500 rounded-lg p-4 cursor-pointer">
                      <summary className="font-semibold text-lg">{faq.question}</summary>
                      {faq.answer}
                      {/* <p className="mt-2 text-gray-600">{faq.answer}</p> */}
                    </details>
                  ))}
                </div>
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
