import Sidebar from './Sidebar'
import moreIcon from '../assets/figma/group.svg'

const TRANSACTIONS = {
  'BWRA-21000': [
    { ehid: 'HAMPG', date: '06/13/25', period: '06/01/25', invNo: '', invDate: '', vendor: 'XXX COA-WISE PA...', street: '', city: '', description: 'GUEST SERVICE AGENT...', notes: '', coa: '05001', ckNo: 'JRN', amount: -3451.02, cl: 'JRN' },
    { ehid: 'HAMPG', date: '06/27/25', period: '06/01/25', invNo: '', invDate: '', vendor: 'XXX COA-WISE PA...', street: '', city: '', description: 'GUEST SERVICE AGENT...', notes: '', coa: '05001', ckNo: 'JRN', amount: -3680.81, cl: 'JRN' },
  ],
  'BWRA-33000': [
    { ehid: 'BWRA1', date: '06/05/25', period: '06/01/25', invNo: 'INV-4421', invDate: '06/03/25', vendor: 'HOUSEKEEP SUPPLY CO', street: '142 Commerce Dr', city: 'Raleigh', description: 'HOUSEKEEPING SUPPLIES...', notes: '', coa: '33000', ckNo: 'CHK', amount: -1842.50, cl: 'CHK' },
    { ehid: 'BWRA1', date: '06/19/25', period: '06/01/25', invNo: 'INV-4589', invDate: '06/17/25', vendor: 'HOUSEKEEP SUPPLY CO', street: '142 Commerce Dr', city: 'Raleigh', description: 'HOUSEKEEPING SUPPLIES...', notes: '', coa: '33000', ckNo: 'CHK', amount: -2114.75, cl: 'CHK' },
  ],
  'BWRA-41000': [
    { ehid: 'BWRA1', date: '06/09/25', period: '06/01/25', invNo: 'INV-0812', invDate: '06/08/25', vendor: 'CLEAN LINENS INC', street: '88 Industrial Pkwy', city: 'Durham', description: 'LAUNDRY SERVICE JUNE...', notes: '', coa: '41000', ckNo: 'JRN', amount: -3102.00, cl: 'JRN' },
    { ehid: 'BWRA1', date: '06/23/25', period: '06/01/25', invNo: 'INV-0899', invDate: '06/21/25', vendor: 'CLEAN LINENS INC', street: '88 Industrial Pkwy', city: 'Durham', description: 'LAUNDRY SERVICE JUNE...', notes: '', coa: '41000', ckNo: 'JRN', amount: -3498.00, cl: 'JRN' },
  ],
}

const DEFAULT_TRANSACTIONS = [
  { ehid: 'HAMPG', date: '06/10/25', period: '06/01/25', invNo: '', invDate: '', vendor: 'XXX COA-WISE PA...', street: '', city: '', description: 'VENDOR CHARGE JUNE...', notes: '', coa: '05001', ckNo: 'JRN', amount: -2854.17, cl: 'JRN' },
  { ehid: 'HAMPG', date: '06/24/25', period: '06/01/25', invNo: '', invDate: '', vendor: 'XXX COA-WISE PA...', street: '', city: '', description: 'VENDOR CHARGE JUNE...', notes: '', coa: '05001', ckNo: 'JRN', amount: -2943.50, cl: 'JRN' },
]

function formatAmount(amount) {
  const abs = Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return amount < 0 ? `-$${abs}` : `$${abs}`
}


const COLS = ['EHID', 'Date', 'Period', 'Inv. No', 'Inv. Date', 'Vendor', 'Street', 'City', 'Description', 'Notes', 'COA', 'CkNo', 'Amount', 'CL']

export default function AccountingPage({ property, coa, activeNav, onBack }) {
  const key = `${property.code}-${coa.code}`
  const transactions = TRANSACTIONS[key] || DEFAULT_TRANSACTIONS
  const grandTotal = transactions.reduce((sum, t) => sum + t.amount, 0)

  function cellValue(t, col) {
    const map = {
      'EHID': t.ehid, 'Date': t.date, 'Period': t.period, 'Inv. No': t.invNo,
      'Inv. Date': t.invDate, 'Vendor': t.vendor, 'Street': t.street, 'City': t.city,
      'Description': t.description, 'Notes': t.notes, 'COA': t.coa, 'CkNo': t.ckNo,
      'Amount': formatAmount(t.amount), 'CL': t.cl,
    }
    return map[col] ?? ''
  }

  return (
    <div className="flex h-full w-full bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={onBack} />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Page header */}
        <div className="flex items-center justify-between border-b border-[#e0e3e7] px-[32px] pt-[24px] pb-[20px] shrink-0">
          <div>
            <h1 className="font-semibold text-[28px] leading-[36px] text-[#1d1e20]">
              {coa.code} {coa.name}
            </h1>
            <p className="font-normal text-[14px] leading-[18px] text-[#6a6e73]">{property.code}</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="text-right">
              <p className="font-normal text-[12px] leading-[16px] text-[#6a6e73]">Grand Total Amount</p>
              <p className="font-semibold text-[20px] leading-[28px] text-[#1d1e20]">{formatAmount(grandTotal)}</p>
            </div>
            <button className="border border-[#2caf92] flex items-center justify-center rounded-[3px] size-[40px] hover:bg-[#f0faf8] transition-colors">
              <div className="overflow-clip relative shrink-0 size-[18px]">
                <div className="absolute inset-[41.67%_16.67%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={moreIcon} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Transaction table */}
        <div className="flex-1 overflow-auto px-[32px] pt-[8px]">
          <table className="w-full border-collapse" style={{ minWidth: '1200px' }}>
            <thead>
              <tr>
                {COLS.map(col => (
                  <th
                    key={col}
                    className={`border-b border-[#e0e3e7] font-semibold text-[13px] leading-[18px] text-[#6a6e73] tracking-[0.16px] px-[8px] py-[8px] whitespace-nowrap ${col === 'Amount' ? 'text-right' : 'text-left'}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="border-b border-[#e0e3e7] hover:bg-[#f9fafb] transition-colors">
                  {COLS.map(col => (
                    <td
                      key={col}
                      className={`px-[8px] py-[14px] text-[13px] leading-[18px] text-[#1d1e20] whitespace-nowrap ${col === 'Amount' ? 'text-right' : ''} ${col === 'Vendor' || col === 'Description' ? 'max-w-[140px] truncate' : ''}`}
                    >
                      {cellValue(t, col)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-[32px] py-[14px] shrink-0">
          <p className="font-normal text-[13px] leading-[18px] text-[#6a6e73]">
            Showing 1 – {transactions.length} of {transactions.length} Entries
          </p>
        </div>
      </div>
    </div>
  )
}
