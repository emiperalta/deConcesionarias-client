import Swal from 'sweetalert2';

const successMixin = Swal.mixin({
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  toast: true,
});

const successAlert = async action => {
  return await successMixin.fire({
    icon: 'info',
    title: `${action} exitosamente`,
  });
};

const confirmDeleteAlert = async name => {
  return await Swal.fire({
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#f63',
    confirmButtonText: 'Sí, estoy seguro',
    icon: 'warning',
    showCancelButton: true,
    text: '¡No vas a poder revertir esto!',
    title: `¿Estás seguro de eliminar <span style="color:#919191">'${name}'</span>?`,
  });
};

const alertService = { confirmDeleteAlert, successAlert };

export default alertService;
