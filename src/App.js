import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Layout/Header"
import Meal from "./Components/Meals/Meal"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meal />
      </main>
    </div>
  )
}

export default App
