import * as React from "react";
import device from 'current-device';
import Chip from '@material-ui/core/Chip';

// snellen helper
import SnellenContent  from '../../Shared/SnellenContent'

import { LevelContent, GroupLevels } from 'types'

interface SnellenProps { 

 }

 interface SnellenState { 
    level: number;
    distance: number;
    group: number;
}

export default class SnellenComponent extends React.Component<SnellenProps, SnellenState> {

    private levelRow: {[key: number]: LevelContent};
    private maxLevel: number;
    private minLevel: number;
    private testName: string;

    constructor(props: SnellenProps) {
        super(props);
        
        this.maxLevel = 5;
        this.minLevel = 0;
        this.testName = 'snellen';
        this.state = {
            distance: 2,
            level: 0,
            group: 0,
        }

    }

    content: string[] = ["C", "D", "E", "F", "H", "N", "O", "R", "V", "Z"];
    grouping: GroupLevels[] = [
        {
            groupId: 0,
            levels: [0],
        }, {
            groupId: 1,
            levels: [1, 2],
        }, {
            groupId: 2,
            levels: [3, 4],
        }, {
            groupId: 3,
            levels: [5, 6],
        }, {
            groupId: 4,
            levels: [7, 8],
        }, {
            groupId: 5,
            levels: [9, 10],
        }
    ]

    
    private distanceOptionClick = (distance: number) => {
        this.setState({distance});
    }

    private getPreviousLevel = () => {
        let currentLevel = this.state.level;
        this.setState({level: currentLevel -= 1});

        let currentGroup = this.state.group;
        this.setState({group: currentGroup -= 1});
    }

    private getNextLevel = () => {
        let currentLevel = this.state.level;
        this.setState({level: currentLevel += 1});

        let currentGroup = this.state.group;
        this.setState({group: currentGroup += 1});
    }

    private canGoToNextLevel = (): boolean => {
        let allowed = true;

        allowed = this.state.level < this.maxLevel ? true : false;

        return allowed;
    }

    private canGoToPreviousLevel = (): boolean => {
        let allowed = true;

        allowed = this.state.level > this.minLevel ? true : false;

        return allowed;
    }

    private addToCurrentLevels = (level: LevelContent): void => {
        if (!this.levelRow) {
            this.levelRow = {};
        }

        this.levelRow[level.level] = level;
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='snellen-distance-options'>
                        <Chip
                            label="2 Metre"
                            onClick={() => this.distanceOptionClick(2)}
                            className={'snellen-distance-options-chip'}
                        />
                        <Chip
                            label="3 Metre"
                            onClick={() => this.distanceOptionClick(3)}
                            className={'snellen-distance-options-chip'}
                        />
                    </div>
                    {this.canGoToPreviousLevel() ? (
                    <div className='snellen-nav-options snellen-nav-options-up'>
                        <div
                            onClick={() => this.getPreviousLevel()}
                            className={'snellen-distance-options-chip'}>
                            <i className="material-icons">
                                keyboard_arrow_up
                            </i>
                        </div>
                    </div>
                    ) : (null)}
                    {this.state.distance ? <SnellenContent
                            content={this.content}
                            test={this.testName}
                            groups={this.grouping}
                            groupId={this.state.group}
                            distanceAway={this.state.distance}
                            levelRow={this.levelRow}
                            addToCurrentLevels={this.addToCurrentLevels}
                    /> : null}
                    {this.canGoToNextLevel() ? (
                    <div className='snellen-nav-options snellen-nav-options-down'>
                        <div
                            onClick={() => this.getNextLevel()}
                            className={'snellen-distance-options-chip'}>
                            <i className="material-icons">
                                keyboard_arrow_down
                            </i>
                        </div>
                    </div>) : (null)}
                </div>
            </React.Fragment>
        );
    }
}