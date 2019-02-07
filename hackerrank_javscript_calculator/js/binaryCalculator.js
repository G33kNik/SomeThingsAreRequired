          function action(e){
            let clickinp = e.target || e.srcElement;
            let idz = clickinp.id;
            let calcString = document.getElementById("res").innerHTML;
            let lastChar = calcString[calcString.length - 1];
            let condition = ( (lastChar == '+') || (lastChar == '-') || (lastChar == '*') || (lastChar == '/') );
            if (idz == 'btn0' || idz == 'btn1'){
                document.getElementById("res").innerHTML = calcString + clickinp.innerHTML;
            }
            else if (idz == 'btnClr'){
                document.getElementById("res").innerHTML = "";
            }
            else if (idz == 'btnEql'){
                //document.getElementById('res').innerHTML = eval(document.getElementById('res').innerHTML);
                let conversionString = "";
                let processedString = "";
                //let calcString = document.getElementById("res").innerHTML;
                for (let i=0;i < calcString.length;i++){
                    //console.log(calcString[i]);
                    if (calcString[i] == '0' || calcString[i] == '1'){
                        conversionString += calcString[i];
                        console.log(conversionString);
                    }
                    if (calcString[i] == '+' || calcString[i] == '-' || calcString[i] == '*' || calcString[i] == '/' || i == calcString.length - 1){
                        processedString += parseInt(conversionString,2).toString();
                        conversionString = '';
                        if (i == calcString.length - 1){
                            //no action
                        }
                        else { 
                            processedString += calcString[i];
                        }
                        console.log(processedString);
                    }
                }
                console.log(processedString);
                let regexx = /(\/|\*|-|\+)/i;
                if (! regexx.test(calcString)) {
                    processedString = parseInt(conversionString,2).toString();
                }
                console.log("reached end");
                console.log(processedString);
                document.getElementById('res').innerHTML = (eval(processedString)).toString(2);
                
            }
            else if (idz == 'btnSum'){
                //let lastChar = calcString[calcString.length - 1];
                if (condition) {
                    document.getElementById('res').innerHTML = calcString.substring(0,calcString.length - 1) + '+';
                }
                else {
                    document.getElementById('res').innerHTML = calcString + '+';
                }
            }
            else if (idz == 'btnSub'){
                if (condition){
                    document.getElementById('res').innerHTML = calcString.substring(0,calcString.length - 1) + '-';
                }
                else {
                    document.getElementById('res').innerHTML = calcString + '-';
                }
            }
            else if (idz == 'btnMul'){
                                if (condition){
                    document.getElementById('res').innerHTML = calcString.substring(0,calcString.length - 1) + '*';
                                }
                                else {
                    document.getElementById('res').innerHTML = calcString + '*';
                }
            }
            else if (idz == 'btnDiv'){
                                if (condition){
                                        document.getElementById('res').innerHTML = calcString.substring(0,calcString.length - 1) + '/';
                                }
                                else {
                    document.getElementById('res').innerHTML = calcString + '/';
                }
            }
        }
        let listt = ['binary','greenbutton','blackbutton'];
        for(dat of listt){
            let classz = document.getElementsByClassName(dat);
            for (let counter=0;counter < classz.length; counter++){
                classz[counter].addEventListener('click',action);
            }
        }
        
