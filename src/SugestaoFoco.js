export default function SugestaoFoco(props) {

    return (
    <>
        <div class="sugestao-foco">
            <img src={`./assets/img/${props}.svg`} />
            <div>
                <span>{props}</span>
                <p>Catana</p>
            </div>
        </div>
        <div class="sugestoes">
            <div class="sugestoes-p-voce-left">
                Sugestões para você
            </div>
            <div class="sugestoes-p-voce-right">
                Ver tudo
            </div>
        </div>
    </>
    );
}