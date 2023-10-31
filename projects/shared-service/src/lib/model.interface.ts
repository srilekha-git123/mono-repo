export interface Employeeinterface {
    employeeid :string,
    id: string;
    firstname: string;
    lastname: string;
    emailid: string;
    mobile: number;
}

export interface Projectinterface {
    projectid : string;
    projectname : string;
    description : string;
}

export interface combinedDetails{
    projectid : string;
    projectname : string;
    description : string;
    employeeid :string,
    id: string;
    firstname: string;
    lastname: string;
    emailid: string;
    mobile: number;
}

export interface allDetails{
    employeeData : Employeeinterface[],
    projectData : Projectinterface[],
    combinedDetails :combinedDetails[]
}







