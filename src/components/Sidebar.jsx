import logoV3 from '../assets/figma/logo-v3.svg'
import logoV4 from '../assets/figma/logo-v4.svg'
import logoV5 from '../assets/figma/logo-v5.svg'
import logoV6 from '../assets/figma/logo-v6.svg'
import logoV7 from '../assets/figma/logo-v7.svg'
import logoV8 from '../assets/figma/logo-v8.svg'
import logoV9 from '../assets/figma/logo-v9.svg'
import logoV10 from '../assets/figma/logo-v10.svg'
import logoV11 from '../assets/figma/logo-v11.svg'
import logoV12 from '../assets/figma/logo-v12.svg'
import navHome from '../assets/figma/nav-home.svg'
import navInbox from '../assets/figma/nav-inbox.svg'
import navDashboards from '../assets/figma/nav-dashboards.svg'
import navAccounting from '../assets/figma/nav-accounting.svg'
import navLabor from '../assets/figma/nav-labor.svg'
import navProcurement from '../assets/figma/nav-procurement.svg'
import navPayroll from '../assets/figma/nav-payroll.svg'
import navSales from '../assets/figma/nav-sales.svg'
import navFacilities from '../assets/figma/nav-facilities.svg'
import helpIcon from '../assets/figma/help.svg'
import settingsIcon from '../assets/figma/settings.svg'
import avatar from '../assets/figma/avatar.png'
import userArrow from '../assets/figma/user-arrow.svg'
import navToggleBg from '../assets/figma/nav-toggle-bg.svg'
import navToggleChevron from '../assets/figma/nav-toggle-chevron.svg'
import searchIcon from '../assets/figma/search.svg'

function Logo() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[152px]">
      <div className="absolute inset-[0_80.1%_86.33%_11.13%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV3} />
      </div>
      <div className="absolute inset-[15.61%_80.26%_15.4%_5.57%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV4} />
      </div>
      <div className="absolute inset-[16.54%_79.25%_0_11.19%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV5} />
      </div>
      <div className="absolute inset-[18.42%_37.02%_19.29%_55.36%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV6} />
      </div>
      <div className="absolute inset-[21.21%_32.57%_19.29%_64.55%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV7} />
      </div>
      <div className="absolute inset-[35.5%_18.89%_18.42%_69.74%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV8} />
      </div>
      <div className="absolute inset-[36.08%_0.64%_19.29%_82.2%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV9} />
      </div>
      <div className="absolute inset-[20.66%_71.19%_19.29%_26.65%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV10} />
      </div>
      <div className="absolute inset-[35.5%_59.18%_19.29%_31.81%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV11} />
      </div>
      <div className="absolute inset-[35.5%_46.82%_19.29%_44.16%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={logoV12} />
      </div>
    </div>
  )
}

export default function Sidebar({ activeNav, onNavChange }) {
  return (
    <div className="bg-[#101828] flex flex-col h-full w-[280px] shrink-0 pt-[28px] relative">
      {/* Top section */}
      <div className="flex flex-col gap-[32px] items-start px-[16px] shrink-0">
        {/* Logo */}
        <div className="flex gap-[16px] h-[40px] items-center shrink-0">
          <Logo />
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          {/* Search */}
          <button
            onClick={() => onNavChange('search')}
            className={`flex gap-[38px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'search' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={searchIcon} alt="" className="shrink-0 w-[18.7px] h-[18.7px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Search</span>
          </button>

          {/* Home */}
          <button
            onClick={() => onNavChange('home')}
            className={`flex gap-[38px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'home' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navHome} alt="" className="shrink-0 size-[20px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Home</span>
          </button>

          {/* Inbox */}
          <button
            onClick={() => onNavChange('inbox')}
            className={`flex gap-[38px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'inbox' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navInbox} alt="" className="shrink-0 size-[20px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Inbox</span>
          </button>

          {/* Dashboards */}
          <button
            onClick={() => onNavChange('dashboards')}
            className={`flex gap-[38px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'dashboards' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navDashboards} alt="" className="shrink-0 h-[11px] w-[20px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Dashboards</span>
          </button>

          {/* Accounting */}
          <button
            onClick={() => onNavChange('accounting')}
            className={`flex gap-[38px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'accounting' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navAccounting} alt="" className="shrink-0 size-[20px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Accounting</span>
          </button>

          {/* Labor */}
          <button
            onClick={() => onNavChange('labor')}
            className={`flex gap-[38px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'labor' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navLabor} alt="" className="shrink-0 size-[20px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Labor</span>
          </button>

          {/* Procurement */}
          <button
            onClick={() => onNavChange('procurement')}
            className={`flex gap-[35px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'procurement' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navProcurement} alt="" className="shrink-0 h-[15px] w-[23px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Procurement</span>
          </button>

          {/* Payroll */}
          <button
            onClick={() => onNavChange('payroll')}
            className={`flex gap-[36px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'payroll' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navPayroll} alt="" className="shrink-0 h-[14px] w-[22px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Payroll</span>
          </button>

          {/* Sales */}
          <button
            onClick={() => onNavChange('sales')}
            className={`flex gap-[35px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'sales' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navSales} alt="" className="shrink-0 h-[14.26px] w-[23px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Sales</span>
          </button>

          {/* Facilities */}
          <button
            onClick={() => onNavChange('facilities')}
            className={`flex gap-[36px] h-[32px] items-center overflow-clip pl-[6px] w-full rounded-[3px] transition-colors ${activeNav === 'facilities' ? 'bg-[#5e6773]' : 'hover:bg-[#1d2939]'}`}
          >
            <img src={navFacilities} alt="" className="shrink-0 h-[21.8px] w-[22px]" />
            <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Facilities</span>
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-[16px] items-start justify-end px-[16px] mt-auto pb-[16px]">
        {/* Settings */}
        <button className="flex gap-[34px] h-[32px] items-center justify-center pl-[6px] w-full rounded-[3px] hover:bg-[#1d2939] transition-colors">
          <img src={settingsIcon} alt="" className="shrink-0 size-[24px]" />
          <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Administration</span>
        </button>

        {/* Help */}
        <button className="flex gap-[34px] h-[32px] items-center justify-center pl-[6px] w-full rounded-[3px] hover:bg-[#1d2939] transition-colors">
          <img src={helpIcon} alt="" className="shrink-0 size-[24px]" />
          <span className="font-normal text-[16px] leading-[22px] text-white whitespace-nowrap">Help</span>
        </button>

        {/* User row */}
        <div className="flex items-center overflow-clip py-[13px] w-full gap-[12px]">
          <div className="relative rounded-[100px] shrink-0 size-[36px]">
            <img alt="User avatar" className="absolute inset-0 max-w-none object-cover rounded-[100px] size-full" src={avatar} />
          </div>
          <div className="flex flex-1 flex-col gap-[3px] items-start min-w-0">
            <span className="text-[14px] leading-[18px] text-white truncate">Savannah.Fisher</span>
            <span className="text-[12px] leading-[16px] text-[#98a2b3] truncate">Front Desk Associate</span>
          </div>
          <img src={userArrow} alt="" className="shrink-0 h-[11.4px] w-[7.1px]" />
        </div>
      </div>

      {/* Nav toggle button */}
      <div className="absolute left-[264px] size-[32px] top-[28px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[22px] top-1/2">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[22px]">
              <div className="absolute inset-[-40.91%_-45.45%_-50%_-45.45%]">
                <img alt="" className="block max-w-none size-full" src={navToggleBg} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[10px] items-center justify-center left-[calc(50%+0.25px)] top-1/2 w-[6.5px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[10px] relative w-[6.5px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={navToggleChevron} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
