# Circular Sound / Río: candidato de CSS

Estado: preparado, sin publicar y pendiente de validación visual en Tiendanube.

Este directorio contiene una capa visual para el Río existente. No sustituye las
plantillas, los componentes de productos, el carrito ni la configuración comercial.
`docs/` continúa siendo una maqueta parcial, no una implementación de Tiendanube.

## Cambios propuestos

- Recuperar el comportamiento nativo del encabezado, retirando el posicionamiento absoluto impuesto por el CSS anterior.
- Fondo blanco translúcido, blur y navegación oscura con acentos #FE0000.
- Quitar las alturas 100svh que recortan el hero actual con texto incrustado.
- Preparar el slider nativo para fotografías y títulos/descripciones/botones editables.
- Contenedores de hasta 1380px, espaciados menores y nombres de categorías completos.
- Áreas de imagen cuadradas con `object-fit: contain` sobre los selectores reales del componente de producto.
- Conservar las columnas configuradas por Río: cuatro en escritorio y dos en celulares.
- Bordes y botones redondeados, foco visible y respeto por movimiento reducido.

## Aplicación

1. Descargar por FTP una copia completa y actual del theme de producción. Guardar por separado el CSS avanzado, las imágenes cargadas y la configuración visual. No usar este directorio parcial como raíz de una sincronización FTP.
2. Comparar el respaldo actual con el ZIP previo antes de reemplazar cualquier archivo. Los originales privados del theme no deben subirse a este repositorio público.
3. Abrir Tienda online → Diseño → Editar diseño actual → Edición avanzada de CSS.
4. Reemplazar el contenido completo por `circular-rio.css`; no concatenarlo con el CSS anterior. Probar primero con **Probar CSS**, sin publicar.
5. Confirmar que el documento de vista previa realmente contiene la marca `Circular Sound · Río · 2026-10-12` y refleja el cambio. Si sigue cargando el CSS previo, detener la aplicación y resolver la vista previa con soporte de Tiendanube.
6. En Página de inicio → Carrusel de imágenes, usar los campos nativos Título, Descripción, Botón y Enlace para los cuatro slides. Repetir los campos para la colección mobile si está habilitada. Las fotografías deben carecer de títulos publicitarios incrustados.
7. Completar los enlaces de cada banner editorial según su categoría. Conservar la cantidad, el orden y las columnas nativas aprobadas.
8. Validar Home, catálogo, PDP y carrito a 375, 390, 430, 768 y 1366px; comprobar menú, sticky, sliders, filtros, variantes, fotografías y totales.
9. Verificar opciones de entrega y pagos con el administrador; no modificar esos ajustes como parte del CSS.
10. Publicar únicamente después de revisar las capturas y autorizar esa versión. Repetir el smoke test en producción sin crear pedidos ni completar pagos.

## Alternativa FTP

Si el editor no puede aplicar el CSS, un desarrollador con acceso FTP seguro puede
cargar un archivo independiente `static/css/circular-sound.css` y enlazarlo desde
`layouts/layout.tpl`, después de las hojas nativas y del bloque de CSS personalizado:

```twig
<link rel="stylesheet" href="{{ 'css/circular-sound.css' | static_url }}">
```

Hay que retirar en la misma versión el CSS avanzado anterior para evitar que sus
reglas `!important` prevalezcan. Esta alternativa requiere revisión de diferencias y
autorización de producción; no se ejecutó desde Work. No iniciar un watcher FTP sobre
producción. No sincronizar este directorio parcial con una herramienta que elimine
archivos remotos ausentes.

Con la CLI oficial ya autenticada de forma segura, ejecutar `tiendanube theme ftp pull`
para descargar el estado actual y `tiendanube theme ftp diff` para revisar cambios sin
subirlos. `theme ftp push` modifica inmediatamente el theme publicado: queda pendiente
hasta contar con revisión y autorización.

Referencia oficial: https://github.com/TiendaNube/cli

## Reversión

Restaurar el CSS avanzado previo completo. Si se usó FTP, retirar la inclusión nueva
y restaurar únicamente los archivos cambiados desde la copia vigente. No restaurar
configuraciones comerciales ni bases de productos para revertir una modificación visual.

## Validación realizada

CSS parseado sin errores de sintaxis. Selectores de hero, categorías, productos,
banners y footer contrastados con el DOM público y las plantillas originales.
Esta verificación no reemplaza la comprobación visual ni la prueba funcional del
candidato: ambas permanecen pendientes porque la vista previa no reflejó el CSS nuevo.
