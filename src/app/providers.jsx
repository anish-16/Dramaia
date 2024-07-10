import React from 'react'
'use client'
import { ThemeProvider } from 'next-themes'

export default function providers({childern}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className="">
            {childern}
        </div>
    </ThemeProvider>
  )
}
