import { useState } from 'react'
import warningIcon from '../assets/figma/vector.svg'
import chevronRightSm from '../assets/figma/chevron-right-sm.svg'

const PROPERTIES = [
  { code: 'BWRA', name: 'Best Western Raleigh',      coas: 6 },
  { code: 'CYCA', name: 'Courtyard Cary',             coas: 5 },
  { code: 'DTMT', name: 'Doubletree Midtown',         coas: 3 },
  { code: 'BWCA', name: 'Best Western Cary',          coas: 3 },
  { code: 'ESCH', name: 'Embassy Suites Chapel Hill', coas: 2 },
]

// pct = filled bar percentage (0-100). status: 'over' = solid red, 'warn' = orange partial bar
const COA_DATA = {
  BWRA: [
    { code: '21000', name: 'Food & Beverage',      amount: '2,300 Over',       label: '12% Over',   status: 'over', pct: 100 },
    { code: '33000', name: 'Housekeeping Supplies', amount: '800 Remaining',    label: '92% Used',   status: 'warn', pct: 92  },
    { code: '41000', name: 'Laundry Services',      amount: '1,200 Over',       label: '8% Over',    status: 'over', pct: 100 },
    { code: '55200', name: 'Guest Amenities',       amount: '400 Remaining',    label: '95% Used',   status: 'warn', pct: 95  },
    { code: '62000', name: 'Utilities',             amount: '3,100 Remaining',  label: '75% Used',   status: 'warn', pct: 75  },
    { code: '71000', name: 'Marketing',             amount: '500 Over',         label: '5% Over',    status: 'over', pct: 100 },
  ],
  CYCA: [
    { code: '12000', name: 'Cleaning Supplies',    amount: '900 Over',         label: '9% Over',    status: 'over', pct: 100 },
    { code: '22000', name: 'Front Desk Supplies',  amount: '2,000 Remaining',  label: '80% Used',   status: 'warn', pct: 80  },
    { code: '45000', name: 'Parking',              amount: '300 Over',         label: '3% Over',    status: 'over', pct: 100 },
    { code: '55000', name: 'Coffee',               amount: '1,800 Remaining',  label: '88% Used',   status: 'warn', pct: 88  },
    { code: '71500', name: 'Social Media',         amount: '700 Remaining',    label: '78% Used',   status: 'warn', pct: 78  },
  ],
  DTMT: [
    { code: '12000', name: 'Cleaning Supplies', amount: '1,000 Over',      label: '10% Over',  status: 'over', pct: 100 },
    { code: '55000', name: 'Coffee',            amount: '1,500 Remaining', label: '85% Used',  status: 'warn', pct: 85  },
    { code: '12340', name: 'Breakfast',         amount: '2,000 Remaining', label: '70% Used',  status: 'warn', pct: 70  },
  ],
  BWCA: [
    { code: '12000', name: 'Cleaning Supplies',     amount: '600 Over',        label: '6% Over',    status: 'over', pct: 100 },
    { code: '33000', name: 'Housekeeping Supplies', amount: '1,100 Remaining', label: '82% Used',   status: 'warn', pct: 82  },
    { code: '55000', name: 'Coffee',                amount: '200 Over',        label: '2% Over',    status: 'over', pct: 100 },
  ],
  ESCH: [
    { code: '21000', name: 'Food & Beverage', amount: '4,500 Over',       label: '15% Over',  status: 'over', pct: 100 },
    { code: '62000', name: 'Utilities',       amount: '800 Remaining',    label: '88% Used',  status: 'warn', pct: 88  },
  ],
}

