const empleados: Empleado[] = [
    new Empleado('Carlos', 40, 5000),
    new Empleado('Laura', 33, 4500),
    new Empleado('sofia', 45, 6000),
    new Empleado('Luna', 36, 1500),
    new Empleado('tatiana', 42, 2000),
    new Empleado('keren', 22, 3300),
    new Empleado('Camilo', 45, 9000),
    new Empleado('maria', 38, 8500),
    new Empleado('leyla', 49, 7000),
    new Empleado('tamara', 31, 6500),
];

empleados.forEach(empleado => empleado.saludar());