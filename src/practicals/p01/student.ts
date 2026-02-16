export class Student {
  firstname?: string;
  lastname?: string;

  constructor(firstname?: string, lastname?: string) {
    this.firstname = firstname || 'John';
    this.lastname = lastname || 'Doe';
  }
  printName(): string {
    const fullName = `${this.firstname} ${this.lastname}`;
    console.log(fullName);
    return fullName;
  }
}