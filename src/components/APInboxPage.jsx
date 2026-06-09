import Sidebar from './Sidebar'

const INVOICES = [
  { date: '09/23/24', vendor: 'BEST WESTER...', uploadedBy: 'Rachel.Donnelly', filename: 'BWCA_Sept2024_Invoice.pdf', pages: 3, extraction: null },
  { date: '11/04/24', vendor: 'BOOKING.CO...', uploadedBy: 'Marcus.Webb', filename: '', pages: null, extraction: null },
  { date: '06/08/26', vendor: 'HD SUPPLY EL...', uploadedBy: 'Priya.Nair', filename: '', pages: null, extraction: null },
  { date: '06/08/26', vendor: '', uploadedBy: 'Priya.Nair', filename: 'BWCA_Spectrum_Jun2026.pdf', pages: 2, extraction: null },
  { date: '06/09/26', vendor: 'SYSCO RALEI...', uploadedBy: 'Jordan.Castillo', filename: 'Sysco_MultiPage_Scan_Jun09...', pages: 3, extraction: 'Extracted' },
  { date: '06/09/26', vendor: 'AMADEUS HO...', uploadedBy: 'Priya.Nair', filename: 'amadeus-hospitality_INV-88142...', pages: 2, extraction: 'Extracted' },
  { date: '06/09/26', vendor: '', uploadedBy: 'Priya.Nair', filename: 'greystone-services_20260609.pdf', pages: 1, extraction: 'ReviewVendor' },
  { date: '06/09/26', vendor: 'WATER WING...', uploadedBy: 'Priya.Nair', filename: '', pages: null, extraction: null },
]

const COLS = ['Upload Date', 'Vendor', 'Uploaded By', 'Filename', 'Pages', 'Extraction', '']

function ExtractionBadge({ value }) {
  if (!value) return null
  if (value === 'Extracted') {
    return (
      <span className="bg-[#d6f2ec] text-[#1e6b58] text-[13px] font-semibold px-[14px] py-[6px] rounded-[6px] whitespace-nowrap">
        Extracted
      </span>
    )
  }
  if (value === 'ReviewVendor') {
    return (
      <span className="bg-[#fef0e4] text-[#9a4a1a] text-[13px] font-semibold px-[14px] py-[6px] rounded-[6px] whitespace-nowrap">
        Review Vendor
      </span>
    )
  }
  return null
}

