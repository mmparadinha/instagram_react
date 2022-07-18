import React from "react";

export default function Comments(props) {
    const [statusLike, setStatusLike] = React.useState("heart-outline");
    const [colorLike, setColorLike] = React.useState('');

    function LikePost() {
        if (statusLike === "heart-outline") {
            setStatusLike("heart")
            setColorLike('danger')
        } else {
            setStatusLike("heart-outline")
            setColorLike('')
        }
    }
    return (
        <div className="post-comentario">
            <div>
                <span>{props.dados.commentPage}</span> {props.dados.comment}
            </div>
            <div>
                <ion-icon name={statusLike} color={colorLike} onClick={LikePost}></ion-icon>
            </div>
        </div>
    );
}