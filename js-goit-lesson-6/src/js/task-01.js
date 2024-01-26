const listCategories = document.querySelector('#categories')
const elemsList = listCategories.querySelectorAll('.item')

console.log('Number of categories:', elemsList.length);

elemsList.forEach(elem  => {
    console.log(' ');
    console.log("Category: ", elem.firstElementChild.textContent );

    const qualityCategory =  elem.querySelectorAll('ul > li' );

    console.log("Elements:", qualityCategory.length);
});









