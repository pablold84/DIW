/* López Díaz Pablo. DNI: 71643564J **/
var carrito = [];
var table;
$(document).ready(function () {
  // Inicializar la tabla DataTable y le doy configuración
  table = new DataTable("#carrito-table", {
    language: {
      lengthMenu: "Mostrar _MENU_",
      emptyTable: "No hay datos disponibles en la tabla",
      zeroRecords: "No se encontraron resultados",
      info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
      infoEmpty: "Mostrando 0 a 0 de 0 entradas",
      infoFiltered: "(filtrado de _MAX_ entradas totales)",
      search: "Buscar:",
    },
  });

  // Manejar clics en el botón de carrito
  $(".view-cart").click(function (event) {
    event.preventDefault();

    // Limpiar el contenido de la tabla antes de volver a mostrarlo
    table.clear().draw();

    var totalGeneral = 0; // Inicializar el total general en 0

    // Agregar elementos al carrito a la tabla y calcular el total
    $.each(carrito, function (index, item) {
      var totalProducto = item.cantidad * item.precioUnitario;
      table.row
        .add([
          item.nombre,
          item.cantidad,
          item.precioUnitario.toFixed(2) + " €",
        ])
        .draw(false);

      // Sumar el total del producto al total general
      totalGeneral += totalProducto;
    });

    // Agregar la fila del total general al final de la tabla
    $("#total-column").text(totalGeneral.toFixed(2) + " €");

    // Mostrar la tabla
    $("#carrito-table").show();

    // Mostrar el modal del carrito
    $("#carrito-modal").modal("show");
  });

  // Cerrar modales
  $("#cerrar-modal").click(function () {
    $("#carrito-modal").modal("hide");
  });

  $("#cerrar-modalC").click(function () {
    $("#carrito-modal").modal("hide");
  });

  // Manejar clics en "Añadir al carrito"
  $(".product-item .text-body").click(function (event) {
    event.preventDefault(); // Evitar que el enlace siga el href
    var item = $(this).closest(".product-item");
    var nombre = item.find(".h5").text();
    var precio = item.find(".text-primary").text();
    var cantidad = parseInt(item.find(".quantity").val());
    var precioUnitario = parseFloat(precio.replace(" €", "").replace(",", "."));

    // Añadir al carrito
    carrito.push({
      nombre: nombre,
      cantidad: cantidad,
      precioUnitario: precioUnitario,
    });

    // Actualizar el contador del carritos
    $("#contador-carrito").text(carrito.length);
    $("#contador-carrito-toggle").text(carrito.length);
  });

  // Actualizar el total cuando se cambie la cantidad
  $(".quantity").on("input", function () {
    var item = $(this).closest(".product-item");
    var precioUnitario = parseFloat(
      item.find(".text-primary").text().replace(" €", "").replace(",", ".")
    );
    var cantidad = parseInt($(this).val());
    var totalProducto = precioUnitario * cantidad;
    item.find(".total").text("Total: " + totalProducto.toFixed(2) + " €");
  });
});
