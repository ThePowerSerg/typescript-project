import { useState } from 'react';

// Interface for complex object state
interface User {
  name: string;
  age: number;
  email: string;
}

function UseStateExamples() {
  // 1. Simple string state
  const [text, setText] = useState<string>('Hello');

  // 2. Number state
  const [count, setCount] = useState<number>(0);

  // 3. Boolean state
  const [isActive, setIsActive] = useState<boolean>(false);

  // 4. Array state
  const [items, setItems] = useState<string[]>(['Apple', 'Banana', 'Orange']);

  // 5. Object state with interface
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  });

  // 6. Optional/nullable state
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Handler functions
  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleUpdateUser = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <h1>useState TypeScript Examples</h1>

      {/* String State Example */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>1. String State</h2>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          style={{ padding: '8px', fontSize: '16px', width: '250px' }}
        />
        <p>Current text: <strong>{text}</strong></p>
      </section>

      {/* Number State Example */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>2. Number State</h2>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={{ ...buttonStyle, marginLeft: '10px' }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={{ ...buttonStyle, marginLeft: '10px', backgroundColor: '#ff6b6b' }}>
          Reset
        </button>
      </section>

      {/* Boolean State Example */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>3. Boolean State</h2>
        <p>Status: <strong>{isActive ? 'Active' : 'Inactive'}</strong></p>
        <button onClick={() => setIsActive(!isActive)} style={buttonStyle}>
          Toggle Status
        </button>
      </section>

      {/* Array State Example */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>4. Array State</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {item}
              <button
                onClick={() => handleRemoveItem(index)}
                style={{ ...buttonStyle, marginLeft: '10px', padding: '4px 8px', fontSize: '12px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleAddItem} style={buttonStyle}>
          Add Item
        </button>
      </section>

      {/* Object State Example */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>5. Object State</h2>
        <div style={{ marginBottom: '10px' }}>
          <strong>Name:</strong> {user.name}<br />
          <strong>Age:</strong> {user.age}<br />
          <strong>Email:</strong> {user.email}
        </div>
        <button onClick={handleUpdateUser} style={buttonStyle}>
          Increment Age
        </button>
        <button
          onClick={() => setUser({ ...user, name: 'Jane Smith' })}
          style={{ ...buttonStyle, marginLeft: '10px' }}
        >
          Change Name
        </button>
      </section>

      {/* Nullable State Example */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>6. Nullable State</h2>
        <p>Selected ID: <strong>{selectedId !== null ? selectedId : 'None'}</strong></p>
        <button onClick={() => setSelectedId(42)} style={buttonStyle}>
          Set ID to 42
        </button>
        <button onClick={() => setSelectedId(null)} style={{ ...buttonStyle, marginLeft: '10px' }}>
          Clear ID
        </button>
      </section>
    </div>
  );
}

// Shared button style
const buttonStyle: React.CSSProperties = {
  padding: '8px 16px',
  fontSize: '14px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default UseStateExamples;