export default function Stories(props) {
    return (
        <div class="stories">
            <div class="stories-background">
                <img class="stories-logo" src={`./assets/img/${props}.svg`} alt={props} />
            </div>
            <div class="stories-pagina">
                <h1>{props}</h1>
            </div>
        </div>
    );
}