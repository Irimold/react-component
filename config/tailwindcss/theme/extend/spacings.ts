export const Spacings = [
    ".25rem",   // 4px  | 1
    ".5rem",    // 8px  | 2
    ".625rem",  // 10px | 3
    ".75rem",   // 12px | 4
    ".875rem",  // 14px | 5
    "1rem",     // 16px | 6
    "1.25rem"   // 20px | 7
]

export const MarginSetup = () => {
    const output = {}

    Spacings.forEach((spacing, index) => {
        const number = index + 1;
        output[`iri-${number}`] = spacing
    })

    return output
}

export const PaddingSetup = () => {
    const output = {}

    Spacings.forEach((spacing, index) => {
        const number = index + 1;
        output[`no-border-${number}`] = spacing
        output[`with-border-${number}`] = `calc(${spacing} - 1px)`
    })

    return output
}