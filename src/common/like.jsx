const Like = ({ liked, onClick }) => {
    let classes = 'fas fa-heart';
    if (!liked) classes += '-o';
    return (<span><i className={`clikable ${classes}`} onClick={onClick}></i></span>);
}

export default Like;