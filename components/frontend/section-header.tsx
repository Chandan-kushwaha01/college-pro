import React from 'react'
import SmallTitle from './small-title'

export default function SectionHeader({ title, heading, description }: { title: string, heading: string, description: string }) {
  return (
    <div className="text-center space-y-4">
      <SmallTitle title={title} />
      <h1 className="text-5xl font-bold text-gray-900 text-balance">{heading}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
        {description}
      </p>
    </div>
  )
}
