import Swal from "sweetalert2";

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Swal.fire({
  title: "¡Atencion!",
  text: "Debe rellenar todos los campos",
  icon: "warning",
  timer: 2000,
});
