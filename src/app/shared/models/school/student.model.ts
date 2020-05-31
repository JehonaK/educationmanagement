export class StudentModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public role: string
    ) { }
}

export const STUDENTS: StudentModel[] = [
    new StudentModel("Ilir", "Asllani", "ilirbaba@email", "USER"),
    new StudentModel("Vokrri", "Nurredin", "nvokrri@email", "USER")
]