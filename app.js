
const h2 = React.createElement('h2',{},'H2');
const child = React.createElement('div',
{
    id:'child1'
},
['Hi there',h2]);

const child2 = React.createElement('div',
{
    id:'child2'
},
['Hi there',h2]);

const parent = React.createElement('div', {id:'parent'},[child, child2]);

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);