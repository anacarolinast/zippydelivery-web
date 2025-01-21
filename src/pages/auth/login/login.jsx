import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { registerSuccessfulLoginForJwt } from "../../util/AuthenticationService";
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import utilService from "../../../utilService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const apiUrl = utilService.getURlAPI();
  const navigate = useNavigate();

  const entrar = (email, senha = "") => {
    if (email !== "" && senha !== "") {
      let authenticationRequest = {
        username: email,
        password: senha,
      };

      axios
        .post(`${apiUrl}/login`, authenticationRequest)
        .then((response) => {
          console.log("Token recebido:", response.data.token);
          registerSuccessfulLoginForJwt(
            response.data.token,
            response.data.expiration
          );
          window.localStorage.setItem("id", response.data.id);
          navigate("/init");
        })
        .catch((error) => {
          console.error("Erro no login:", error);
          toast.error("Dados incorretos! Verifique seu e-mail e senha.");
        });
    }
  };

  const verificarEmail = async (email) => {
    try {
      console.log("Fazendo requisição para verificar e-mail:", email);
      const response = await axios.get("https://zippydelivery-v2-latest.onrender.com/api/empresa");
      console.log("Resposta da API para verificar e-mail:", response.data);

      const emailValido = response.data.some(empresa => empresa.email === email);
      console.log("E-mail válido:", emailValido);
      return emailValido;
    } catch (error) {
      console.error("Erro ao verificar o e-mail:", error);
      return false;
    }
  };

  const salvarEmpresa = async (email, senha) => {
    try {
      console.log("Verificando se o e-mail já está cadastrado:", email);
      const emailValido = await verificarEmail(email);

      if (emailValido) {
        toast.error("Este e-mail já está cadastrado. Faça login.");
        console.log("E-mail já cadastrado. Redirecionando para login.");
        navigate("/login");
      } else {
        const empresaRequest = { cnpj: "00000000000000", email, senha };
        console.log("Cadastrando novo cliente:", empresaRequest);
        await axios.post("https://zippydelivery-v2-latest.onrender.com/api/empresa", empresaRequest);
        
        entrar(email, senha); 
      }
    } catch (error) {
      toast.error("Erro ao verificar e-mail ou cadastrar cliente.");
      console.error("Erro ao verificar e-mail ou cadastrar cliente:", error);
    }
  };

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      console.log("Iniciando login com o Google...");
      const result = await signInWithPopup(auth, provider); 
      const user = result.user;
      const email = user.email;
      const uid = user.uid; 
      console.log("Usuário logado com sucesso. E-mail:", email);
  
      const emailValido = await verificarEmail(email);
  
      if (emailValido) {
        console.log("E-mail encontrado. Redirecionando para dashboard.");
        entrar(email, uid);
      } else {
        await salvarEmpresa(email, uid);
      }
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      toast.error("Erro ao fazer login com o Google.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-14 items-center h-full">
      <div className="flex gap-5 items-center w-1/2 h-full bg-orange-100 justify-center ">
        <div className="flex flex-col text-white items-center mb-14">
          <img className="scale-75 -mb-14 " src="path-to-your-logo" alt="" />
          <div className="flex items-center gap-3 z-50">
            <div className="w-6 h-6 relative">
              <div
                onClick={() => navigate("adm/home-adm")}
                className="hexagon !bg-white"
              ></div>
            </div>
            <div className="flex flex-col justify-center items-end mb-1">
              <span className="text-3xl font-bold lowercase">
                Zippy Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[90%] sm:h-screen w-full sm:w-1/2 items-start sm:items-center justify-center">
        <div className="flex w-full sm:w-[30rem] flex-col gap-8 px-12 py-16 rounded-md shadow-xl bg-white">
          <span className="text-3xl font-semibold mx-auto">Faça login</span>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 text-gray-500">
              <span className="input-label">Email</span>
              <input
                placeholder="Exemplo@exemplo.com.br"
                className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 text-gray-500">
              <span className="input-label">Senha</span>
              <input
                placeholder="No mínimo 6 caracteres"
                className="input"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="text-secondary mt-1">
                Esqueceu a senha?{" "}
                <span
                  onClick={() => navigate("reset-password")}
                  className="text-gray-600 font-semibold cursor-pointer"
                >
                  Recuperar Senha
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button onClick={() => entrar(email, senha)} className="primary-button">
              Entrar
            </button>
            <button
              onClick={() => navigate("sign-up")}
              className="outline-button"
            >
              Criar uma conta
            </button>
            <div className="flex flex-col items-center gap-3">
              <span className="text-lg">Ou</span>
              <button
                onClick={loginGoogle}
                className="outline-button w-full"
              >
                Entrar com Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;