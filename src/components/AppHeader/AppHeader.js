import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className='AppHeader'>
            <h1>My todo list</h1>
            <h4 className="infoBar">{toDo} more to do, {done} done</h4>
        </div>
    );
};

export default AppHeader;