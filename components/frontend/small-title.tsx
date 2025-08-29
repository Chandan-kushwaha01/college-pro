import { Star } from 'lucide-react'
import React from 'react'

export default function SmallTitle({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
      <Star className="w-4 h-4 text-red-500 fill-red-500" />
      {title}
    </div>
  )
}
