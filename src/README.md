SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package

### npm init

Gerencia as requisições, rotas e URLs, entre outras funcionalidades

### npm install --save express

Rodar o projeto

### node app.js

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a depedência na máquina, após instalar, reiniciar o PC.

### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.

### npm install --save-dev nodemon

Rodar o projeto usando o nodemon

### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial

### http://localhost:8080

Comando SQL para criar a base de dados

### CREATE DATABASE wesley CHARACTER SET utf8mb4 COLLATE utf 8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL

### npm install --save sequelize

Instalar o drive do banco de dados

### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para banco de dados

### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config

### npx sequelize-cli init

Manipular variáveis de ambiente

### npm install dotenv --save

Criar as Models

### npx sequelize-cli model:generate --name escola --attributes id:integer,razaosocial:string,cnpj:string,logradouro:string,numero:string,complemento:string,cep:string,telefone:string,nomecontato:string,email:string,importado:integer,senha:string,cidade:string,bairro:string,codescola:string

### npx sequelize-cli model:generate --name Users --attributes name:string,email:string

### npx sequelize-cli model:generate --name estudante --attributes id:integer,name:string,cpf:string,logradouro:string,numero:string,complemento:string,cep:string,telefone:string,email:string,cidade:string,bairro:string,senha:string,nomepai:string,nomemae:string,estadocivil:string,sexo:string,dt_nascimento:dateonly,horario:string,rg:string,orgaoexpedidor:string,periodoano:string,previsaoformatura:string,curso_id:integer,escola_id:integer,dt_cadastro:dateonly,uf:string,idade:integer,estagiario_ativo:string,dt_atualizacao:dateonly,periodo:integer,ano:integer,previsao_semestre:integer,previsao_ano:integer,previsao_mes:integer,deficiencia:string,deficiencia_descricao:string,telefone1:string,telefone2:string,ctps:string,candidato_selecionado:integer,anoingresso:integer,semestreingresso:integer,cpf_pai:string,cpf_mae:string,notificacao:string,dt_alteracao_notificacao:dateonly,codigo:string,dt_expiracao_codigo:date,url_anexo_curriculo:string,nome_arquivo_curriculo:string,primeiro_acesso:string,termos_condicoes:integer,dt_aceite_termos:date,naturalidade:string,uf_naturalidade:string,nacionalidade:string

### npx sequelize-cli model:generate --name cep --attributes id:integer,cep:string,logradouro:string,bairro:string,cidade:string,uf:string,regiao:string

### npx sequelize-cli model:generate --name curso --attributes id:integer,idescola:integer,idcurso:integer,descricao:string,duracao:string

### npx sequelize-cli model:generate --name processos_especiais --attributes id:integer,estudante_id:integer,indicacao:string,descricao_indicacao:string,chamou_atencao_desafio:string,descricao_chamou_atencao:string

Executar as migrations

### npx sequelize-cli db:migrate

Permitir requisição externa

### npm install cors
