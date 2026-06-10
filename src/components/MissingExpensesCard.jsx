import { useState } from 'react'
import infoIcon from '../assets/figma/vector2.svg'
import chevronRightSm from '../assets/figma/chevron-right-sm.svg'

const PROPERTIES = [
  { code: 'BWRA', name: 'Best Western Raleigh', vendors: 1 },
]

const VENDOR_DATA = {
  BWRA: [
    {
      name: 'Gas & Electric Co LLC',
      expectedAmount: 'Expected Amount of $125.00',
      dateExpected: '06/01',
    },
  ],
}

function PropertyTable({ onSelectProperty }) {
  return (
    <div className="flex items-start w-full mt-[4px]">
      {/* Property column */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
          <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px] truncate">Property</span>
        </div>
        {PROPERTIES.map(p => (
          <button
            key={p.code}
            onClick={() => onSelectProperty(p)}
            className="flex flex-col h-[48px] items-start justify-center px-[12px] py-[4px] border-b border-[#e0e3e7] w-full text-left hover:bg-black/[0.03] transition-colors"
          >
            <span className="font-semibold text-[14px] leading-[18px] text-[#1d1e20] truncate">{p.code}</span>
            <span className="font-normal text-[12px] leading-[16px] text-[#6a6e73] truncate">{p.name}</span>
          </button>
        ))}
      </div>

      {/* Vendors column */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
          <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px] truncate">Vendors</span>
        </div>
        {PROPERTIES.map(p => (
          <div key={p.code} className="flex items-center h-[48px] border-b border-[#e0e3e7] px-[16px]">
            <span className="font-normal text-[14px] leading-[18px] text-[#1d1e20]">{p.vendors}</span>
          </div>
        ))}
      </div>

      {/* Chevron column */}
      <div className="flex flex-col w-[48px] shrink-0">
        <div className="h-[32px] border-b border-[#e0e3e7]" />
        {PROPERTIES.map(p => (
          <button
            key={p.code}
            onClick={() => onSelectProperty(p)}
            className="flex items-center justify-center h-[48px] border-b border-[#e0e3e7] w-full hover:bg-black/[0.03] transition-colors"
          >
            <div className="overflow-clip shrink-0 size-[18px] relative">
              <div className="absolute inset-[26.74%_36.28%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={chevronRightSm} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function VendorTable({ property, onBackToAll, onViewAPInbox }) {
  const vendors = VENDOR_DATA[property.code] || []
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex gap-[8px] items-center mt-[4px]">
        <button
          onClick={onBackToAll}
          className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] underline decoration-solid hover:text-[#2caf92] transition-colors"
        >
          All Properties
        </button>
        <span className="font-normal text-[14px] leading-[18px] text-[#6a6e73] opacity-30">/</span>
        <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73]">{property.code}</span>
      </div>

      {/* Vendor table */}
      <div className="flex items-start w-full">
        {/* Vendor column */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px]">Vendor</span>
          </div>
          {vendors.map(v => (
            <div key={v.name} className="flex flex-col h-[48px] items-start justify-center px-[12px] py-[4px] border-b border-[#e0e3e7]">
              <span className="font-semibold text-[14px] leading-[18px] text-[#1d1e20]">{v.name}</span>
              <span className="font-normal text-[12px] leading-[16px] text-[#6a6e73]">{v.expectedAmount}</span>
            </div>
          ))}
        </div>

        {/* Date Expected column */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px]">Date Expected</span>
          </div>
          {vendors.map(v => (
            <div key={v.name} className="flex items-center h-[48px] border-b border-[#e0e3e7] px-[16px]">
              <span className="font-normal text-[14px] leading-[18px] text-[#1d1e20]">{v.dateExpected}</span>
            </div>
          ))}
        </div>

        {/* AP Inbox column */}
        <div className="flex flex-col shrink-0 w-[128px]">
          <div className="h-[32px] border-b border-[#e0e3e7]" />
          {vendors.map(v => (
            <div key={v.name} className="flex items-center justify-center h-[48px] border-b border-[#e0e3e7] px-[16px]">
              <button
                onClick={() => onViewAPInbox && onViewAPInbox(property, v)}
                className="font-bold text-[14px] leading-[18px] text-[#2caf92] hover:underline transition-colors whitespace-nowrap"
              >
                AP Inbox
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// view: 'collapsed' | 'expanded' | 'drilldown'
export default function MissingExpensesCard({ onViewAPInbox }) {
  const [view, setView] = useState('collapsed')
  const [selectedProperty, setSelectedProperty] = useState(null)

  function handleToggle() {
    if (view === 'collapsed') {
      setView('expanded')
    } else {
      setView('collapsed')
      setSelectedProperty(null)
    }
  }

  function handleSelectProperty(property) {
    setSelectedProperty(property)
    setView('drilldown')
  }

  function handleBackToAll() {
    setView('expanded')
    setSelectedProperty(null)
  }

  const isOpen = view !== 'collapsed'

  return (
    <div className="bg-gradient-to-r border border-[#e0e3e7] border-solid flex flex-col from-[#e5f5ff] to-[27.404%] to-white items-start p-[16px] relative rounded-[3px] w-full">
      <div className="flex gap-[8px] items-start w-full">
        {/* Icon */}
        <div className="flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[40px]">
          <div className="flex-1 min-h-px overflow-clip relative w-full">
            <div className="absolute inset-[8.33%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={infoIcon} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-[12px] items-start min-w-0">
          {/* Header */}
          <div className="flex items-start overflow-clip w-full">
            <div className="flex flex-1 flex-col items-start min-w-0">
              <p className="font-semibold leading-[22px] text-[16px] text-[#1d1e20] w-full">Missing Invoices</p>
              <p className="font-normal leading-[18px] text-[14px] text-[#6a6e73] w-full">1 Property • 1 Vendor</p>
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start w-full">
            <p className="flex-1 font-normal leading-[18px] text-[14px] text-[#1d1e20]">
              Over the past 12 months you've had at least one invoice for these vendors recurring every month.
            </p>
          </div>

          {/* Toggle link */}
          <button
            onClick={handleToggle}
            className="font-normal leading-[18px] text-[14px] text-[#6a6e73] underline decoration-solid cursor-pointer hover:text-[#2caf92] transition-colors"
          >
            {isOpen ? 'Hide Details' : 'Show Details'}
          </button>

          {/* Expanded: property list */}
          {view === 'expanded' && (
            <PropertyTable onSelectProperty={handleSelectProperty} />
          )}

          {/* Drilldown: vendor table */}
          {view === 'drilldown' && selectedProperty && (
            <VendorTable property={selectedProperty} onBackToAll={handleBackToAll} onViewAPInbox={onViewAPInbox} />
          )}
        </div>
      </div>
    </div>
  )
}
