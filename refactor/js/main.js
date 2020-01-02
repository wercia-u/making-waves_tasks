const toggleLinks = () => {

    const toggleLink = document.querySelector('.js-toggle_links');
    const toggleList = document.querySelector('.js-toggle_list');
    
    toggleLink.onclick = function(){
        toggleList.classList.toggle("hidden");
    }
}

toggleLinks();