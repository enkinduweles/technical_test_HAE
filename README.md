# Projeto - Lista de filmes

### Características:

- Exibirá todos os filmes independente do gênero ao iniciar a aplicação, desde que, não tenha filmes já salvos no localstorage
- Filtro por texto, seja dentro de um gênero ou exibindo todos, ele ignora acentuação e caracteres especiais
- Botão de reset para limpar o local storage e voltar a visualizar todos os filmes novamente (apenas para facilitar a navegação)
- Botão de adicionar novo filme, ao criar um novo ele irá exibir todos os do gênero criado (apenas para facilitar a visualização)
- Sidebar permite filtrar filmes por gênero, inclusive acessar a URL com os subpath dos gêneros existentes: **Thriller**; **Horror**; **Comedy**; **Action**; **Drama** será carregado com a lista jpa filtrada
- Link All retorna para a Home com todos os filmes
- Foi adicionado um delay proposital apenas para exibir um indicador de loading (como a informação está sendo carregada em memória e não via request, não iria dar para ver se não fosse com um delay)
- Acessar um gênero fora dos existentes na aplicação, irá informar o usuário (simulação de erro)
- Aplicação responsiva

### Ferramentas:

![React logo](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat)
![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![Typescript logo](https://img.shields.io/badge/Typescript-3178C6?logo=typescript&logoColor=white&style=flat)

### Instalando e rodando o projeto

```bash
# Baixe o repositório
git clone https://github.com/enkinduweles/technical_test_HAE.git

# Acesse a pasta do projeto
cd technical_test_HAE

# instale a dependências
yarn install

# após finalizar a instalação execute o projeto.
yarn dev
 ```
