import { makeStyles } from '@material-ui/core/styles';
import { IInputProps } from './Input';

const useStyles = makeStyles({
    container: (props: IInputProps) => ({
        width: '100%',
        margin: '20px 0 0'
    }),
    label: (props: IInputProps) => ({
        fontSize: 18,
        width: '100%',
        color: props.theme.titleColor
    }),
    inputContainer: (props: IInputProps) => ({
        position: 'relative',
        '&:after': {
            content: '""',
            width: 0,
            position: 'absolute',
            top: props.isDescription ? 116 : 35,
            left: 0,
            height: 2,
            background: `${props.theme.titleColor}99`,
            transition: 'all 400ms'
        },
        '&:hover': {
            '&:after': {
                width: '100%'
            }
        },
        '&:focus-within:after': {
            width: '100%',
            background: props.theme.primaryColor
        }
    }),
    input: (props: IInputProps) => ({
        display: 'block',
        width: '100%',
        height: props.isDescription ? 'auto' : 30,
        fontSize: 18,
        border: 'none',
        outline: 'none',
        padding: '5px 10px',
        resize: 'none',
        background: props.theme.backgroundVariant,
    })
});

export default useStyles;