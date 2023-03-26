import React from "react";

const StudentForm = () => {
    return (
        <div>
            <div>
                <label htmlFor="escola" className="escola">Situação Escolar</label>
                <input type="text" className="escolainput" name="text" id="escola" placeholder="exemplo" required/>
            </div>
            <div>
                <label htmlFor="dataentrada">Data de Entrada</label>
                <input type="date" name="dataentrada" id="entrada" placeholder="00/00/0000"/>
            </div>
            <div>
                <label htmlFor="intituicao">Instituição</label>
                <select name="instituicao" id="instituicao" >
                <option value="">Selecione sua instituição</option>
                </select>
            </div>
            <div>
                <label htmlFor="curso">Curso</label>
                <select type="text" name="curso" id="curso" >
                <option value="">Selecione sua modalidade</option>
                </select>
            </div>
            <div>
                <label htmlFor="dataformatura">Previsão de Formatura</label>
                <input type="date" name="dataformatura" id="formatura" placeholder="Digite sua nacionalidade"/>
            </div>
            <div>
                <label htmlFor="areainteresse">Área de Interesse</label>
                <input type="text" name="areainteresse" id="interesse" placeholder="Digite o seu nome" required/>
            </div>
        </div>
    )
}

export default StudentForm;