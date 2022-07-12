import mongoose from 'mongoose';

/** 
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
*/

const mongoseConnection = {
    isConnected: 0
}

export const connect = async() => {

    if ( mongoseConnection.isConnected ) {
        console.log('Ya estabamos conectado');
        return;
    }

    if ( mongoose.connections.length > 0 ) {
        mongoseConnection.isConnected = mongoose.connections[0].readyState;

        if ( mongoseConnection.isConnected === 1 ) {
            console.log('Usando conexión anterios');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_URL || '' );
    mongoseConnection.isConnected = 1;
    console.log('Conectado a MongoDB:',  process.env.MONGO_URL );
}

export const disconnect = async() => {

    if ( process.env.NODE_ENV === 'development' ) return;
    
    if ( mongoseConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoseConnection.isConnected = 0;
    console.log('Desconectado de MongoDB')
}