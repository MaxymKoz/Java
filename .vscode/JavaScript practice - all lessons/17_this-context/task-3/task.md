Переадресация вызова

**Условие**

Опишите функцию, которая будет откладывать вызов на указанное количество времени

**Задание:**

    - Экспортируйте из файла функцию с именем `defer` - возвращает функцию - обертку
    - Сигнатура: `defer(func, ms)`, где `func` - функция, вызов которой нужно отложить на `ms` миллисекунд
    - `defer` должна работать с функциями, которые содержат `this`
    - `defer` прокидывать аргументы вызова к `func`
