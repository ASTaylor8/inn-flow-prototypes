import { useState } from 'react'
import laborIcon from '../assets/figma/vector1.svg'
import chevronRightSm from '../assets/figma/chevron-right-sm.svg'

const PROPERTIES = [
  { code: 'BWRA', name: 'Best Western Raleigh', depts: 1 },
  { code: 'CYCA', name: 'Courtyard Cary',        depts: 1 },
]

const DEPT_DATA = {
  BWRA: [
    {
      name: 'Housekeeping',
      positions: '2 Positions',
      amount: '800 Remaining',
      label: '90% Used',
      pct: 90,
    },
  ],
  CYCA: [
    {
      name: 'Front Desk',
      positions: '1 Position',
      amount: '1,500 Remaining',
      label: '85% Used',
      pct: 85,
    },
  ],
}

function BudgetBar({ pct }) {
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

      {/* Departments column */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
          <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px] truncate">Departments</span>
        </div>
        {PROPERTIES.map(p => (
          <div key={p.code} className="flex items-center h-[48px] border-b border-[#e0e3e7] px-[16px]">
            <span className="font-normal text-[14px] leading-[18px] text-[#1d1e20]">{p.depts}</span>
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

function DepartmentTable({ property, onBackToAll, onViewSchedule, mode }) {
  const depts = DEPT_DATA[property.code] || []
  return (
    <>
      {/* Breadcrumb */}
      {mode !== 'single' && <div className="flex gap-[8px] items-center mt-[4px]">
        <button
          onClick={onBackToAll}
          className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] underline decoration-solid hover:text-[#2caf92] transition-colors"
        >
          All Properties
        </button>
        <span className="font-normal text-[14px] leading-[18px] text-[#6a6e73] opacity-30">/</span>
        <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73]">{property.code}</span>
      </div>}

      {/* Department table */}
      <div className="flex items-start w-full">
        {/* Department column */}
        <div className="flex flex-col shrink-0 w-[250px]">
          <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px]">Department</span>
          </div>
          {depts.map(d => (
            <div key={d.name} className="flex flex-col h-[48px] items-start justify-center px-[12px] py-[4px] border-b border-[#e0e3e7]">
              <span className="font-semibold text-[14px] leading-[18px] text-[#1d1e20]">{d.name}</span>
              <span className="font-normal text-[12px] leading-[16px] text-[#6a6e73]">{d.positions}</span>
            </div>
          ))}
        </div>

        {/* Op. Budget column */}
        <div className="flex flex-col shrink-0 w-[300px]">
          <div className="flex items-center h-[32px] border-b border-[#e0e3e7] px-[8px]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#6a6e73] tracking-[0.16px]">
              Op. Budget <span className="font-semibold text-[12px] tracking-[0.16px]">($)</span>
            </span>
          </div>
          {depts.map(d => (
            <div key={d.name} className="flex flex-col gap-[4px] h-[48px] items-start justify-center px-[12px] py-[4px] border-b border-[#e0e3e7]">
              <div className="flex items-center justify-between w-full">
                <span className="font-normal text-[14px] leading-[18px] text-[#863a02]">{d.amount}</span>
                <span className="font-normal text-[12px] leading-[16px] text-[#6a6e73]">{d.label}</span>
              </div>
              <BudgetBar pct={d.pct} />
            </div>
          ))}
        </div>

        {/* View Schedule column */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="h-[32px] border-b border-[#e0e3e7]" />
          {depts.map(d => (
            <div key={d.name} className="flex items-center justify-end h-[48px] border-b border-[#e0e3e7] px-[16px]">
              <button
                onClick={() => onViewSchedule && onViewSchedule(property, d)}
                className="font-bold text-[14px] leading-[18px] text-[#2caf92] hover:underline transition-colors whitespace-nowrap"
              >
                View Schedule
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// view: 'collapsed' | 'expanded' | 'drilldown'
export default function LaborCostsCard({ onViewSchedule, mode }) {
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
    <div className="bg-gradient-to-r border border-[#e0e3e7] border-solid flex flex-col from-[#fff3e8] to-[27.404%] to-white items-start p-[16px] relative rounded-[3px] w-full">
      <div className="flex gap-[8px] items-start w-full">
        {/* Icon */}
        <div className="flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[40px]">
          <div className="flex-1 min-h-px overflow-clip relative w-full">
            <div className="absolute inset-[8.33%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={laborIcon} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-[12px] items-start min-w-0">
          {/* Header */}
          <div className="flex items-start overflow-clip w-full">
            <div className="flex flex-1 flex-col items-start min-w-0">
              <p className="font-semibold leading-[22px] text-[16px] text-[#1d1e20] w-full">Labor Cost Alerts</p>
              <p className="font-normal leading-[18px] text-[14px] text-[#6a6e73] w-full">
                {mode === 'single' ? `${(DEPT_DATA[PROPERTIES[0].code] || []).length} Departments` : '2 Properties • 2 Departments'}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start w-full">
            <p className="flex-1 font-normal leading-[18px] text-[14px] text-[#1d1e20]">
              {mode === 'single'
                ? 'Your Housekeeping department is at 90% of its operational labor budget with only $800 remaining for the period. Review current scheduling to prevent a potential overage before month end.'
                : '2 properties have departments approaching their labor budget limits, with BWRA\'s Housekeeping at 90% and CYCA\'s Front Desk at 85% of their operational budgets. Consider adjusting staffing levels to avoid overages before the period closes.'}
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

          {/* Drilldown: department table */}
          {view === 'drilldown' && selectedProperty && (
            <DepartmentTable property={selectedProperty} onBackToAll={handleBackToAll} onViewSchedule={onViewSchedule} mode={mode} />
          )}
        </div>
      </div>
    </div>
  )
}
