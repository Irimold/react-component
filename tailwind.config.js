const spacings = [
    ".25rem",   // 4px  | 1
    ".5rem",    // 8px  | 2
    ".625rem",  // 10px | 3
    ".75rem",   // 12px | 4
    ".875rem",  // 14px | 5
    "1rem",     // 16px | 6
    "1.25rem"   // 20px | 7
]

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            animation: {
                'counter-spin': 'counter-spin 1.5s infinite'
            },
            borderRadius: {
                DEFAULT: "8px",
            },
            boxShadow: {
                DEFAULT: "0 4px 6px -1px rgba(0,0,0,.1)"
            },
            colors: {
                dark: "#0F172A",
                primary: {
                    DEFAULT : "#4CC5F5",
                    100     : "#DBFEFE",
                    200     : "#B7F8FE",
                    300     : "#93ECFC",
                    400     : "#78DDF9",
                    500     : "#4CC5F5",
                    600     : "#379CD2",
                    700     : "#2676B0",
                    800     : "#18548E",
                    900     : "#0E3C75",
                },
                secondary: {
                    DEFAULT : "#3D9EC4",
                    100     : "#D9FBFC",
                    200     : "#B4F3F9",
                    300     : "#8BDFED",
                    400     : "#6AC3DB",
                    500     : "#3D9EC4",
                    600     : "#2C7DA8",
                    700     : "#1E5E8D",
                    800     : "#134371",
                    900     : "#0B305E",
                },
                tertiary: {
                    DEFAULT : "#2D7693",
                    100     : "#D9F9F9",
                    200     : "#B0EEF4",
                    300     : "#81D0DE",
                    400     : "#5BA8BE",
                    500     : "#2D7693",
                    600     : "#205D7E",
                    700     : "#164669",
                    800     : "#0E3255",
                    900     : "#082446",
                },
                grey: {
                    DEFAULT : "#697E8E",
                    50      : "#F8F9FA",
                    100     : "#ECEFF2",
                    200     : "#D6DCE1",
                    300     : "#B2BEC7",
                    400     : "#889BA8",
                    500     : "#697E8E",
                    600     : "#546775",
                    700     : "#45535F",
                    800     : "#3C4750",
                    900     : "#353D45",
                },
            },
            fontSize: {
                'page-title'    : ['calc(5.98vw + 1rem)'],
                'section-title' : ['calc(1.6vw + 1rem)'],
                'sub-title'     : ['calc(.2vw + 1.25rem)'],
                'card-title'    : ['1.25rem'],
                'navigation'    : ['1.5rem'],
                'body'          : ['1rem'],
                'information'   : ['.875rem'],
            },
            keyframes: {
                'counter-spin' : {
                    '0%'    : { transform: 'rotate(0deg)' },
                    '100%'  : { transform: 'rotate(-360deg)' }
                }
            },
            margin: () => {
                const output = {}

                spacings.forEach((spacing, index) => {
                    const number = index + 1;
                    output[`iri-${number}`] = spacing
                })

                return output
            },
            padding: () => {
                const output = {}

                spacings.forEach((spacing, index) => {
                    const number = index + 1;
                    output[`no-border-${number}`] = spacing
                    output[`with-border-${number}`] = `calc(${spacing} - 1px)`
                })

                return output
            }
        },
    },
    plugins: [],
}

