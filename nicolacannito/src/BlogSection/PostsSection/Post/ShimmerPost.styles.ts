import { makeStyles } from '@material-ui/core/styles';
import { IShimmerPostProps } from './ShimmerPost';

const useStyles = makeStyles({
    shimmerContainer: {
        width: '30%',
        margin: '10px 1.5% 40px 1.5%'
    },
    img: {
        borderRadius: 20,
        marginBottom: 20
    }
});

export default useStyles;