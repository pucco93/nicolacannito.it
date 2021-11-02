import { makeStyles } from '@material-ui/core/styles';
import { IPostProps } from './Post';

const useStyles = makeStyles({
    postContainer: (props: IPostProps) => ({
        textDecoration: 'none',
        width: 'calc((100% / 3) - 3%)',
        paddingBottom: '45%',
        borderRadius: 20,
        margin: '10px 1.5% 40px 1.5%',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        background: `url('${props.post.urlImg}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 300ms',
        '&:hover': {
            '& $infos': {
                background: `${props.theme.titleColor}CC`
            },
            '& $shareButtons': {
                top: 0
            },
            transform: 'scale(1.05)'
        }
    }),
    infos: (props: IPostProps) => ({
        width: '100%',
        background: `${props.theme.titleColor}99`,
        paddingTop: 10,
        borderRadius: '0px 0px 20px 20px',
        position: 'absolute',
        bottom: 0,
        height: '35%',
        transition: 'all 300ms',
    }),
    title: (props: IPostProps) => ({
        fontSize: 22,
        fontWeight: 600,
        color: props.theme.backgroundVariant,
        padding: '0px 10px 10px 10px',
    }),
    date: (props: IPostProps) => ({
        fontSize: 16,
        color: props.theme.backgroundVariant,
        padding: '0px 10px 10px 10px',
    }),
    description: (props: IPostProps) => ({
        fontSize: 14,
        color: props.theme.backgroundVariant,
        padding: '0px 10px 10px 10px',
        maxHeight: '56%',
        overflow: 'hidden',
    }),
    shareButtons: (props: IPostProps) => ({
        position: 'absolute',
        top: -40,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        transition: 'all 300ms',
    }),
    facebook: (props: IPostProps) => ({
        color: props.theme.backgroundVariant,
        '&:hover': {
            color: props.theme.primaryColor
        }
    }),
    twitter: (props: IPostProps) => ({
        color: props.theme.backgroundVariant,
        '&:hover': {
            color: props.theme.primaryColor
        }
    }),
    icon: {
        fontSize: 22,
    },
    round: (props: IPostProps) => ({
        background: `${props.theme.titleColor}99`,
        borderRadius: '0 0 50% 50%',
        width: 40,
        height: 30,
        paddingTop: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        transition: 'all 300ms'
    })
});

export default useStyles;