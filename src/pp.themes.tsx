import { createGetCssVar, extendTheme } from '@mui/joy/styles';
import {
    checkboxClasses,
    radioClasses,
    switchClasses,
    linkClasses,
    textareaClasses,
} from '@mui/joy';
// import { themeColor } from './theme-color';
import { themeSize } from './theme-size';

declare module '@mui/joy/styles' {
    interface PaletteRange {
        900: string | undefined;
        0: string | undefined;
    }

    interface Palette {
        primary: {
            P50: string | undefined;
            P100: string | undefined;
            P200: string | undefined;
            P300: string | undefined;
            P400: string | undefined;
            P500: string | undefined;
            P600: string | undefined;
            P700: string | undefined;
            P800: string | undefined;
            P900: string | undefined;
        };
        general: {
            white: string | undefined;
            G50: string | undefined;
            G75: string | undefined;
            G100: string | undefined;
            G200: string | undefined;
            G300: string | undefined;
            G400: string | undefined;
            G500: string | undefined;
            G600: string | undefined;
            G700: string | undefined;
            G800: string | undefined;
            G900: string | undefined;
            black: string | undefined;
        };
        illustrate: {
            G50: string | undefined;
            G100: string | undefined;
            G200: string | undefined;
            G300: string | undefined;
            B100: string | undefined;
            B200: string | undefined;
            B300: string | undefined;
            B400: string | undefined;
            S100: string | undefined;
            S200: string | undefined;
            S300: string | undefined;
        };
        success: {
            GR50: string | undefined;
            GR100: string | undefined;
            GR200: string | undefined;
            GR300: string | undefined;
            GR400: string | undefined;
            GR500: string | undefined;
            GR600: string | undefined;
            GR700: string | undefined;
            GR800: string | undefined;
            GR900: string | undefined;
        };
        warning: {
            Y50: string | undefined;
            Y100: string | undefined;
            Y200: string | undefined;
            Y300: string | undefined;
            Y400: string | undefined;
            Y500: string | undefined;
            Y600: string | undefined;
            Y700: string | undefined;
            Y800: string | undefined;
            Y900: string | undefined;
        };
        danger: {
            R50: string | undefined;
            R100: string | undefined;
            R200: string | undefined;
            R300: string | undefined;
            R400: string | undefined;
            R500: string | undefined;
            R600: string | undefined;
            R700: string | undefined;
            R800: string | undefined;
            R900: string | undefined;
        };
        info: {
            B50: string | undefined;
            B100: string | undefined;
            B200: string | undefined;
            B300: string | undefined;
            B400: string | undefined;
            B500: string | undefined;
            B600: string | undefined;
            B700: string | undefined;
            B800: string | undefined;
            B900: string | undefined;
        };
    }
}

