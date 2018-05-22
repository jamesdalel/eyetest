import * as React from "react";

export interface AboutComponentProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class AboutComponent extends React.Component<AboutComponentProps, {}> {
    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}