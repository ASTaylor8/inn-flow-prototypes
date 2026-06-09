import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import TasksPanel from './components/TasksPanel'
import AccountingPage from './components/AccountingPage'
import LaborSchedulePage from './components/LaborSchedulePage'
import APInboxPage from './components/APInboxPage'

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [page, setPage] = useState('home') // 'home' | 'transaction' | 'schedule' | 'apinbox'
  const [transactionCtx, setTransactionCtx] = useState(null) // { property, coa }
  const [scheduleCtx, setScheduleCtx] = useState(null) // { property, department }
  const [apInboxCtx, setApInboxCtx] = useState(null) // { property, vendor }

  useEffect(() => {
    function onPopState() {
      setPage('home')
      setTransactionCtx(null)
      setScheduleCtx(null)
      setApInboxCtx(null)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function handleViewTransactions(property, coa) {
    history.pushState(null, '', '#transaction')
    setTransactionCtx({ property, coa })
    setPage('transaction')
  }

  function handleViewSchedule(property, department) {
    history.pushState(null, '', '#schedule')
    setScheduleCtx({ property, department })
    setPage('schedule')
  }

  function handleViewAPInbox(property, vendor) {
    history.pushState(null, '', '#apinbox')
    setApInboxCtx({ property, vendor })
    setPage('apinbox')
  }

  function handleBackToHome() {
    history.back()
  }

  if (page === 'transaction' && transactionCtx) {
    return (
      <div className="flex h-full w-full bg-white overflow-hidden">
        <AccountingPage
          property={transactionCtx.property}
          coa={transactionCtx.coa}
          activeNav={activeNav}
          onBack={handleBackToHome}
        />
      </div>
    )
  }

  if (page === 'apinbox' && apInboxCtx) {
    return (
      <div className="flex h-full w-full bg-white overflow-hidden">
        <APInboxPage
          property={apInboxCtx.property}
          activeNav="accounting"
          onBack={handleBackToHome}
        />
      </div>
    )
  }

  if (page === 'schedule' && scheduleCtx) {
    return (
      <div className="flex h-full w-full bg-white overflow-hidden">
        <LaborSchedulePage
          property={scheduleCtx.property}
          department={scheduleCtx.department}
          activeNav="labor"
          onBack={handleBackToHome}
        />
      </div>
    )
  }

  return (
    <div className="flex h-full w-full bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className="flex flex-1 min-w-0 min-h-0 overflow-hidden">
        <HomePage onViewTransactions={handleViewTransactions} onViewSchedule={handleViewSchedule} onViewAPInbox={handleViewAPInbox} />
        <TasksPanel />
      </div>
    </div>
  )
}