export default function APInboxPage({ property, activeNav, onBack }) {
  const propertyCode = property?.code ?? 'BWCA'

  return (
    <div className="flex h-full w-full bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={onBack} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Page header */}
        <div className="flex items-center justify-between border-b border-[#e0e3e7] px-[32px] pt-[28px] pb-[24px] shrink-0">
          <div className="flex items-center gap-[12px]">
            <button className="flex items-center gap-[6px] bg-[#dce8f7] rounded-[6px] px-[14px] h-[36px] text-[14px] font-semibold text-[#1e4d8c] hover:bg-[#cdddf2] transition-colors">
              {propertyCode}
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <h1 className="font-semibold text-[28px] leading-[36px] text-[#1d1e20]">AP Inbox</h1>
          </div>
          <button className="bg-[#2caf92] text-white text-[14px] font-semibold px-[20px] h-[40px] rounded-[3px] hover:bg-[#259f84] whitespace-nowrap transition-colors flex items-center gap-[8px]">
            Add Draft Invoice
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>

        {/* Search + email bar */}
        <div className="flex items-center justify-between px-[32px] py-[20px] shrink-0">
          <input
            placeholder="Search"
            className="border border-[#e0e3e7] rounded-[3px] px-[12px] h-[34px] text-[13px] w-[200px] outline-none focus:border-[#2caf92]"
          />
          <div className="flex items-center gap-[8px]">
            <span className="text-[13px] text-[#1d1e20]">99005-invoicesStg@inn-flow.net</span>
            <button className="flex items-center justify-center size-[30px] hover:bg-[#f9fafb] rounded-[3px] text-[#1d1e20]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.562614 9.18059L1.89595 11.4873C2.07995 11.8059 2.48795 11.9153 2.80661 11.7306L3.73728 11.1933C4.12395 11.4979 4.55128 11.7479 5.00061 11.9346V12.9999C5.00061 13.3679 5.29861 13.6666 5.66728 13.6666H8.33395C8.70261 13.6666 9.00062 13.3679 9.00062 12.9999V11.9346C9.44995 11.7479 9.87661 11.4979 10.2639 11.1933L11.1946 11.7306C11.5126 11.9139 11.9219 11.8039 12.1053 11.4873L13.4386 9.18059C13.6219 8.86325 13.5119 8.45325 13.1953 8.26992L12.2806 7.74125C12.3153 7.49525 12.3333 7.24725 12.3333 6.99992C12.3333 6.75259 12.3153 6.50459 12.2793 6.25858L13.1939 5.72992C13.5113 5.54659 13.6213 5.13659 13.4373 4.81925L12.1039 2.51259C11.9199 2.19392 11.5119 2.08459 11.1933 2.26925L10.2626 2.80659C9.87595 2.50192 9.44928 2.25125 8.99995 2.06525V0.999919C8.99995 0.631919 8.70195 0.333252 8.33328 0.333252H5.66661C5.29795 0.333252 4.99995 0.631919 4.99995 0.999919V2.06525C4.55061 2.25192 4.12395 2.50192 3.73661 2.80659L2.80661 2.26925C2.48728 2.08459 2.07995 2.19392 1.89595 2.51259L0.562614 4.81925C0.379281 5.13659 0.489281 5.54659 0.805948 5.72992L1.72061 6.25858C1.68461 6.50459 1.66661 6.75259 1.66661 6.99992C1.66661 7.24725 1.68461 7.49525 1.72061 7.74125L0.805948 8.26992C0.488614 8.45325 0.378614 8.86325 0.562614 9.18059ZM6.99995 4.33325C8.47061 4.33325 9.66661 5.52925 9.66661 6.99992C9.66661 8.47059 8.47061 9.66659 6.99995 9.66659C5.52928 9.66659 4.33328 8.47059 4.33328 6.99992C4.33328 5.52925 5.52928 4.33325 6.99995 4.33325Z"/></svg>
            </button>
          </div>
        </div>

        {/* Draft Invoices table */}
        <div className="flex-1 overflow-auto px-[32px]">
          <h2 className="font-semibold text-[20px] leading-[28px] text-[#1d1e20] mb-[16px]">Draft Invoices</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#e8eaed]">
                {COLS.map(col => (
                  <th key={col} className="border-b border-[#e0e3e7] text-left font-semibold text-[13px] text-[#6a6e73] px-[16px] py-[12px] whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INVOICES.map((inv, i) => (
                <tr key={i} className="border-b border-[#e0e3e7] hover:bg-[#f9fafb] transition-colors">
                  <td className="px-[16px] py-[16px] text-[13px] text-[#1d1e20] whitespace-nowrap">{inv.date}</td>
                  <td className="px-[16px] py-[16px] text-[13px] text-[#1d1e20]">{inv.vendor}</td>
                  <td className="px-[16px] py-[16px] text-[13px] text-[#1d1e20] max-w-[200px] truncate">{inv.uploadedBy}</td>
                  <td className="px-[16px] py-[16px] text-[13px] text-[#1d1e20] max-w-[220px] truncate">{inv.filename}</td>
                  <td className="px-[16px] py-[16px] text-[13px] text-[#1d1e20] text-center">{inv.pages ?? ''}</td>
                  <td className="px-[16px] py-[16px]">
                    <ExtractionBadge value={inv.extraction} />
                  </td>
                  <td className="px-[16px] py-[16px] text-right">
                    <button className="text-[#2caf92] hover:text-[#259f84]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.875 10C11.875 11.0352 11.0352 11.875 10 11.875C8.96484 11.875 8.125 11.0352 8.125 10C8.125 8.96484 8.96484 8.125 10 8.125C11.0352 8.125 11.875 8.96484 11.875 10Z"/>
                        <path d="M5.625 10C5.625 11.0352 4.78516 11.875 3.75 11.875C2.71484 11.875 1.875 11.0352 1.875 10C1.875 8.96484 2.71484 8.125 3.75 8.125C4.78516 8.125 5.625 8.96484 5.625 10Z"/>
                        <path d="M18.125 10C18.125 11.0352 17.2852 11.875 16.25 11.875C15.2148 11.875 14.375 11.0352 14.375 10C14.375 8.96484 15.2148 8.125 16.25 8.125C17.2852 8.125 18.125 8.96484 18.125 10Z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
