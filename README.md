# Next.js OpenJira App
Para correr localmente se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa __detached__

* MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

* Reconstruir los modulos de node y levantar Next
```
yarn install
yarn dev
```

## Configurar las variables de entorno
Renovar el archivo __.env.template__a__.env__

## LLenar la base de datos con información de pruebas

Llamará: 
```
    http://localhost:3002/api/seed
```