"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RefreshCw, Home, FileX, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"

interface ErrorPageProps {
  errorCode: 404 | 500
  title?: string
  description?: string
}

export function ErrorPage({ errorCode, title, description }: ErrorPageProps) {
  const router = useRouter()

  const defaultContent = {
    404: {
      title: "Page Not Found",
      description: "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.",
    },
    500: {
      title: "Internal Server Error",
      description: "Something went wrong on our end. We're working to fix this issue. Please try again later.",
    },
  }

  const content = {
    title: title || defaultContent[errorCode].title,
    description: description || defaultContent[errorCode].description,
  }

  const handleGoHome = () => {
    router.push("/")
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const getErrorIcon = () => {
    switch (errorCode) {
      case 404:
        return <FileX size={32} className="text-white" />
      case 500:
        return <AlertTriangle size={32} className="text-white" />
      default:
        return <span className="text-white text-3xl">😞</span>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white shadow-xl border-0 p-12 text-center rounded-2xl">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            {getErrorIcon()}
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          {errorCode} - {content.title}
        </h1>

        {/* Error Description */}
        <p className="text-gray-600 mb-10 leading-relaxed text-lg">{content.description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            onClick={handleGoHome}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            <Home size={18} />
            Go to Homepage
          </Button>
          <Button
            onClick={handleRefresh}
            variant="outline"
            className="flex items-center gap-2 text-purple-500 border-purple-500 hover:bg-purple-50 bg-transparent px-6 py-3 rounded-lg"
          >
            <RefreshCw size={18} />
            Refresh Page
          </Button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 font-medium">© 2025 Agrikkom. All rights reserved.</p>
      </Card>
    </div>
  )
}
