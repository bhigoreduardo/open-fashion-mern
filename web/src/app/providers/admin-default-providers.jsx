import AppProvider from '../contexts/app-context'

export default function AdminDefaultProviders({ children }) {
  return <AppProvider>{children}</AppProvider>
}
