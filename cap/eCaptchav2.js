fetch('https://raw.githubusercontent.com/eCaptcha/EmojiApi/main/EmojiApi.json')
.then(res=> res.json())
.then(data => {


    

    var j = Math.floor(Math.random() * 4) + 1;

    document.getElementById(j).innerHTML = data.Emoji.icon[i];

    /*-------------- Audio Files --------------- */
    const success = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/success.mp3?raw=true');
    const error = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/error.mp3?raw=true');
    
    /*------- Logical Part---------------------------*/
    
    var i = Math.floor(Math.random() * data.Emoji.icon.length);

    document.getElementById("eq").innerHTML = "Find ("+data.Emoji.name[i]+") Out of These"; 
    
    var j = Math.floor(Math.random() * 4) + 1;

    document.getElementById(j).innerHTML = data.Emoji.icon[i];
    
    /*--------------Checking That Good Button Should Not Reapeat---------------*/
    
    var x;
    
    for(k=1;k<=4;k++){
        if(k!=j){
            var x1=1;
            while(x1){
                x = Math.floor(Math.random() * data.Emoji.icon.length);
                if(x!=i){
                    document.getElementById(k).innerHTML = data.Emoji.icon[x];
                    x1=0;
                }
            }
        }
    }
    
    /*--------------Non Reapting Error Button---------------*/
    
    for(i1=1;i1<=4;i1++){
        for(j1=i1+1;j1<=4;j1++){
            if(document.getElementById(i1).innerHTML == document.getElementById(j1).innerHTML){
    
                var x1=1;
                while(x1){
                    x = Math.floor(Math.random() * data.Emoji.icon.length);
                    if(x!=i && data.Emoji.icon[i1]!=data.Emoji.icon[j1]){
                        document.getElementById(j1).innerHTML = data.Emoji.icon[x];
                        x1=0;
                    }
                }
            }
        }
    }
    
    /*--------------Checking---------------*/
    
    var li = document.getElementById('elink');
    var ls = document.getElementById('eMiliSec');
    var count = 0;
    const onClick = (event) => {
        if (event.target.nodeName === 'BUTTON') {
          if(event.target.id == j){
              //console.log("Correct");
              success.play();
              document.write("<div id ='eCaptcha' style='text-align: center;justify-content: center;display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;font-family: 'Poppins', sans-serif;'><div><h1>You Have Been Verified</h1><p>You Will Be Redirected in a While.</p></div></div>");
              setTimeout(function(){ window.open(li.className,"_blank"); }, ls.className);
          }
          if(event.target.id != j){
              //console.log("Error");
              error.play();
              count++;
              if(count == 1)
              {
                //alert("Only 1 Try Left!");
                //document.getElementById('eCaptcha').innerHTML += "<p>Only 1 try left</p>";

                var tryLeftMessage = document.createElement("p");
                tryLeftMessage.innerText = "ONLY 1 TRY LEFT";
                tryLeftMessage.style.color = "red";
                tryLeftMessage.style.fontWeight = "bold"; 
                tryLeftMessage.style.position = "absolute";
                tryLeftMessage.style.top = "90%";
                tryLeftMessage.style.left = "50%";
                tryLeftMessage.style.transform = "translate(-50%, -50%)"; 
                document.body.appendChild(tryLeftMessage); 
              }
              
          }
          if(count >1){
            error.play();
            document.write("<div id='eCaptcha' style='text-align: center; justify-content: center; display: flex; justify-content: center; align-items: center; height: 100%; width: 100%; font-family: 'Poppins', sans-serif;'><div><h1>Sorry We Cannot Verify You!</h1><p>You Have Chosen the Wrong Answer More Than Once. <a href='validate.html' target='_blank'>Try Again</a></p></div></div>");

          }
        }
      }
      window.addEventListener('click', onClick);
    
      /*-----------CopyRight--------------*/
      document.getElementById("elink").style.display = "block";
      document.getElementById("elink").innerHTML = "&copy;Coyrights 2024 Global Bank";
      
      console.log("You are verified");
});


