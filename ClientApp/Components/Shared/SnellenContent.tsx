import * as React from 'react';

import { LevelContent, GroupLevels, SnellenLevels, SnellenLevelDistance } from 'types'
import { getFontSize, getCurrentGroup, getLevelsFromGroup, levels } from '../../Helpers/SnellenHelper'

interface SnellenContentProps {
    content: string[];
    test: string;
    groups: GroupLevels[];
    groupId: number;
    distanceAway: number;
    levelRow: {[key: number]: LevelContent};
    addToCurrentLevels: (level: LevelContent) => void;
};

const SnellenContent: React.SFC<SnellenContentProps> = ({
    content = [],
    test = '',
    groups = [],
    groupId =  0,
    distanceAway = 0,
    levelRow = {},
    addToCurrentLevels = () => {},
}) => {

    const getLevelContent = (): JSX.Element => {

        // find the current group
        const currentGroup = getCurrentGroup(groups, groupId);
        // find the the levels that belong to this group
        const currentLevels = getLevelsFromGroup(currentGroup, levels);

        const groupContent: LevelContent[] = [];
        const contentLength: number = content.length;

        if (currentLevels && currentLevels.length > 0) {
            for (const level of currentLevels) {

                const rowContent: LevelContent = {
                    content: [],
                    fontSize: 0,
                    level: level.level,
                    distance: level.distance,
                    amount: level.amount,
                };
        
                if (levelRow && levelRow[level.level] && levelRow[level.level].content.length > 0) {
                    // if we already have letters for this row then use them
                    rowContent.content = this.levelRow[level.level].content;
                } else {
                    // if we don't have letters for this row then we need to create them
                    for (let i: number = 0; i < level.amount; i += 1) {
                        let randomIndex: number = Math.floor(Math.random() * contentLength);
                        let alreadyExists: boolean = true;
                        while (alreadyExists) {
                            if (rowContent.content.indexOf(content[randomIndex]) === -1) {
                                alreadyExists = false;
                            } else {
                                randomIndex = Math.floor(Math.random() * contentLength);
                            }
                        }
                        rowContent.content.push(content[randomIndex]);
                    }
                    if (!this.levelRow) {
                        this.levelRow = {};
                    }
                    this.levelRow[level.level] = rowContent;
                }

                addToCurrentLevels(rowContent);
                groupContent.push(rowContent);
            }

            const rows: JSX.Element[] = [];

            if (groupContent && groupContent.length > 0) {
                for (const level of groupContent) {
                    // we now need to get the font size
                    const distance: SnellenLevelDistance = level.distance.find(
                        (distanceItem: SnellenLevelDistance) => distanceItem.numberOfMetresAway === distanceAway);

                    level.fontSize = getFontSize(distance.sizeInMillimetres);
                    rows.push(<div 
                        style={{fontSize: level.fontSize + 'px'}} 
                        className={`snellen-letter-row snellen-level-${level.level}`}>{level.content.map((char, index) => {
                            return (<span className={`level-letter level-letter-${index}`}>{char}</span>)
                        })}
                        <div className='snellen-scale'>{distance.scale}</div>
                    </div>);

                }

                return (<div className={`${test}-group`}>{rows}</div>);
            }
        }

    }

    return (
        <div>{getLevelContent()}</div>
    );
};

export default SnellenContent;






