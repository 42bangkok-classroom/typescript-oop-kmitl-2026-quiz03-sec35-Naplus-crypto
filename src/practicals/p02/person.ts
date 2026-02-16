export class Person {
    static COUNTRY = 'Thailand'; // หรือค่าคงที่ที่กำหนดเอง
    firstname?: string;
    lastname?: string;
    age?: number = 25;
    
    constructor(firstname?: string, lastname?: string, age?: number) {
        this.firstname = firstname || 'John';
        this.lastname = lastname || 'Doe';
        this.age = age || 25;
    }
    printName(): string {
        const FullName = `${this.firstname} ${this.lastname}`;
        return FullName;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    setAge(age: number) {
        if(isNaN(age)) {
            this.age = age;
        }
    }
    getAge(): number | undefined {
        return this.age;
    }
}