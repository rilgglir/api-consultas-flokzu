# api-flokzu-consultas

<h1>API de consultas para Flokzu o plataformas similares</h1>

Esta API es principalmente para los procesos de prestamo, devolución y gestión de correspondencia.

Se conecta a una base de datos en postgres:
Nombre de base: consultas_flokzu
Tablas: postal , base_correspondencia

<h2>Dependencias</h2>
{
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "express-rate-limit": "^7.5.0",
    "pg": "^8.13.2"
},

<h2>Seguridad</h2>
Se tiene seguridad con las siguientes opciones:
<ul>
  <li>Limit_rate : permite solo 200 solicitudes cada 15 minutos para evitar ataques</li>
  <li>Api key : se permiten solo un par de api key, solo se comparten para la implementación interna de la universidad</li>
  <li>CORS : se permite solo acceso al dominio Flokzu</li>
</ul>
Nota: En la versión final se configura CORS para permitir consultas desde origenes variados, los formularios de Flokzu al poder desplegarse desde fuera de la plataforma, queda con origen distinto según cada caso, se deja para evitar error por CORS


<h2>Consultas para codigo postal</h2>
Consultas para devolver los datos usados por correspondencia para saber si un codigo postal tiene cobertura para la entrega de los documentos
Ruta de consulta: host/api/postal?cp={codigoPostal}
Ejemplo de respuesta: 
[
  {
  "idpostal":5,
  "codigo_postal":"1040",
  "estado":"COLIMA",
  "ciudad":"CUAUHTEMOC",
  "terrestre":"N"
  }
] 

<h2>Consultas para estado de documentos</h2>
Consultas para devolver los datos usados para validar el estado de documentación de un estudiante, según su matrícula
Ruta de consulta: host/api/docs/?matricula={matricula}
Ejemplo de respuesta: 
[
  {
  "estatus":"EGRESADO",
  "estatus_titulacion":"PROCESO DE CERTIFICADO",
  "estatus_expediente_fisico":"Fisico Completo",
  "estatus_expediente_digital":"Completo"
  }
] 