const colorSchemes = {
    light: {
        palette: {
            primary: {
                P50: '#F9FAFB',
                P100: '#F3F5F6',
                P200: '#F5F9FC',
                P300: '#DFE9F2',
                P400: '#388FE8',
                P500: '#0D78E5',
                P600: '#146AC3',
                P700: '#1B3A63',
            },
            general: {
                white: '#FFFFFF',
                G50: '#F9FAFB',
                G75: '#E4E5E6',
                G100: '#D9D9D9',
                G200: '#C7C6C6',
                G300: '#A5A5A5',
                G400: '#98999A',
                G500: '#707070',
                G600: '#5E5E60',
                G700: '#4E4E4E',
                black: '#000000',
            },
            illustrate: {
                G50: '#F9FAFB',
                G100: '#F2F2F2',
                G200: '#E6E6E6',
                G300: '#cccccc',
                B100: '#0D78E5',
                B200: '#2D72BA',
                B300: '#3F3D56',
                B400: '#2F2E41',
                S100: '#E5A4A4',
                S200: '#FFB6B6',
                S300: '#A0616A',
            },
            success: {
                GR50: '#E9FFEF',
                GR100: '#A8FFC0',
                GR200: '#00BC33',
                GR300: '#429D5B',
                GR400: undefined,
                GR500: undefined,
                GR600: undefined,
                GR700: undefined,
                GR800: undefined,
                GR900: undefined,
            },
            danger: {
                R50: '#FFF1F1',
                R100: '#FFB4B4',
                R200: '#FF7778',
                R300: '#D85253',
                R400: undefined,
                R500: undefined,
                R600: undefined,
                R700: undefined,
                R800: undefined,
                R900: undefined,
            },
            warning: {
                Y50: '#FEF5DD',
                Y100: '#FFDDA6',
                Y200: '#EAB155',
                Y300: '#B78636',
                Y400: undefined,
                Y500: undefined,
                Y600: undefined,
                Y700: undefined,
                Y800: undefined,
                Y900: undefined,
            },
            info: {
                B50: '#E6F7FF',
                B100: '#B3ECFF',
                B200: '#4DB8FF',
                B300: '#1A94FF',
                B400: undefined,
                B500: undefined,
                B600: undefined,
                B700: undefined,
                B800: undefined,
                B900: undefined,
            },
        },
    },
    dark: {
        palette: {
            primary: {
                P100: '#388FE8',
                P200: '#0456AC',
                P300: '#1F2640',
                P400: '#1E2842',
                P500: '#11172F',
                P600: undefined,
                P700: undefined,
                P800: undefined,
                P900: undefined,
            },
            general: {
                white: '#FFFFFF',
                G50: undefined,
                G75: undefined,
                G100: '#ECECEC',
                G200: '#C3C1C1',
                G300: '#BBBDC4',
                G400: '#A3A7B2',
                G500: undefined,
                G600: undefined,
                G700: undefined,
                black: '#000000',
            },
            illustrate: {
                G50: '#090A0B',
                G100: '#F2F2F2',
                G200: '#E6E6E6',
                G300: '#cccccc',
                S100: '#0D78E5',
                S200: '#2D72BA',
                S300: '#3F3D56',
                B400: '#2F2E41',
                B100: '#E5A4A4',
                B200: '#FFB6B6',
                B300: '#A0616A',
            },
            success: {
                GR50: '#E9FFEF',
                GR100: '#A8FFC0',
                GR200: '#00BC33',
                GR300: '#429D5B',
                GR400: undefined,
                GR500: undefined,
                GR600: undefined,
                GR700: undefined,
                GR800: undefined,
                GR900: undefined,
            },
            danger: {
                R50: '#FFF1F1',
                R100: '#FFB4B4',
                R200: '#FF7778',
                R300: '#D85253',
                R400: undefined,
                R500: undefined,
                R600: undefined,
                R700: undefined,
                R800: undefined,
                R900: undefined,
            },
            warning: {
                Y50: '#FEF5DD',
                Y100: '#FFDDA6',
                Y200: '#EAB155',
                Y300: '#B78636',
                Y400: undefined,
                Y500: undefined,
                Y600: undefined,
                Y700: undefined,
                Y800: undefined,
                Y900: undefined,
            },
            info: {
                B50: '#E6F7FF',
                B100: '#B3ECFF',
                B200: '#4DB8FF',
                B300: '#1A94FF',
                B400: undefined,
                B500: undefined,
                B600: undefined,
                B700: undefined,
                B800: undefined,
                B900: undefined,
            },
        },
    },
};

const getCssVar = createGetCssVar('rauland');

