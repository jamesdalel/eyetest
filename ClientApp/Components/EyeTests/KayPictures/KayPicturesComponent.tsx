import * as React from "react";

export interface KayPicturesProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class KayPicturesComponent extends React.Component<KayPicturesProps, {}> {
    render() {
        return (
            <div>
                <h1>Kay Pictures</h1>
            </div>
        );
    }
}