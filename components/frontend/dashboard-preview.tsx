import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"


export function DashboardPreview() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full">
          <CardContent>
            <Image src='/image/dashboard.avif' alt="Dashboard Preview" className="w-full" width={2016} height={1210} />
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
