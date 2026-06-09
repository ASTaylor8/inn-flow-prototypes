import { useState } from 'react'
import chevronRight from '../assets/figma/chevron-right.svg'

const TASKS = [
  { id: 'approve', label: 'Days to Approve', badge: 4, badgeVariant: 'danger' },
  { id: 'cashflow', label: 'NC Cash Flow', badge: 12, badgeVariant: 'neutral' },
  { id: 'labor', label: 'General Labor Overview', badge: 7, badgeVariant: 'neutral' },
]

function Badge({ count, variant }) {
  const styles = {
    danger: 'bg-[#ffefed] text-[#b12a18]',
    neutral: 'bg-[#f4f6f8] text-[#3f4347]',
  }
  return (
    <div className={`flex items-center overflow-clip px-[6px] py-[4px] rounded-[3px] ${styles[variant]}`}>
      <span className="font-semibold leading-[16px] text-[12px] tracking-[0.16px] whitespace-nowrap">{count}</span>
    </div>
  )
}

export default function TasksPanel() {
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <div className="bg-white border-[#e0e3e6] border-l border-r border-solid h-full w-[380px] shrink-0 pt-[32px] overflow-y-auto">
      <div className="px-[24px]">
        {/* Section label */}
        <p className="font-semibold text-[12px] leading-[18px] text-[#6a6e73] tracking-[0.5px] uppercase mb-[32px]">Tasks</p>

        {/* Task card */}
        <div className="bg-white border border-[#e0e3e6] border-solid rounded-[3px] shadow-[0px_0px_4px_0px_rgba(44,62,88,0.08)]">
          {/* Card header */}
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#e0e3e6]">
            <span className="font-semibold text-[14px] leading-[18px] text-[#3f4347]">Labor Management</span>
            <button className="flex h-[24px] items-center justify-center w-[24px]">
              <div className="rotate-90">
                <img alt="" className="block h-[24px] w-[24.9px]" src={chevronRight} />
              </div>
            </button>
          </div>

          {/* Task rows */}
          {TASKS.map((task, i) => (
            <div key={task.id}>
              <button
                onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
                className={`flex items-center justify-between w-full px-[16px] py-[12px] transition-colors ${selectedTask === task.id ? 'bg-[#e5f5ff]' : 'hover:bg-[#f4f6f8]'}`}
              >
                <span className="font-normal text-[14px] leading-[18px] text-[#1d1e20] text-left">{task.label}</span>
                <Badge count={task.badge} variant={task.badgeVariant} />
              </button>
              {i < TASKS.length - 1 && <div className="bg-[#e0e3e6] h-px mx-[16px]" />}
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-[16px]">
          <button className="font-bold text-[14px] leading-[18px] text-[#2caf92] hover:underline">
            Labor Overview
          </button>
        </div>
      </div>
    </div>
  )
}
