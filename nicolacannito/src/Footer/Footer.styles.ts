import { makeStyles } from '@material-ui/core/styles';
import { IFooterProps } from './Footer';

const FooterStyles = makeStyles({
    footerContainer: (props: IFooterProps) => ({
        width: '100%',
        background: props.theme.titleColor,
        transition: 'all 300ms',
        padding: '50px 0',
        '& p': {
            marginBlock: 0,
        }
    }),
    titleName: (props: IFooterProps) => ({
        fontSize: 20,
        fontWeight: 600,
        color: props.theme.backgroundVariant,
        width: 'fit-content',
        margin: '0px auto 50px',
        transition: 'all 300ms'
    }),
    flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    address: (props: IFooterProps) => ({
        fontSize: 16,
        color: props.theme.backgroundVariant,
        margin: '5px 0px',
    }),
    openingHours: (props: IFooterProps) => ({
        fontSize: 16,
        color: props.theme.backgroundVariant,
        textAlign: 'right'
    }),
});

export default FooterStyles;