import './styles/App.css'
import { Button, Link } from '../lib/main'

const App = () => {
  return (
    <>
      <div className="components-table">
        <Button>Hello</Button>
        <Button variant="secondary">Hello</Button>
        <Button variant="ghost">Hello</Button>

        <Link to="/">Hello</Link>
        <Link variant="muted" to="/" target="_blank">
          Hello
        </Link>
        <Link variant="inline" to="https://www.google.com" target="_blank">
          Hello
        </Link>
      </div>
    </>
  )
}

export default App
