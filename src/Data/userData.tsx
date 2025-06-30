export interface person {
    id: number;
    firstName:string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export const people: person[] = [
    { id: 1, firstName: 'Elanor', lastName: 'Rigby', email: "rigby@email.com", password:'Password1' }, 
    { id: 2, firstName: 'John', lastName: 'Doe', email: "doe@email.com", password:'Password2' }, 
  ];
