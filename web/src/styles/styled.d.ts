import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
    
        colors: {
            primary: string;
            background: string

            title: string;
            text: string;
            suportText: string;
            
            blocks: string;
            unsaturated: string;
        },

    }
}