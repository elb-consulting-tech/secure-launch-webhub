
/**
 * File: src/components/NavBar.tsx
 * Description: Navigation bar component for the Executive Report.
 * Features:
 * - Smooth scroll navigation to sections
 * - Accent color picker
 * - Markdown download trigger
 */

import React, { useState, useEffect } from 'react'
import { Menu, X, Download, ShieldCheck } from 'lucide-react'

type AccentColor = 'sky' | 'emerald' | 'violet'

interface Section {
  id: string
  title: string
}

interface NavBarProps {
  sections: Section[]
  onDownloadMarkdown: () => void
  accent: AccentColor
  setAccent: (color: AccentColor) => void
}

const ACCENT_COLORS: Record<AccentColor, string> = {
  sky: 'bg-sky-500',
  emerald: 'bg-emerald-500',
  violet: 'bg-violet-500',
}

export default function NavBar({ sections, onDownloadMarkdown, accent, setAccent }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b ${
        scrolled ? 'border-slate-200 shadow-sm py-3' : 'border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`p-2 rounded-lg ${ACCENT_COLORS[accent]} text-white`}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">CyberReport</h1>
              <span className="text-xs text-slate-500 font-medium">Executive Summary</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                {section.title}
              </button>
            ))}
          </nav>

          {/* Actions Area */}
          <div className="hidden md:flex items-center gap-4 pl-4 border-l border-slate-200">
            {/* Color Picker */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full">
              {(Object.keys(ACCENT_COLORS) as AccentColor[]).map((color) => (
                <button
                  key={color}
                  onClick={() => setAccent(color)}
                  className={`w-5 h-5 rounded-full transition-transform ${ACCENT_COLORS[color]} ${
                    accent === color ? 'ring-2 ring-offset-1 ring-slate-400 scale-110' : 'hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Set theme to ${color}`}
                />
              ))}
            </div>

            {/* Download Button */}
            <button
              onClick={onDownloadMarkdown}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm active:translate-y-0.5"
            >
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                className="text-left px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium"
              >
                {section.title}
              </button>
            ))}
            <hr className="border-slate-100 my-2" />
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-medium text-slate-500">Theme</span>
              <div className="flex gap-3">
                {(Object.keys(ACCENT_COLORS) as AccentColor[]).map((color) => (
                  <button
                    key={color}
                    onClick={() => setAccent(color)}
                    className={`w-6 h-6 rounded-full ${ACCENT_COLORS[color]} ${
                      accent === color ? 'ring-2 ring-offset-1 ring-slate-400' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                onDownloadMarkdown()
                setIsOpen(false)
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-lg font-medium"
            >
              <Download size={18} />
              Download Report
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
