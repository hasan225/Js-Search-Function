const search =()=>{

    const searchBox =document.getElementById("search-item").value.toUpperCase();
    const storeItems =document.getElementById("product-list");
    const product =document.querySelectorAll(".product");
    const pName =storeItems.querySelectorAll('.p-name');

    for(let i=0; i<pName.length; i++ ){
        let match = product[i].querySelectorAll('.p-name')[0];

        if(match){
            let textvalue =match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display ="";
            } else{
                product[i].style.display="none";
            }
        }
    }
}                                