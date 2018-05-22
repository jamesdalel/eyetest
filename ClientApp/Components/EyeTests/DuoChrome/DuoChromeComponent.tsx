import * as React from "react";

export interface DuoChromeProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class DuoChromeComponent extends React.Component<DuoChromeProps, {}> {
    render() {
        return (
            <div>
                <div className='duo-chrome-red'>
                    <div className={'duo-chrome-circle-holder duo-chrome-circle-holder-top duo-chrome-circle-holder-top-left'}>
                        <div className={'duo-chrome-circle-outer'}>
                            <div className={'duo-chrome-circle-outer-between duo-chrome-circle-outer-between-red'}>
                                <div className={'duo-chrome-circle-inner'}>
                                    <div className={'duo-chrome-circle-inner-between duo-chrome-circle-inner-between-red'}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'duo-chrome-circle-holder duo-chrome-circle-holder-top duo-chrome-circle-holder-top-right'}>
                        <div className={'duo-chrome-circle-outer'}>
                            <div className={'duo-chrome-circle-outer-between duo-chrome-circle-outer-between-red'}>
                                <div className={'duo-chrome-circle-inner'}>
                                    <div className={'duo-chrome-circle-inner-between duo-chrome-circle-inner-between-red'}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='duo-chrome-green'>
                <div className={'duo-chrome-circle-holder duo-chrome-circle-holder-bottom duo-chrome-circle-holder-bottom-left'}>
                        <div className={'duo-chrome-circle-outer'}>
                            <div className={'duo-chrome-circle-outer-between duo-chrome-circle-outer-between-green'}>
                                <div className={'duo-chrome-circle-inner'}>
                                    <div className={'duo-chrome-circle-inner-between duo-chrome-circle-inner-between-green'}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'duo-chrome-circle-holder duo-chrome-circle-holder-bottom duo-chrome-circle-holder-bottom-right'}>
                        <div className={'duo-chrome-circle-outer'}>
                            <div className={'duo-chrome-circle-outer-between duo-chrome-circle-outer-between-green'}>
                                <div className={'duo-chrome-circle-inner'}>
                                    <div className={'duo-chrome-circle-inner-between duo-chrome-circle-inner-between-green'}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}