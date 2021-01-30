import { makeStyles } from '@material-ui/core/styles';
import { IMapsSectionProps } from './MapsSection';

const useStyles = makeStyles({
    mapContainer: {
        margin: '30px 0px',
        width: '100%',
        height: 300
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default useStyles;