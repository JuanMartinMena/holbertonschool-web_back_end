# **Async**

## `async` y `await` syntax

La sintaxis `async` y `await` en Python se usa para escribir código que maneje operaciones asíncronas de manera eficiente.

### **Definición de términos:**

- **`async`:** Abreviatura de *"asynchronous"* (**asíncrono**), que significa que una función puede ejecutarse sin bloquear el resto del programa.
    - Una función declarada con `async` se llama **coroutine** (o rutina asíncrona).
- **`await`:** Abreviatura de *"await"* (**esperar**), que significa que el programa "pausará" la ejecución de una coroutine hasta que la tarea asíncrona se complete.

### **¿Qué es algo asíncrono?**

Un proceso es **asíncrono** cuando puede comenzar, ceder el control temporalmente y luego retomarse, permitiendo que otras tareas se ejecuten mientras espera que termine alguna operación (por ejemplo, leer un archivo, esperar una respuesta de red o un temporizador).

### Ejemplo:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/3b09a577-a09c-4fff-ac75-ec6b5d70003b/image.png)

---

### Cómo ejecutar un programa asíncrono con `asyncio`

Python usa el módulo `asyncio` para manejar coroutines y tareas asíncronas. La forma más común de ejecutar un programa asíncrono es mediante `asyncio.run()`.

**¿Qué hace `asyncio.run()`?**

- Configura el bucle de eventos de asyncio.
- Ejecuta la coroutine principal (por ejemplo, `main()` en el siguiente ejemplo).
- Limpia automáticamente los recursos al finalizar.

### **Ejemplo práctico:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/4f1e6b9b-2f7e-4479-855f-399c9927c952/image.png)

### Output

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/7eebf40d-116d-4ba7-b729-13bed1089ead/image.png)

---

## Cómo ejecutar coroutines concurrentes

La concurrencia permite que múltiples tareas asíncronas se ejecuten de manera intercalada dentro del mismo hilo, maximizando la eficiencia. Esto se logra con `asyncio.gather()` o `asyncio.create_task()`.

### Diferencias clave:

- **`asyncio.gather()`**: Recoge múltiples coroutines, las ejecuta concurrentemente y devuelve sus resultados.
- **`asyncio.create_task()`**: Inicia tareas concurrentes de forma más explícita, permitiéndote gestionarlas como objetos independientes.

### **Ejemplo de concurrencia con `asyncio.gather`:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/53f4e307-6b16-4879-ad48-d28e084ac19a/image.png)

---

### Cómo crear tareas con `asyncio.create_task()`

Las tareas (`tasks`) permiten iniciar coroutines concurrentemente sin necesidad de esperar inmediatamente su finalización. Esto es útil cuando deseas que una tarea se ejecute "en segundo plano" mientras haces otras cosas.

### **Ejemplo de uso:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/5fcdee53-c87a-4488-be13-4d6af1b8ee11/image.png)

---

### Cómo usar el módulo `random`

El módulo `random` de Python se usa para generar valores aleatorios. Es ideal para simulaciones, juegos y cualquier aplicación que requiera elementos impredecibles.

### **Ejemplo:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/f1aa624e-6666-4a75-8140-41efd9932b61/image.png)

Usando `random` en un programa asíncrono:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/cb6366ac-ae80-409b-a2b4-b7c8d3bdd9e0/image.png)

---

### **Resumen visual de conceptos clave**

1. **`async` y `await`:**
    - Declara y espera tareas asíncronas respectivamente.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0bfdea0-f2d2-4741-9115-17f159793b1a/9d2c60b6-14e4-43ee-87b3-1fda36edc6c7/image.png)
    
2. **Ejecutar programas asíncronos:**
    - Usa `asyncio.run()` para iniciar el programa.
3. **Concurrencia:**
    - Usa `asyncio.gather()` para ejecutar múltiples coroutines "al mismo tiempo".
4. **Crear tareas:**
    - Usa `asyncio.create_task()` para gestionar tareas independientes.
5. **`random`:**
    - Genera valores aleatorios para simulaciones y juegos.