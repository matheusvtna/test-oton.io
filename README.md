# test-oton.io

## Sobre o Projeto
Conjunto de testes fim-a-fim referente ao Projeto Final proposto pela disciplina de Engenharia de Software (IF977) - CIn UFPE. O [Oton.io](https://otonio.herokuapp.com/) é um sistema de submissão de atividades, trabalhos, provas e avaliações empresarias, mais coerente com o ambiente remoto/online. A plataforma traz características que facilitam todo o processo de um exame: criação, aplicação, correção/análise e retorno. Para isso, a ela apresenta um ambiente simples e intuitivo que permite uma ótima sensação para todas as partes envolvidas em um exame: do avaliado à instituição, o Oton.io cuida da sua avaliação. 

Para mais detalhes da aplicação, basta [clicar aqui](https://github.com/uandersonricardo/oton.io) para seguir para o repositório do projeto. 

## Instalação e uso

```
# Instalar os pacotes do projeto
npm install

# Executar o Cypress.io
npx cypress open
```

## Conjunto de Testes

### root

```login screen should appears```: Clica no botão de login da página inicial e verifica se o usuário foi redirecionado corretamente

```register screen should appears```: Clica no botão de registro da página inicial e verifica se o usuário foi redirecionado corretamente

```should display oton.io title```: Verifica se o título da página inicial contém "oton.io"

```should display oton.io favicon```: Verifica se o favicon da página inicial foi carregado

```should scroll when click on arrow down button```: Verifica se a página é rolada ao clicar no botão de "Ver mais"

### login

```cannot login an account```: Verifica se, ao digitar uma conta que não existe, o usuário não se conecta

```login teacher account```: Tenta fazer o login em uma conta de professor

```login student account```: Tenta fazer o login em uma conta de estudante

### register

```create a teacher account```: Tenta registrar uma conta de professor

```create a student account```: Tenta registrar uma conta de estudante

### exam

```create an exam```: Cria uma avaliação com uma questão, altera o nome e as data de início e fim e, então, a salva

```delete an exam```: Apaga a última avaliação que o professor criou

## Equipe
- Alexandre Burle    [(aqb)](https://github.com/aqb)
- Danilo Vaz         [(dvma)](https://github.com/danilovazm)
- Matheus Andrade    [(mvtna)](https://github.com/matheusvtna)
- Uanderson Ricardo  [(urfs)](https://github.com/uandersonricardo)
