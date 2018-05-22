import * as React from "react";

export interface NumbersProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class NumbersComponent extends React.Component<NumbersProps, {}> {
    render() {
        return (
            <div>
                <h1>Numbers</h1>
            </div>
        );
    }
}