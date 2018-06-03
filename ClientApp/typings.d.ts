declare module 'current-device';

declare module "*.json" {
    const value: any;
    export default value;
}

declare module 'types' {
    export interface SnellenState { 
        distance: number;
        level: number;
        group: number;
    }
    
    export interface LevelContent extends SnellenLevels {
        content: string[];
        fontSize: number;
    }

    export interface GroupLevels {
        levels: number[];
        groupId: number;
    }
    
    export interface SnellenLevelDistance {
        numberOfMetresAway: number,
        sizeInMillimetres: number,
        scale: number;
    }
    
    export interface SnellenLevels {
        level: number;
        distance: SnellenLevelDistance[];
        amount: number;
    }
    
    export interface GroupLevels {
        levels: number[];
        groupId: number;
    }

    export interface PicturesContent { 
        icon: string;
        fontFamily: string;
        name: string;
    }

    export interface LevelPicturesContent extends SnellenLevels {
        content: PicturesContent[];
        fontSize: number;
        textContent: string[];
        fontFamily: string;
    }


    
}