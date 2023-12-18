import { useNavigate } from 'react-router-dom';

export default function InformacoesPage() {
  let navigate = useNavigate();
  return (
    <div className="flex h-full justify-center bg-white pt-40  pb-44">
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-medium">Zippy Delivery</span>
          <span className="text-secondary font-medium">
            Para acessar os conteúdos das páginas, clique nos links
            disponibilizados
          </span>
        </div>

        <div className="flex w-full py-2">
          <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="text-xl font-medium text-secondary">
                Documentação
              </span>
              <span className="text-secondary font-medium text-sm">
                Nossa documentação é centralizada no{' '}
                <span className="hyperlink">Swagger</span> e serve como um guia
                para os endpoints necessários para a comunicação entre sistemas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-medium text-secondary">
                Modelagem
              </span>
              <span className="text-secondary font-medium text-sm">
                O <span className="hyperlink">modelo de dados</span>, na imagem
                ao lado, descreve a estrutura e a hierarquia das entidades e
                relacionamentos
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/imgBanco.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/2 py-2 pb-44">
          <div className="flex flex-col">
            <span className="text-xl font-medium text-secondary">
              Prototipagem
            </span>
            <span className="text-secondary font-medium text-sm">
              No {' '}
              <span className="hyperlink">protótipo</span> do nosso aplicativo e as versões web destinadas à gestão de negócios estão agora disponíveis para acesso no Figma.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium text-secondary">
              Código Fonte
            </span>
            <span className="text-secondary font-medium text-sm">
              Nosso código fonte se encontra no github. A <span className="hyperlink">versão mobile</span> é voltada a atender nossos clientes, a <span className="hyperlink">versão web</span> é voltada para o gerenciamento do negócio, e a nossa <span className="hyperlink">API</span> dá suporte aos dois sistemas.
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
