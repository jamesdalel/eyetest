import { LevelContent, GroupLevels, SnellenLevels, SnellenLevelDistance } from 'types'
export const getFontSize = (sizeInMillimetres: number): number => {
    const numberOfMillimetreInInch: number = Math.round(25.4);
    const dpi: number = getDpi();
    const millimetreSize: number = dpi / numberOfMillimetreInInch;
    const size: number = sizeInMillimetres * millimetreSize;
    const roundedSize: number = Math.round(size);
    return roundedSize;

};

export const levels: SnellenLevels[] = [{
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

export const getCurrentGroup = (groups: GroupLevels[], groupId: number) => {
    return groups.find((group: GroupLevels) => group.groupId === groupId);
}

export const getLevelsFromGroup = (group: GroupLevels, levels: SnellenLevels[]) => {
    return levels.filter((level: SnellenLevels) => {
        for (const levelNumber of group.levels) {
            if (level.level === levelNumber) {
                return level;
            }
        }
    });
};

const getDpi = () => {
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

