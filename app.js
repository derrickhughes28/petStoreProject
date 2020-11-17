

var adopt = [
    {
      title: 'Dog',
      image: "./assets/puppy-in-pet-store.png",
      price: '7,500',
      description: "BUY A PUPPY"
    },
    {
      title: 'Cat',
      image: "./assets/kittens12.jpg",
      price: '4,500',
      description: "BUY A KITTEN"
    },
    {
      title: 'Ferret',
      image: "./assets/babyferretcute.jpg",
      price: '1,500',
      description: "BUY A BOX O' FERRETS"
    },
    
    {
      title: 'Cat?',
      image: "./assets/angycat.jpg",
      price: '3',
      description: "PLEASE TAKE THIS ANGRY CAT. HE IS VERY MEAN"
    }
    
  
    
    
  
    
    ]
    var emptyCart
    console.log(emptyCart)
    
    var postHTML = " "
  
  

  
  
  
    for (var i=0; i < adopt.length ; i++){
        var heading = '<div class="product justify-content-center'+ '"><h5>' + adopt[i].title + '</h5>'
        var image = '<img class="smaller mr-4" height="300px" width="450px" src="' + adopt[i].image + '"/>'
        var price = '<p> $' + adopt[i].price + '</p>'
        var description = '<div class="hoverProduct"><p>'+ adopt[i].description + '</p><button type="button" class="btn btn-success"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
      