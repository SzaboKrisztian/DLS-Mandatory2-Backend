export function randInt(first: number, second?: number) {
    const end = second ? Math.floor(second) : Math.floor(first);
    const start = second ? Math.floor(first) : 0;
    return Math.floor(Math.random() * (end - start)) + start;
}