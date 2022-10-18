# Skeleton html 5 con tailwindcss

Este repositorio tiene mi template para comenzar proyectos basados en tailwindcss utilizando solamente html y javascript puro.

La configuración de tailwind para desarrollo está preparada generando la salida de estilos procesados con PostCSS dentro del directorio "dist"

He preparado en el archivo **package.json** unos comandos npm que nos permiten regenerar el css en tiempo real mientras desarrollamos y para obtener la versión finalizada minificada una vez terminamos.

Puedes utilizarlo libremente con la misma licencia del proyecto GPLv3.


## Getting started

Las dependencias que se utilizan son solo para desarrollo.

Estas dependencias las puedes instalar solo en tu equipo, producir el css transpilado con postcss final ya minificado y no necesitas ejecutarlo una vez subido al servidor.


Clonar repositorio y entrar a él.

Instalar dependencias:

```bash
npm install
```

Una vez ya tienes las dependencias para desarrollo instaladas, puedes levantar el servidor para preparar css con tailwind y postcss usando este comando ya preparado de forma que se quede esperando cambios css para regenerarlos:

```bash
npm run watch
```

Una vez termines con los cambios, necesitas minificar los assets para ponerlos en producción. Para ello el comando está preparado de la siguiente forma.

```bash
npm run prod
```

Estos comandos ejecutan los propios de tailwind según su documentación y los puedes ver/editar en el archivo package.json
