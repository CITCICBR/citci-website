"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "@/components/fadein-transition";
import calendar from "./calendar.json";
import selectedEvents from "./selected-events.json";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@radix-ui/react-tooltip";
import PageCTA from "@/components/page-cta";

function EventsCalendarPage() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { calendarEvents } = calendar;

  const year = new Date().getFullYear();
  const monthIndex = new Date().getMonth();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(monthIndex);
  const [currentYear, setCurrentYear] = useState(year);

  const getEventsForDay = (day: number) => {
    const targetMonth = months[currentMonthIndex];
    return calendarEvents.filter((event) => {
      try {
        const parts = event.date.split(", ");
        if (parts.length < 2) return false;

        const lastPart = parts[parts.length - 1];
        const year = parseInt(lastPart, 10);
        if (year !== currentYear) return false;

        const datePart = parts.slice(0, -1).join(", ");

        // Format: March 1
        if (/^[A-Za-z]+ \d+$/.test(datePart)) {
          const [month, dayStr] = datePart.split(" ");
          return month === targetMonth && parseInt(dayStr, 10) === day;
        }

        // Format: March 1-3
        if (/^[A-Za-z]+ \d+-\d+$/.test(datePart)) {
          const [month, range] = datePart.split(" ");
          const [startDay, endDay] = range.split("-").map(Number);
          return month === targetMonth && day >= startDay && day <= endDay;
        }

        // Format: March 24 & 30
        if (/^[A-Za-z]+ \d+(?: *& *\d+)+$/.test(datePart)) {
          const [month, daysStr] = datePart.split(" ");
          const days = daysStr.split("&").map((d) => parseInt(d.trim(), 10));
          return month === targetMonth && days.includes(day);
        }

        // Format: July 31 – August 5
        if (/^[A-Za-z]+ \d+ *[–-] *[A-Za-z]+ \d+$/.test(datePart)) {
          const [startPart, endPart] = datePart
            .split(/[–-]/)
            .map((str) => str.trim());
          const [startMonth, startDay] = startPart.split(" ");
          const [endMonth, endDay] = endPart.split(" ");

          const startMonthIndex = months.indexOf(startMonth);
          const endMonthIndex = months.indexOf(endMonth);

          if (
            currentMonthIndex === startMonthIndex &&
            day >= parseInt(startDay, 10)
          )
            return true;

          if (
            currentMonthIndex === endMonthIndex &&
            day <= parseInt(endDay, 10)
          )
            return true;

          return false;
        }

        // Format: Every Wednesday, August to November
        if (/^Every [A-Za-z]+, [A-Za-z]+ to [A-Za-z]+$/.test(datePart)) {
          const match = datePart.match(
            /^Every ([A-Za-z]+), ([A-Za-z]+) to ([A-Za-z]+)$/
          );
          if (!match) return false;

          const [, weekdayStr, startMonthStr, endMonthStr] = match;
          const startIdx = months.indexOf(startMonthStr);
          const endIdx = months.indexOf(endMonthStr);

          if (currentMonthIndex >= startIdx && currentMonthIndex <= endIdx) {
            const date = new Date(currentYear, currentMonthIndex, day);
            const weekday = date.toLocaleDateString("en-US", {
              weekday: "long",
            });
            return weekday === weekdayStr;
          }

          return false;
        }

        if (
          /^[A-Za-z]+ \((First|Second|Third|Fourth|Fifth) Week\)$/.test(
            datePart
          )
        ) {
          const match = datePart.match(
            /^([A-Za-z]+) \((First|Second|Third|Fourth|Fifth) Week\)$/
          );
          if (!match) return false;

          const [, monthStr, ordinalWeek] = match;
          if (monthStr !== targetMonth) return false;

          const weekMap: Record<string, number> = {
            First: 0,
            Second: 1,
            Third: 2,
            Fourth: 3,
            Fifth: 4,
          };
          const weekIndex = weekMap[ordinalWeek];

          // Compute the actual dates of that week
          const startDay = 1 + weekIndex * 7;
          const endDay = startDay + 6;

          return day >= startDay && day <= endDay;
        }

        return false;
      } catch (err) {
        console.warn(`Error parsing date '${event.date}'`, err);
        return false;
      }
    });
  };

  const getDaysInMonth = (monthIndex: number, year: number) =>
    new Date(year, monthIndex + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1).getDay();

  const calendarDays = Array(firstDayOfMonth)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  const goToPreviousMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonthIndex((prev) => prev - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonthIndex((prev) => prev + 1);
    }
  };

  return (
    <div id="sy-calendar" className="container mx-auto px-4 py-8 font-serif">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Calendar Header */}
        <div className="bg-amber-500 text-white p-4 flex justify-between items-center">
          <button
            onClick={goToPreviousMonth}
            className="text-white hover:text-amber-100"
          >
            <ChevronLeft />
          </button>
          <h2 className="text-xl font-bold">
            {months[currentMonthIndex]} {currentYear}
          </h2>
          <button
            onClick={goToNextMonth}
            className="text-white hover:text-amber-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-slate-200">
          {/* Day Headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="bg-slate-100 text-center py-2 font-semibold uppercase font-sans text-slate-600"
            >
              {day}
            </div>
          ))}

          {/* Calendar Days */}
          {calendarDays.map((day, index) => {
            const isWeekend = day
              ? [0, 6].includes(
                  new Date(currentYear, currentMonthIndex, day).getDay()
                )
              : false;

            const dayEvents = day && !isWeekend ? getEventsForDay(day) : [];

            return (
              <div
                key={index}
                className={`bg-white font-sans min-h-[100px] p-2
                  ${!day ? "bg-slate-50" : ""}
                  ${dayEvents.length > 0 ? "border-l-4 border-amber-600" : ""}`}
              >
                {day && (
                  <>
                    <div className="font-medium text-slate-600">{day}</div>
                    {!isWeekend && (
                      <div className="mt-1 space-y-1 wrap">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded truncate 
                              ${
                                event.category === "Academic"
                                  ? "bg-amber-100 text-amber-800"
                                  : event.category === "Spiritual"
                                  ? "bg-slate-100 text-slate-600"
                                  : event.category === "Sports"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-slate-50 text-slate-600"
                              }`}
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span>{event.title}</span>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="bg-white text-amber-500 px-4 py-2 rounded-md shadow-lg max-w-sm whitespace-normal break-words text-start mb-5"
                              >
                                <span className="block font-semibold">
                                  {event.title}
                                </span>

                                {/* Handle description as string or array */}
                                {Array.isArray(event.description) ? (
                                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm mt-1">
                                    {event.description.map((desc, i) => (
                                      <li key={i}>{desc}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <span className="block font-normal text-slate-600">
                                    {event.description}
                                  </span>
                                )}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function CalendarPage() {
  const { callToActionContent } = calendar;
  return (
    <main className="min-h-screen">
      {/* Hero Section */}

      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="School Calendar"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
              School Calendar
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              Important dates and events for the 2025-2026 academic year
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Calendar Overview */}
      <section id="calendar-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">
              2025-2026 Academic Calendar
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                Our academic calendar provides important dates for the school
                year, including holidays, breaks, grading periods, and special
                events. Please note that while we make every effort to adhere to
                this calendar, dates are subject to change.
              </p>
              <p>
                For the most up-to-date information, please refer to our weekly
                newsletter, &quot;The Cardinal Chronicle,&quot; or check the
                online calendar on our parent portal.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <Button className="bg-amber-500 hover:bg-amber-400 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Full Calendar PDF
              </Button>
            </div>
          </div>
          {EventsCalendarPage()}
        </div>
      </section>

      {/* Calendar Tabs */}
      <section id="calendar-events" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { label: "Key Events", value: "events" },
                  { label: "Liturgical Calendar", value: "liturgical" },
                ].map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Key Events Tab */}
              <TabsContent value="events" className="mt-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-bold text-slate-600 mb-2">
                      Key Events
                    </h3>
                    <div className="h-1 w-12 bg-amber-500 mb-6"></div>
                    <ul className="space-y-2 text-primary-600">
                      {selectedEvents["key-events"].map((event, index) => (
                        <li key={index}>{event}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Liturgical Calendar Tab */}
              <TabsContent value="liturgical" className="mt-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-bold text-slate-600 mb-2">
                      Liturgical Calendar
                    </h3>
                    <div className="h-1 w-12 bg-amber-500 mb-6"></div>
                    <h4 className="text-lg font-bold text-slate-600 mb-2">
                      Mass & Religious Observances
                    </h4>
                    <ul className="space-y-2 text-primary-600">
                      {selectedEvents["liturgical-events"].map((event, index) => (
                        <li key={index}>{event}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading={callToActionContent.heading}
        description={callToActionContent.description}
        buttons={callToActionContent.buttons}
        color="bg-amber-500"
      />
    </main>
  );
}
