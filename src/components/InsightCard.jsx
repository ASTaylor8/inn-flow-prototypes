import warningIcon from '../assets/figma/vector.svg'
import laborIcon from '../assets/figma/vector1.svg'
import infoIcon from '../assets/figma/vector2.svg'

const VARIANTS = {
  danger: {
    gradient: 'from-[#ffefed]',
    icon: warningIcon,
    title: 'Budget Alerts',
    subtitle: '5 Properties • 19 COAs',
    description: 'Each property has COAs that are trending to be over budget for this month.',
    detail: [
      { property: 'Marriott Downtown', coa: 'Food & Beverage', budget: '$120,000', actual: '$138,400', variance: '+15.3%' },
      { property: 'Hilton Airport', coa: 'Utilities', budget: '$45,000', actual: '$52,100', variance: '+15.8%' },
      { property: 'Grand Hyatt Central', coa: 'Maintenance', budget: '$80,000', actual: '$89,300', variance: '+11.6%' },
      { property: 'Westin Harbor', coa: 'Staffing', budget: '$210,000', actual: '$228,500', variance: '+8.8%' },
      { property: 'Sheraton Plaza', coa: 'Marketing', budget: '$35,000', actual: '$41,200', variance: '+17.7%' },
    ],
  },
  warn: {
    gradient: 'from-[#fff3e8]',
    icon: laborIcon,
    title: 'Labor Costs at Risk',
    subtitle: '2 Properties • 2 Departments',
    description: 'Each property has departments that are trending to be over budget for this month.',
    detail: [
      { property: 'Marriott Downtown', coa: 'Front Desk', budget: '$48,000', actual: '$55,200', variance: '+15.0%' },
      { property: 'Hilton Airport', coa: 'Housekeeping', budget: '$62,000', actual: '$71,300', variance: '+15.0%' },
    ],
  },
  info: {
    gradient: 'from-[#e5f5ff]',
    icon: infoIcon,
    title: 'Missing Expenses',
    subtitle: '1 Property • 1 Vendor',
    description: "Over the past 12 months you've had at least one invoice for these vendors recurring every month.",
    detail: [
      { property: 'Grand Hyatt Central', coa: 'Sysco Foods', budget: 'Recurring', actual: 'Missing', variance: 'Jun 2025' },
    ],
  },
}

export default function InsightCard({ variant = 'danger', onShowDetails }) {
  const v = VARIANTS[variant]
  return (
    <div className={`bg-gradient-to-r border border-[#e0e3e7] border-solid flex flex-col ${v.gradient} to-[27.404%] to-white items-start p-[16px] relative rounded-[3px] shrink-0 w-full`}>
      <div className="flex gap-[8px] items-start w-full">
        {/* Icon */}
        <div className="flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[40px]">
          <div className="flex-1 min-h-px overflow-clip relative w-full">
            <div className="absolute inset-[8%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.icon} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-[12px] items-start min-w-0">
          <div className="flex items-start overflow-clip w-full">
            <div className="flex flex-1 flex-col items-start min-w-0">
              <p className="font-semibold leading-[22px] text-[16px] text-[#1d1e20] w-full">{v.title}</p>
              <p className="font-normal leading-[18px] text-[14px] text-[#6a6e73] w-full">{v.subtitle}</p>
            </div>
          </div>
          <div className="flex items-start w-full">
            <p className="flex-1 font-normal leading-[18px] text-[14px] text-[#1d1e20]">{v.description}</p>
          </div>
          <button
            onClick={() => onShowDetails(variant, v)}
            className="font-normal leading-[18px] text-[14px] text-[#6a6e73] underline decoration-solid cursor-pointer hover:text-[#2CAF92] transition-colors"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  )
}
