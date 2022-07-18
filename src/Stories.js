export default function Stories(props) {
    return (
        <div className="stories">
            <div className="stories-background">
                <img className="stories-logo" src={`./assets/img/${props.data}.svg`} alt={props.data} />
            </div>
            <div className="stories-pagina">
                <h1>{props.data}</h1>
            </div>
        </div>
    );
}