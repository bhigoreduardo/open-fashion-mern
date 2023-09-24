import { createContext, useState } from 'react'

export const AppContext = createContext({
  adminHeaderToggle: false,
})

export default function AppProvider({ children }) {
  const [adminHeaderToggle, setAdminHeaderToogle] = useState(false)

  return (
    <AppContext.Provider value={{ adminHeaderToggle, setAdminHeaderToogle }}>
      {children}
    </AppContext.Provider>
  )
}
