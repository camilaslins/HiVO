import React from "react";

const UserForm = () => {
    return (
        <div>
            <div>
                <label htmlFor="name" className="namelabel">Nome Completo</label>
                <input type="text" className="nameinput" name="text" id="name" placeholder="Digite o seu nome" />
            </div>
            <div>
                <label htmlFor="dateofbirth" className="nasclabel">Data de nascimento</label>
                <input type="date" name="datanasc" id="nasc" placeholder="00/00/0000" />
            </div>
            <div>
                <label htmlFor="rg" className="rglabel">RG</label>
                <input type="text" name="rg" id="rg" placeholder="000000-0"/>
            </div>
            <div>
                <label htmlFor="cpf" className="cpflabel">CPF</label>
                <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" />
            </div>
            <div>
                <label htmlFor="nacionalidade" className="nacionalidadelabel">Nacionalidade</label>
                <input type="text" name="nacionalidade" id="nacionalidade" placeholder="Digite sua nacionalidade" />
            </div>
            <div>
                <label htmlFor="genero" className="generolabel">Gênero</label>
                <select type="text" name="genero" id="genero">
                <option value="">Selecione uma opção</option>
                </select>
            </div>
            <div>
                <label htmlFor="cep" className="ceplabel">CEP</label>
                <input type="text" name="cep" id="cep" placeholder="00000-000"/>
            </div>
            <div>
                <label htmlFor="endereco" className="enderecolabel">Endereço</label>
                <input type="text" name="endereco" id="endereco" placeholder="Exemplo"/>
            </div>
            <div>
                <label htmlFor="num" className="numlabel">Número</label>
                <input type="text" name="num" id="num" placeholder="Exemplo"/>
            </div>
            <div>
                <label htmlFor="bairro" className="bairrolabel">Bairro</label>
                <input type="text" name="bairro" id="bairro" placeholder="Exemplo" />
            </div>
            <div>
                <label htmlFor="endereco" className="enderecolabel">Cidade</label>
                <input type="text" name="cidade" id="cidade" placeholder="Exemplo" />
            </div>
            <div>
                <label htmlFor="estado" className="estadolabel">Estado</label>
                <select type="text" name="estado" id="estado">
                <option value="">Selecione seu Estado</option>
                </select>
            </div>
            <div>
                <label htmlFor="telefone" className="tellabel">Telefone</label>
                <input type="text" name="tel" id="tel" placeholder="(00)00000-0000"/>
            </div>
            <div>
                <label htmlFor="email" className="emaillabel">E-mail</label>
                <input type="text" name="email" id="email" placeholder="exemplo@hotmail.com" />
            </div>
            <div>
                <label htmlFor="senha" className="senhalabel">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Exemplo" />
            </div>
        </div>
    )
}

export default UserForm;