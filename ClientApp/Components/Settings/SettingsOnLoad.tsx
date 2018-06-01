import * as React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import * as devices from '../../screenSizes.json';
import AutoCompleteComponent from '../Shared/AutoCompleteComponent';

interface SettingsOnLoadComponentProps {

}

class SettingsOnLoadComponent extends React.Component<SettingsOnLoadComponentProps> {
    constructor(props: SettingsOnLoadComponentProps) {
        super(props);
        console.log(devices);
    }

    private saveChanges = () => {

    };

    render(): any {
        return (
            <React.Fragment>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth={false}
                // onEntering={this.handleEntering}
                aria-labelledby="confirmation-dialog-title"
                open={false}
            >
                <DialogTitle id="confirmation-dialog-title">Set Up Device</DialogTitle>
                <DialogContent>
                    <p>Select an exisitng device or create a new one</p>
                    <AutoCompleteComponent/>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of Device"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={this.saveChanges} color="primary">
                    Save Device
                </Button>
                </DialogActions>
            </Dialog>
            </React.Fragment>
        );
    }
}

export default withMobileDialog()(SettingsOnLoadComponent);