import './styles/App.css'
import { Button, Link, NavBar, Panel, TextInput, RadioInput } from '../lib/main'

const App = () => {
  return (
    <>
      <NavBar>NavBar Default</NavBar>
      <NavBar isFloating>NavBar Floating</NavBar>

      <Panel>
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>

        <Link to="/">Default</Link>
        <Link variant="muted" to="/" target="_blank">
          Muted Target Blank
        </Link>
        <Link variant="inline" to="https://www.google.com" target="_blank">
          Inline Target Blank
        </Link>

        <TextInput type="text" name="text" placeholder="Text" />
        <TextInput type="email" name="email" placeholder="Email" />
        <TextInput type="password" name="password" placeholder="Password" />

        <RadioInput name="test" values={['Value1', 'Value2', 'Value3']} />
      </Panel>
    </>
  )
}

export default App
