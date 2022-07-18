import React from "react";
import Comments from "./Comments";

export default function Post(props) {
    const [statusLike, setStatusLike] = React.useState("heart-outline");
    const [colorLike, setColorLike] = React.useState('');
    const [postLikes, setPostLikes] = React.useState(props.postLikes);


    function LikePost() {
        if (statusLike === "heart-outline") {
            setStatusLike("heart")
            setColorLike('danger')
            setPostLikes(props.postLikes+1)
        } else {
            setStatusLike("heart-outline")
            setColorLike('')
            setPostLikes(props.postLikes)
        }
    }

    if (props.type === "image") {
        return (
            <div className="caixa-post">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={`./assets/img/${props.page}.svg`} alt={props.page}/>
                        <span>{props.page}</span>
                    </div>
                    <div className="post-top-right">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img src={props.postContent} alt={props.postAlt} className="post-image" onDoubleClick={LikePost}/>
                <div className="post-buttons">
                    <div>
                        <ion-icon name={statusLike} color={colorLike} onClick={LikePost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="post-likes">
                    <img src={`./assets/img/${props.postLikeFoco}.svg`} alt={props.postLikeFoco}/>
                    <p>Curtido por <span>{props.postLikeFoco}</span> e <span>{postLikes} pessoas</span> </p>
                </div>
                <div className="post-comments">
                    <div className="post-legenda">
                        <span>{props.page}</span> {props.postSub}
                    </div>

                    {props.postComments.map(comment => <Comments dados={comment}/>)}

                    <div className="post-comentario">
                        <div className="post-input">
                            <input type="text" placeholder="Adicione um comentário..." size="50" />
                        </div>
                        <div className="post-publicar">
                            Publicar
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="caixa-post">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={`./assets/img/${props.page}.svg`} alt={props.page}/>
                        <span>{props.page}</span>
                    </div>
                    <div className="post-top-right">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <video src={props.postContent} alt={props.postAlt} autoPlay loop muted onDoubleClick={LikePost}></video>
                <div className="post-buttons">
                    <div>
                        <ion-icon name={statusLike} color={colorLike} onClick={LikePost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="post-likes">
                    <img src={`./assets/img/${props.postLikeFoco}.svg`} alt={props.postLikeFoco}/>
                    <p>Curtido por <span>{props.postLikeFoco}</span> e <span>{postLikes} pessoas</span> </p>
                </div>
                <div className="post-comments">
                    <div className="post-legenda">
                        <span>{props.page}</span> {props.postSub}
                    </div>

                    {props.postComments.map(comment => <Comments dados={comment}/>)}

                    <div className="post-comentario">
                        <div className="post-input">
                            <input type="text" placeholder="Adicione um comentário..." size="50" />
                        </div>
                        <div className="post-publicar">
                            Publicar
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}