import { createContext, useState } from "react"
import Header from "./components/Header"
export const AppContext = createContext();


const App = () => {
  const [user, setUser] = useState({ name: "John Doe" });
  const handleLogout = () => {
    setUser(null);
  }
  return (
    <div>
      <AppContext.Provider value={{ user, handleLogout }}>
        <Header />
      </AppContext.Provider>
    </div>
  )
}

export default App