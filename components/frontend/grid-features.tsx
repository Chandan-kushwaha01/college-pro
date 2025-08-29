import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Play, Scissors, Layers, Sparkles, Volume2, ImageIcon, FileText, RefreshCw, Users, GraduationCap, ClipboardList, DollarSign, MessageSquare, BarChart2, Shield } from "lucide-react"
import SectionHeader from "./section-header"

export default function GridFeatures() {
  const Features = [
    {
      icon: Users,
      color: '#014997',
      title: "Student Management System",
      description: "Comprehensive student lifecycle management from enrollment to graduation. Track academic progress, manage profiles, monitor attendance, and maintain complete student records with automated workflows and secure data handling."
    },
    {
      icon: GraduationCap,
      color: '#000000',
      title: "Academic Operations Hub",
      description: "Complete academic management including curriculum planning, timetable generation, examination scheduling, grading systems, and report card creation. Streamline teaching workflows and enhance educational delivery."
    },
    {
      icon: ClipboardList,
      color: '#E52B2D',
      title: "Staff & HR Management",
      description: "Efficient staff administration covering recruitment, attendance tracking, performance evaluations, leave management, and payroll processing. Optimize human resource operations with automated workflows."
    },
    {
      icon: DollarSign,
      color: '#D0701D',
      title: "Financial Control Center",
      description: "Integrated financial management with online fee collection, automated billing, payment tracking, expense management, and comprehensive financial reporting. Ensure transparent and efficient financial operations."
    },
    {
      icon: MessageSquare,
      color: '#700D13',
      title: "Communication Platform",
      description: "Unified communication system connecting teachers, students, and parents through multi-channel messaging, instant notifications, digital notice boards, and seamless information sharing across your school community."
    },
    {
      icon: BarChart2,
      color: '#6084F2',
      title: "Analytics & Insights Dashboard",
      description: "Data-driven decision making with comprehensive analytics, performance metrics, attendance insights, financial reports, and customizable dashboards. Transform school data into actionable intelligence."
    },
    {
      icon: Shield,
      color: '#FCDB18',
      title: "Security & Compliance Suite",
      description: "Enterprise-grade security with role-based access control, data encryption, automated backups, audit trails, and compliance management. Protect sensitive information while meeting regulatory requirements."
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

        {/* AI Video Editing Card */}
        <Card className="p-4 sm:p-6 md:p-8 bg-white shadow-sm border border-gray-200">
          <div className="space-y-6">
            {/* Features Interface Mockup */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex flex-col md:flex-row gap-6">

                {/* Left Sidebar Tools */}
                <div className="flex flex-col gap-3 bg-white rounded-lg p-3 shadow-sm w-full md:w-1/3">
                  {Features.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-700" />
                        </div>
                        <span className="text-[15px]">{item.title}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Main Video Preview */}
                <div className="flex-1 w-full">
                  <div className="bg-black rounded-lg aspect-video relative overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-29%20092035.jpg-hD9znuLv9hyNqCmeFWc3menCemmd94.jpeg"
                      alt="Video editing preview showing runner on track"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        AI Video Editing
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>

  )
}
