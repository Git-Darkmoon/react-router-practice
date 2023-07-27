import { useQuery } from "@tanstack/react-query"
import { createContext, useContext } from "react"

const API_URL = "https://jsonplaceholder.typicode.com/users"

const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

function AppProvider({ children }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(API_URL)
      const info = await response.json()
      return info
    },
  })

  const allUsers = data

  return (
    <AppContext.Provider value={{ allUsers, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider
