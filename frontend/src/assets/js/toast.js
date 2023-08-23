import Toast from 'bootstrap/js/dist/toast';

export function showToast(toastId) {
    const toast = document.getElementById(toastId);
    const bsToast = Toast.getOrCreateInstance(toast);
    bsToast.show();
}