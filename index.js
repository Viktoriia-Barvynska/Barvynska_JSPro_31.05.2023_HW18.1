//=================HW18.1==================
//Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає
    const inputField = document.getElementById('inputField');
    const infoBox = document.getElementById('infoBox');

    inputField.addEventListener('focus', function() {
      infoBox.style.display = 'block';
    });

    inputField.addEventListener('blur', function() {
      infoBox.style.display = 'none';
    });