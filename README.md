1.**Installation des outils:**  
    truffle est n�cessaire pour la suite :  
    `npm install -g truffle`
  
  
2.**Configuration Metamask:**  
    Configurer et choisir le r�seau "development" : HTTP://127.0.0.1:7545  
    Importer le premier compte de Ganache � partir de la cl� priv�e (cliquer sur la cl� � c�t� du compte dans Ganache) et le s�lectionner  
  
  
3.**D�ploiement des Smart Contracts:**  
`cd ~/ENSAO_CONTRACT/smart-contract`  
`truffle migrate --network development`  
`truffle migrate --network development --reset`  
  
  
4.**Client:**  
`cd ~/ENSAO_CONTRACT/front`  
`npm run serve`  
    
Ouvrir la page[http://localhost:8080](http://localhost:8080).  
