import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Welcome Badge */}
        <SmallTitle title="Welcome To CollegePro" />

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-balance">
          Your Complete College Management Solution
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
          From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-gray-800 text-white px-8 py-3 rounded-full text-base font-medium"
          >
            Try for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-1xl text-base font-medium bg-transparent"
          >
            See All features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
