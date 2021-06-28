1-Installation des outils:
    truffle est nécessaire pour la suite :
        npm install -g truffle


2-Configuration Metamask:
    Configurer et choisir le réseau "development" : HTTP://127.0.0.1:7545
    Importer le premier compte de Ganache à partir de la clé privée (cliquer sur la clé à côté du compte dans Ganache) et le sélectionner


3-DÈploiement des Smart Contracts:
    cd ~/ENSAO_CONTRACT/smart-contract
    truffle migrate --network development
    truffle migrate --network development --reset


4-Client:
    cd ~/ENSAO_CONTRACT/front
    npm run serve
    
Ouvrir la page http://localhost:8080.