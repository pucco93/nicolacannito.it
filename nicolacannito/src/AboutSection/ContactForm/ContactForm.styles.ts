import { makeStyles } from '@material-ui/core/styles';
import { IContactFormProps } from './ContactForm';

const useMyStyles = (props: IContactFormProps) => {
    const useStyles = makeStyles(theme => ({
        contactForm: {
            display: 'flex',
            flexWrap: 'wrap',
            background: props.theme.backgroundVariant,
            width: '80%',
            padding: '20px 10%'
        },
        container: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        formOpener: {
            display: 'block',
            opacity: 1,
            fontSize: 26,
            fontWeight: 600,
            color: `${props.theme.titleColor}CC`,
            width: 'fit-content',
            margin: '0 auto',
            position: 'relative',
            '&:after': {
                content: '""',
                width: '120%',
                position: 'absolute',
                top: 35,
                left: '-10%',
                height: 2,
                background: `${props.theme.titleColor}99`,
            }
        },
        sentMailContainer: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        },
        sentMailText: {
            width: '100%',
            padding: '10px 25px',
            textAlign: 'center',
        },
        errorContainer: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        },
        errorText: {
            width: '100%',
            padding: '10px 25px',
            textAlign: 'center',
            color: 'red'
        }
    }));
    return useStyles(props);
};

export default useMyStyles;