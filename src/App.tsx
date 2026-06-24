import './styles/App.css'
import { Button, Link, NavBar, Panel, Input } from '../lib/main'

const App = () => {
  return (
    <>
      <NavBar>NavBar Default</NavBar>
      <NavBar isFloating>NavBar Floating</NavBar>

      <Panel>
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>

        <Link to="/">Default</Link>
        <Link variant="muted" to="/" target="_blank">
          Muted Target Blank
        </Link>
        <Link variant="inline" to="https://www.google.com" target="_blank">
          Inline Target Blank
        </Link>

        <Input type="text" placeholder="Placeholder..." />
      </Panel>
    </>
  )
}

export default App
