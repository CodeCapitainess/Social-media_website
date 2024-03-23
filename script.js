// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme'); 
const themeModal = document.querySelector('.customize-theme'); 
const fontSizes = document.querySelectorAll('.choose-size span');

// ============= Sidebar ============ //

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ============= Messages ============ //

// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// Theme/Display Cusyomization
// opens modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', openThemeModal);
theme.addEventListener('click', openThemeModal);

// =========== Fonts ========= //
fontSizes.forEach(size => {
    let fontSize;
    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
    } else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
    } else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
    } else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
    } else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
    }
})