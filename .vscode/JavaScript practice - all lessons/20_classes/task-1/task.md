Конструктор объектов

**Условие**

Напишите конструктор, который будет создавать пользователей с определенными возможностями

**Задание:**

    - Для решения этой задачи используйте классы
    - Конструктор должен экспортироваться под именем `User`
    - `User` должен принимать и сохранять `name` и `age` при создании объекта
    - На прототипе `User` должен иметь метод `sayHi`, который выводит в консоль текст **Hi, I am John**, где **John** - свойство `name` объекта
    - На прототипе `User` должен иметь метод `requestNewPhoto`, который выводит в консоль текст **New photo request was sent for John**, где **John** - свойство `name` объекта
    - На прототипе `User` должен иметь метод `setAge`, который установит новое значение свойству `age` и выведет в консоль текст **New photo request was sent for John**, где **John** - свойство `name` объекта, если новый возраст больше или равен 25
    - Метод `setAge` должен вернуть `false` и прекратить выполнение, если переданное значение меньше нуля
    - Метод `setAge` должен вернуть переданное значение, если переданное значение не меньше нуля
    - Статический метод `createEmpty` должен создавать юзера с пустыми полями
