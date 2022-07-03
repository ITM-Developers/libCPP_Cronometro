#include "Cronometro.h"

void Cronometro::start()
{
    this->tiempoInicial = high_resolution_clock::now();
}

void Cronometro::stop()
{
    this->tiempoFinal = high_resolution_clock::now();
}

double Cronometro::getSecondsElapsed()
{
    duration<double> time_span = duration_cast<duration<double>>(this->tiempoFinal - this->tiempoInicial);
    return time_span.count();
}
