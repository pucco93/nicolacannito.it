import { makeStyles } from '@material-ui/core/styles';
import { IHomeButtonsProps } from './HomeButtons';

const useStyles = makeStyles({
    buttons: (props: IHomeButtonsProps) => ({
        marginTop: 40,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'uppercase',
        color: props.theme.backgroundVariant,
        fontSize: 25,
        fontWeight: 600,
    }),
    workButton: (props: IHomeButtonsProps) => ({
        border: '1px solid',
        borderColor: props.theme.backgroundVariant,
        padding: '10px 20px',
        marginRight: 10,
        position: 'relative',
        cursor: 'pointer',
        color: props.theme.backgroundVariant,
        textDecoration: "none",
        '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 55,
            width: 0,
            height: 2,
            background: props.theme.backgroundVariant,
            transition: 'all 300ms',
            visibility: 'hidden'
        },
        '&:hover': {
            '&:after': {
                width: '100%',
                visibility: 'visible'
            }
        }
    }),
    blogButton: (props: IHomeButtonsProps) => ({
        border: '1px solid',
        borderColor: props.theme.backgroundVariant,
        padding: '10px 20px',
        margin: '0 10px',
        position: 'relative',
        cursor: 'pointer',
        color: props.theme.backgroundVariant,
        textDecoration: "none",
        '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 55,
            width: 0,
            height: 2,
            background: props.theme.backgroundVariant,
            transition: 'all 300ms',
            visibility: 'hidden'
        },
        '&:hover': {
            '&:after': {
                width: '100%',
                visibility: 'visible'
            }
        }
    }),
    aboutButton: (props: IHomeButtonsProps) => ({
        border: '1px solid',
        borderColor: props.theme.backgroundVariant,
        padding: '10px 20px',
        marginLeft: 10,
        position: 'relative',
        cursor: 'pointer',
        color: props.theme.backgroundVariant,
        textDecoration: "none",
        '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 55,
            width: 0,
            height: 2,
            background: props.theme.backgroundVariant,
            transition: 'all 300ms',
            visibility: 'hidden'
        },
        '&:hover': {
            '&:after': {
                width: '100%',
                visibility: 'visible'
            }
        }
    })
});

export default useStyles;