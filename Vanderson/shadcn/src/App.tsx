// import './App.css'
import { Button } from "@/components/ui/button"
import { AppSidebar } from "./components/app-sidebar"
// import { layout } from "@/layout.tsxlayout"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      <AppSidebar>
        Click me
      </AppSidebar>
    </div>
  )
}

export default App
