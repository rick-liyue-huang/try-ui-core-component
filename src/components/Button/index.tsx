import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    // useTheme,
} from '@mui/material'

type ButtonBaseProps = Pick<
    MuiButtonProps,
    'variant' | 'size' | 'children' | 'onClick' | 'style'
>

export interface ButtonProps extends ButtonBaseProps {
    label: string
}

// export const Button = ({ label, ...rest }: ButtonProps) => {
//     const theme = useTheme();
//     const style = {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.mode === 'dark' ? 'black' : 'white',
//     //   ...rest.style, // Ensure any custom styles passed to the component are applied
//     };
//     return <MuiButton style={style} {...rest}>{label}</MuiButton>
// }

export const Button = ({ label, ...rest }: ButtonProps) => (
    <MuiButton {...rest}>{label}</MuiButton>
)
