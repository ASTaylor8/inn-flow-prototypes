import { useState } from 'react'
import insightsIcon from '../assets/figma/insights-icon.png'
import announcementsIcon from '../assets/figma/announcements-icon.svg'
import moreIcon from '../assets/figma/group.svg'
import InsightCard from './InsightCard'
import BudgetAlertsCard from './BudgetAlertsCard'
import LaborCostsCard from './LaborCostsCard'
import MissingExpensesCard from './MissingExpensesCard'
import { WebinarCard, MaintenanceCard } from './AnnouncementCard'
import DetailDrawer from './DetailDrawer'

function Toast({ message, onDismiss }) {
  return (
    <div className="fixed bottom-[32px] left-1/2 -translate-x-1/2 z-50 bg-[#101828] text-white px-[24px] py-[14px] rounded-[3px] shadow-xl flex items-center gap-[16px]">
      <span className="font-semibold text-[14px] leading-[18px]">{message}</span>
      <button onClick={onDismiss} className="text-[#98a2b3] hover:text-white transition-colors text-[18px] leading-none">×</button>
    </div>
  )
}

export default function HomePage({ onViewTransactions, onViewSchedule, onViewAPInbox, mode }) {
  const [drawer, setDrawer] = useState({ open: false, variant: null, data: null })
  const [toast, setToast] = useState(null)

  function showDetails(variant, data) {
    setDrawer({ open: true, variant, data })
  }

  function closeDrawer() {
    setDrawer({ open: false, variant: null, data: null })
  }

  function handleRegister() {
    setToast("You're registered! Check your email for confirmation.")
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <>
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        {/* Page header */}
        <div className="flex flex-col gap-[24px] items-start pt-[32px] px-[32px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[8px] items-center shrink-0">
              <div className="flex flex-col items-start shrink-0">
                <div className="flex gap-[12px] items-center shrink-0">
                  <p className="font-semibold leading-[36px] text-[28px] text-[#1d1e20] whitespace-nowrap">Home</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] items-center shrink-0">
              <button className="border border-[#2caf92] border-solid flex gap-[10px] h-[40px] items-center justify-center px-[16px] py-[4px] rounded-[3px] hover:bg-[#f0faf8] transition-colors">
                <div className="overflow-clip relative shrink-0 size-[18px]">
                  <div className="absolute inset-[41.67%_16.67%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={moreIcon} />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full h-px bg-[#e0e3e6]" />
        </div>

        {/* Scrollable main content */}
        <div className="flex flex-col gap-[32px] items-start overflow-y-auto px-[32px] pt-[24px] pb-[32px] flex-1">

          {/* Insights section */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex gap-[8px] items-start shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[4.17%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={insightsIcon} />
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start justify-center shrink-0">
                <p className="font-semibold text-[20px] leading-[24px] text-[#1d1e20]">Insights</p>
                <p className="font-normal text-[14px] leading-[18px] text-[#6a6e73]">Tailored AI insights for your role and permissions</p>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] items-end w-full">
              <BudgetAlertsCard onViewTransactions={onViewTransactions} mode={mode} />
              <LaborCostsCard onViewSchedule={onViewSchedule} mode={mode} />
              <MissingExpensesCard onViewAPInbox={onViewAPInbox} mode={mode} />
            </div>
          </div>

          {/* Announcements section */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex gap-[8px] items-start shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[16.67%_8.33%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={announcementsIcon} />
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start justify-center shrink-0">
                <p className="font-semibold text-[20px] leading-[24px] text-[#1d1e20]">Announcements</p>
                <p className="font-normal text-[14px] leading-[18px] text-[#6a6e73]">Other announcements for releases & webinars</p>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] items-end w-full">
              <WebinarCard onRegister={handleRegister} />
            </div>
          </div>
        </div>
      </div>

      {/* Detail drawer */}
      <DetailDrawer
        open={drawer.open}
        variant={drawer.variant}
        data={drawer.data}
        onClose={closeDrawer}
      />

      {/* Toast notification */}
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </>
  )
}
