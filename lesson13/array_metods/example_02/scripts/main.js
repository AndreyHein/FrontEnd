const toBuy = ['молоко', 'пиво', 'вода'];

const toBayHTMLforVanillaJS = toBuy.map(element => {
    const listItem = document.createElement('li')
    listItem.textContent = element;
    return listItem;
});

const ulElement = document.querySelector('#list');
toBayHTMLforVanillaJS.forEach(
    element => {
        ulElement.append(element);
    }
);

// ulElement.append(...toBayHTMLforVanillaJS);          alternative

const links = [
    { text: 'Home', href: 'https://www.example.com' },
    { text: 'About', href: 'https://www.example.com/about' },
    { text: 'Contact', href: 'https://www.example.com/contact'}
];

const nodes = links.map((elem) => {
    return `<a href=${elem.href}>${elem.text}</a>`
});
console.log(nodes);

const container = document.getElementById('links-container');
const linkElements = links.map(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    return a;
});
linkElements.forEach(a => {
    container.appendChild(a);
    container.appendChild(document.createElement('br'));
});