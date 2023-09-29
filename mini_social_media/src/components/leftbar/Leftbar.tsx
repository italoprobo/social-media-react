import "./leftbar.scss"
import Perfil from "./../../assets/italofoto.jpg"
import Friends from "./../../assets/friends.png"
import Game from "./../../assets/game.png"
import Message from "./../../assets/message.png"
import Configuration from "./../../assets/config.png"

const Leftbar = () => {
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                <div className="user">
                    <img src={Perfil} alt="" />
                    <span>Ìtalo Probo</span>
                </div>
                <div className="item">
                    <img src={Friends} alt="" />
                    <span>Amigos</span>
                </div>                  
                <div className="item">
                    <img src={Game} alt="" />
                    <span>Jogos</span>
                </div>                  
                <div className="item">
                    <img src={Message} alt="" />
                    <span>Mensagens</span>
                </div>                  
                <div className="item">
                    <img src={Configuration} alt="" />
                    <span>Configurações</span>
                </div>                  
                </div>
            </div>
        </div>
    )
}

export default Leftbar