function BudgetBar({ status, pct }) {
  if (status === 'over') {
    return <div className="bg-[#b12a18] h-[4px] w-full rounded-[100px] shrink-0" />
  }
  return (
    <div className="relative w-full h-[4px] shrink-0">
      <div className="absolute inset-0 bg-[#fff3e8] rounded-[100px]" />
      <div className="absolute inset-y-0 left-0 bg-[#d6742c] rounded-[100px]" style={{ width: `${pct}%` }} />
    </div>
  )
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

      {/* # of COAs column */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
          <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px] truncate"># of COAs</span>
        </div>
        {PROPERTIES.map(p => (
          <div key={p.code} className="flex items-center h-[48px] border-b border-[#e0e3e7] px-[16px]">
            <span className="font-normal text-[14px] leading-[18px] text-[#1d1e20] truncate">{p.coas}</span>
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

function COATable({ property, onBackToAll, onViewTransactions, mode }) {
  const rawCoas = COA_DATA[property.code] || []
  const coas = [...rawCoas].sort((a, b) => {
    // over budget always before warn
    if (a.status !== b.status) return a.status === 'over' ? -1 : 1
    // within 'over': sort by numeric amount descending
    if (a.status === 'over') {
      const aAmt = parseFloat(a.amount.replace(/[^0-9.]/g, '')) || 0
      const bAmt = parseFloat(b.amount.replace(/[^0-9.]/g, '')) || 0
      return bAmt - aAmt
    }
    // within 'warn': sort by pct descending
    return b.pct - a.pct
  })
  return (
    <>
      {/* Breadcrumb */}
      {mode !== 'single' && <div className="flex gap-[8px] items-center mt-[4px] mb-[0px]">
        <button
          onClick={onBackToAll}
          className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] underline decoration-solid hover:text-[#2caf92] transition-colors"
        >
          All Properties
        </button>
        <span className="font-normal text-[14px] leading-[18px] text-[#6a6e73] opacity-30">/</span>
        <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73]">{property.code}</span>
      </div>}

      {/* COA table */}
      <div className="flex items-start w-full">
        {/* COA name column */}
        <div className="flex flex-col shrink-0 w-[220px]">
          <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px]">COAs</span>
          </div>
          {coas.map(c => (
            <div key={c.code} className="flex flex-col h-[48px] items-start justify-center px-[12px] py-[4px] border-b border-[#e0e3e7]">
              <span className="font-semibold text-[14px] leading-[18px] text-[#1d1e20]">{c.code}</span>
              <span className="font-normal text-[12px] leading-[16px] text-[#6a6e73]">{c.name}</span>
            </div>
          ))}
        </div>

        {/* Budget column */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px]">
              Budget <span className="font-semibold text-[12px] tracking-[0.16px]">(% / $)</span>
            </span>
          </div>
          {coas.map(c => (
            <div key={c.code} className="flex flex-col gap-[4px] h-[48px] items-start justify-center px-[12px] py-[4px] border-b border-[#e0e3e7]">
              <div className="flex items-center justify-between w-full">
                <span className={`font-normal text-[14px] leading-[18px] ${c.status === 'over' ? 'text-[#b12a18]' : 'text-[#863a02]'}`}>
                  {c.amount}
                </span>
                <span className="font-normal text-[12px] leading-[16px] text-[#6a6e73]">{c.label}</span>
              </div>
              <BudgetBar status={c.status} pct={c.pct} />
            </div>
          ))}
        </div>

        {/* View Transactions column */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="h-[32px] border-b border-[#e0e3e7]" />
          {coas.map(c => (
            <div key={c.code} className="flex items-center justify-end h-[48px] border-b border-[#e0e3e7] px-[16px]">
              <button
                onClick={() => onViewTransactions && onViewTransactions(property, c)}
                className="font-bold text-[14px] leading-[18px] text-[#2caf92] hover:underline transition-colors whitespace-nowrap"
              >
                View Transactions
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// view: 'collapsed' | 'expanded' | 'drilldown'
export default function BudgetAlertsCard({ onViewTransactions, mode }) {
  const [view, setView] = useState('collapsed')
  const [selectedProperty, setSelectedProperty] = useState(null)

  function handleToggle() {
    if (view === 'collapsed') {
      if (mode === 'single') {
        setSelectedProperty(PROPERTIES[0])
        setView('drilldown')
      } else {
        setView('expanded')
      }
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
    <div className="bg-gradient-to-r border border-[#e0e3e7] border-solid flex flex-col from-[#ffefed] to-[27.404%] to-white items-start p-[16px] relative rounded-[3px] w-full">
      <div className="flex gap-[8px] items-start w-full">
        {/* Warning icon */}
        <div className="flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[40px]">
          <div className="flex-1 min-h-px overflow-clip relative w-full">
            <div className="absolute inset-[14.57%_10.29%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={warningIcon} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-[12px] items-start min-w-0">
          {/* Header */}
          <div className="flex items-start overflow-clip w-full">
            <div className="flex flex-1 flex-col items-start min-w-0">
              <p className="font-semibold leading-[22px] text-[16px] text-[#1d1e20] w-full">Budget Insights</p>
              <p className="font-normal leading-[18px] text-[14px] text-[#6a6e73] w-full">
                {mode === 'single' ? `${(COA_DATA[PROPERTIES[0].code] || []).length} COAs` : '5 Properties • 19 COAs'}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start w-full">
            <p className="flex-1 font-normal leading-[18px] text-[14px] text-[#1d1e20]">
              Each property has COAs that are trending to be over budget for this month.
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

          {/* Drilldown: COA table */}
          {view === 'drilldown' && selectedProperty && (
            <COATable property={selectedProperty} onBackToAll={handleBackToAll} onViewTransactions={onViewTransactions} mode={mode} />
          )}
        </div>
      </div>
    </div>
  )
}
