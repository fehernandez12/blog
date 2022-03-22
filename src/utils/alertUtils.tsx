import Swal from "sweetalert2";

const globalStyles = {
    customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
};

const Error = Swal.mixin(
    {
        ...globalStyles,
        icon: 'error'
    }
);

const Success = Swal.mixin(
    {
        ...globalStyles,
        icon: 'success'
    }
);

const Info = Swal.mixin(
    {
        ...globalStyles,
        icon: 'info'
    }
);

const Warning = Swal.mixin(
    {
        ...globalStyles,
        icon: 'warning'
    }
);

export { Success, Error, Info, Warning };