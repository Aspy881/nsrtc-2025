"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";
import { PUBLIC_URL } from '../../config';

const scheduleData = {
  day1: {
    date: "18th July 2025, Friday",
    events: [
      {
        time: "02:00 PM - 04:00 PM",
        title: "Technical Session",
        description: "Specialized technical discussions on conference themes",
      },
      {
        time: "04:00 PM - 07:00 PM",
        title: "Premise of Noble Prize Work by Distinguished Scientists",
        description:
          "Presentations by leading scientists on Nobel Prize-winning research",
      },
      {
        time: "04:00 PM - 07:00 PM",
        title: "Inauguration Ceremony",
        description: "Official opening with distinguished guests including:",
        speakers: [
          "Shri. Ashwini Vaishnaw, Minister for Railways, Information & Broadcasting, and Electronics & IT, Govt of India",
          "Shri. Jitendra Singh, Minister of Science and Technology, Govt of India",
          "Shri. Dharmendra Pradhan, Minister of Higher Education, Govt of India",
          "Dr. Raghunath A. Mashelkar, Former Director General, CSIR, New Delhi",
          "Dr. Vijay P. Bhatkar, Founder Director, C-DAC",
          "Prof. Dr. Abhay Karandikar, Secretary, Department of Science and Technology",
          "Dr. Nallathamby Kalaiselvi, Director General, CSIR, New Delhi",
        ],
      },
    ],
  },
  day2: {
    date: "19th July 2025, Saturday",
    events: [
      {
        time: "10:00 AM - 06:00 PM",
        title: "Technical Session",
        description: "Full day of technical presentations and discussions",
        speakers: [
          "Chief Guest: Prof. Dr. Ajay Kumar Sood, Principal Scientific Advisor, Govt of India",
          "Guest of Honor: Dr. Shivkumar Kalyanraman, CEO, Anusandhan National Research Foundation, Govt of India",
          "Guest of Honor: Prof. Dr. V. Ramgopal Rao, Group Vice Chancellor, BITS Pilani",
        ],
      },
    ],
  },
  day3: {
    date: "20th July 2025, Sunday",
    events: [
      {
        time: "10:00 AM - 02:00 PM",
        title: "Technical Session",
        description: "Final technical discussions and presentations",
      },
      {
        time: "04:00 PM - 06:00 PM",
        title: "Valedictory Ceremony",
        description: "Closing ceremony with distinguished guests:",
        speakers: [
          "Prof. Dr. Ganapati D. Yadav, Former Vice-Chancellor, Institute of Chemical Technology, Mumbai",
          "Dr. Shekhar Mande, Former Director General, CSIR, New Delhi",
          "Prof. Dr. Manish R. Joshi, Secretary, University Grants Commission, New Delhi",
        ],
      },
    ],
  },
};

export default function ScheduleTimeline({ preview = false }) {
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Conference Schedule"
          subtitle="Join us for three days of insightful discussions, presentations, and networking"
        />

        {!preview && (
          <div className="flex flex-wrap justify-center mb-10 space-x-2">
            {Object.keys(scheduleData).map((day, index) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-md mb-2 ${
                  activeDay === day
                    ? "bg-blue-800 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                
                Day {index + 1}: {scheduleData[day].date.split(",")[0]}
              </button>
            ))}
          </div>
        )}

        <div className="relative">
          {/* Adjusted timeline line to not overlap date */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-16 w-1 bg-blue-200 h-[calc(100%-4rem)]"></div>

          <div className="space-y-8">
            {(preview
              ? Object.entries(scheduleData).slice(0, 1)
              : Object.entries(scheduleData)
            )
              .filter(([day]) => preview || day === activeDay)
              .map(([day, { date, events }]) => (
                <div key={day} className="mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-red-700 text-white px-6 py-2 rounded-full flex items-center z-10 relative">
                      <Calendar className="mr-2 h-5 w-5" />
                      <span className="font-bold">{date}</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {events.map((event, idx) => (
                      <div
                        key={idx}
                        className="relative flex flex-col md:flex-row items-start"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-800 rounded-full border-4 border-blue-100 z-10"></div>

                        {/* Time */}
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-6 md:pl-0">
                          <div className="bg-blue-100 inline-flex items-center px-4 py-2 rounded-md text-blue-800 font-semibold">
                            <Clock className="mr-2 h-4 w-4" />
                            {event.time}
                          </div>
                        </div>

                        {/* Event details */}
                        <div className="md:w-1/2 md:pl-12 pl-6">
                          <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                              {event.description}
                            </p>

                            {event.speakers && (
                              <div>
                                <h4 className="font-semibold text-red-700 mb-2">
                                  Distinguished Guests:
                                </h4>
                                <ol className="list-decimal list-outside pl-6 space-y-1 font-semibold text-gray-700">
                                  {event.speakers.map((speaker, i) => (
                                    <li key={i}>{speaker}</li>
                                  ))}
                                </ol>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {preview && (
          <div className="text-center mt-10">
            <a
              href={`${PUBLIC_URL}nsrtc/schedule`}
              className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
