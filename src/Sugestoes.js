export default function Sugestoes(props) {

    return (
        <div className="sugestoes">
            <div className="sugestoes-left">
                <img src={`./assets/img/${props.data}.svg`} alt={props.data}/>
                <div>
                    <span>{props.data}</span>
                    <p>Segue você</p>
                </div>
            </div>
            <div className="sugestoes-right">
                Seguir
            </div>
        </div>
    );
}