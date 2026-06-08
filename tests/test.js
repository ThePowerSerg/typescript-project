import { useState } from 'react';
function UseStateExamples() {
    // 1. Simple string state
    const [text, setText] = useState('Hello');
    // 2. Number state
    const [count, setCount] = useState(0);
    // 3. Boolean state
    const [isActive, setIsActive] = useState(false);
    // 4. Array state
    const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
    // 5. Object state with interface
    const [user, setUser] = useState({
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
    });
    // 6. Optional/nullable state
    const [selectedId, setSelectedId] = useState(null);
    // Handler functions
    const handleAddItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };
    const handleRemoveItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    const handleUpdateUser = () => {
        setUser({
            ...user,
            age: user.age + 1,
        });
    };
    const handleInputChange = (e) => {
        setText(e.target.value);
    };
    return style = {};
    {
        padding: '20px', fontFamily;
        'sans-serif', maxWidth;
        '800px';
    }
}
 >
    useState;
TypeScript;
Examples < /h1>;
{ /* String State Example */ }
style;
{
    {
        marginBottom: '30px', padding;
        '15px', border;
        '1px solid #ddd', borderRadius;
        '8px';
    }
}
 >
    1.;
String;
State < /h2>
    < input;
type = "text";
value = { text };
onChange = { handleInputChange };
style = {};
{
    padding: '8px', fontSize;
    '16px', width;
    '250px';
}
/>
    < p > Current;
text: ({ text } < /strong></p >
    /section>);
{ /* Number State Example */ }
style;
{
    {
        marginBottom: '30px', padding;
        '15px', border;
        '1px solid #ddd', borderRadius;
        '8px';
    }
}
 >
    2.;
Number;
State < /h2>
    < p > Count;
({ count } < /strong></p >
    onClick);
{
    () => setCount(count + 1);
}
style = { buttonStyle } >
    Increment
    < /button>
    < button;
onClick = {}();
setCount(count - 1);
style = {};
{
    buttonStyle, marginLeft;
    '10px';
}
 >
    Decrement
    < /button>
    < button;
onClick = {}();
setCount(0);
style = {};
{
    buttonStyle, marginLeft;
    '10px', backgroundColor;
    '#ff6b6b';
}
 >
    Reset
    < /button>
    < /section>;
{ /* Boolean State Example */ }
style;
{
    {
        marginBottom: '30px', padding;
        '15px', border;
        '1px solid #ddd', borderRadius;
        '8px';
    }
}
 >
    3.;
Boolean;
State < /h2>
    < p > Status;
({ isActive, 'Active': 'Inactive' } < /strong></p >
    onClick);
{
    () => setIsActive(!isActive);
}
style = { buttonStyle } >
    Toggle;
Status
    < /button>
    < /section>;
{ /* Array State Example */ }
style;
{
    {
        marginBottom: '30px', padding;
        '15px', border;
        '1px solid #ddd', borderRadius;
        '8px';
    }
}
 >
    4.;
Array;
State < (/h2>);
{
    items.map((item, index) => key = { index }, style = {}, { marginBottom: '8px' });
}
 >
    { item }
    < button;
onClick = {}();
handleRemoveItem(index);
style = {};
{
    buttonStyle, marginLeft;
    '10px', padding;
    '4px 8px', fontSize;
    '12px';
}
    >
        Remove
    < /button>
    < /li>;
/ul>
    < button;
onClick = { handleAddItem };
style = { buttonStyle } >
    Add;
Item
    < /button>
    < /section>;
{ /* Object State Example */ }
style;
{
    {
        marginBottom: '30px', padding;
        '15px', border;
        '1px solid #ddd', borderRadius;
        '8px';
    }
}
 >
    5.;
Object;
State < /h2>
    < div;
style = {};
{
    marginBottom: '10px';
}
 >
    Name;
/strong> {user.name}<br / >
    Age;
/strong> {user.age}<br / >
    Email;
/strong> {user.email}
    < /div>
    < button;
onClick = { handleUpdateUser };
style = { buttonStyle } >
    Increment;
Age
    < /button>
    < button;
onClick = {}();
setUser({ ...user, name: 'Jane Smith' });
style = {};
{
    buttonStyle, marginLeft;
    '10px';
}
    >
        Change;
Name
    < /button>
    < /section>;
{ /* Nullable State Example */ }
style;
{
    {
        marginBottom: '30px', padding;
        '15px', border;
        '1px solid #ddd', borderRadius;
        '8px';
    }
}
 >
    6.;
Nullable;
State < /h2>
    < p > Selected;
ID: ({ selectedId } !== null ? selectedId : 'None');
/strong></p >
    onClick;
{
    () => setSelectedId(42);
}
style = { buttonStyle } >
    Set;
ID;
to;
42
    < /button>
    < button;
onClick = {}();
setSelectedId(null);
style = {};
{
    buttonStyle, marginLeft;
    '10px';
}
 >
    Clear;
ID
    < /button>
    < /section>
    < /div>;
;
// Shared button style
const buttonStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};
export default UseStateExamples;
