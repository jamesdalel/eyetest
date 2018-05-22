import * as React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export interface HomeComponentProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class HomeComponent extends React.Component<HomeComponentProps, {}> {

    private tests = [
        {
            name: 'SNELLEN',
            caption: 'Snellen',
            link: 'snellen',
        }, {
            name: 'TUMBLING_E',
            caption: 'Tumbling E',
            link: 'tumbling_e',
        }, {
            name: 'JACKSON_CROSS_CYLINDER',
            caption: 'Jackson Cross Cylinder',
            link: 'jackson_cross_cylinder',
        }, {
            name: 'DUO_CHROME',
            caption: 'Duo Chrome',
            link: 'duo_chrome',
        }, {
            name: 'KAY_PICTURES',
            caption: 'Kay Pictures',         
            link: 'kay_pictures',   
        }, {
            name: 'NUMBERS',
            caption: 'Numbers',    
            link: 'numbers',           
        }, {
            name: 'FIXATION_DISPARITY',
            caption: 'Fixation Disparity',             
            link: 'fixation_disparity',  
        }, {
            name: 'FIXATION',
            caption: 'Fixation',    
            link: 'fixation',           
        }
    ]

    getTestList = () => {
        const testCards = '';


    };

    render() {
        return (
            <div>
            {this.tests.map(test => {
                return (
                    <div className='test-card'>
                        <Card>
                            <CardContent>
                                <h2>{test.caption}</h2>
                            </CardContent>
                            <CardActions>
                                <Link className={'action-button'} to={`/${test.link}`}><Button  size="small">Run Test</Button></Link>
                            </CardActions>
                        </Card>
                    </div>
                );
            })}
            </div>
        );
    }
}