import * as React from "react";
import device from 'current-device';
import Chip from '@material-ui/core/Chip';

interface SnellenProps { 

 }

interface SnellenState { 
    distance: number;
    level: number;
}


interface SnellenLevelDistance {
    numberOfMetresAway: number,
    sizeInMillimetres: number,
}

interface SnellenLevels {
    level: number;
    distance: SnellenLevelDistance[];
    numberOfLetters: number;
}

interface SnellenLevelLetters {
    letters: string[];
    fontSize: number;
    level: number;
}

export default class SnellenComponent extends React.Component<SnellenProps, SnellenState> {

    private levelLetterRows: {[key: number]: SnellenLevelLetters};
    private maxLevel: number;
    private minLevel: number;

    constructor(props: SnellenProps) {
        super(props);
        
        this.maxLevel = 8;
        this.minLevel = 0;

        this.state = {
            distance: 2,
            level: 0,
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
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 87.2664,
        }],
        numberOfLetters: 1,
    }, {
        level: 1,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 29.0888,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 43.6332,
        }],
        numberOfLetters: 3,
    }, {
        level: 2,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 14.54442,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 21.8166,
        }],
        numberOfLetters: 3,
    }, {
        level: 3,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 9.715666,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 14.573499,
        }],
        numberOfLetters: 5,
    }, {
        level: 4,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 7.272206,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 10.908309,
        }],
        numberOfLetters: 5,
    }, {
        level: 5,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 5.81776,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 8.72664,
        }],
        numberOfLetters: 5,
    }, {
        level: 6,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 4.36332,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 6.54498,
        }],
        numberOfLetters: 5,
    }, {
        level: 7,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 3.6361,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 5.45415,
        }],
        numberOfLetters: 5,
    }, {
        level: 8,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 2.90888,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 4.36332,
        }],
        numberOfLetters: 5,
    }, {
        level: 9,
        distance: [{
            numberOfMetresAway: 2,
            sizeInMillimetres: 2.18166,
        }, {
            numberOfMetresAway: 3,
            sizeInMillimetres: 3.27249,
        }],
        numberOfLetters: 5,
    }];

    letters: string[] = ["C", "D", "E", "F", "H", "N", "O", "R", "V", "Z"];

    private getLevelLetters = (): JSX.Element => {

        const levelLetters: SnellenLevelLetters[] = [];
        const lettersLength: number = this.letters.length;
        const level = this.levels.find(level => level.level === this.state.level)

        const levelLetter: SnellenLevelLetters = {
            letters: [],
            fontSize: 0,
            level: level.level,
        };

        // if we already have letters then we don't want to get them again
        if (this.levelLetterRows && this.levelLetterRows[this.state.level] && this.levelLetterRows[this.state.level].letters.length > 0) {
            levelLetter.letters = this.levelLetterRows[this.state.level].letters;
        } else {
            // for each level we need to get the letters and the correct font size
            for (let i: number = 0; i < level.numberOfLetters; i += 1) {
                let randomIndex: number = Math.floor(Math.random() * lettersLength);
                let alreadyExists: boolean = true;

                while (alreadyExists) {
                    if (levelLetter.letters.indexOf(this.letters[randomIndex]) === -1) {
                        alreadyExists = false;
                    } else {
                        randomIndex = Math.floor(Math.random() * lettersLength);
                    }
                }

                levelLetter.letters.push(this.letters[randomIndex]);
            }

            if (!this.levelLetterRows) {
                this.levelLetterRows = {};
            }

            this.levelLetterRows[this.state.level] = levelLetter;

        }

        const numberOfMillimetreInInch: number = 25.4;
        const dpi: number = this.getDpi();

        const sizeInMillimetres: number = level.distance.find(
            distance => distance.numberOfMetresAway === this.state.distance).sizeInMillimetres;

        const millimetreSize: number = dpi / numberOfMillimetreInInch;
        const size: number = millimetreSize * sizeInMillimetres;
        const roundedSize: number = Math.round(size);

        levelLetters.push({
            letters: levelLetter.letters,
            fontSize: roundedSize,
            level: level.level,
        });
        

        let rows: JSX.Element[] = [];

        for (const level of levelLetters) {
            rows.push(<div 
                style={{fontSize: level.fontSize + 'px'}} 
                className={`snellen-letter-row snellen-level-${level.level}`}>{level.letters}
            </div>);
        }
        return (<div className='snellen-letter-group'>{rows}</div>);
    }

    private getDpi = () => {
        const dppx = window.devicePixelRatio ||
        (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
        1;

        let widthValue = screen.width * dppx;
        let heightValue = screen.height * dppx;

        let dimensionValue = 24;
        let opt = 'd'
        // Calculate PPI/DPI
        widthValue > 0 || (widthValue = 1);
        heightValue > 0 || (heightValue = 1);
        opt   || (opt = 'd');
        var dpi = (opt == 'd' ? Math.sqrt(widthValue * widthValue + heightValue * heightValue) : opt == 'w' ? widthValue : heightValue) / dimensionValue;
        return dpi > 0 ? Math.round(dpi)  : 0;

    }

    private distanceOptionClick = (distance: number) => {
        this.setState({distance});
    }

    private getPreviousLevel = () => {
        let currentLevel = this.state.level;
        this.setState({level: currentLevel -= 1});
    }

    private getNextLevel = () => {
        let currentLevel = this.state.level;
        this.setState({level: currentLevel += 1});       
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
                    {this.state.distance ? this.getLevelLetters() : null}
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