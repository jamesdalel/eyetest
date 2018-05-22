import * as React from "react";

export interface FixationProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class FixationComponent extends React.Component<FixationProps, {}> {
    render() {
        return (
            <div>
                <h1>Fixation</h1>
            </div>
        );
    }
}