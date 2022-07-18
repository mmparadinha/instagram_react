import SugestaoFoco from './SugestaoFoco';
import Sugestoes from './Sugestoes';
const paginaFoco = ["catanacomics"];
const paginaSugestoes = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];

export default function SibedarBox() {
    return (
        <div className="sidebar-box">
            <div className="sidebar">
                {paginaFoco.map(paginaFoco => <SugestaoFoco data={paginaFoco}/>)}
                {paginaSugestoes.map(pagina => <Sugestoes data={pagina}/>)}
                <div className="info">
                    <div>
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma
                    </div>
                    <div>
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </div>
    );
}