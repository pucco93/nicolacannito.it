import { makeStyles } from '@material-ui/core/styles';
import { IHomeSectionProps } from './HomeSection';

const useStyles = makeStyles({
    backgroundImgHome: {
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center!important',
        backgroundRepeat: 'no-repeat!important',
        backgroundSize: 'cover!important',
        position: 'absolute',
    },
    mainTitleName: (props: IHomeSectionProps) => ({
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 65,
        fontWeight: 700,
        letterSpacing: 4,
        color: props.theme.backgroundVariant,
        opacity: 0.01,
    }),
    adjectives: (props: IHomeSectionProps) => ({
        marginTop: 40,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 600,
        color: props.theme.backgroundVariant,
        position: 'relative',
    }),
    paddingTop: {
        paddingTop: '25vh',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    blackLayer: (props: IHomeSectionProps) => ({
        background: props.theme.titleColor,
        opacity: 0.4,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    })
});

export default useStyles;