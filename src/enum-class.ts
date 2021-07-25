export default class Enum<T> {

    private readonly items: {[key: string]: EnumItem<T>}

    constructor(items: {[key: string]: EnumItem<T>}) {
        this.items = {...items}
    }

    public static of() {

    }

    public static valueOf<T extends Enum<any>>(type: Enum<any>, name: string): T {

    }
}


class EnumItem<T> {
    constructor(
        public readonly value: T,
        public readonly label: string,
    ) {
    }
}
