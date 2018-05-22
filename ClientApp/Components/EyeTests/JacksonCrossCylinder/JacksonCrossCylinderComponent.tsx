import * as React from "react";

export interface JacksonCrossCylinderProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class JacksonCrossCylinderComponent extends React.Component<JacksonCrossCylinderProps, {}> {
    render() {
        return (
            <div>
                <h1>Jackson Cross Cylinder</h1>
            </div>
        );
    }
}