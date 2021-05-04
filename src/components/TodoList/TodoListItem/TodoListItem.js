const TodoListItem = ({ label, important = false }) => {

    const importantStyle = {
        color: important ? 'tomato' : 'black',
    };

    return (
        <span style={importantStyle}>{label}</span>
    );
};

export default TodoListItem;