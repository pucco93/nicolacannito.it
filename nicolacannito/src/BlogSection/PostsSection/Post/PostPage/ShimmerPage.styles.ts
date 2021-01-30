import { makeStyles } from '@material-ui/core/styles';
import { IShimmerPageProps } from './ShimmerPage';

const useStyles = makeStyles({
    shimmerContainer: (props: IShimmerPageProps) => ({
        width: '100%',
        background: props.theme.backgroundVariant,
        paddingBottom: 50
    }),
    infoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '50px 0px 0px'
    },
    date: {
        marginLeft: '5%',
        marginBottom: 30
    },
    description: {
        margin: '5px 5%'
    },
    bodyImgLeft: {
        margin: '50px 5%'
    },
    rightDescription: {
        width: '40%',
        margin: '50px 5%'
    },
    bodyImgRight: {
        margin: '50px 5%'
    },
    leftDescription: {
        width: '40%',
        margin: '50px 5%'
    },
    halfDescription: {
        margin: '10px 0px'
    }
});

export default useStyles;