"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, Users, GraduationCap, DollarSign, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import SectionHeader from "./section-header"

const features = [
  {
    icon: Users,
    color: "#014997",
    tab: "Student Management",
    title: "Student Management System",
    description:
      "Comprehensive student lifecycle management from enrollment to graduation. Track academic progress, manage profiles, monitor attendance, and maintain complete student records with automated workflows and secure data handling.",
    subFeatures: [
      "Student registration & enrollment",
      "Digital student profiles & records",
      "Academic performance tracking",
      "Attendance monitoring",
      "Health records management",
      "Document storage & management",
      "Parent & guardian information",
      "Student performance analytics",
    ],
    image: "/image/modern-school-dashboard.jpg",
  },
  {
    icon: GraduationCap,
    color: "#000000",
    tab: "Academic Operations",
    title: "Academic Operations Hub",
    description:
      "Complete academic management including curriculum planning, timetable generation, examination scheduling, grading systems, and report card creation. Streamline teaching workflows and enhance educational delivery.",
    subFeatures: [
      "Curriculum planning & management",
      "Interactive timetable generation",
      "Examination scheduling & management",
      "Digital gradebook & grading",
      "Automated report card generation",
      "Assignment management",
      "Online assessment tools",
      "Academic calendar integration",
    ],
    image: "/image/academic-calendar-and-grading-interface.webp",
  },
  {
    icon: DollarSign,
    color: "#D0701D",
    tab: "Financial Management",
    title: "Financial Control Center",
    description:
      "Integrated financial management with online fee collection, automated billing, payment tracking, expense management, and comprehensive financial reporting. Ensure transparent and efficient financial operations.",
    subFeatures: [
      "Online fee collection & payment",
      "Automated invoice generation",
      "Payment tracking & reconciliation",
      "Scholarship & discount management",
      "Expense tracking & budgeting",
      "Financial reporting & analytics",
      "Multi-payment gateway support",
      "Late fee automation",
    ],
    image: "/image/financial-dashboard-with-charts-and-payment-interf.webp",
  },
  {
    icon: MessageSquare,
    color: "#700D13",
    tab: "Communication Hub",
    title: "Communication Platform",
    description:
      "Unified communication system connecting teachers, students, and parents through multi-channel messaging, instant notifications, digital notice boards, and seamless information sharing across your school community.",
    subFeatures: [
      "Multi-channel messaging system",
      "Instant push notifications",
      "Digital notice board",
      "Parent-teacher communication",
      "Emergency alert system",
      "Event announcements",
      "Document sharing platform",
      "SMS & email integration",
    ],
    image: "/image/communication-dashboard-with-messaging-interface.webp",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)
  const activeFeature = features[activeTab]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="py-6">
          <SectionHeader title="Additional Features" heading="Effortless School Management, Powered by Technology" description=" Whether you need to manage students, track academics, handle finances, or streamline communication, our
            platform is here to help." />
        </div>
        <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 p-6 border-b border-gray-100">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeTab === index
                      ? "bg-gray-100 text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  <Icon className="w-4 h-4" style={{ color: feature.color }} />
                  {feature.tab}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">{activeFeature.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed text-pretty">{activeFeature.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {activeFeature.subFeatures.map((subFeature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{subFeature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200">
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Right Content - Demo Interface */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-4">{activeFeature.tab} Demo</h3>
                </div>

                {/* Demo Interface */}
                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: activeFeature.color + "20" }}>
                        <activeFeature.icon className="w-4 h-4 m-2" style={{ color: activeFeature.color }} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{activeFeature.subFeatures[0]}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: activeFeature.color + "20" }}>
                        <activeFeature.icon className="w-4 h-4 m-2" style={{ color: activeFeature.color }} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{activeFeature.subFeatures[1]}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full" style={{ backgroundColor: activeFeature.color + "20" }}>
                        <activeFeature.icon className="w-4 h-4 m-2" style={{ color: activeFeature.color }} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{activeFeature.subFeatures[2]}</span>
                    </div>
                  </div>
                </div>

                {/* Demo Image */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <img
                    src={activeFeature.image || "/placeholder.svg"}
                    alt={`${activeFeature.title} interface`}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=192&width=400&text=Demo+Interface"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
