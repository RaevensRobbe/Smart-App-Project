import { StyleSheet } from 'react-native';
 
export const neutral = {
    100: '#E0D8D6',
    200: '#716D76',
    500: '#DF1233',
    700: '#1C1C2B',
    800: '#12121F',
    900: '#0D0D0D',
};
 
export const background = {
    neutral: StyleSheet.create({
        500: {
            backgroundColor: neutral[500]
        },
        700: {
            backgroundColor: neutral[700]
        },
        800: {
            backgroundColor: neutral[800]
        },
        900: {
            backgroundColor: neutral[900]
        },
    }),
    theme: {
        // ...
    }
}
 
export const text = {
    neutral: StyleSheet.create({
        100: {
            color: neutral[100]
        },
        200: {
            color: neutral[200]
        },
        500: {
            color: neutral[500]
        }
    }),
}