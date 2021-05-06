import { getAbove3GPAStuds } from '../app/utils';

const students = [
    { name: 'st1', gpa: 3 },
    { name: 'st2', gpa: 2 },
    { name: 'st3', gpa: 1 },
    { name: 'st4', gpa: 4 },
    { name: 'st7', gpa: 3.1 },
    { name: 'st5', gpa: 2 },
    { name: 'st6', gpa: 1 },
];

const testHTML = "<div class='a'>Testing</div>";

test('get 3 or above gpa students', () => {
    const a = 30;
    expect(getAbove3GPAStuds(students)).toBeArrayOfSize(2);

    expect(getAbove3GPAStuds([])).toBeArrayOfSize(0);

    expect(getAbove3GPAStuds()).toBeArrayOfSize(0);

    expect(getAbove3GPAStuds(students)).toBeArray();

    expect(getAbove3GPAStuds(students)).toMatchSnapshot();

    expect(getAbove3GPAStuds(students)).toMatchInlineSnapshot(`
        Array [
          Object {
            "gpa": 4,
            "name": "st4",
          },
          Object {
            "gpa": 3.1,
            "name": "st7",
          },
        ]
    `);

    expect(testHTML).toMatchSnapshot();
});
