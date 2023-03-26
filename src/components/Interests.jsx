import React from "react";

const Interests = () => {
    return (
        <div>
            {/* <h2 className="cadastro">Tela de Cadastro</h2> */}
            <form>
                <p className="p1">Olá, nós somos a HiVolunteer e, preocupados com o bem estar das ONGs e dos voluntários, precisamos que antes de tudo você tenha ciência de algumas informações e precisamos saber se nossos futuros voluntários se encaixam em algumas características. </p>
                <p className="p2">Você é LGBT ou possui vivência com a população, bem como não possui e não expressa toda e qualquer forma de preconceito ou discriminação, seja quanto orientação sexual, identidade de gênero, raça, etnia, classe social, entre outros?</p>
                <label className="yeslabel">Sim</label>
                <input type="radio" className="yes1" name="yes1" value="yes"/>
                <label className="nolabel">Não</label>
                <input type="radio" className="no1" name="no1" value="no"/>
                <p className="p3">Você tem engajamento nas causas e movimentos sociais, reconhecendo a importância da organização da sociedade civil pela luta dos direitos sociais, políticos e civis? </p>
                <label className="yeslabel2">Sim</label>
                <input type="radio" className="yes2" name="yes2" value="yes"/>
                <label className="nolabel2">Não</label>
                <input type="radio" className="no2" name="no2" value="no"/>
                <p className="p4">Você como profissional de qualquer área entende, além das duas características mencionadas acima, que é necessário possuir habilidade de escuta e manutenção do sigilo quanto ao contato, condições de saúde e diálogos realizados no interior das ONGs?</p>
                <label className="yeslabel3">Sim</label>
                <input type="radio" className="yes3" name="yes3" value="yes"/>
                <label className="nolabel3">Não</label>
                <input type="radio" className="no3" name="no3" value="no"/>
            </form>
            </div>

    )
}

export default Interests;