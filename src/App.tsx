
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Button } from './components'
// import { Button } from '../dist/try-ui-core-component'
import { darkTheme } from './theme'

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Button size="large" variant="contained" label="Hello World" />
        </ThemeProvider>
    )
}

export default App
