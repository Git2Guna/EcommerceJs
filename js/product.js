//Product List

    let product=[];


product[0]={
    name:"RAMRAJ DHOTIES",
    price:500,
    img:" ../img/products/RAMRAJ.jpg",    
}


product[1]={
    
        name:"Chudidar",
        price:450,
        img:" ../img/products/Miraa.jpg",
        
}



product[2]={
   

    name:"FAMILY DRESS",
    price:650,
    img:" ../img/products/PATPAT.jpg",
    

   
}


product[3]={
   
    name:"SUIT",
    price:5000,
    img:" ../img/products/Blazer.jpg",
    

}


product[4]={
  
    name:"COAT SUIT",
    price:4500,
    img:" ../img/products/Peter.jpg",

}
    

product[5]={
    
    name:"FANCY DRESS",
    price:1500,
    img:" ../img/products/Independent.jpg",
}
 
product[6]={
    
    name:"FANTACY DRESS",
    price:3000,
    img:" ../img/products/PRINTED.jpg",

}
 
product[7]={

    name:"Couple DRESS",
    price:2500,
    img:" ../img/products/Couple Dress.jpg",

}

 

localStorage.setItem('products',JSON.stringify(product));
 


