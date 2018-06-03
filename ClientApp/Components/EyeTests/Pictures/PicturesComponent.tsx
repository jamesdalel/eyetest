import * as React from "react";
import Chip from '@material-ui/core/Chip';

import { LevelContent, GroupLevels, PicturesContent, LevelPicturesContent, SnellenLevelDistance } from 'types'
import { getFontSize, getCurrentGroup, getLevelsFromGroup, levels } from '../../../Helpers/SnellenHelper'
export interface PicturesProps { 

 }

 interface PicturesState { 
    level: number;
    distance: number;
    group: number;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class PicturesComponent extends React.Component<PicturesProps, PicturesState> {
    private levelRow: {[key: number]: LevelPicturesContent};
    private maxLevel: number;
    private minLevel: number;
    private testName: string;

    constructor(props: PicturesProps) {
        super(props);
        
        this.maxLevel = 5;
        this.minLevel = 0;
        this.testName = 'pictures';
        this.state = {
            distance: 2,
            level: 0,
            group: 0,
        }

    }
    content: PicturesContent[] = [
        {
            icon: 'J',
            fontFamily: 'Butterflies',
            name: 'butterfly',
        }, {
            icon: '\&#83',
            fontFamily: 'EFON',
            name: 'fish',
        }, {
            icon: '\&#117',
            fontFamily: 'EFON',
            name: 'duck',
        }, {
            icon: '\&#78',
            fontFamily: 'EFON',
            name: 'umbrella'
        }, {
            icon: '\&#76',
            fontFamily: 'EFON',
            name: 'plane'
        }, {
            icon: '\&#40',
            fontFamily: 'EFON',
            name: 'apple',       
        }, {
            icon: 'star_rate',
            fontFamily: 'material-ui',    
            name: 'star',               
        }, {
            icon: 'home',
            fontFamily: 'material-ui',                
            name: 'home',   
        }];
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

    }

    private getPicturesForLevel = (): JSX.Element => {
        // find the current group
        const currentGroup = getCurrentGroup(this.grouping, this.state.group);
        // find the the levels that belong to this group
        const currentLevels = getLevelsFromGroup(currentGroup, levels);

        const groupContent: LevelPicturesContent[] = [];
        const contentLength: number = this.content.length;

        // this is the same as the SnellenContent, however we have multiple font sources so it's easier for not just to do it on it's own
        if (currentLevels && currentLevels.length > 0) {
            for (const level of currentLevels) {
                const rowContent: LevelPicturesContent = {
                    content: [],
                    fontSize: 0,
                    level: level.level,
                    distance: level.distance,
                    amount: level.amount,
                    textContent: [],
                    fontFamily: '',
                };

                if (this.levelRow && this.levelRow[level.level] && this.levelRow[level.level].content.length > 0) {
                    // if we already have letters for this row then use them
                    rowContent.content = this.levelRow[level.level].content;
                    rowContent.textContent = this.levelRow[level.level].textContent;
                } else {
                    // if we don't have letters for this row then we need to create them
                    for (let i: number = 0; i < level.amount; i += 1) {
                        let randomIndex: number = Math.floor(Math.random() * contentLength);
                        let alreadyExists: boolean = true;
                        while (alreadyExists) {
                            if (rowContent.content.indexOf(this.content[randomIndex]) === -1) {
                                alreadyExists = false;
                            } else {
                                randomIndex = Math.floor(Math.random() * contentLength);
                            }
                        }
                        rowContent.content.push(this.content[randomIndex]);
                        rowContent.textContent.push(this.content[randomIndex].icon);
                        rowContent.fontFamily = this.content[randomIndex].fontFamily;
                    }
                    if (!this.levelRow) {
                        this.levelRow = {};
                    }
                    this.levelRow[level.level] = rowContent;
                }

                groupContent.push(rowContent);
            }
        }

        const rows: JSX.Element[] = [];

        if (groupContent && groupContent.length > 0) {
            for (const level of groupContent) {

                // we now need to get the font size
                const distance: SnellenLevelDistance = level.distance.find(
                    (distanceItem: SnellenLevelDistance) => distanceItem.numberOfMetresAway === this.state.distance);

                level.fontSize = getFontSize(distance.sizeInMillimetres);

                switch (level.fontFamily.toLowerCase()) {
                    case 'butterflies':
                        rows.push(<div 
                            style={
                                {
                                    fontSize: level.fontSize + 'px', 
                                    fontFamily: level.fontFamily,
                                }
                            } 
                            className={`snellen-letter-row snellen-level-${level.level}`}>{level.textContent}<div className='snellen-scale'>{distance.scale}</div>
                        </div>);
                        break;
                    case 'efon':
                    rows.push(<div 
                        style={
                            {
                                fontSize: level.fontSize + 'px', 
                            }
                        } 
                        className={`snellen-pictures-row snellen-level-${level.level}`}><i className='efon-icon efon-icon-fish'></i><div className='snellen-scale'>{distance.scale}</div>
                    </div>);
                        break;
                    case 'material-ui':
                        break;
                    default:
                }

            }

            return (<div className={`${this.testName}-group`}>{rows}</div>);
        }

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
                    {this.state.distance ? (
                        this.getPicturesForLevel()
                    ) : (null)}
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