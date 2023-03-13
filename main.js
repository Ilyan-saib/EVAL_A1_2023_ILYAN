let carte = {
  1: [{
   
imgSrc: "/assets/img/img-01.jpg",
title: "Lorem Ipsum",
text: "lorem ipsum dolor sit , amet consectetur adipiscing elit. Voluptatem quos placeat distincio id achitecto doloremque ipsum dolorem suscipit nemo !"

}]
,
2: [{
  
  
  imgSrc: "/assets/img/img-02.jpg",
  title: "Lorem Ipsum",
  text: "lorem ipsum dolor sit , amet consectetur adipiscing elit. Voluptatem quos placeat distincio id achitecto doloremque ipsum dolorem suscipit nemo !"
  
  
  
   
  }]
  ,
3: [{
  
  
  imgSrc: "/assets/img/img-03.jpg",
  title: "Lorem Ipsum",
  text: "lorem ipsum dolor sit , amet consectetur adipiscing elit. Voluptatem quos placeat distincio id achitecto doloremque ipsum dolorem suscipit nemo !"
  
  
  
   
  }]
  ,
  4: [{
    
    
    imgSrc: "/assets/img/img-04.jpg",
    title: "Lorem Ipsum",
    text: "lorem ipsum dolor sit , amet consectetur adipiscing elit. Voluptatem quos placeat distincio id achitecto doloremque ipsum dolorem suscipit nemo !"
    
    
    
     
    }]
    ,
    5: [{
      
      
      imgSrc: "/assets/img/img-05.jpg",
      title: "Lorem Ipsum",
      text: "lorem ipsum dolor sit , amet consectetur adipiscing elit. Voluptatem quos placeat distincio id achitecto doloremque ipsum dolorem suscipit nemo !"
      
      
      
       
      }]
}

function CreateElmnt(ifo) {
  
 
  
  for (let i = 1; i < ifo.length; i++) {
    let sect = document.createElement('div')
  section.classList.add('plats__section')
  let image = document.createElement('img')
  img.src = ifo[i][0].imgSrc
let hn = document.getElementsByClassName('header__title')


 // je sais pas pourquoi mais ca marche pas les éléments ne veulent pas se créer

  }
  
  
}


for (const item in carte ) {
 CreateElmnt(carte)
}


 
