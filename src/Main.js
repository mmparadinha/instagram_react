import Post from './Post'
import Stories from './Stories'
const paginasStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];
const post = [
    {
        type: 'image',
        page: 'meowed',
        postContent: "./assets/img/gato-telefone.svg",
        postAlt: "Cat using cellphone",
        postSub: "viciei",
        postLikeFoco: 'respondeai',
        postLikes: 101523,
        postComments: [
            {
                commentPage: 'barked',
                comment: 'planejando um assassinato'},
            {
                commentPage: '9gag',
                comment: '@barked kkkkkkk'}]},
    {
        type: 'image',
        page: 'barked',
        postContent: "./assets/img/dog.svg",
        postAlt: "Doggy sleeping",
        postSub: 'soniiiinho',
        postLikeFoco: 'adorable_animals',
        postLikes: 99159,
        postComments: [
            {
                commentPage: 'adorable_animals',
                comment: 'fofo demais!!!'},
            {
                commentPage: 'julinho63',
                comment: 'vida de cão hehehe'}]},
    {   
        type: 'video',
        page: '9gag',
        postContent: "./assets/video/video.mp4",
        postAlt: "./assets/video/video.ogv",
        postSub: 'não pertencimento',
        postLikeFoco: 'barked',
        postLikes: 66597,
        postComments: [
            {
                commentPage: 'bolosdasandra',
                comment: 'certo o pássaro, se bobear, já era '},
            {
                commentPage: 'barked',
                comment: 'ursão solitário :('}]}
]

export default function Main() {
    return (
        <div className="main">
            <div className="caixa-stories">
                {paginasStories.map(pagina => <Stories data={pagina}/>)}
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

            {post.map(props => Post(props))}
        </div>
    );
}