const{app, BrowserWindow} = require('electron');

function crearVentanaPrincipal(){
    let vetanaPrincipal = new BrowserWindow({

        width: 800,
        height: 600

    });

    vetanaPrincipal.loadFile('Index.html');
}
app.whenReady().then(crearVentanaPrincipal);
