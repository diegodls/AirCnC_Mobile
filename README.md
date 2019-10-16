# AirCnC_Mobile
Aplicativo desenvolvido em React Native que faz parte do sistema AirCnC.\

![aircnc_mobile_png](https://user-images.githubusercontent.com/41457134/66956445-cbd4c880-f03a-11e9-813c-bdc5ba874d91.png)

# Sobre
Esse sistema tem como objetivo desenvolver um sistema completo, desde o back-end até o front-end, incluindo mobile com base no sistema [AirBnB](https://www.airbnb.com.br/).\
O usuário pode cadastrar lugares para as pessoas estudar, visitar, conhecer, enfim, irem até esses lugares.\
Com o back-end sendo desenvolvido em NodeJs, o front-end foi desenvolvido em React, e o Mobile foi desenvolvido em React Native utilizando as dependências abaixo, o que facilita na manutenção e interação com o [back-end](https://github.com/diegodls/AirCnC_server) e [Web](https://github.com/diegodls/AirCnC_Web), uma vez que boa parte do código pode ser reaproveitada em ambas as tecnologias.\
Sistema desenvolvido para colocar o conhecimento adiquirido a prova, conhecimento ese obtido em um mini-curso fornecido pela [RocketSeat](https://rocketseat.com.br), agradecimento a todo o pessoal por esse ótimo conteúdo.

# Desenvolvimento
Esse sistema foi desenvolvido utilizando a tecnologia React Native, devido a mesma fornecer uma vasta quantidade de dependências e o facil aprendizado, além de ser facilmente portado para mobile utilizando React native.\
Foi aplicado o padrão MVC em todo o projeto, para uma maior escalabilidade e maior facilidade em atualizar e manter o código.\
O sistema possi gerenciamento de estado, envio de arquivos e dados.\
Possui também comunicação real-time, onde eventos feitos na versão [Web](https://github.com/diegodls/AirCnC_Web) são transmitidos no mesmo momento para o aplicativo e vice-versa.

# Dependências

[axios](https://www.npmjs.com/package/axios)\
[react-router-dom](https://www.npmjs.com/package/react-router-dom)\
[socket.io-client](https://www.npmjs.com/package/socket.io-client)

###### Partes do sistema:
[Servidor](https://github.com/diegodls/AirCnC_server)\
[Web](https://github.com/diegodls/AirCnC_Web)

# Utilização
###### Passo 1: 
Para utilizar esse sistema, você primeiro deverá configurar e executar o [Servidor](https://github.com/diegodls/AirCnC_server).

###### Passo 2: 
``git clone``

###### Passo 3:

Entre na pasta recém clonada e abra um terminal, neste terminal insira o comando ``yarn install`` (``npm install``), para instalar os dependências.

###### Passo 4: 
Abra o arquivo ``\src\services\api.js``  insira a url base, essa url é o caminho do seu servidor + a porta de comunicação, onde o mesmo está executando, exemplos estão presente no arquivo.\

Abra o arquivo ``\src\pages\List.js``  insira a url base, essa url é o caminho do seu servidor + a porta de comunicação, onde o mesmo está executando, exemplos estão presente no arquivo.\

###### Passo 5: 

Após instalação das dependências e edição dos arquivos, insira o comando ``react-native run-android`` (ou ``react-native run-ios``)para iniciar o sistema.

# ToDo
- [ ] Tratamento dos campos
- [ ] Controle de dados
- [ ] Sugira algo.

# Notas
O sistema está funcionando perfeitamente, faltando apenas alguns ajustes no controle de informações e alguns campos, atualizações poderão ser feitas.\
Talvez há a necessidade de atualização das dependências, gradle ou do próprio react, sinta-se livre para fazê-lo.\
Sempre confira os links das dependências por possíveis soluções.\
Novamente agradecendo ao pessoal da [RocketSeat](www.rocketseat.com).



