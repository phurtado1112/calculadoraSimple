var calculadora;
calculadora = (function () {

    //////////////    EVENTOS CON click PARA OBTENER LOS VALORES DE LAS TECLAS  /////////////////

    document.getElementById('1').addEventListener("click", obtener_1);
    document.getElementById('2').addEventListener("click", obtener_2);
    document.getElementById('3').addEventListener("click", obtener_3);
    document.getElementById('4').addEventListener("click", obtener_4);
    document.getElementById('5').addEventListener("click", obtener_5);
    document.getElementById('6').addEventListener("click", obtener_6);
    document.getElementById('7').addEventListener("click", obtener_7);
    document.getElementById('8').addEventListener("click", obtener_8);
    document.getElementById('9').addEventListener("click", obtener_9);
    document.getElementById('0').addEventListener("click", obtener_0);
    document.getElementById('punto').addEventListener("click", obtenerPunto);

    document.getElementById('mas').addEventListener("click", obtenerMas);
    document.getElementById('menos').addEventListener("click", obtenerMenos);
    document.getElementById('por').addEventListener("click", obtenerPor);
    document.getElementById('dividido').addEventListener("click", obtenerDividido);
    document.getElementById('raiz').addEventListener("click", obtenerRaiz);

    document.getElementById('on').addEventListener("click", limpiar);
    document.getElementById('sign').addEventListener("click", retornaSigno);
    document.getElementById('igual').addEventListener("click", obtenerIgual);

    //////////// EVENTOS CON mousedown PARA DAR LA SENSACIÓN DE EMPUJAR AL TECLA /////////////////

    document.getElementById('1').addEventListener("mousedown", btnDown1);
    document.getElementById('2').addEventListener("mousedown", btnDown2);
    document.getElementById('3').addEventListener("mousedown", btnDown3);
    document.getElementById('4').addEventListener("mousedown", btnDown4);
    document.getElementById('5').addEventListener("mousedown", btnDown5);
    document.getElementById('6').addEventListener("mousedown", btnDown6);
    document.getElementById('7').addEventListener("mousedown", btnDown7);
    document.getElementById('8').addEventListener("mousedown", btnDown8);
    document.getElementById('9').addEventListener("mousedown", btnDown9);
    document.getElementById('0').addEventListener("mousedown", btnDown0);
    document.getElementById('punto').addEventListener("mousedown", btnDownPunto);

    document.getElementById('mas').addEventListener("mousedown", btnDownMas);
    document.getElementById('menos').addEventListener("mousedown", btnDownMenos);
    document.getElementById('por').addEventListener("mousedown", btnDownPor);
    document.getElementById('dividido').addEventListener("mousedown", btnDownDividido);
    document.getElementById('raiz').addEventListener("mousedown", btnDownRaiz);

    document.getElementById('on').addEventListener("mousedown", btnDownOn);
    document.getElementById('sign').addEventListener("mousedown", btnDownSign);
    document.getElementById('igual').addEventListener("mousedown", btnDownIgual);

    //////////// EVENTOS CON mouseup PARA DAR LA SENSACIÓN DE REGRESAR LA TECLA /////////////////

    document.getElementById('1').addEventListener("mouseup", btnUp1);
    document.getElementById('2').addEventListener("mouseup", btnUp2);
    document.getElementById('3').addEventListener("mouseup", btnUp3);
    document.getElementById('4').addEventListener("mouseup", btnUp4);
    document.getElementById('5').addEventListener("mouseup", btnUp5);
    document.getElementById('6').addEventListener("mouseup", btnUp6);
    document.getElementById('7').addEventListener("mouseup", btnUp7);
    document.getElementById('8').addEventListener("mouseup", btnUp8);
    document.getElementById('9').addEventListener("mouseup", btnUp9);
    document.getElementById('0').addEventListener("mouseup", btnUp0);
    document.getElementById('punto').addEventListener("mouseup", btnUpPunto);

    document.getElementById('mas').addEventListener("mouseup", btnUpMas);
    document.getElementById('menos').addEventListener("mouseup", btnUpMenos);
    document.getElementById('por').addEventListener("mouseup", btnUpPor);
    document.getElementById('dividido').addEventListener("mouseup", btnUpDividido);
    document.getElementById('raiz').addEventListener("mouseup", btnUpRaiz);

    document.getElementById('on').addEventListener("mouseup", btnUpOn);
    document.getElementById('sign').addEventListener("mouseup", btnUpSign);
    document.getElementById('igual').addEventListener("mouseup", btnUpIgual);

    ////////////   FUNCIONES DE BOTÓN down QUE PRODUCE LA SENSACIÓN DE APRETAR EL BOTÓN   ////////////////////

    function btnDown1() {
        document.getElementById('1').style.padding = "3px";
    }

    function btnDown2() {
        document.getElementById('2').style.padding = "3px";
    }

    function btnDown3() {
        document.getElementById('3').style.padding = "3px";
    }

    function btnDown4() {
        document.getElementById('4').style.padding = "3px";
    }

    function btnDown5() {
        document.getElementById('5').style.padding = "3px";
    }

    function btnDown6() {
        document.getElementById('6').style.padding = "3px";
    }

    function btnDown7() {
        document.getElementById('7').style.padding = "3px";
    }

    function btnDown8() {
        document.getElementById('8').style.padding = "3px";
    }

    function btnDown9() {
        document.getElementById('9').style.padding = "3px";
    }

    function btnDown0() {
        document.getElementById('0').style.padding = "3px";
    }

    function btnDownPunto() {
        document.getElementById('punto').style.padding = "3px";
    }

    function btnDownMas() {
        document.getElementById('mas').style.padding = "2px";
    }

    function btnDownMenos() {
        document.getElementById('menos').style.padding = "3px";
    }

    function btnDownPor() {
        document.getElementById('por').style.padding = "3px";
    }

    function btnDownDividido() {
        document.getElementById('dividido').style.padding = "3px";
    }

    function btnDownRaiz() {
        document.getElementById('raiz').style.padding = "3px";
    }

    function btnDownOn() {
        document.getElementById('on').style.padding = "3px";
    }

    function btnDownSign() {
        document.getElementById('sign').style.padding = "3px";
    }

    function btnDownIgual() {
        document.getElementById('igual').style.padding = "3px";
    }

    ////////////   FUNCIONES DE BOTÓN up QUE PRODUCE LA SENSACIÓN DE REGRESA EL BOTÓN   ////////////////////

    function btnUp1() {
        document.getElementById('1').style.padding = "1px";
    }

    function btnUp2() {
        document.getElementById('2').style.padding = "1px";
    }

    function btnUp3() {
        document.getElementById('3').style.padding = "1px";
    }

    function btnUp4() {
        document.getElementById('4').style.padding = "1px";
    }

    function btnUp5() {
        document.getElementById('5').style.padding = "1px";
    }

    function btnUp6() {
        document.getElementById('6').style.padding = "1px";
    }

    function btnUp7() {
        document.getElementById('7').style.padding = "1px";
    }

    function btnUp8() {
        document.getElementById('8').style.padding = "1px";
    }

    function btnUp9() {
        document.getElementById('9').style.padding = "1px";
    }

    function btnUp0() {
        document.getElementById('0').style.padding = "1px";
    }

    function btnUpPunto() {
        document.getElementById('punto').style.padding = "1px";
    }

    function btnUpMas() {
        document.getElementById('mas').style.padding = "1px";
    }

    function btnUpMenos() {
        document.getElementById('menos').style.padding = "1px";
    }

    function btnUpPor() {
        document.getElementById('por').style.padding = "1px";
    }

    function btnUpDividido() {
        document.getElementById('dividido').style.padding = "1px";
    }

    function btnUpRaiz() {
        document.getElementById('raiz').style.padding = "1px";
    }

    function btnUpOn() {
        document.getElementById('on').style.padding = "1px";
    }

    function btnUpSign() {
        document.getElementById('sign').style.padding = "1px";
    }

    function btnUpIgual() {
        document.getElementById('igual').style.padding = "1px";
    }

    ////////////   FUNCIONES DE click QUE QUE OBTIENE LOS BALORES DE LAS TECLAS  //////////////////

    function obtener_1() {
        var uno = document.getElementById('1').getAttribute('id');
        retornar(uno);
    }

    function obtener_2() {
        var dos = document.getElementById('2').getAttribute('id');
        retornar(dos);
    }

    function obtener_3() {
        var tres = document.getElementById('3').getAttribute('id');
        retornar(tres);
    }

    function obtener_4() {
        var cuatro = document.getElementById('4').getAttribute('id');
        retornar(cuatro);
    }

    function obtener_5() {
        var cinco = document.getElementById('5').getAttribute('id');
        retornar(cinco);
    }

    function obtener_6() {
        var seis = document.getElementById('6').getAttribute('id');
        retornar(seis);
    }

    function obtener_7() {
        var siete = document.getElementById('7').getAttribute('id');
        retornar(siete);
    }

    function obtener_8() {
        var ocho = document.getElementById('8').getAttribute('id');
        retornar(ocho);
    }

    function obtener_9() {
        var nueve = document.getElementById('9').getAttribute('id');
        retornar(nueve);
    }

    function obtener_0() {
        var cero = document.getElementById('0').getAttribute('id');
        retornar(cero);
    }

    function obtenerPunto() {
        var punto = document.getElementById('punto').getAttribute('id');
        retornaPunto();
    }

    function obtenerMas() {
        var mas = document.getElementById('mas').getAttribute('id');
        document.getElementById('display').innerHTML = '';
        retornaOperador(mas);
    }

    function obtenerMenos() {
        document.getElementById('display').innerHTML = '';
        var menos = document.getElementById('menos').getAttribute('id');
        retornaOperador(menos);
    }

    function obtenerPor() {
        document.getElementById('display').innerHTML = '';
        var por = document.getElementById('por').getAttribute('id');
        retornaOperador(por);
    }

    function obtenerDividido() {
        document.getElementById('display').innerHTML = '';
        var dividido = document.getElementById('dividido').getAttribute('id');
        retornaOperador(dividido);
    }

    function obtenerRaiz() {
        var raiz = document.getElementById('raiz').getAttribute('id');
        raizCuadrada();
    }

    function obtenerIgual() {
        var igual = document.getElementById('igual').getAttribute('id');
        retornaOperador(igual);
    }

    /////////// INICIALIZACIONES DE VARIABLES GLOBALES  ///////////////////////

    var resultado = 0;
    var operacion = " ";
    var acumulador = " ";
    var operador = " ";
    var cont_numeros = 0;
    var cont_operador = 0;
    var punto = 0;
    var nueva_ope = true;
    var entrada_operador = false;
    var entrada_numeros = false;
    var cont_igual = 0;

    ///////////// FUNCIÓN DE CAPTACIÓN DE LOS VALORES DE LAS TECLAS PARA CREAR EL NÚMERO //////////////////////////

    function retornar(valor) {
        if (entrada_numeros) {
            limpiar();
            operacion = valor;
            acumulador = operacion;
            document.getElementById('display').innerHTML = acumulador;
            nueva_ope = false;
            cont_numeros++;
            entrada_numeros = false;
            entrada_operador = false;
        } else if (nueva_ope) {
            punto = 0;
            operacion = valor;
            cont_numeros = 0;
            acumulador = operacion;
            document.getElementById('display').innerHTML = acumulador;
            cont_numeros++;
            nueva_ope = false;
        } else if ((acumulador) && (punto == 0)) {
            if(valor == 0 && acumulador == 0) {
                acumulador = valor;
                document.getElementById('display').innerHTML = acumulador;
                operacion = '';
            } else {
                if (cont_numeros < 8) {
                    operacion += valor;
                    acumulador = operacion;
                    document.getElementById('display').innerHTML = acumulador;
                } else {
                    document.getElementById('display').innerHTML = acumulador;
                }
                cont_numeros++;
            }
        } else {
            operacion += valor;
            acumulador = operacion;
            document.getElementById('display').innerHTML = acumulador;
            nueva_ope = false;
            cont_numeros++;
        }

    }

    /////////// FUNCIÓN QUE AÑADE EL PUNTO DECIMAL A LOS VALORES DE LA FUNCIÓN ANTERIOR  /////////////////////

    function retornaPunto() {
        if (cont_numeros == 0) {
            operacion = "0";
            acumulador = operacion;
            document.getElementById('display').innerHTML = acumulador;
            nueva_ope = false;
            punto++;
            cont_numeros++;
        }
        if (punto == 0) {
            operacion += ".";
            acumulador = operacion;
            document.getElementById('display').innerHTML = acumulador;
            punto++;
            cont_numeros++;
        }
    }

    /////////// FUNCIÓN QUE MODIFICA EL SIGNO A LOS VALORES DE LA FUNCIÓN retornar  /////////////////////

    function retornaSigno() {
        acumulador = document.getElementById('display').innerHTML * -1;
        document.getElementById('display').innerHTML = acumulador;
        cont_numeros++;
    }

    /////////// FUNCIÓN QUE RECOGE E IDENTIFCA LOS OPERANDOS QUE SE USARAN CON LOS VALORES DE LA FUNCIÓN retornar  ///////////

    function retornaOperador(valor) {
        if ((cont_numeros) && (cont_operador)) {
            if (valor == 'igual') {
                alert('Estoy en el primer calcular de retornaOperador ' + valor);
                if (nueva_ope == false) {
                        calcular();
                        cont_igual=1;
                }
                cont_operador = 0;
                punto = 0;
                cont_numeros = 0;
                nueva_ope = true;
                entrada_numeros = true;
                entrada_operador = true;
            } else {
             alert('Estoy en el segundo calcular de retornarOperador con valor -> ' + valor);
                if (nueva_ope == false) {
                    calcular();
                }
                operador = valor;
                nueva_ope = true;
            }
        } else if (entrada_operador) {
            alert('ESTOY EN EL ELSE IF \nel cont_igual es -> ' + cont_igual + '\n el acumulador es -> ' +
                acumulador + '\n el resultado es -> ' + resultado + '\n el operador es -> ' +
                operador);
            if(cont_igual=1) {
                calcular();
            }
            //operador = valor;
            cont_operador = 1;
            nueva_ope = true;
            entrada_numeros = false;
            entrada_operador = true;
        } else {
            resultado = acumulador;
            operador = valor;
            cont_operador = 1;
            nueva_ope = true;
        }
    }

    /////////// FUNCIÓN QUE EJECUTA LOS CALCULOS DE ACUERDO AL OPERADOR Y LOS VALORES DE LA FUNCIÓN retornar  ////////////////

    function calcular() {
        //var opeacum = eval(resultado);
        switch (operador) {
            case 'mas':
                resultado = (eval(resultado) + eval(acumulador));
                break;
            case 'menos':
                resultado = (eval(resultado) - eval(acumulador));
                break;
            case 'por':
                resultado = (eval(resultado) * eval(acumulador));
                break;
            case 'dividido':
                resultado = (eval(resultado) / eval(acumulador));
                break;
        }
        document.getElementById('display').innerHTML = resultado.toString().substr(0,8);
    }

    /////////// FUNCIÓN QUE CALCULA EL VALOR DE LA RAIZ CUADRADA DEL  VALOR QUE SE ENCUENTRA EN EL DISPLAY  /////////////////////

    function raizCuadrada() {
        var valor = document.getElementById('display').innerHTML;
        if (valor.length > 0 && valor > 0) {
            var resultado = Math.sqrt(parseFloat(valor));
            document.getElementById('display').innerHTML = resultado.toString().substr(0,8);
        } else {
            document.getElementById('display').innerHTML = 'Error'
        }
        operador = " ";
        cont_operador = 0;
        punto = 0;
        cont_numeros = 0;
        nueva_ope = true;
        entrada_numeros = true;
        entrada_operador = true;
    }

    /////////// FUNCIOÓN QUE LIMPIA E INICIALIZA LAS VARIABLES GLOBALES  /////////////////////

    function limpiar() {
        resultado = 0;
        operacion = 0;
        acumulador = " ";
        operador = " ";
        cont_numeros = 0;
        cont_operador = 0;
        nueva_ope = true;
        entrada_numeros = false;
        entrada_operador = false;
        document.getElementById('display').innerHTML = '0';
    }

}());