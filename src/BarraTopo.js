export default function BarraTopo() {
    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    
    return (
        <div className="barra-topo">
            <div className="conteudo-topo">
                <div className="logos">
                    <ion-icon name="logo-instagram" alt=''></ion-icon>
                    <div className="separadora-logos"></div>
                    <img src="./assets/img/logo.png" alt='' />
                </div>
                <div className="caixa-pesquisa">
                    <input placeholder="Pesquisar"/>
                </div>
                <div className="caixa-icones">
                    {icones.map(icones => <ion-icon name={icones}></ion-icon>)}
                </div>
            </div>
        </div>
    );
}