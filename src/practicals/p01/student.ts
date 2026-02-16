export class Student {
  firstname: string;
  lastname: string;

  constructor(firstName: string, lastName: string) {
    this.firstname = firstName;
    this.lastname = lastName;
  }

//    getFirstName(): string {
//      return this.firstname;
//  }
//
//    getLastName(): string {
//        return this.lastname;
//  }

  printName(): string {
    const fullName = `${this.firstname} ${this.lastname}`;
    console.log(fullName);
    return fullName;
  }
}