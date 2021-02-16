# 1. Qué problemas detectas en la operación y razona la respuesta

- Los servicios se obtienen en la construcción del `RegisteredUser`, lo cual significa que cada vez que se necesite obtener el total se debe crear un `RegisteredUser` nuevo. Esto se resuelve pasando los servicios como una propiedad a `getTotal`.

- La callback del `forEach` no funciona, hay un error de syntaxis. Cuando se recibe más de un argumento en una arrow function estos se deben encapsular en parentesis.

- Incluso resolviendo el error de syntaxis anterior, el argumento `index` no esta siendo utilizado, puede ser removido. De esta manera se puede usar la arrow function sin parentesis, ya que `service` sería el único argumento.

- En los condicionales se realiza una comprobacíon de igualdad con dos iguales: `==`. Esto no es recomendable ya que no comprueba que las variables siendo comparadas sean del mismo tipo. Es mejor usar una comprobación estricta de igualdad con tres iguales: `===`.

- Esta implementacion no es escalable, ya que si se implementan nuevos servicios el codigo debera ser ajustado por cada servicio. El precio del servicio tampoco debe ser responsabilidad del usuario, sino del mismo servicio.

- El código tiene espaciado inconsistente.

# 2. Propón una solución alternativa

Referirse al archivo `index.js`.
