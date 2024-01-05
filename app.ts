function showMobileMenu() {
    let mobileMenuOptions = document.querySelector('.mobilemenuoptions')!;
    if (mobileMenuOptions.classList.contains('show')) {
        mobileMenuOptions.classList.remove('show');
        mobileMenuOptions.classList.add('hide');

    } else {
        mobileMenuOptions.classList.remove('hide');
        mobileMenuOptions.classList.add('show');
    }
}
