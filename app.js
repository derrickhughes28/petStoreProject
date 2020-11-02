var adopt = [
    {
      title: 'Dog',
      image: "./assets/puppy-in-pet-store.png",
      price: '7,500',
      description: "BUY A PUPPY"

    
   
   
   
   
   
   
   
   
   
   
    },
    
    
  
    
    ]
    var emptyCart
    console.log(emptyCart)
    
    var postHTML = " "
  
  

  
  
  
    for (var i=0; i < adopt.length ; i++){
        var heading = '<div class="product '+ '"><span><h5>' + adopt[i].title + '</h5>'
        var image = '<img src="' + adopt[i].image + '"/'
        var price = '<p> $' + adopt[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ adopt[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
      