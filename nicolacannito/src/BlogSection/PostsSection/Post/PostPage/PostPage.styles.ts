import { makeStyles } from '@material-ui/core/styles';
import { IPostPageProps } from './PostPage';

const useStyles = makeStyles({
    backgroungImg: (props: IPostPageProps) => ({
        paddingTop: 46,
        backgroundImage: `url('${props.currentPost.urlImg}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        paddingBottom: '30%',
        position: 'relative'
    }),
    postPageTitle: (props: IPostPageProps) => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }),
    blackLayer: (props: IPostPageProps) => ({
        position: 'absolute',
        background: `${props.theme.backgroundVariant}99`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }),
    body: (props: IPostPageProps) => ({
        padding: '50px 5%',
        background: props.theme.backgroundVariant
    }),
    date: (props: IPostPageProps) => ({
        fontSize: 24,
        color: props.theme.titleColor,
        marginBottom: 50
    }),
    description: (props: IPostPageProps) => ({
        fontSize: 20,
        color: props.theme.titleColor
    })
});

export default useStyles;