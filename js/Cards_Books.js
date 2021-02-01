

function YA_B()
{
    fetch('http://localhost:3000/YA_Books')
         .then(response => response.json())
         .then(json => 
            {  
             
               
               
             for ( c= 0; c< json.length; )
                {
                  c=c+1
                  document.getElementById("img"+c).src = json[c-1].Image_Source;
                  document.getElementById("title"+c).innerHTML= json[c-1].Name;
                  document.getElementById("quote"+c).innerHTML= json[c-1].Quote;
                  document.getElementById("Author"+c).innerHTML= json[c-1].Author; 
                  document.getElementById("Rate"+c).innerHTML= json[c-1].Rate;
                  document.getElementById("Price"+c).innerHTML= json[c-1].Price;
                  document.getElementById("summary"+c).innerHTML= json[c-1].Summary;

               }
               
               
            
            });
            
}
YA_B();


function S_B()
{
    fetch('http://localhost:3000/S_Books')
         .then(response => response.json())
         .then(json => 
            {
               for ( c= 0; c< json.length; )
                {
                  c=c+1
                  document.getElementById("img"+c).src = json[c-1].Image_Source;
                  document.getElementById("title"+c).innerHTML= json[c-1].Name;
                  document.getElementById("quote"+c).innerHTML= json[c-1].Quote;
                  document.getElementById("Author"+c).innerHTML= json[c-1].Author; 
                  document.getElementById("Rate"+c).innerHTML= json[c-1].Rate;
                  document.getElementById("Price"+c).innerHTML= json[c-1].Price;
                  document.getElementById("summary"+c).innerHTML= json[c-1].Summary;

               }
            
            });
            
}
YA_B();