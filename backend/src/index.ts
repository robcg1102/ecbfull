import app from './app';
import './database';

app.listen(app.get('port'), () =>{
    console.log("Connectted on port: ", app.get('port'));
})