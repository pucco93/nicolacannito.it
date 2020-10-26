import { makeStyles } from '@material-ui/core/styles';
import { IHomeSectionProps } from './HomeSection';


let backgroundImg: string = require('../images/img1.jpeg');

const useStyles = makeStyles({
    backgroundImgHome: {
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },
    mainTitleName: (props: IHomeSectionProps) => ({
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 65,
        fontWeight: 700,
        letterSpacing: 4,
        color: 'white',
        opacity: 0.01,
    }),
    adjectives: (props: IHomeSectionProps) => ({
        marginTop: 40,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 600,
        color: 'white',
    }),
    paddingTop: {
        paddingTop: '25vh',
        display: 'flex',
        justifyContent: 'space-evenly'
    }
});

export default useStyles;