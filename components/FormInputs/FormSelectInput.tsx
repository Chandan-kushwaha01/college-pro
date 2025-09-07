"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

interface Item {
  label: string
  value: string
  flag?: string // Added flag property for country items
}

interface FormSelectInputProps {
  name: string
  label: string
  items: Item[]
  placeholder?: string
  value?: string
  onChange?: (item: Item) => void
  onFocus?: () => void
  onBlur?: () => void
  error?: string
  renderLeftIcon?: () => React.ReactNode
  showOnlyFlagInSelected?: boolean // Added prop to control selected display
}

const FormSelectInput: React.FC<FormSelectInputProps> = ({
  name,
  label,
  items,
  placeholder = "Select item",
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  renderLeftIcon,
  showOnlyFlagInSelected = false, // Default to false for backward compatibility
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()))

  const selectedItem = items.find((item) => item.value === value)

  const handleFocus = () => {
    setIsFocus(true)
    setIsOpen(true)
    onFocus?.()
  }

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocus(false)
      setIsOpen(false)
      onBlur?.()
    }, 200)
  }

  const handleSelect = (item: Item) => {
    onChange?.(item)
    setIsOpen(false)
    setIsFocus(false)
    setSearchTerm("")
  }

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <label
          className={`absolute left-3 -top-2 bg-white px-2 text-sm font-medium z-10 ${isFocus ? "text-blue-600" : "text-gray-700"
            }`}
        >
          {label}
        </label>
      )
    }
    return null
  }

  return (
    <div className="relative bg-white">
      {renderLabel()}
      <div className="relative">
        <button
          type="button"
          className={`w-full h-12 px-3 border rounded-lg flex items-center justify-between bg-white cursor-pointer transition-colors ${isFocus ? "border-blue-600" : "border-gray-300"
            } ${error ? "border-red-500" : ""}`}
          onClick={handleFocus}
        >
          <div className="flex items-center space-x-2">
            {renderLeftIcon?.()}
            <span className={`text-base ${selectedItem ? "text-gray-900" : "text-gray-400"}`}>
              {selectedItem
                ? showOnlyFlagInSelected && selectedItem.flag
                  ? selectedItem.flag
                  : selectedItem.label
                : !isFocus
                  ? placeholder
                  : "..."}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-80 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-hidden">
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredItems.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between"
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    {item.flag && <span className="text-lg flex-shrink-0">{item.flag}</span>}
                    <span className="text-sm text-gray-900 truncate flex-1">{item.label}</span>
                  </div>
                </button>
              ))}
              {filteredItems.length === 0 && <div className="px-3 py-3 text-gray-500 text-center">No items found</div>}
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default FormSelectInput
