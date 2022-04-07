





if(document.domain === 'ava.univesp.br'){
	execBtnTrigger();

		function execBtnTrigger(){
            setTimeout(function(){
	
						if(typeof (document.getElementById('login-sou') !== 'undefined')){    
   
                                document.getElementById('login-sou').click();
             
						} 
                    }, 2000);
					
                }
                execBtnTrigger();

            }

            if(document.domain === 'login.univesp.br'){
                execBtnTrigger2();
            
                    function execBtnTrigger2(){
                        setTimeout(function(){
                   
                            if(typeof (document.querySelectorAll('.btn-red.btn-primary')[0] !== 'undefined')){
                               
                                document.querySelectorAll('.btn-red.btn-primary')[0].click();
                        
                            }

                            
                        }, 5000);
                                

                            }
                            execBtnTrigger2();
            
                        }

                        if(document.domain === 'login.univesp.br'){
                            execBtnTrigger3();
                        
                                function execBtnTrigger3(){
                                    setTimeout(function(){
                               
                                        if(typeof (document.querySelectorAll('.btn-red.btn-primary')[1] !== 'undefined')){
                                           
                                            document.querySelectorAll('.btn-red.btn-primary')[1].click();
                                    
                                        }
                                         
            
                                        
                                    }, 5000);
                                            
                        
                        
                        
                                        }
                                        execBtnTrigger3();
                        
                                    }

                       



/*



                        setTimeout(function(){
                   
                                        if(typeof (document.querySelectorAll('.btn-red.btn-primary')[0] !== 'undefined')){
                                           
                                            document.querySelectorAll('.btn-red.btn-primary')[0].click();
                                    
                                        }
                                    }, 5000);
                                   
                                        if(typeof (document.querySelectorAll('.btn-red.btn-primary')[1] !== 'undefined')){
                                            setTimeout(function(){
                                            document.querySelectorAll('.btn-red.btn-primary')[1].click();
                                        }, 5000);
                                        }
                               


                                        
                                    
                    
                               
                            
				



var button = document.getElementById('login-sou').click();

var i = 0;
    
button.addEventListener('click', function click(e) {
    i++;
    console.log("Essa função foi chamada %d vez", i);
    button.removeEventListener('click', click);
});


 else if(execBtnTrigger == true) {
    execBtnTrigger2();

    function execBtnTrigger2(){
            setTimeout(function(){

                    if(typeof (document.querySelectorAll('.btn-red.btn-primary')[0] !== 'undefined')){
                        document.querySelectorAll('.btn-red.btn-primary')[0].click();
                    }
                    execBtnTrigger2();

            }, 2500);
        }
    
}else 


 if (document.querySelectorAll('.btn-red.btn-primary')[0] !== 'undefined') {
   
    setTimeout(() => {

        document.querySelectorAll('.btn-red.btn-primary')[0].click();
    },1000);

    setTimeout(() => {
   
            document.querySelectorAll('.btn-red.btn-primary')[1].click();
    
        },5000);
            
    
    
    } 
  
    
    document.getElementById('login-sou').click();

*/

    