export const ppThemes = extendTheme({
    cssVarPrefix: 'rauland',
    colorSchemes: colorSchemes,
    radius: themeSize.radius,
    components: {
        JoyLink: {
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    color: 'var(--rauland-palette-illustrate-G50)',
                    ...(ownerState.variant === 'solid' && {
                        backgroundColor:
                            'var(--rauland-palette-illustrate-B100)',
                        '&:hover': {
                            color: 'var(--rauland-palette-illustrate-G50)',
                            backgroundColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        '&:active': {
                            color: 'var(--rauland-palette-illustrate-G50)',
                            backgroundColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        [`&.${linkClasses.disabled}`]: {
                            color: 'var(--rauland-palette-general-G500)',
                        },
                    }),
                    ...(ownerState.variant === 'outlined' && {
                        color: 'var(--rauland-palette-illustrate-B100)',
                        backgroundColor: 'transparent',
                        borderColor: 'var(--rauland-palette-illustrate-B100)',
                        '&:hover': {
                            color: 'var(--rauland-palette-illustrate-B300)',
                            backgroundColor: 'transparent',
                            borderColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        '&:active': {
                            color: 'var(--rauland-palette-illustrate-B300)',
                            backgroundColor: 'transparent',
                            borderColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        [`&.${linkClasses.disabled}`]: {
                            color: 'var(--rauland-palette-general-G500)',
                        },
                    }),
                    ...(ownerState.variant === 'plain' && {
                        color: 'var(--rauland-palette-illustrate-B100)',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            color: 'var(--rauland-palette-illustrate-B200)',
                            backgroundColor: 'transparent',
                        },
                        '&:active': {
                            color: 'var(--rauland-palette-illustrate-B200)',
                            backgroundColor: 'transparent',
                        },
                        [`&.${linkClasses.disabled}`]: {
                            color: 'var(--rauland-palette-neutral-500)',
                        },
                    }),
                }),
            },
        },
        JoyAvatar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: 'var(--rauland-palette-illustrate-G50)',
                    backgroundColor: 'var(--rauland-palette-illustrate-B100)',
                }),
            },
        },
        JoyAlert: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    fontWeight: 'normal',
                    boxShadow:
                        '0px 2px 15px 0px var(--rauland-palette-general-G100)',
                    fontSize: theme.vars.fontSize.md,
                    ...(ownerState.variant === 'solid' && {
                        color: 'var(--rauland-palette-illustrate-G50)',
                        backgroundColor:
                            'var(--rauland-palette-illustrate-B100)',
                        '&:hover': {
                            color: 'var(--rauland-palette-illustrate-G50)',
                            backgroundColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        '&:active': {
                            color: 'var(--rauland-palette-illustrate-G50)',
                            backgroundColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        [`&.${linkClasses.disabled}`]: {
                            color: 'var(--rauland-palette-general-500)',
                            backgroundColor:
                                'var(--rauland-palette-general-200)',
                        },
                    }),
                    ...(ownerState.variant === 'outlined' && {
                        color: 'var(--rauland-palette-illustrate-B100)',
                        backgroundColor: 'transparent',
                        borderColor: 'var(--rauland-palette-illustrate-B100)',
                        '&:hover': {
                            color: 'var(--rauland-palette-illustrate-B300)',
                            backgroundColor: 'transparent',
                            borderColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        '&:active': {
                            color: 'var(--rauland-palette-illustrate-B300)',
                            backgroundColor: 'transparent',
                            borderColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                        [`&.${linkClasses.disabled}`]: {
                            color: 'var(--rauland-palette-general-G500)',
                            borderColor: 'var(--rauland-palette-general-G500)',
                            backgroundColor:
                                'var(--rauland-palette-general-G200)',
                        },
                    }),
                    ...(ownerState.size === 'sm' && {
                        minHeight: '30px',
                        '--Alert-gap': '8px',
                        '--Alert-padding': '12px',
                    }),
                    ...(ownerState.size === 'md' && {
                        minHeight: '40px',
                        '--Alert-gap': '14px',
                        '--Alert-padding': '20px',
                    }),
                    ...(ownerState.size === 'lg' && {
                        minHeight: '50px',
                        '--Alert-gap': '20px',
                        '--Alert-padding': '28px',
                    }),
                    [`&.${linkClasses.disabled}`]: {
                        color: theme.vars.palette.neutral[500],
                    },
                    ...(ownerState.color === 'success' &&
                        ownerState.variant === 'solid' && {
                            color: 'var(--rauland-palette-success-GR50)',
                            backgroundColor:
                                'var(--rauland-palette-success-GR300)',
                            borderColor: 'var(--rauland-palette-success-GR300)',
                            '&:hover': {
                                backgroundColor:
                                    'var(--rauland-palette-success-GR300',
                                borderColor:
                                    'var(--rauland-palette-success-GR300)',
                            },
                            '&:active': {
                                backgroundColor:
                                    'var(--rauland-palette-success-GR300',
                                borderColor:
                                    'var(--rauland-palette-success-GR300)',
                            },
                        }),
                    ...(ownerState.color === 'success' &&
                        ownerState.variant === 'outlined' && {
                            color: 'var(--rauland-palette-success-GR200)',
                            borderColor: 'var(--rauland-palette-success-GR200)',
                            '&:hover': {
                                borderColor:
                                    'var(--rauland-palette-success-GR300)',
                            },
                            '&:active': {
                                borderColor:
                                    'var(--rauland-palette-success-GR300)',
                            },
                        }),
                    ...(ownerState.color === 'danger' &&
                        ownerState.variant === 'solid' && {
                            color: 'var(--rauland-palette-danger-R200)',
                            backgroundColor:
                                'var(--rauland-palette-danger-R200)',
                            borderColor: 'var(--rauland-palette-danger-R200)',
                            '&:hover': {
                                backgroundColor:
                                    'var(--rauland-palette-danger-R300)',
                                borderColor:
                                    'var(--rauland-palette-danger-R300)',
                            },
                            '&:active': {
                                backgroundColor:
                                    'var(--rauland-palette-danger-R300)',
                                borderColor:
                                    'var(--rauland-palette-danger-R300)',
                            },
                        }),
                    ...(ownerState.color === 'danger' &&
                        ownerState.variant === 'outlined' && {
                            color: 'var(--rauland-palette-danger-R200)',
                            borderColor: 'var(--rauland-palette-danger-R200)',
                            '&:hover': {
                                borderColor:
                                    'var(--rauland-palette-danger-R300)',
                            },
                            '&:active': {
                                borderColor:
                                    'var(--rauland-palette-danger-R300)',
                            },
                        }),
                    ...(ownerState.color === 'warning' &&
                        ownerState.variant === 'solid' && {
                            color: 'var(--rauland-palette-warning-Y400)',
                            backgroundColor:
                                'var(--rauland-palette-warning-Y200)',
                            borderColor: 'var(--rauland-palette-warning-Y200)',
                            '&:hover': {
                                backgroundColor:
                                    'var(--rauland-palette-warning-Y300)',
                                borderColor:
                                    'var(--rauland-palette-warning-Y300)',
                            },
                            '&:active': {
                                backgroundColor:
                                    'var(--rauland-palette-warning-Y300)',
                                borderColor:
                                    'var(--rauland-palette-warning-Y300)',
                            },
                        }),
                    ...(ownerState.color === 'warning' &&
                        ownerState.variant === 'outlined' && {
                            color: 'var(--rauland-palette-warning-Y200)',
                            borderColor: 'var(--rauland-palette-warning-Y200)',
                            '&:hover': {
                                borderColor:
                                    'var(--rauland-palette-warning-Y300)',
                            },
                            '&:active': {
                                borderColor:
                                    'var(--rauland-palette-warning-Y300)',
                            },
                        }),
                }),
            },
        },
        JoyRadio: {
            styleOverrides: {
                radio: ({ theme, ownerState }) => ({
                    ...(ownerState.size === 'lg' && {
                        width: 48,
                        height: 48,
                    }),
                    ...(ownerState.size === 'md' && {
                        width: 38,
                        height: 38,
                    }),
                    ...(ownerState.size === 'sm' && {
                        width: 28,
                        height: 28,
                    }),
                    borderColor: 'var(--rauland-palette-illustrate-B100)',
                    '&:hover': {
                        backgroundColor:
                            'var(--rauland-palette-illustrate-B200)',
                        borderColor: 'var(--rauland-palette-illustrate-B200)',
                    },
                    ...(ownerState.checked && {
                        color: 'var(--rauland-palette-illustrate-B200)',
                        borderColor: 'var(--rauland-palette-illustrate-B300)',
                    }),
                    [`&.${radioClasses.disabled}`]: {
                        borderColor: 'var(--rauland-palette-general-G300)',
                        backgroundColor: 'var(--rauland-palette-general-G100)',
                    },
                }),
                icon: ({ ownerState }) => ({
                    ...(ownerState.size === 'lg' && {
                        width: 40,
                        height: 40,
                    }),
                    ...(ownerState.size === 'md' && {
                        width: 30,
                        height: 30,
                    }),
                    ...(ownerState.size === 'sm' && {
                        width: 20,
                        height: 20,
                    }),
                }),
            },
        },
        JoySwitch: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState.size === 'sm' && {
                        '.MuiSwitch-thumb': {
                            width: '12px',
                            height: '12px',
                        },
                        '.MuiSwitch-track': {
                            width: '24px',
                            height: '12px',
                        },
                    }),
                    ...(ownerState.size === 'md' && {
                        '.MuiSwitch-thumb': {
                            width: '16px',
                            height: '16px',
                        },
                        '.MuiSwitch-track': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40px',
                            height: '24px',
                        },
                    }),
                    ...(ownerState.size === 'lg' && {
                        '.MuiSwitch-thumb': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '24px',
                            height: '24px',
                        },
                        '.MuiSwitch-track': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '48px',
                            height: '32px',
                        },
                    }),

                    '.MuiSwitch-thumb': {
                        backgroundColor:
                            'var(--rauland-palette-illustrate-B100)',
                    },
                    '.MuiSwitch-track': {
                        backgroundColor:
                            'var(--rauland-palette-illustrate-B400)',
                    },
                    [`&.${switchClasses.checked}`]: {
                        '.MuiSwitch-thumb': {
                            backgroundColor:
                                'var(--rauland-palette-illustrate-B300)',
                        },
                        '.MuiSwitch-track': {
                            backgroundColor:
                                'var(--rauland-palette-illustrate-B200)',
                        },
                    },
                    [`&.${switchClasses.disabled}`]: {
                        '.MuiSwitch-thumb': {
                            backgroundColor:
                                'var(--rauland-palette-general-G500)',
                        },
                        '.MuiSwitch-track': {
                            backgroundColor:
                                'var(--rauland-palette-general-G100)',
                        },
                    },
                }),
            },
        },
        JoyCheckbox: {
            defaultProps: {},
            styleOverrides: {
                checkbox: ({ theme, ownerState }) => ({
                    borderRadius: theme.vars.radius.sm,
                    ...(ownerState.variant === 'outlined' && {
                        color: 'var(--rauland-palette-illustrate-B100)',
                        backgroundColor:
                            'var(--rauland-palette-illustrate-B100)',
                        borderColor: 'var(--rauland-palette-illustrate-B100)',
                        '.MuiCheckbox-indeterminate': {
                            '--Icon-color':
                                'var(--rauland-palette-illustrate-B100)',
                        },
                        [`&.${checkboxClasses.disabled}`]: {
                            borderColor: getCssVar('palette-general-G300'),
                            backgroundColor: getCssVar('palette-general-G200'),
                        },
                        [`&.${checkboxClasses.checkbox}`]: {
                            '&:hover': {
                                backgroundColor:
                                    'var(--rauland-palette-illustrate-B300)',
                            },
                            '&:checked': {
                                '--Icon-color':
                                    'var(--rauland-palette-illustrate-B300)',
                            },
                        },
                        '&.Mui-checked': {
                            color: 'var(--rauland-palette-illustrate-B100)',
                        },
                    }),
                }),
            },
        },
        JoyInput: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...theme.typography['body-md'],
                    ...(ownerState.size === 'sm' && {
                        height: '30px',
                    }),
                    ...(ownerState.size === 'md' && {
                        height: '40px',
                    }),
                    ...(ownerState.size === 'lg' && {
                        height: '50px',
                    }),
                    ...(ownerState.variant === 'solid' && {
                        color: theme.vars.palette.illustrate.G50,
                        background: 'var(--rauland-palette-illustrate-B100)',
                        boxShadow:
                            'inset 0px 2px 2px var(--rauland-palette-general-G200)',
                        borderRadius: 'var(--rauland-radius-md)',
                        fontWeight: 'lg',
                        '&:hover': {
                            background: theme.vars.palette.illustrate.B300,
                            boxShadow:
                                'inset 0px 0px 2px var(--rauland-palette-general-G300)',
                        },
                    }),
                    ...(ownerState.variant === 'outlined' && {
                        background: 'transparent',
                        border: `1px solid var(--rauland-palette-illustrate-B100)`,
                        color: 'var-rauland-palette-illustrate-B100',
                        boxShadow:
                            'inset 0px 0px 1px var(--rauland-palette-general-G200)',
                        borderRadius: 'var(--rauland-radius-md)',
                        '&:hover': {
                            background: 'transparent',
                            border: '1px solid var(--rauland-palette-illustrate-B200)',
                            color: 'var(--rauland-palette-illustrate-B200)',
                            boxShadow:
                                'inset 0px 0px 4px var(--rauland-palette-general-G300)',
                        },
                        '--Input-focused': '0',
                        '--Input-focusedThickness': '0',
                        '--Input-focusedHighlight':
                            'var(--rauland-palette-illustrate-B300)',
                    }),
                    ...(ownerState.variant === 'plain' && {
                        background: 'transparent',
                        border: 'none',
                        borderBottom:
                            '1px solid var(--rauland-palette-illustrate-B100)',
                        color: 'var(--rauland-palette-illustrate-B200)',
                        borderRadius: 0,
                        boxShadow: 'none',
                        '&:hover': {
                            background: 'transparent',
                            border: 'none',
                            borderBottom:
                                '1px solid var(--rauland-palette-illustrate-B200)',
                            color: 'var(--rauland-palette-illustrate-B200)',
                            boxShadow: `var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)`,
                        },
                        '--Input-focused': '0',
                        '--Input-focusedThickness': '0',
                        '--Input-focusedHighlight':
                            'var(--rauland-palette-illustrate-B200)',
                    }),
                }),
            },
        },
        JoyTextarea: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState.size === 'sm' && {
                        minHeight: '96px',
                        '--Textarea-paddingInline': '12px',
                        '--Textarea-gutter': '0.75rem',
                    }),
                    ...(ownerState.size === 'md' && {
                        minHeight: '120px',
                        '--Textarea-paddingInline': '16px',
                        '--Textarea-gutter': '1rem',
                    }),
                    ...(ownerState.size === 'lg' && {
                        minHeight: '160px',
                        '--Textarea-paddingInline': '20px',
                        '--Textarea-gutter': '1.25rem',
                    }),
                    '--Textarea-focusedHighlight':
                        theme.vars.palette.illustrate.B400,
                    color: theme.vars.palette.text.primary,
                    backgroundColor: theme.vars.palette.background.body,
                    [`&.${textareaClasses.disabled}`]: {
                        '--Textarea-placeholderOpacity': 1,
                    },
                    ...(ownerState.variant === 'outlined' && {
                        background: 'transparent',
                        border: `1px solid var(--rauland-palette-illustrate-B100)`,
                        color: 'var(--rauland-palette-illustrate-B100)',
                        boxShadow:
                            'inset 0px 0px 1px var(--rauland-palette-general-G200)',
                        borderRadius: 'md',
                        '&:hover': {
                            background: 'transparent',
                            border: '1px solid var(--rauland-palette-illustrate-B200)',
                            color: 'var(--rauland-palette-illustrate-B200)',
                            boxShadow:
                                'inset 0px 0px 2px var(--rauland-palette-general-G200)',
                        },
                        '--Textarea-focused': '0',
                        '--Textarea-focusedThickness': '0',
                        '--Textarea-focusedHighlight':
                            'var(--rauland-palette-illustrate-B200)',
                    }),
                }),
                textarea: {
                    marginTop: '1px',
                },
            },
        },
        JoyButton: {
            styleOverrides: {
                root: ({ ownerState, theme }) => {
                    return {
                        ...theme.typography['body-md'],
                        ...(ownerState.size === 'sm' && {
                            minHeight: '30px',
                        }),
                        ...(ownerState.size === 'md' && {
                            minHeight: '40px',
                        }),
                        ...(ownerState.size === 'lg' && {
                            minHeight: '50px',
                        }),
                        ...(ownerState.variant === 'solid' && {
                            color: 'var(--rauland-palette-illustrate-G50)',
                            background: `linear-gradient(-45deg, ${'var(--rauland-palette-illustrate-B100)'}, ${'var(--rauland-palette-illustrate-S200))'}`,
                            boxShadow:
                                'inset 0px 0px 1px var(--rauland-palette-general-G200)',
                            borderRadius: 'md',
                            fontWeight: 'lg', // short-hand syntax, same as `theme.fontWeight.lg`
                            '&:hover': {
                                background: `linear-gradient(-45deg, ${'var(--rauland-palette-illustrate-B200)'}, ${'var(--rauland-palette-illustrate-S300))'}`,
                                boxShadow:
                                    'inset 0px 0px 1px var(--rauland-palette-general-G200)',
                            },
                        }),
                        ...(ownerState.variant === 'outlined' && {
                            background: 'transparent',
                            border: `1px solid var(--rauland-palette-illustrate-B100)`,
                            color: 'var(--rauland-palette-illustrate-B100)',
                            boxShadow:
                                'inset 0px 0px 1px var(--rauland-palette-general-G200)',
                            borderRadius: 'md',
                            '&:hover': {
                                background: 'transparent',
                                border: `1px solid var(--rauland-palette-illustrate-B200)`,
                                color: 'var(--rauland-palette-illustrate-B200)',
                                boxShadow:
                                    'inset 0px 0px 2px var(--rauland-palette-general-G200)',
                            },
                        }),
                        ...(ownerState.variant === 'plain' && {
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--rauland-palette-illustrate-B100)',
                            boxShadow: 'none',
                            '&:hover': {
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--rauland-palette-illustrate-B200)',
                                boxShadow: 'none',
                            },
                        }),
                    };
                },
            },
        },
        JoySlider: {},
    },
});
