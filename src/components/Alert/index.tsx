import { Alert as JoyAlert, AlertProps as JoyAlertProps } from '@mui/joy';
import { cn } from '../../utils';
import CloseIcon from '@mui/icons-material/Close';

type AlertBaseProps = Pick<
    JoyAlertProps,
    | 'variant'
    | 'className'
    | 'size'
    | 'color'
    | 'children'
    | 'startDecorator'
    | 'endDecorator'
>;

export interface RaulandAlertProps extends AlertBaseProps {
    style?: React.CSSProperties;
}

export const RaulandAlert = ({
    className,
    style,
    size,
    children,
    ...rest
}: RaulandAlertProps) => {
    return (
        <JoyAlert
            endDecorator={<CloseIcon />}
            className={cn(className)}
            size={size}
            style={style}
            children={children}
            {...rest}
        />
    );
};
