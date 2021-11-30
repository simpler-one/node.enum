/**
 * 
 */
export class UnionEnum<T extends {[key: string]: V}, V extends string | number> {
    /** For type definition */
    public readonly __union__: T[keyof T];

    constructor(
        values: T,
    ) {
        Object.assign(this, values);
        Object.freeze(this);
    }

    /**
     * 
     * @param values 
     */
    static of<T extends {[key: string]: V}, V extends string | number>(
        values: T
    ): (T & UnionEnum<T, V>) {
        return new UnionEnum(values) as any;
    }
}
