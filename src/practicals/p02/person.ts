export class Person {
    static COUNTRY = 'Thailand'; // หรือค่าคงที่ที่กำหนดเอง
    firstname?: string;
    lastname?: string;
    age?: number;
    
    constructor(firstname?: string, lastname?: string, age?: number) {
        this.firstname = firstname || 'John';
        this.lastname = lastname || 'Doe';
        this.age = age;
    }
    printName(): string {
        const FullName = `${this.firstname} ${this.lastname}`;
        console.log(FullName);
        return FullName;
    }
    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
    setAge(age: number): void {
        if(isNaN(age)) {
            this.age = age;
        }
    }
    getAge(): number | undefined {
        return this.age;
    }
}