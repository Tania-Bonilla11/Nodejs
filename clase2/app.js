const htpp=require('http');
/**nodejs no es como php donde se necesita xampp que pueda actuar como servidor 
 * con nodejs no se ocupa eso es el servidor y contiene los archivos que se llaman
*/
const server=htpp.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})//que si fue correcto
    res.write('{message:"hola me llamaste?"}');//podemos mandar html
    res.end();
    /**no hemos dicho en que puerto debe crearse imaginemos una caja de correo estoy en tal edificio 
     * en la calle  el puerto 80 se usa para perticiones a la web el 443 se utiliza para peticiones 
     * en forma segura */
    
})
server.listen(8080);//quiero que llamemos usando el protocolo http que nos encuentre en el puerto 8080
/**node es el que va a correrlo el codigo en terminal code nombre de archivo */
