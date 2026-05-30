import './styles/App.css'
import { Button } from '../lib/main'

const App = () => {
  return (
    <>
      <div className="components-table">
        <Button>Hello</Button>
        <Button variant="secondary">Hello</Button>
        <Button variant="ghost">Hello</Button>
      </div>
    </>
  )
}

export default App
