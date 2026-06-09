import Sidebar from './Sidebar'

const DAYS = [
  { label: 'Wed', date: '06/03', locked: true },
  { label: 'Thu', date: '06/04', locked: true },
  { label: 'Fri', date: '06/05', locked: true },
  { label: 'Sat', date: '06/06', locked: true },
  { label: 'Sun', date: '06/07', locked: true },
  { label: 'Mon', date: '06/08', locked: true },
  { label: 'Tue', date: '06/09', locked: false },
]

const DEPT_ROWS = [
  {
    name: 'Bar', total: '43:00', budget: '42:00',
    cells: [
      { v: '6:00', s: '6:00' }, { v: '6:00', s: '6:00' }, { v: '7:00', s: '6:00', red: true },
      { v: '6:00', s: '6:00' }, { v: '6:00', s: '6:00' }, { v: '6:00', s: '6:00' }, { v: '6:00', s: '6:00' },
    ],
  },
  {
    name: 'Front Desk', total: '188:00', budget: '140:00',
    cells: [
      { v: '30:00', s: '24:00' }, { v: '30:00', s: '22:00' }, { v: '32:00', s: '20:00', red: true },
      { v: '24:00', s: '20:00', red: true }, { v: '24:00', s: '18:00', red: true },
      { v: '24:00', s: '18:00', red: true }, { v: '24:00', s: '18:00', red: true },
    ],
  },
  {
    name: 'Housekeeping', total: '392:39', budget: '480:40', ot: true, expanded: true,
    cells: [
      { v: '56:41', s: '89:00' }, { v: '63:20', s: '96:31' }, { v: '71:25', s: '80:42' },
      { v: '35:53', s: '51:59' }, { v: '83:00', s: '84:45' },
      { v: '41:30', s: '37:08', red: true }, { v: '40:50', s: '40:35' },
    ],
  },
]

const EMPLOYEES = [
  {
    name: 'Maya.Thornton', hours: '12:40', total: '40:00', initials: 'MT', color: '#6B7280',
    shifts: [null, { t: '8:40 AM – 3:00 PM', r: 'Laundry attendant' }, null, null, null, null, { t: '8:40 AM – 3:00 PM', r: 'Laundry attendant', hi: true }],
  },
  {
    name: 'Brianna.Okafor', hours: '29:00', total: '40:00', initials: 'BO', color: '#4B5563',
    shifts: [null, { t: '8:00 AM – 3:00 PM', r: 'Quality control inspector' }, { t: '8:00 AM – 3:00 PM', r: 'Quality control inspector' }, null, { t: '8:00 AM – 4:00 PM', r: 'Quality control inspector' }, { t: '8:00 AM – 3:00 PM', r: 'Quality control inspector' }, null],
  },
  {
    name: 'Delia.Figueroa...', hours: '36:00', total: '40:00', initials: 'DF', color: '#D97706',
    shifts: [{ t: '8:30 AM – 3:00 PM', r: 'Housekeeper' }, { t: '8:00 AM – 3:00 PM', r: 'Housekeeper' }, { t: '8:00 AM – 5:00 PM', r: 'Housekeeper' }, null, { t: '9:30 AM – 4:00 PM', r: 'Housekeeper' }, { t: '8:30 AM – 3:30 PM', r: 'Housekeeper' }, null],
  },
  {
    name: 'Rosa.Villanueva...', hours: '33:36', total: '40:00', initials: 'RV', color: '#059669',
    shifts: [{ t: '7:47 AM – 3:00 PM', r: 'Laundry attendant' }, { t: '8:30 AM – 3:30 PM', r: 'Laundry attendant' }, null, { t: '9:07 AM – 3:00 PM', r: 'Laundry attendant' }, null, { t: '8:30 AM – 3:30 PM', r: 'Laundry attendant' }, { t: '8:30 AM – 3:00 PM', r: 'Laundry attendant' }],
  },
  {
    name: 'Lucia.Esparza...', hours: '35:00', total: '40:00', initials: 'LE', color: '#7C3AED',
    shifts: [{ t: '8:00 AM – 4:00 PM', r: 'Houseperson' }, { t: '8:30 AM – 3:00 PM', r: 'Laundry attendant' }, { t: '8:00 AM – 2:00 PM', r: 'Laundry attendant' }, null, { t: '8:30 AM – 4:00 PM', r: 'Houseperson' }, null, { t: '8:00 AM – 3:00 PM', r: 'Houseperson', hi: true }],
  },
  {
    name: 'Yolanda.Reyes...', hours: '36:00', total: '40:00', initials: 'YR', color: '#2563EB',
    shifts: [{ t: '8:30 AM – 3:00 PM', r: 'Housekeeper' }, null, { t: '8:00 AM – 5:00 PM', r: 'Housekeeper' }, { t: '8:30 AM – 3:00 PM', r: 'Housekeeper' }, { t: '9:30 AM – 5:00 PM', r: 'Housekeeper' }, null, { t: '8:30 AM – 3:00 PM', r: 'Housekeeper', hi: true }],
  },
  {
    name: 'Dominique.Wash...', hours: '49:53', total: '40:00', initials: 'DW', color: '#DC2626', nameRed: true,
    shifts: [{ t: '7:02 AM – 3:30 PM', r: 'Housekeeping supervisor' }, { t: '7:00 AM – 4:00 PM', r: 'Housekeeping supervisor' }, { t: '7:05 AM – 4:00 PM', r: 'Housekeeping supervisor' }, null, { t: '7:00 AM – 3:00 PM', r: 'Housekeeping supervisor' }, { t: '7:30 AM – 3:30 PM', r: 'Housekeeping supervisor' }, { t: '7:30 AM – 3:00 PM', r: 'Housekeeping supervis...' }],
  },
  {
    name: 'Marcus.Bellamy...', hours: '27:30', total: '40:00', initials: 'MB', color: '#0891B2',
    shifts: [{ t: '5:00 AM – 11:00 AM', r: 'Wait staff-breakfast att...' }, { t: '6:00 AM – 12:00 PM', r: 'Wait staff-breakfast att...' }, { t: '8:00 AM – 3:00 PM', r: 'Houseperson' }, null, null, { t: '8:00 AM – 4:30 PM', r: 'Houseperson' }, null],
  },
]

