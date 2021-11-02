import { makeStyles } from '@material-ui/core/styles';
import { ISendButtonProps } from './SendButton';

const useStyles = makeStyles({
    buttonContainer: (props: ISendButtonProps) => ({
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    }),
    sendButton: (props: ISendButtonProps) => ({
        width: '100%',
        padding: '10px 25px',
        margin: '20px 0',
        borderRadius: 20,
        display: 'flex',
        flexWrap: 'wrap',
        transition: 'all 300ms',
        justifyContent: 'center',
        '&:hover': {
            background: props.theme.backgroundColor,
            color: props.theme.backgroundVariant
        },
    }),
    text: (props: ISendButtonProps) => ({
        fontSize: 24,
        cursor: 'pointer',
        fontWeight: 600,
        margin: '0 5px',
        color: props.theme.titleColor
    }),
    icon:  (props: ISendButtonProps) => ({
        width: 30,
        height: 27,
        opacity: 0,
        animation: props.sent ? '$sendIcon 1s' : '',
        animationIterationCount: 1
    }),
    '@keyframes sendIcon': {
        '0%': {
            opacity: 0.2,
            transform: 'translate(0, 0)'
        },
        '25%': {
            opacity: 0.6,
            transform: 'translate(-10px, 10px)'
        },
        '50%': {
            opacity: 1,
            transform: 'translate(-20px, 20px)'
        },
        '75%': {
            opacity: 1,
            transform: 'translate(-30px, 30px)'
        },
        '100%': {
            opacity: 1,
            transform: 'translate(-40px, 40px)'
        }
    }
});

export default useStyles;