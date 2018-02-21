// import app from './App'
//
// const port = process.env.PORT || 3000
//
// app.listen(port, (err) => {
//     if (err) {
//         return console.log(err)
//     }
//
//     return console.log(`server is listening on ${port}`)
// })

const myName: string = "Andrew";

const printName = (name: string) => {
    console.log(name);
};

printName(myName);


interface Contact {
    name: string,
    email: string,
    phone: string
}

const addressBook: Contact[] = [];

const contact: Contact = {
    name: "Andrew",
    email: 'asdf@kk.com',
    phone: '444'
};

addressBook.push(contact);

let list: Array<number> = [1, 2, 3];

list.push(22);

let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x.push('dd');
x.push(9);
x.push(9);
x.push(9);
console.log(x)