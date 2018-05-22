import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './LayoutComponent';
import Home from './HomeComponent';
import About from './AboutComponent';

// test components
import DuoChrome from './EyeTests/DuoChrome/DuoChromeComponent'
import Fixation from './EyeTests/Fixation/FixationComponent'
import FixationDisparity from './EyeTests/FixationDisparity/FixationDisparityComponent'
import JacksonCrossCylinder from './EyeTests/JacksonCrossCylinder/JacksonCrossCylinderComponent'
import KayPictures from './EyeTests/KayPictures/KayPicturesComponent'
import Numbers from './EyeTests/Numbers/NumbersComponent'
import Snellen from './EyeTests/Snellen/SnellenComponent'
import TumblingE from './EyeTests/TumblingE/TumblingEComponent'

export default class AppComponent extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <Layout/>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/snellen" component={Snellen} />
                        <Route path="/tumbling_e" component={TumblingE} />
                        <Route path="/jackson_cross_cylinder" component={JacksonCrossCylinder} />
                        <Route path="/duo_chrome" component={DuoChrome} />
                        <Route path="/kay_pictures" component={KayPictures} />
                        <Route path="/numbers" component={Numbers} />
                        <Route path="/fixation_disparity" component={FixationDisparity} />
                        <Route path="/fixation" component={Fixation} />

                    </div>
                </Router>
            </React.Fragment>
        );
    }
}