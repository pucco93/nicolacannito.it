import { makeStyles } from '@material-ui/core/styles';
import { IIconsProps } from './Icons';

const useStyles = makeStyles({
    socialIconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 60,
        position: 'relative',
    },
    circleContainer: (props: IIconsProps) => ({
        width: 40,
        height: 40,
        margin: '0px 10px',
        border: '1px solid',
        borderColor: 'white',
        borderRadius: '50%',
        textAlign: 'center',
        cursor: 'pointer',
        color: 'white',
        transition: 'all 300ms',
        '&:hover': {
            background: 'white',
            color: props.theme.tertiaryColor
        },
    }),
    icon: {
        fontSize: 22,
        paddingTop: 9,
    }
});

export default useStyles;