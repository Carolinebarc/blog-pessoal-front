import { makeStyles } from "@material-ui/core";
import { borderRadius } from "@mui/system";

const styles = makeStyles({
    box: {
        paddingRight: '3rem',
        paddingLeft: '3rem'
    },
    boxBotao: {
        display: 'flex',
        justifyContent: 'center'
    },
    form: {
        padding: '3rem',
        border: '1px solid purple',
        borderRadius: 40
    },
    dInline: {
        display: 'inline'
    }
});

export { styles };
