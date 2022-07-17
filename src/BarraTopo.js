export default function BarraTopo() {
    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    
    return (
        <div class="barra-topo">
            <div class="conteudo-topo">
                <div class="logos">
                    <ion-icon name="logo-instagram" alt=''></ion-icon>
                    <div class="separadora-logos"></div>
                    <img src="./assets/img/logo.png" alt='' />
                </div>
                <div class="caixa-pesquisa">
                    <input placeholder="Pesquisar"/>
                </div>
                <div class="caixa-icones">
                    {icones.map(icones => <ion-icon name={icones}></ion-icon>)}
                </div>
            </div>
        </div>
    );
}