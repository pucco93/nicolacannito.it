import { makeStyles } from '@material-ui/core/styles';
import { IHomeButtonsProps } from './HomeButtons';

const useStyles = makeStyles((props: IHomeButtonsProps) => ({
    buttons: {
        marginTop: 40,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 25,
        fontWeight: 600,
    },
    workButton: {
        border: '1px solid',
        borderColor: 'white',
        padding: '10px 20px',
        marginRight: 10,
        position: 'relative',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 55,
            width: 0,
            height: 2,
            background: 'white',
            transition: 'all 300ms',
            visibility: 'hidden'
        },
        '&:hover': {
            '&:after': {
                width: '100%',
                visibility: 'visible'
            }
        }
    },
    blogButton: {
        border: '1px solid',
        borderColor: 'white',
        padding: '10px 20px',
        marginLeft: 10,
        position: 'relative',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 55,
            width: 0,
            height: 2,
            background: 'white',
            transition: 'all 300ms',
            visibility: 'hidden'
        },
        '&:hover': {
            '&:after': {
                width: '100%',
                visibility: 'visible'
            }
        }
    }
}));

export default useStyles;