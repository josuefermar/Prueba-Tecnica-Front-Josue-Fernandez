import Swal from "sweetalert2";

export default class Utils {
    static showErrorMessage(error: string) {
        Swal.fire({
            'title': 'Opps!',
            'html': error,
            'icon': 'error'
        })
    }
    static showCantAccess() {
        Swal.fire({
            'title': 'Opps!',
            'html': 'Pagina no encontrada.',
            'icon': 'error'
        })
    }
}