const rpc = require("discord-rpc");

//Yarattığınız app'in client idsi
const ClientId = '462999937551171594';

rpc.register(ClientId);

const ana = new rpc.Client({ transport: 'ipc' });



//Ana kısım
ana.on('ready', () => {
  console.log("Custom RPC: Connected");
  ana.setActivity({
    details: 'Katılmak İçin',//Ana yazı
    state: 'https://discord.gg/P7NnJsq',//Ana yazı altındaki yazı
    largeImageKey: 'oxygen',//Large fotoğraf
    smallImageKey: 'rte',//Small fotoğraf
  });
});


ana.login(ClientId).catch(console.error);

