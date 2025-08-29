import React from 'react'
import Link from "next/link";
import { GraduationCap } from 'lucide-react';

export default function Logo({ variant = "light" }: { variant?: "dark" | "light" }) {
  if (variant === 'light') {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
          <GraduationCap className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl">
          College <span className="text-blue-500">Pro</span>
        </span>
      </Link>
    )
  } else {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-50 rounded-full p-1">
          <GraduationCap className="text-blue-500 w-6 h-6" />
        </div>
        <span className="font-bold text-xl">
          College <span className="text-white">Pro</span>
        </span>
      </Link>
    )
  }
}
