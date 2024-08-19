import type { Preview } from '@storybook/react'
import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
// import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { lightTheme, darkTheme } from '../src/theme.js'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

export const globalTypes = {
    theme: {
        name: 'Theme',
        title: 'Theme',
        description: 'Theme for your components',
        defaultValue: 'light',
        toolbar: {
            icon: 'paintbrush',
            dynamicTitle: true,
            items: [
                { value: 'light', left: '☀️', title: 'Light mode' },
                { value: 'dark', left: '🌙', title: 'Dark mode' },
            ],
        },
    },
}

const THEMES = {
    light: lightTheme,
    dark: darkTheme,
}

const WithMuiTheme = (Story, context) => {
    // The theme global we just declared
    const { theme: themeKey } = context.globals

    // only recompute the theme if the themeKey changes
    const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    )
}

const preview: Preview = {
    decorators: [WithMuiTheme],
    parameters: {
        controls: {
            expanded: true, // Adds the description and default columns
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
