export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

export const getAbove3GPAStuds = (students = []) => {
    debugger;
    const result = students.filter((each) => each.gpa > 3);
    return result;
};
