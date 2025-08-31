"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, ClipboardList, DollarSign, MessageSquare, BarChart2, Shield } from "lucide-react"
import SectionHeader from "./section-header"
import Image from "next/image";

export default function GridFeatures() {
  const features = [
    {
      icon: Users,
      color: '#014997',
      title: "Student Management System",
      description: "Comprehensive student lifecycle management from enrollment to graduation. Track academic progress, manage profiles, monitor attendance, and maintain complete student records with automated workflows and secure data handling.",
      image: '/image/student-management-system.webp',
    },
    {
      icon: GraduationCap,
      color: '#000000',
      title: "Academic Operations Hub",
      description: "Complete academic management including curriculum planning, timetable generation, examination scheduling, grading systems, and report card creation. Streamline teaching workflows and enhance educational delivery.",
      image: '/image/academic-operations-hub.webp',
    },
    {
      icon: ClipboardList,
      color: '#E52B2D',
      title: "Staff & HR Management",
      description: "Efficient staff administration covering recruitment, attendance tracking, performance evaluations, leave management, and payroll processing. Optimize human resource operations with automated workflows.",
      image: '/image/staff-and-hr-management.webp',
    },
    {
      icon: DollarSign,
      color: '#D0701D',
      title: "Financial Control Center",
      description: "Integrated financial management with online fee collection, automated billing, payment tracking, expense management, and comprehensive financial reporting. Ensure transparent and efficient financial operations.",
      image: '/image/financial-control-center.webp',
    },
    {
      icon: MessageSquare,
      color: '#700D13',
      title: "Communication Platform",
      description: "Unified communication system connecting teachers, students, and parents through multi-channel messaging, instant notifications, digital notice boards, and seamless information sharing across your school community.",
      image: '/image/communication-plateform.webp',
    },
    {
      icon: BarChart2,
      color: '#6084F2',
      title: "Analytics & Insights Dashboard",
      description: "Data-driven decision making with comprehensive analytics, performance metrics, attendance insights, financial reports, and customizable dashboards. Transform school data into actionable intelligence.",
      image: '/image/analytic-and-insight-dashboard.webp',
    },
    {
      icon: Shield,
      color: '#FCDB18',
      title: "Security & Compliance Suite",
      description: "Enterprise-grade security with role-based access control, data encryption, automated backups, audit trails, and compliance management. Protect sensitive information while meeting regulatory requirements.",
      image: '/image/security-compliance.webp',
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <SectionHeader
          title="Features"
          heading="Everything Your College Needs in One Platform"
          description="Transform your educational institution with our comprehensive College management solution. From student enrollment to academic excellence, streamline every aspect of college operations with powerful, integrated tools designed specifically for modern educational environments."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.slice(0, 2).map((feature, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex">
                <div className="flex-1 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                    width={400}
                    height={250}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.slice(2, 4).map((feature, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex">
                <div className="flex-1 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                    width={400}
                    height={250}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.slice(4, 6).map((feature, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex">
                <div className="flex-1 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                    width={400}
                    height={250}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </main>
  )
}
