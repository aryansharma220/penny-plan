import { statsData } from '@/data/landing'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

const Stats = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 my-10 px-20">
        {statsData.map((item, index) => (
          <Card className="p-4 bg-transparent text-white border border-gray-600 shadow-lg transition-all hover:transform hover:scale-95 hover:shadow-custom-glow bg-gradient-to-br from-black via-gray-800 to-black" key={index}>
            <CardHeader className="flex items-center gap-3">
              <CardTitle className="text-4xl font-semibold">{item.value}</CardTitle>
              <CardDescription className="text-lg text-emerald-200">{item.label}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Stats