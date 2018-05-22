import * as React from "react";

export interface TumblingEProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class TumblingEComponent extends React.Component<TumblingEProps, {}> {
    render() {
        return (
            <div>
                <h1>Tumbling E</h1>
            </div>
        );
    }
}