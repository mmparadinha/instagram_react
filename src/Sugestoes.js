export default function Sugestoes(props) {

    return (
        <div class="sugestoes">
            <div class="sugestoes-left">
                <img src={`./assets/img/${props}.svg`}/>
                <div>
                    <span>{props}</span>
                    <p>Segue você</p>
                </div>
            </div>
            <div class="sugestoes-right">
                Seguir
            </div>
        </div>
    );
}