# Formulario de Programa de Evaluación Externa de la Calidad (HON_CCD)

## Overview

Este proyecto es un formulario web diseñado para la recolección de datos del Programa de Evaluación Externa de la Calidad. Parece ser un Add-on de Google Workspace, facilitando la entrada y gestión de datos directamente dentro del entorno de Google.

## Features

El formulario recolecta los siguientes datos clave:

*   **Detalles del Laboratorio:**
    *   Nombre del laboratorio
    *   Código del laboratorio
    *   Fecha de evaluación
*   **Resultados del Análisis de Láminas:**
    *   Número de lámina
    *   Concordancia (Sí/No)
    *   Resultados de BK (Baciloscopia)
    *   Resultados de Cultivo
    *   Resultados de Xpert
    *   Resultados de LPA (Line Probe Assay)
*   **Comentarios Adicionales:**
    *   Observaciones generales
    *   Comentarios específicos sobre los resultados

## Technologies Used

*   **HTML:** Para la estructura del formulario web.
*   **JavaScript:** Para la lógica del cliente y la interacción con Google Apps Script.
*   **Materialize CSS:** Para el diseño y la interfaz de usuario del formulario.
*   **Google Apps Script (`google.script.run`):** Para la comunicación entre el formulario del lado del cliente y las funciones del lado del servidor dentro de Google Workspace.

## File Structure

*   **`Main.html`:** Contiene la estructura HTML del formulario web, incluyendo todos los campos de entrada y botones.
*   **`Main.js`:** Incluye el código JavaScript para manejar las interacciones del usuario, la validación de datos y la comunicación con el backend de Google Apps Script.
*   **`Picture1.jpg`:** Una imagen que probablemente se utiliza en la interfaz del formulario, posiblemente un logo o un banner.

## Setup/Usage

1.  **Acceder al Formulario:** El formulario se abrirá probablemente a través de una aplicación de Google Workspace (ej. Google Sheets, Google Docs) donde el Add-on esté instalado o activado.
2.  **Completar los Campos:** El usuario debe llenar todos los campos requeridos con la información del laboratorio y los resultados del análisis de las láminas.
3.  **Enviar los Datos:** Una vez que toda la información esté completa y verificada, el usuario enviará el formulario. Los datos se procesarán y almacenarán utilizando Google Apps Script.
4.  **Limpiar el Formulario:** Existe una opción para limpiar todos los campos del formulario y comenzar de nuevo si es necesario.

## Contributing

Actualmente, no se buscan contribuciones externas activas. Sin embargo, si tienes sugerencias o encuentras errores, por favor documenta el problema detalladamente.

## License

Este proyecto se distribuye bajo los términos detallados en el archivo `LICENSE`. Por favor, consulta ese archivo para más información.