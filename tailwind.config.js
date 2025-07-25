module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                darkblue: "#1E40AF",
                mediumBlue: '#3D6EFF',
                lightBlue: '#A1B7EF',
                beigeBackground: '#F5ede1',
                darkBrown: '#8A5B27',
                mediumBrown: '#BF8147',
                lightBrown: '#C28E4A',
                darkRoxo: '#320A6B',
                azulClaro: '#78B9B5',
                claroBlue: '#0F828C',
                forteBlue: '#065084',
            },
            borderRadius: {
                small: '0.25rem',
                medium: '0.5rem',
                normal: '1rem'
            },
            fontSize: {
                small: '0.25rem',
                medium: '0.5rem',
                normal: '1rem',
                large: '2rem'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                belleza: ['Belleza', 'sans-serif'],
            },
        },
    },
    plugins: [],
}