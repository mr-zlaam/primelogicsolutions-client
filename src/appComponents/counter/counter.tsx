"use client";
import React, { useState, useEffect } from "react";
import { Timer, ArrowRight } from "lucide-react";

// Set a fixed launch date - 28 days from Jan 15, 2025
const LAUNCH_DATE = new Date("2025-02-12T00:00:00");

const calculateTimeLeft = () => {
  const difference = LAUNCH_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const AnnouncementPage = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Exciting News!</h1>
            <p className="text-white text-center text-sm">
              Launching on: {mounted ? LAUNCH_DATE.toLocaleDateString() : "--"} at {mounted ? LAUNCH_DATE.toLocaleTimeString() : "--"}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-orange-800 mb-4">Prime Logic Solutions is Now Part of DKC Group</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We are excited to announce that Prime Logic Solutions has officially become part of the DKC Group of Companies! As we integrate and
                  align our services with the dynamic offerings of DKC, we are also restructuring our website to reflect our enhanced capabilities and
                  commitment to innovation.
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="bg-orange-50 rounded-xl p-8 my-8">
                <h3 className="text-2xl font-semibold text-orange-800 text-center mb-6">New Website Launch Countdown</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="text-center">
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="text-3xl font-bold text-orange-600">{String(item.value).padStart(2, "0")}</div>
                        <div className="text-gray-600 text-sm">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Tuned Section */}
              <div className="text-center bg-orange-50 rounded-xl p-8">
                <Timer className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-orange-800 mb-4">Stay Tuned!</h3>
                <p className="text-gray-600">We are working hard to bring you a redesigned digital experience. Our new website will feature:</p>
                <ul className="text-gray-600 mt-4 space-y-2">
                  <li className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-orange-500 mr-2" />
                    Comprehensive suite of services
                  </li>
                  <li className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-orange-500 mr-2" />
                    Refreshed modern look
                  </li>
                  <li className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-orange-500 mr-2" />
                    Enhanced user experience
                  </li>
                </ul>
              </div>

              {/* Thank You Message */}
              <div className="text-center mt-8">
                <p className="text-gray-600 italic">Thank you for your continued support as we embark on this exciting journey together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
