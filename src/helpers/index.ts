export const cn = (...classNames: (string | null | boolean | undefined)[]): string | undefined => 
    classNames.filter(c => typeof c === "string").join(" ") || undefined

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))