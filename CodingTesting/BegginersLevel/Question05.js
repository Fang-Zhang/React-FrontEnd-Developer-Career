// What will be the output of the following code?

function Question05() {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>You entered: {value}</p>
        </div>
    );
}