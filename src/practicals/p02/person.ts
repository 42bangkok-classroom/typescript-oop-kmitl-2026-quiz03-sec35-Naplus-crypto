export class Person {
    static COUNTRY : string= 'Thailand'; // หรือค่าคงที่ที่กำหนดเอง
    firstname?: string;
    lastname?: string;
    private age: number = 25;
    
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    setAge(age: number) {
        if(isNaN(age)) {
            this.age = age;
        }
    }
    getAge(): number {
        return this.age;
    }
}