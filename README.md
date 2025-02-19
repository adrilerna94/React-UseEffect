# Ejercicios de React con `useEffect`

## Ejercicio 1: Actualización en Tiempo Real de Datos de la Misión

**Objetivo:**  
Crear un componente que actualice datos cada cierto intervalo.

### Instrucciones:
- Utilizar `useEffect` junto con `setInterval` para actualizar el estado cada 5 segundos.
- Mostrar datos como temperatura, presión o cualquier otro dato relevante.
- Asegurarse de limpiar el intervalo al desmontar el componente.

---

## Ejercicio 2: Limpieza de Subscripciones con `useEffect`

**Objetivo:**  
Practicar la limpieza de efectos para evitar *memory leaks*, simulando una subscripción a un servicio de mensajes.

### Instrucciones:
1. Crear un endpoint de una API que devuelva un mensaje de validación `"ok"`.
2. Utilizar `useEffect` para establecer la subscripción al montar.
3. Cada 3 segundos se debe validar que el mensaje sea el mismo.
4. Retornar una función de limpieza para cancelar la subscripción al desmontar.
5. Crear un botón para cancelar la subscripción manualmente.
6. Crear un botón para reiniciar la subscripción manualmente.
