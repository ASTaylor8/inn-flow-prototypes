import { useState } from 'react'
import ellipse1 from '../assets/figma/ellipse1.svg'
import ellipse2 from '../assets/figma/ellipse2.svg'
import webinarIllustration from '../assets/figma/webinar-illustration.svg'
import maintenanceIllustration from '../assets/figma/maintenance-illustration.svg'
import moreIcon from '../assets/figma/group.svg'

export function WebinarCard({ onRegister }) {
  return (
    <div className="bg-[#effbfc] border border-[#e0e3e6] border-solid h-[178px] overflow-clip relative rounded-[3px] shadow-[0px_0px_4px_0px_rgba(44,62,88,0.08)] shrink-0 w-full">
      {/* Background ellipses */}
      <div className="absolute left-[726px] size-[119px] top-[-54px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ellipse1} />
      </div>
      <div className="absolute left-[441px] size-[119px] top-[121px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ellipse1} />
      </div>
      <div className="absolute left-[191px] size-[119px] top-[-75px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ellipse2} />
      </div>

      {/* Content */}
      <div className="absolute h-[178px] left-[-1px] overflow-clip top-[-1px] w-[500px]">
        <p className="absolute font-semibold leading-[22px] left-[32px] text-[#1d1e20] text-[16px] top-[24px] whitespace-nowrap">
          Upcoming Webinar on January 12th
        </p>
        <p className="absolute font-normal leading-[20px] left-[32px] text-[#3f4347] text-[14px] top-[54px] w-[450px]">
          Learn about how to minimize overages by effectively using the innflow dashboard, reporting tools, and AI insights.
        </p>
        <div className="absolute contents left-[32px] top-[110px]">
          <button
            onClick={onRegister}
            className="absolute bg-white border border-[#e0e3e6] border-solid flex items-center left-[32px] overflow-clip px-[16px] py-[11px] rounded-[3px] top-[110px] hover:bg-[#f4f6f8] transition-colors"
          >
            <span className="font-semibold leading-[18px] text-[#3f4347] text-[14px] whitespace-nowrap">Register</span>
          </button>
          <button className="absolute font-semibold leading-[18px] left-[138px] text-[#3f4347] text-[14px] top-[121px] whitespace-nowrap hover:underline">
            Learn More
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="absolute h-[178px] left-[499px] overflow-clip top-[-1px] w-[354px]">
        <div className="absolute left-[70px] overflow-clip size-[160px] top-[9px]">
          <div className="absolute inset-[12.58%_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={webinarIllustration} />
          </div>
        </div>
        {/* More button */}
        <button className="absolute content-stretch flex items-start left-[313px] overflow-clip p-[6px] rounded-[3px] top-[17px] hover:bg-[#e0e3e6] transition-colors">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[40.63%_9.38%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={moreIcon} />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export function MaintenanceCard() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-white border border-[#e0e3e6] border-solid col-1 h-[174px] ml-0 mt-0 relative rounded-[3px] row-1 shadow-[0px_0px_4px_0px_rgba(44,62,88,0.08)] w-full" />
      <div className="col-1 h-[100px] ml-[4%] mt-[37px] relative row-1 w-[12.5%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={maintenanceIllustration} />
      </div>
      <div className="col-1 grid-rows-[max-content] inline-grid ml-[20.5%] mt-[24px] place-items-start relative row-1 w-[75.5%]">
        <p className="col-1 font-semibold leading-[22px] ml-0 mt-0 relative row-1 text-[#1d1e20] text-[16px] w-[44.37%]">
          Upcoming Scheduled Maintenance
        </p>
        <p className="col-1 font-normal leading-[20px] ml-0 mt-[30px] relative row-1 text-[#3f4347] text-[14px] w-full">
          The innflow platform will undergo scheduled maintenance on Saturday, January 18th from 2:00 AM – 4:00 AM EST. Services will be temporarily unavailable during this window.
        </p>
        <button className="bg-white border border-[#e0e3e6] border-solid col-1 flex items-center ml-0 mt-[30px] overflow-clip px-[16px] py-[11px] relative rounded-[3px] row-1 hover:bg-[#f4f6f8] transition-colors">
          <span className="font-semibold leading-[18px] text-[#3f4347] text-[14px] whitespace-nowrap">Learn More</span>
        </button>
      </div>
      {/* More button */}
      <button className="col-1 flex items-start ml-[94%] mt-[16px] overflow-clip p-[6px] relative rounded-[3px] row-1 w-[4%] hover:bg-[#e0e3e6] transition-colors">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[40.63%_9.38%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={moreIcon} />
          </div>
        </div>
      </button>
    </div>
  )
}
