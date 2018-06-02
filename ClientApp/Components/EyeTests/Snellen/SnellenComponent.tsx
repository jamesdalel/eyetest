import * as React from "react";
import device from 'current-device';
import Chip from '@material-ui/core/Chip';

interface SnellenProps { 

 }

interface SnellenState { 
    distance: number;
    level: number;
    group: number;
}

interface GroupLevels {
    levels: number[];
    groupId: number;
}

interface SnellenLevelDistance {
    numberOfMetresAway: number,
    sizeInMillimetres: number,
    scale: number;
}

interface SnellenLevels {
    level: number;
    distance: SnellenLevelDistance[];
    amount: number;
}

interface LevelContent extends SnellenLevels {
    content: string[];
    fontSize: number;
}

export default class SnellenComponent extends React.Component<SnellenProps, SnellenState> {

    private levelRow: {[key: number]: LevelContent};
    private maxLevel: number;
    private minLevel: number;

    constructor(props: SnellenProps) {
        super(props);
        
        this.maxLevel = 5;
        this.minLevel = 0;

        this.state = {
            distance: 2,
            level: 0,
            group: 0,
        }

        const os = device.os;
        const type = device.type;
        // before we start this test we need to do some calculation around dpi to make sure we get the correct sizes for the letters
        switch (os.toLowerCase()) {
            case 'ios':
            case 'iphone':
            case 'ipad':
            case 'ipod':
                break;
            case 'android':
                break;
            case 'blackberry':
                // unable to calculate 
                break;
            case 'windows':
                switch (type.toLowerCase()) {
                    case 'mobile':
                        // don't even bother
                        break;
                    case 'tablet':
                        break;
                    case 'desktop':
                        
                        break;
                    case 'unknown':
                        break;
                }
                break;
            case 'fxos':
                // unable to calculate 
                break;
            case 'meego':
                // unable to calculate                 
                break;
            case 'television':
                // unable to calculate 
                break;
            case 'unknown':
                // unable to calculate 
                break;
            default:
                // unable to calculate 
        }
    };

    levels: SnellenLevels[] = [{
        level: 0,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 58.1776,
            scale: 120
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 87.2664,
            scale: 120
        }],
        amount: 1,
    }, {
        level: 1,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 29.0888,
            scale: 60
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 43.6332,
            scale: 60
        }],
        amount: 3,
    }, {
        level: 2,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 21.74663,
            scale: 45
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 9999999,
            scale: 45
        }],
        amount: 3,
    }, {
        level: 3,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 14.54442,
            scale: 30
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 21.8166,
            scale: 30
        }],
        amount: 5,
    }, {
        level: 4,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 9.715666,
            scale: 20
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 14.573499,
            scale: 20
        }],
        amount: 5,
    }, {
        level: 5,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 7.272206,
            scale: 15
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 10.908309,
            scale: 15
        }],
        amount: 5,
    }, {
        level: 6,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 5.81776,
            scale: 12
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 8.72664,
            scale: 12
        }],
        amount: 5,
    }, {
        level: 7,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 4.36332,
            scale: 9
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 6.54498,
            scale: 9
        }],
        amount: 5,
    }, {
        level: 8,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 3.6361,
            scale: 7.5
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 5.45415,
            scale: 7.5
        }],
        amount: 5,
    }, {
        level: 9,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 2.90888,
            scale: 6
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 4.36332,
            scale: 6
        }],
        amount: 5,
    }, {
        level: 10,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 2.18166,
            scale: 4.5
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 3.27249,
            scale: 4.5
        }],
        amount: 5,
    }];

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

    private getFontSize = (level: LevelContent, sizeInMillimetres: number): number => {
        const numberOfMillimetreInInch: number = Math.round(25.4);
        const dpi: number = this.getDpi();
        const millimetreSize: number = dpi / numberOfMillimetreInInch;
        const size: number = sizeInMillimetres * millimetreSize;
        const roundedSize: number = Math.round(size);
        return roundedSize;
        
    }

    private getLevelContent = (): JSX.Element => {

        // find the current group
        const currentGroup = this.grouping.find(group => group.groupId === this.state.group);
        // find the the levels that belong to this group
        const levels: SnellenLevels[] = this.levels.filter((level: SnellenLevels) => {
            for (const levelNumber of currentGroup.levels) {
                if (level.level === levelNumber) {
                    return level;
                }
            }
        });

        const groupContent: LevelContent[] = [];
        const contentLength: number = this.content.length;
        if (levels && levels.length > 0) {
            for (const level of levels) {

                const rowContent: LevelContent = {
                    content: [],
                    fontSize: 0,
                    level: level.level,
                    distance: level.distance,
                    amount: level.amount,
                };
        
                if (this.levelRow && this.levelRow[level.level] && this.levelRow[level.level].content.length > 0) {
                    // if we already have letters for this row then use them
                    rowContent.content = this.levelRow[level.level].content;
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
                    }
                    if (!this.levelRow) {
                        this.levelRow = {};
                    }
                    this.levelRow[level.level] = rowContent;
                }

                groupContent.push(rowContent);
            }

            const rows: JSX.Element[] = [];

            if (groupContent && groupContent.length > 0) {
                for (const level of groupContent) {
                    // we now need to get the font size
                    const distance: SnellenLevelDistance = level.distance.find(
                        distance => distance.numberOfMetresAway === this.state.distance);

                    level.fontSize = this.getFontSize(level, distance.sizeInMillimetres);
                    rows.push(<div 
                        style={{fontSize: level.fontSize + 'px'}} 
                        className={`snellen-letter-row snellen-level-${level.level}`}>{level.content}<div className='snellen-scale'>{distance.scale}</div>
                    </div>);

                }

                return (<div className='snellen-letter-group'>{rows}</div>);
            }
        }

    }

    private getDpi = () => {
        const dppx = window.devicePixelRatio ||
        (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
        1;
        let widthValue = screen.width * dppx;
        let heightValue = screen.height * dppx;
        let dimensionValue = 21.5;
        const widthValueTimes = (widthValue * widthValue);
        const heightValueTimes = (heightValue * heightValue);
        const widthHeightAddedTogether = widthValueTimes + heightValueTimes;
        const widthHeight = Math.sqrt(widthHeightAddedTogether);
        const roundedWidthHeight = Math.round(widthHeight)
        let dpi = roundedWidthHeight / dimensionValue;

        return dpi > 0 ? Math.round(dpi)  : 0;
    }

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
                    {this.state.distance ? this.getLevelContent() : null}
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