const NAME_COL = 'w-[220px] shrink-0'

function DayHeaders() {
  return (
    <div className="flex border-b border-[#e0e3e7] bg-[#e8eaed] shrink-0">
      <div className={NAME_COL} />
      {DAYS.map(day => (
        <div key={day.date} className="flex-1 text-center py-[10px]">
          <div className="flex items-center justify-center gap-[4px]">
            {day.locked && (
              <svg width="10" height="10" viewBox="0 0 14 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73] shrink-0">
                <path d="M12 6h-1V4c0-2.76-2.24-5-5-5S1 1.24 1 4v2H0v12h12V6zM6 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9.1 6H2.9V4c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            )}
            <span className="font-semibold text-[13px] text-[#1d1e20]">{day.label}</span>
          </div>
          <div className="text-[12px] text-[#6a6e73]">{day.date}</div>
        </div>
      ))}
    </div>
  )
}

function DeptRow({ dept }) {
  return (
    <div className="flex border-b border-[#e0e3e7]">
      <div className={`${NAME_COL} flex items-center gap-[8px] px-[16px] py-[10px]`}>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className={`text-[#6a6e73] shrink-0 transition-transform ${dept.expanded ? '' : '-rotate-90'}`}><polyline points="6 9 12 15 18 9"/></svg>
        <div>
          <div className="flex items-center gap-[6px]">
            <span className="font-semibold text-[14px] text-[#1d1e20]">{dept.name}</span>
            {dept.ot && (
              <span className="bg-[#fde8e8] text-[#DC2626] text-[10px] font-bold px-[5px] py-[1px] rounded-[3px]">OT</span>
            )}
          </div>
          <div className="text-[12px] text-[#6a6e73]">{dept.total} / {dept.budget}</div>
        </div>
      </div>
      {dept.cells.map((cell, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-center py-[8px]">
          <span className={`font-semibold text-[14px] ${cell.red ? 'text-[#C02B2B]' : 'text-[#1d1e20]'}`}>{cell.v}</span>
          <span className="text-[12px] text-[#6a6e73]">{cell.s}</span>
        </div>
      ))}
    </div>
  )
}

function EmployeeRow({ emp }) {
  return (
    <div className="flex">
      <div className={`${NAME_COL} flex items-center gap-[10px] px-[16px] py-[8px]`}>
        <div
          className="size-[32px] rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
          style={{ backgroundColor: emp.color }}
        >
          {emp.initials}
        </div>
        <div className="min-w-0">
          <div className={`font-semibold text-[13px] truncate ${emp.nameRed ? 'text-[#C02B2B]' : 'text-[#1d1e20]'}`}>
            {emp.name}
          </div>
          <div className="text-[11px] text-[#6a6e73]">{emp.hours} / {emp.total}</div>
        </div>
      </div>
      {emp.shifts.map((shift, i) => {
        const locked = DAYS[i]?.locked
        return (
          <div key={i} className="flex-1 p-[3px] self-stretch flex items-center">
            {shift && (
              <div className={`rounded-[3px] px-[6px] py-[4px] w-full ${shift.hi ? 'bg-[#FFF3E8]' : 'bg-[#F3F4F6]'}`}>
                <div className={`text-[11px] font-semibold leading-[14px] ${shift.hi ? 'text-[#C05621]' : locked ? 'text-[#6a6e73]' : 'text-[#1d1e20]'}`}>
                  {shift.t}
                </div>
                <div className={`text-[10px] leading-[13px] truncate ${shift.hi ? 'text-[#C05621]' : 'text-[#6a6e73]'}`}>
                  {shift.r}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function LaborSchedulePage({ property, activeNav, onBack }) {
  const propertyCode = property?.code ?? 'CYCA'

  return (
    <div className="flex h-full w-full bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={onBack} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Page header */}
        <div className="flex items-center justify-between border-b border-[#e0e3e7] px-[24px] pt-[28px] pb-[24px] shrink-0">
          <div className="flex items-center gap-[12px]">
            <button className="flex items-center gap-[6px] bg-[#dce8f7] rounded-[6px] px-[14px] h-[36px] text-[14px] font-semibold text-[#1e4d8c] hover:bg-[#cdddf2] transition-colors">
              {propertyCode}
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <h1 className="font-semibold text-[24px] leading-[32px] text-[#1d1e20]">Schedule</h1>
          </div>
          <div className="flex items-center gap-[8px]">
            <button className="border border-[#2caf92] text-[13px] font-semibold px-[14px] h-[34px] rounded-[3px] text-[#2caf92] hover:bg-[#f0faf8] whitespace-nowrap transition-colors">
              Add Time Off Shift
            </button>
            <button className="border border-[#2caf92] text-[13px] font-semibold px-[14px] h-[34px] rounded-[3px] text-[#2caf92] hover:bg-[#f0faf8] whitespace-nowrap transition-colors">
              Add Shift
            </button>
            <div className="relative">
              <button className="bg-[#065A8C] text-white text-[13px] font-bold px-[14px] h-[34px] rounded-[3px] hover:bg-[#054d78] whitespace-nowrap transition-colors">
                Publish Changes
              </button>
              <span className="absolute -top-[3px] -right-[3px] size-[8px] bg-[#DC2626] rounded-full" />
            </div>
            <button className="border border-[#e0e3e7] flex items-center justify-center size-[34px] rounded-[3px] hover:bg-[#f9fafb] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73]">
                <path d="M11.875 10C11.875 11.0352 11.0352 11.875 10 11.875C8.96484 11.875 8.125 11.0352 8.125 10C8.125 8.96484 8.96484 8.125 10 8.125C11.0352 8.125 11.875 8.96484 11.875 10Z"/>
                <path d="M5.625 10C5.625 11.0352 4.78516 11.875 3.75 11.875C2.71484 11.875 1.875 11.0352 1.875 10C1.875 8.96484 2.71484 8.125 3.75 8.125C4.78516 8.125 5.625 8.96484 5.625 10Z"/>
                <path d="M18.125 10C18.125 11.0352 17.2852 11.875 16.25 11.875C15.2148 11.875 14.375 11.0352 14.375 10C14.375 8.96484 15.2148 8.125 16.25 8.125C17.2852 8.125 18.125 8.96484 18.125 10Z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-[10px] px-[16px] py-[10px] mt-[8px] shrink-0">
          <input
            placeholder="Search"
            className="border border-[#e0e3e7] rounded-[3px] px-[10px] h-[30px] text-[13px] w-[160px] outline-none focus:border-[#2caf92]"
          />
          <button className="flex items-center gap-[6px] rounded-[3px] px-[10px] h-[30px] text-[13px] font-semibold text-[#1d1e20] hover:bg-[#f9fafb] whitespace-nowrap">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#6a6e73]">
              <path d="M5.25 8.25H6.75V9.75H5.25V8.25ZM5.25 11.25H6.75V12.75H5.25V11.25ZM8.25 8.25H9.75V9.75H8.25V8.25ZM8.25 11.25H9.75V12.75H8.25V11.25ZM11.25 8.25H12.75V9.75H11.25V8.25ZM11.25 11.25H12.75V12.75H11.25V11.25Z"/>
              <path d="M3.75 16.5H14.25C15.0773 16.5 15.75 15.8273 15.75 15V6V4.5C15.75 3.67275 15.0773 3 14.25 3H12.75V1.5H11.25V3H6.75V1.5H5.25V3H3.75C2.92275 3 2.25 3.67275 2.25 4.5V6V15C2.25 15.8273 2.92275 16.5 3.75 16.5ZM14.25 6L14.2507 15H3.75V6H14.25Z"/>
            </svg>
            <span>06/03/26</span>
            <span className="text-[#6a6e73]"> - </span>
            <span>06/09/26</span>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73]">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <button className="flex items-center gap-[6px] rounded-[3px] px-[10px] h-[30px] text-[13px] font-semibold text-[#1d1e20] hover:bg-[#f9fafb]">
            Department
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73]"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div className="ml-auto flex items-center gap-[14px]">
            <button className="flex items-center gap-[6px] text-[13px] font-semibold text-[#1d1e20] hover:text-[#2caf92] whitespace-nowrap">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 12L6.5 9H4.25V0H2.75V9H0.5L3.5 12ZM7.25 3H14V4.5H7.25V3ZM7.25 6H12.5V7.5H7.25V6ZM7.25 0H15.5V1.5H7.25V0ZM7.25 9H11V10.5H7.25V9Z"/></svg>
              Alphabetical
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73]"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button className="flex items-center gap-[6px] text-[13px] font-semibold text-[#1d1e20] hover:text-[#2caf92] whitespace-nowrap">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H3.2V3.2H0V0ZM0 4.8H3.2V8H0V4.8ZM4.8 0H8V3.2H4.8V0ZM4.8 4.8H8V8H4.8V4.8Z"/></svg>
              Departments
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73]"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button className="flex items-center gap-[4px] border border-[#e0e3e7] rounded-[3px] px-[8px] h-[30px] hover:bg-[#f9fafb] text-[#1d1e20]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.562614 9.18059L1.89595 11.4873C2.07995 11.8059 2.48795 11.9153 2.80661 11.7306L3.73728 11.1933C4.12395 11.4979 4.55128 11.7479 5.00061 11.9346V12.9999C5.00061 13.3679 5.29861 13.6666 5.66728 13.6666H8.33395C8.70261 13.6666 9.00062 13.3679 9.00062 12.9999V11.9346C9.44995 11.7479 9.87661 11.4979 10.2639 11.1933L11.1946 11.7306C11.5126 11.9139 11.9219 11.8039 12.1053 11.4873L13.4386 9.18059C13.6219 8.86325 13.5119 8.45325 13.1953 8.26992L12.2806 7.74125C12.3153 7.49525 12.3333 7.24725 12.3333 6.99992C12.3333 6.75259 12.3153 6.50459 12.2793 6.25858L13.1939 5.72992C13.5113 5.54659 13.6213 5.13659 13.4373 4.81925L12.1039 2.51259C11.9199 2.19392 11.5119 2.08459 11.1933 2.26925L10.2626 2.80659C9.87595 2.50192 9.44928 2.25125 8.99995 2.06525V0.999919C8.99995 0.631919 8.70195 0.333252 8.33328 0.333252H5.66661C5.29795 0.333252 4.99995 0.631919 4.99995 0.999919V2.06525C4.55061 2.25192 4.12395 2.50192 3.73661 2.80659L2.80661 2.26925C2.48728 2.08459 2.07995 2.19392 1.89595 2.51259L0.562614 4.81925C0.379281 5.13659 0.489281 5.54659 0.805948 5.72992L1.72061 6.25858C1.68461 6.50459 1.66661 6.75259 1.66661 6.99992C1.66661 7.24725 1.68461 7.49525 1.72061 7.74125L0.805948 8.26992C0.488614 8.45325 0.378614 8.86325 0.562614 9.18059ZM6.99995 4.33325C8.47061 4.33325 9.66661 5.52925 9.66661 6.99992C9.66661 8.47059 8.47061 9.66659 6.99995 9.66659C5.52928 9.66659 4.33328 8.47059 4.33328 6.99992C4.33328 5.52925 5.52928 4.33325 6.99995 4.33325Z"/></svg>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-[#6a6e73]"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        </div>

        {/* Schedule grid */}
        <div className="flex-1 overflow-auto px-[16px] pt-[16px]">
          <DayHeaders />

          {/* Department summary rows */}
          {DEPT_ROWS.map(dept => <DeptRow key={dept.name} dept={dept} />)}

          {/* Unassigned Shifts header */}
          <div className="flex border-b border-[#e0e3e7]">
            <div className={`${NAME_COL} px-[16px] py-[10px]`}>
              <span className="font-normal text-[14px] text-[#1d1e20]">Unassigned Shifts</span>
            </div>
            {DAYS.map(day => (
              <div key={day.date} className="flex-1" />
            ))}
          </div>

          {/* Employee rows */}
          {EMPLOYEES.map(emp => <EmployeeRow key={emp.name} emp={emp} />)}
        </div>
      </div>
    </div>
  )
}
