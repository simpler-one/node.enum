/**
 * 
 * @param values 
 */
export default function UnionEnum<T extends {[key: string]: V}, V extends string | number>(
    values: T
): (T & UnionEnumClass<T, V>) {
    return new UnionEnumClass(values) as any;
}


export class UnionEnumClass<T extends {[key: string]: V}, V extends string | number> {
    public readonly __union__: T[keyof T];

    constructor(
        values: T,
    ) {
        Object.assign(this, values);
        Object.freeze(this);
    }
}
