import { useEffect } from 'react'

const COLUMNS = {
  danger: ['Property', 'Chart of Account', 'Budget', 'Actual', 'Variance'],
  warn: ['Property', 'Department', 'Budget', 'Actual', 'Variance'],
  info: ['Property', 'Vendor', 'Status', 'Last Invoice', 'Period'],
}

const TITLES = {
  danger: 'Budget Alerts — Detail',
  warn: 'Labor Costs at Risk — Detail',
  info: 'Missing Expenses — Detail',
}

export default function DetailDrawer({ open, variant, data, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const cols = COLUMNS[variant] || []
  const rows = data?.detail || []

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[560px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[32px] py-[24px] border-b border-[#e0e3e6]">
          <h2 className="font-semibold text-[20px] leading-[24px] text-[#1d1e20]">{TITLES[variant]}</h2>
          <button
            onClick={onClose}
            className="text-[#6a6e73] hover:text-[#1d1e20] text-[24px] leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto px-[32px] pt-[24px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e0e3e6]">
                {cols.map((col) => (
                  <th key={col} className="pb-[12px] font-semibold text-[12px] tracking-[0.5px] uppercase text-[#6a6e73] pr-[16px] whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-[#e0e3e6] hover:bg-[#f4f6f8] transition-colors">
                  {Object.values(row).map((cell, j) => (
                    <td
                      key={j}
                      className={`py-[14px] pr-[16px] text-[14px] leading-[18px] ${j === cols.length - 1 && variant !== 'info' ? 'text-[#b12a18] font-semibold' : 'text-[#1d1e20]'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-[32px] py-[24px] border-t border-[#e0e3e6]">
          <button
            onClick={onClose}
            className="bg-[#2caf92] text-white font-bold text-[14px] leading-[18px] px-[24px] py-[11px] rounded-[3px] hover:bg-[#259f84] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}
