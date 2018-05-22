import * as React from "react";

export interface FixationDisparityProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class FixationDisparityComponent extends React.Component<FixationDisparityProps, {}> {
    render() {
        return (
            <div>
                <h1>Fixation Disparity</h1>
            </div>
        );
    }
}