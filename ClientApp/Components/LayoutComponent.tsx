import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export interface LayoutComponentProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class LayoutComponent extends React.Component<LayoutComponentProps, {}> {
    render() {
        return (
            // <div>
            //     <ul>
            //         <li>
            //             <Link to="/">Home</Link>
            //         </li>
            //         <li>
            //             <Link to="/about">About</Link>
            //         </li>
            //     </ul>
        
            //     <hr />
            // </div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        Eye Test
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}