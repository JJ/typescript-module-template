export module Module {
    export class Class {
	attribute: string;
	constructor(attribute: string) {
            this.attribute = attribute;
	}
	all() {
            return this.attribute;
	}
    }
}
