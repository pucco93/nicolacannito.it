import { makeStyles } from '@material-ui/core/styles';
import { IAboutSectionProps } from './AboutSection';

const useStyles = makeStyles({
    page: {
        width: '100%',
    },
    pageBody: (props: IAboutSectionProps) => ({
        background: props.theme.backgroundVariant,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 46,
        paddingBottom: 50,
        
    })
});

export default useStyles;