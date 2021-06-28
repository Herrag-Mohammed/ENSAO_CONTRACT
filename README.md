1.**Installation des outils:**  
    truffle est necessaire pour la suite :  
    `npm install -g truffle`
  
  
2.**Configuration Metamask:**  
    Configurer et choisir le reseau "development" : HTTP://127.0.0.1:7545  
    Importer le premier compte de Ganache a partir de la cle privee (cliquer sur la cle a cote du compte dans Ganache) et le selectionner  
  
  
3.**Deploiement des Smart Contracts:**  
`cd ~/ENSAO_CONTRACT/smart-contract`  
`truffle migrate --network development`  
`truffle migrate --network development --reset`  
  
  
4.**Client:**  
`cd ~/ENSAO_CONTRACT/front`  
`npm run serve`  
    
Ouvrir la page : [http://localhost:8080](http://localhost:8080).  
