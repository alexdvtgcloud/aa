document.getElementById("modal_add_budget").addEventListener('hidden.bs.modal', function () {
    document.querySelectorAll("#modal_add_budget form")[0].reset();
});

const modals = document.querySelectorAll('[id^="modal_edit"]');
for (const modal of modals) {
    document.getElementById(modal.id).addEventListener('hidden.bs.modal', function () {
        document.querySelectorAll(`#${CSS.escape(modal.id)} form`)[0].reset();
    });
}