import '../../node_modules/nice-select2/dist/js/nice-select2';

function customSelect() {
    const customSelects = document.querySelectorAll('.js-select');

    if (customSelects.length > 0) {
        customSelects.forEach(select => {
            NiceSelect.bind(select, {
                searchable: true, // false
                placeholder: 'select',
                searchtext: 'пошук',
                selectedtext: 'geselecteerd'
            });
        })
    }
}
customSelect();