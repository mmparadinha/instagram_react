export default function SugestaoFoco(props) {

    return (
    <>
        <div className="sugestao-foco">
            <img src={`./assets/img/${props.data}.svg`} alt={props.data}/>
            <div>
                <span>{props.data}</span>
                <p>Catana</p>
            </div>
        </div>
        <div className="sugestoes">
            <div className="sugestoes-p-voce-left">
                Sugestões para você
            </div>
            <div className="sugestoes-p-voce-right">
                Ver tudo
            </div>
        </div>
    </>
    );
}