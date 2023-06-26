// get reference to the template script tag
const templateSource = document.querySelector(".userTemplate").innerHTML;

// compile the template
let userTemplate = Handlebars.compile(templateSource);

let userDataElement = document.querySelector(".userData");

let userData = { users: [
    {username: 'alan', firstname: 'Alan', lastname: 'Johnson', email: 'alan@test.com'},
    {username: 'alison', firstname: 'Alison', lastname: 'House', email: 'alison@test.com'},
    {username: 'ryan', firstname: 'Ryan', lastname: 'Carson', email: 'ryan@test.com'},
]}

let userDataHTML = userTemplate(userData);

userDataElement.innerHTML = userDataHTML;