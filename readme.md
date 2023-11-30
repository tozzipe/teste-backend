# TESTE DEV BACK-END SR
---

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/)


### Features

- [x] Listar todas as ofertas
- [x] Favoritar ofertas
- [x] Listar favoritos
- [x] Detalhes da carteira
- [x] Criar uma oferta
- [x] Excluir uma oferta
- [ ] Comprar uma oferta


### Regras da API

   * Usuário pode criar uma ou mais ofertas, desde que:
      * Exista pelo menos 1 moeda em sua carteira;
      * Exista saldo na moeda que ele quer ofertar;
      * O saldo seja menor ou igual à oferta que será criada.
      * O número de ofertas criadas por dia seja menor ou igual 5.

   * Usuário poderá favoritar uma oferta.
   * Usuário poderá excluir ofertas, desde que tenham sido criadas por ele.


### Pré-requisitos

Ter instalado o docker 
Ter instalado o NodeJS.

Para rodar a aplicação:
### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/tozzipe/teste-backend/>

# Acesse a pasta do projeto no terminal/cmd
$ cd teste-back

# Execute o comando
$ docker-compose up -d
```

O comando acima irá realizar as seguintes tarefas:

- [x] Criar o container no Docker
- [x] Criar uma instância do MySQL no container
- [x] Instalar os pacotes da aplicação NodeJS
- [x] Executar as migrations, construindo as tabelas no DB
- [x] Executar as seeds no BD, criando uma carga inicial de dados
- [x] Startar a aplicação <code>http://localhost:3000/</code>.

### Em caso de erro no script para rodar o Back End (servidor)

```bash
# acesse o repo 
$ cd teste-back

# Rode as migrations manualmente
$ npx sequelize db:migrate

# Rode as seeds manualmente
$ npx sequelize db:seed:all

# reinicie a aplicação no docker
```


### Documentação da API

A documentação encontra-se na pasta documentation e está dividida em 3 tipos de documentação:

- [x] Diagramas de Classe, Sequência e Fluxo em formato editável (.puml) (PlantUML) documentation/diagrams
- [x] Imagens dos diagramas documentation/images
- [x] Postman Collection documentation/postman

```bash
# Documentação online
https://documenter.getpostman.com/view/5037773/2s9YXe8Pn6
```

## Fase 2: Refinamento

Nesta fase, o objetivo é refinarmos a implementação do **item 5** do Balcão de Ofertas, que se trata da funcionalidade de "Comprar ofertas". Para isso, é fundamental estabelecer uma comunicação clara e eficaz com o Product Owner (PO) a fim de entender os requisitos e as expectativas para esta entrega. Abaixo, listei as principais perguntas que serão discutidas com o PO para obter informações relevantes:

1. **Fluxo de Compra:**
   - Como você enxerga o fluxo de ações do usuário ao comprar uma oferta no Balcão de Ofertas?
   - Quais são os passos principais que o usuário deve seguir para concluir uma compra de forma bem-sucedida?

2. **Processamento de Pagamento:**
   - Como as transações de compra serão processadas na blockchain ou em outro sistema? Existe alguma integração com serviços de pagamento externos?
   - Como será minimizada a possibilidade de quebra de comunicação com o sistema de pagamento externo durante uma compra? Imagina-se o uso de uma fila e um webhoock?
   - Quais são os critérios para determinar se uma transação de compra foi bem-sucedida ou não?

3. **Validações de Compra:**
   - Quais validações e verificações são necessárias para garantir que uma compra seja autorizada?
   - Existem regras específicas que governam uma compra bem-sucedida? 

4. **Feedback ao Usuário:**
   - Como o usuário receberá confirmações de que a compra foi bem-sucedida? Quais informações e notificações serão exibidas?
   - Qual é o tratamento de erros previsto? Como o usuário será informado em caso de problemas durante a compra?

5. **Rastreamento de Transações:**
   - Será necessário rastrear todas as transações de compra para fins de histórico? Se sim, como esses dados devem ser registrados?

6. **Segurança:**
   - Existem considerações de segurança adicionais que devemos ter em mente ao processar transações de compra? Como garantir a segurança das transações?

Ao discutir esses tópicos com o PO, nosso objetivo é obter clareza sobre a funcionalidade de compra e garantir que todas as informações relevantes sejam coletadas. Isso nos permitirá implementar com sucesso essa etapa do Balcão de Ofertas de acordo com as expectativas e requisitos do projeto.



## Fase 3: Final

Nesta fase, é essencial olhar para o projeto de uma perspectiva de longo prazo e identificar áreas de melhoria, otimização e refinamento para garantir que a aplicação continue crescendo de forma saudável e eficaz. Abaixo, apresento uma série de considerações e áreas de aprimoramento que podem ser exploradas:

### Arquitetura e Escalabilidade:

1. **Arquitetura de Microservices:** Avalir a possibilidade de decompor a aplicação em microservices para torná-la mais escalável, modular e de fácil manutenção. Isso permitirá que diferentes partes da aplicação sejam escaladas independentemente.

2. **Orquestração de Containers:** Considere o uso de ferramentas de orquestração de containers, como Kubernetes, para gerenciar e escalar seus serviços em contêineres de maneira eficiente.


### Segurança:
3. **Gerenciamento de Vulnerabilidades:** Implemente ferramentas e processos para rastrear e gerenciar vulnerabilidades de segurança em dependências e bibliotecas de terceiros.

### Monitoramento e Observabilidade:

4. **Monitoramento Avançado:** Expandir o monitoramento da aplicação, incluindo rastreamento de transações (logs), métricas de desempenho e geração de registros detalhados para facilitar a solução de problemas.

5. **Alertas e Notificações:** Configurar alertas para incidentes críticos e estabelecer procedimentos de notificação para a equipe de operações.

### Testes e Qualidade de Código:

6. **Automação de Testes:** Expandir a cobertura de testes automatizados, incluindo testes de integração e testes unitários, para garantir a estabilidade do código.

### Documentação:

7. **Documentação Técnica Completa:** Garantir que a documentação do código, API e arquitetura esteja sempre atualizada e seja de fácil compreensão para a equipe e futuros colaboradores.

### Melhorias no Código:

8. **Refatoração:** Identificar áreas de código que podem ser refatoradas para melhorar a legibilidade, manutenção e desempenho.

9. **Padrões de Design:** Implementar padrões de design de software adequados para garantir um código robusto e sustentável.

10. **Gestão de Dependências:** Manter as bibliotecas e dependências atualizadas para evitar problemas de segurança e tirar proveito de novos recursos.

### Visão de Longo Prazo:

15. **Evolução da Arquitetura:** Pensar na evolução da arquitetura da aplicação para atender às futuras necessidades do negócio e às tendências tecnológicas.

16. **Avaliação de Novas Tecnologias:** Estar atento a novas tecnologias e ferramentas que possam melhorar a aplicação e permitir a adoção de práticas modernas de desenvolvimento.

17. **Uso de cache para listar ofertas:** Estudar a necessidade de implementar um cache (redis) na listagem das ofertas existentes para diminuir acesso ao servidor/bd e aumentar a velocidade na resposta da requisição do usuário.

Este é um ponto de partida para considerações de melhoria a longo prazo. 



### Autor

Feito por Paulo E. Tozzi 👋🏽 Entre em contato!
