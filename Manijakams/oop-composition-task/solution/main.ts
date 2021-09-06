interface IStudent {
    name: string;
    marks?: number[]
}

const stud1: IStudent = { name: 'Serbentautas'};
console.log(stud1.name);
console.log(stud1?.marks);