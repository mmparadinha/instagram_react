import SugestaoFoco from './SugestaoFoco';
import Sugestoes from './Sugestoes';
const paginaFoco = ["catanacomics"];
const paginaSugestoes = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];

export default function SibedarBox() {
    return (
        <div class="sidebar-box">
            <div class="sidebar">
                {paginaFoco.map(SugestaoFoco)}
                {paginaSugestoes.map(pagina => Sugestoes(pagina))}
                <div class="info">
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