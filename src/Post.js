

export default function Post(props) {
    if (props.type === "image") {
        return (
            <div class="caixa-post">
                <div class="post-top">
                    <div class="post-top-left">
                        <img src={`./assets/img/${props.page}.svg`} />
                        <span>{props.page}</span>
                    </div>
                    <div class="post-top-right">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img src={props.postContent} class="post-image" />
                <div class="post-buttons">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="post-likes">
                    <img src={`./assets/img/${props.postLikeFoco}.svg`} />
                    <p>Curtido por <span>{props.postLikeFoco}</span> e <span>{props.postLikes} pessoas</span> </p>
                </div>
                <div class="post-comments">
                    <div class="post-legenda">
                        <span>{props.page}</span> {props.postSub}
                    </div>
                    <div class="post-comentario">
                        <div>
                            <span>barked</span> planejando um assassinato
                        </div>
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="post-comentario">
                        <div>
                            <span>9gag</span> @barked kkkkkk
                        </div>
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="post-comentario">
                        <div class="post-input">
                            <input type="text" placeholder="Adicione um comentário..." size="50" />
                        </div>
                        <div class="post-publicar">
                            Publicar
                        </div>
                    </div>
                </div>
            </div>
        )} else {
            return (
                <div class="caixa-post">
                    <div class="post-top">
                        <div class="post-top-left">
                            <img src={`./assets/img/${props.page}.svg`} />
                            <span>{props.page}</span>
                        </div>
                        <div class="post-top-right">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <video src={props.postContent} alt={props.postAlt} autoPlay loop muted></video>
                    <div class="post-buttons">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="post-likes">
                        <img src={`./assets/img/${props.postLikeFoco}.svg`} />
                        <p>Curtido por <span>{props.postLikeFoco}</span> e <span>{props.postLikes} pessoas</span> </p>
                    </div>
                    <div class="post-comments">
                        <div class="post-legenda">
                            <span>{props.page}</span> {props.postSub}
                        </div>
                        <div class="post-comentario">
                            <div>
                                <span>bolosdasandra</span> certo o pássaro, se bobear, já era
                            </div>
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="post-comentario">
                            <div>
                                <span>barked</span> ursão solitário
                            </div>
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="post-comentario">
                            <div class="post-input">
                                <input type="text" placeholder="Adicione um comentário..." size="50" />
                            </div>
                            <div class="post-publicar">
                                Publicar
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}