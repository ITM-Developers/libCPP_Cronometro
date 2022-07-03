## Welcome to GitHub Pages
Si deseas medir el tiempo transcurrido entre dos puntos distintos en tu programa esta librería es para ti. Es muy simple de usar a continuación te muestro un ejemplo sencillo con el cual te puedes dar una idea de lo fácil que es usarla:
```cpp
#include <iostream>
#include "Cronometro.h"

using namespace std;

int main()
{
    Cronometro cronometro;
    cronometro.start();
    for(size_t i=0; i < 1000000000; i++)
    {
        // Aqui se hacen alguna operacion....
    }
    cronometro.stop();
    cout << "Seconds Elapsed: " << cronometro.getSecondsElapsed();
    return 0;
}
```
Así de simple es usar la clase, continua leyendo para una descripción más detallada de cada método.

## Paso 1: Importar Cabeceras
El primer paso para empezar a usar la librería es importar las cabeceras, basta con copiar los archivos de código fuente en tu proyecto y agregarlos mediante tu IDE, después incluye los headers con la directiva include como con cualquier clase.
```cpp
#include "Cronometro.h"
```

##  Paso 2: Instanciar
El siguiente paso es crear una instancia de la clase, así es simplemente debes declarar un objeto de la clase como se muestra a continuación:
```cpp
Cronometro cronometro;
```

## Método start()
Este método te permite iniciar el cronometro, cuando llamamos a este método la clase empieza a contar el tiempo hasta que se llame al método stop()
```cpp
cronometro.start();
```

## Método stop()
Este método detiene el contador de tiempo.
```cpp
cronometro.stop();
```

## Método getSecondsElapsed()
Podemos llamar a este método para saber el tiempo que transcurrió entre la llamada a start() y stop(). El valor devuelto es un double que representa a los segundos transcurridos.
```cpp
cronometro.getSecondsElapsed();
```
