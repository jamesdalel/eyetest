import * as React from "react";

export interface SnellenProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class SnellenComponent extends React.Component<SnellenProps, {}> {
    render() {
        return (
            <div>
                <h1>Snellen</h1>
            </div>
        );
    }
}