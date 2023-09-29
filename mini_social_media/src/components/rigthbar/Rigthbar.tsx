import "./rigthbar.scss"

const Rightbar = () => {
    return(
        <div className="rigthbar">
            <div className="container">
                <div className="item">
                    <span>Sugestões para você</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <span>Ítalo Probo</span>
                        </div>
                        <div className="buttons">
                            <button>Seguir</button>
                            <button>Ignorar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar