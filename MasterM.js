
var  code = [4], // Color sequence the player needs to guess
     choix = [4], // Color sequence of player's guesses
     resultat = [4],
     ligne = 1,
     c = 1,
     bienPlace = 0,
     bonnePokeball = 0,
     essais = 0,
     casetmp = 0;
     ;

     objet = {
        1: 'pokeball',
        2: 'superball',
        3: 'hyperball',
        4: 'masterball'
      };

      function lancement () {
      	document.getElementById("indexmax").style.visibility = 'hidden';
    	generateSecretCode(1, 6);
    	resetchoix();

    }

    function resetchoix () {
    	for(var i=0;i<4;i++){
    			choix[i] = 0;
    		}
    }


    function regle(choix){

      if(choix == 0)  document.getElementById("pokedex").style.visibility = 'visible';
      if(choix == 1)  document.getElementById("pokedex").style.visibility = 'hidden';

    }

    function generateSecretCode (min, max) {
    for (var i = 0; i < 4; i++){
      code[i] = Math.floor(Math.random() * (max - min)) + min;

    }
  }

  function changementligne(){
  	ligne+=1;

  	for(var i=0; i < 4;i++){
  		choix[i] = 0;
  	}

  document.getElementById("valider").src = "Completer.png";
  }
  

  	function jouer(ball){

  	for (var i = 0; i < 4; i++){

  			if(choix[i] == 0){
  				choix[i] = ball;
  				affichage(choix[i]);
          EssaiValide();
  				return;
  			}

  		}
  		
  	}


  		function checkcode(){


  			for(var i = 0; i < 4; i++){

  				if(choix[i] != code[i])	return false;
  			}

        document.getElementById("valider").src = "Victoire.png";
        Revelercode(1);
        document.getElementById("retourimg").src = "Recommencer.png";
  			return true;


}
        function verification(){

          bienPlace = 0;
          bonnePokeball = 0;
          var res = [4];

        for(var i = 0; i < 4; i++){
            res[i] = code[i];
}
        for(var i = 0; i < 4; i++){
          if(choix[i] == res[i] ){
            res[i] = 0;
            bienPlace++;
          }
}
          for(var i = 0; i < 4; i++){
          if(choix[0] == res[i] ){
            res[0] = 0;
            bonnePokeball++;
          }

          if(choix[1] == res[i] ){
            res[1] = 0;
            bonnePokeball++;
          }

          if(choix[2] == res[i] ){
            res[2] = 0;
            bonnePokeball++;
          }

          if(choix[3] == res[i] ){
            res[3] = 0;
            bonnePokeball++;
          }
        }
        affichageRes();
        }


    function EssaiValide(){

      for(var i=0;i<4;i++){
        if(choix[i] == 0){
      return 0;
        }
      }
      document.getElementById("valider").src = "Valider.png";
      return 1;
    }  		


    function restart(){

      Revelercode(0);
      document.getElementById("c1").src = "casevide.png";
      document.getElementById("c2").src = "casevide.png";
      document.getElementById("c3").src = "casevide.png";
      document.getElementById("c4").src = "casevide.png";
      document.getElementById("c5").src = "casevide.png";
      document.getElementById("c6").src = "casevide.png";
      document.getElementById("c7").src = "casevide.png";
      document.getElementById("c8").src = "casevide.png";
      document.getElementById("c9").src = "casevide.png";
      document.getElementById("c10").src = "casevide.png";
      document.getElementById("c11").src = "casevide.png";
      document.getElementById("c12").src = "casevide.png";
      document.getElementById("c13").src = "casevide.png";
      document.getElementById("c14").src = "casevide.png";
      document.getElementById("c15").src = "casevide.png";
      document.getElementById("c16").src = "casevide.png";
      document.getElementById("c17").src = "casevide.png";
      document.getElementById("c18").src = "casevide.png";
      document.getElementById("c19").src = "casevide.png";
      document.getElementById("c20").src = "casevide.png";
      document.getElementById("c21").src = "casevide.png";
      document.getElementById("c22").src = "casevide.png";
      document.getElementById("c23").src = "casevide.png";
      document.getElementById("c24").src = "casevide.png";
      document.getElementById("c25").src = "casevide.png";
      document.getElementById("c26").src = "casevide.png";
      document.getElementById("c27").src = "casevide.png";
      document.getElementById("c28").src = "casevide.png";

      document.getElementById("r1").src = "noir.png";
      document.getElementById("r2").src = "noir.png";
      document.getElementById("r3").src = "noir.png";
      document.getElementById("r4").src = "noir.png";
      document.getElementById("r5").src = "noir.png";
      document.getElementById("r6").src = "noir.png";
      document.getElementById("r7").src = "noir.png";
      document.getElementById("r8").src = "noir.png";
      document.getElementById("r9").src = "noir.png";
      document.getElementById("r10").src = "noir.png";
      document.getElementById("r11").src = "noir.png";
      document.getElementById("r12").src = "noir.png";
      document.getElementById("r13").src = "noir.png";
      document.getElementById("r14").src = "noir.png";
      document.getElementById("r15").src = "noir.png";
      document.getElementById("r16").src = "noir.png";
      document.getElementById("r17").src = "noir.png";
      document.getElementById("r18").src = "noir.png";
      document.getElementById("r19").src = "noir.png";
      document.getElementById("r20").src = "noir.png";
      document.getElementById("r21").src = "noir.png";
      document.getElementById("r22").src = "noir.png";
      document.getElementById("r23").src = "noir.png";
      document.getElementById("r24").src = "noir.png";
      document.getElementById("r25").src = "noir.png";
      document.getElementById("r26").src = "noir.png";
      document.getElementById("r27").src = "noir.png";
      document.getElementById("r28").src = "noir.png";

      lancement();

      c=1;
      ligne=0;
      changementligne();
      essais = 0;




}
    function retour(){


      if(essais >= 7 || checkcode() == true){
         document.getElementById("retourimg").src = "Retour.png";
        restart();
      }


      c = (ligne*4)-3;
      for(var i = 0 ; i < 4;i++){
        choix[i] = 0;

        affichage(0);
        document.getElementById("valider").src = "Completer.png";
      }

      c = (ligne*4)-3;


  }
  		function valider() {


        if(EssaiValide() == 1){
        verification();
  			if(checkcode() == false){
  			changementligne();
        essais++;
      }
        if(essais >= 7 ){
          document.getElementById("retourimg").src = "Recommencer.png";
          document.getElementById("valider").src = "perdu.png";
          Revelercode(1);

        }
      }

  	}
  		function affichage(choix){

if(ligne == 1){

      if(c == 1 && choix == 0)document.getElementById("c1").src = "casevide.png";
  		if(c == 1 && choix == 1)document.getElementById("c1").src = "Pokeball1.png";
  		if(c == 1 && choix == 2)document.getElementById("c1").src = "Superball1.png";
  		if(c == 1 && choix == 3)document.getElementById("c1").src = "Hyperball1.png";
  		if(c == 1 && choix == 4)document.getElementById("c1").src = "Masterball1.png";
      if(c == 1 && choix == 5)document.getElementById("c1").src = "Honorball1.png";

      if(c == 2 && choix == 0)document.getElementById("c2").src = "casevide.png";
   		if(c == 2 && choix == 1)document.getElementById("c2").src = "Pokeball1.png";
  		if(c == 2 && choix == 2)document.getElementById("c2").src = "Superball1.png";
  		if(c == 2 && choix == 3)document.getElementById("c2").src = "Hyperball1.png";
  		if(c == 2 && choix == 4)document.getElementById("c2").src = "Masterball1.png";
      if(c == 2 && choix == 5)document.getElementById("c2").src = "Honorball1.png";

      if(c == 3 && choix == 0)document.getElementById("c3").src = "casevide.png";
   		if(c == 3 && choix == 1)document.getElementById("c3").src = "Pokeball1.png";
  		if(c == 3 && choix == 2)document.getElementById("c3").src = "Superball1.png";
  		if(c == 3 && choix == 3)document.getElementById("c3").src = "Hyperball1.png";
  		if(c == 3 && choix == 4)document.getElementById("c3").src = "Masterball1.png";
      if(c == 3 && choix == 5)document.getElementById("c3").src = "Honorball1.png";

      if(c == 4 && choix == 0)document.getElementById("c4").src = "casevide.png";
   		if(c == 4 && choix == 1)document.getElementById("c4").src = "Pokeball1.png";
  		if(c == 4 && choix == 2)document.getElementById("c4").src = "Superball1.png";
  		if(c == 4 && choix == 3)document.getElementById("c4").src = "Hyperball1.png";
  		if(c == 4 && choix == 4)document.getElementById("c4").src = "Masterball1.png";
      if(c == 4 && choix == 5)document.getElementById("c4").src = "Honorball1.png";

  		c++;
  	}

  	if(ligne == 2){

      if(c == 5 && choix == 0)document.getElementById("c5").src = "casevide.png";
  		if(c == 5 && choix == 1)document.getElementById("c5").src = "Pokeball1.png";
  		if(c == 5 && choix == 2)document.getElementById("c5").src = "Superball1.png";
  		if(c == 5 && choix == 3)document.getElementById("c5").src = "Hyperball1.png";
  		if(c == 5 && choix == 4)document.getElementById("c5").src = "Masterball1.png";
      if(c == 5 && choix == 5)document.getElementById("c5").src = "Honorball1.png";

      if(c == 6 && choix == 0)document.getElementById("c6").src = "casevide.png";
   		if(c == 6 && choix == 1)document.getElementById("c6").src = "Pokeball1.png";
  		if(c == 6 && choix == 2)document.getElementById("c6").src = "Superball1.png";
  		if(c == 6 && choix == 3)document.getElementById("c6").src = "Hyperball1.png";
  		if(c == 6 && choix == 4)document.getElementById("c6").src = "Masterball1.png";
      if(c == 6 && choix == 5)document.getElementById("c6").src = "Honorball1.png";

      if(c == 7 && choix == 0)document.getElementById("c7").src = "casevide.png";
   		if(c == 7 && choix == 1)document.getElementById("c7").src = "Pokeball1.png";
  		if(c == 7 && choix == 2)document.getElementById("c7").src = "Superball1.png";
  		if(c == 7 && choix == 3)document.getElementById("c7").src = "Hyperball1.png";
  		if(c == 7 && choix == 4)document.getElementById("c7").src = "Masterball1.png";
      if(c == 7 && choix == 5)document.getElementById("c7").src = "Honorball1.png";

      if(c == 8 && choix == 0)document.getElementById("c8").src = "casevide.png";
   		if(c == 8 && choix == 1)document.getElementById("c8").src = "Pokeball1.png";
  		if(c == 8 && choix == 2)document.getElementById("c8").src = "Superball1.png";
  		if(c == 8 && choix == 3)document.getElementById("c8").src = "Hyperball1.png";
  		if(c == 8 && choix == 4)document.getElementById("c8").src = "Masterball1.png";
      if(c == 8 && choix == 5)document.getElementById("c8").src = "Honorball1.png";

  		c++;
  	}


  	if(ligne == 3){
      if(c == 9 && choix == 0)document.getElementById("c9").src = "casevide.png";
  		if(c == 9 && choix == 1)document.getElementById("c9").src = "Pokeball1.png";
  		if(c == 9 && choix == 2)document.getElementById("c9").src = "Superball1.png";
  		if(c == 9 && choix == 3)document.getElementById("c9").src = "Hyperball1.png";
  		if(c == 9 && choix == 4)document.getElementById("c9").src = "Masterball1.png";
      if(c == 9 && choix == 5)document.getElementById("c9").src = "Honorball1.png";

      if(c == 10 && choix == 0)document.getElementById("c10").src = "casevide.png";
   		if(c == 10 && choix == 1)document.getElementById("c10").src = "Pokeball1.png";
  		if(c == 10 && choix == 2)document.getElementById("c10").src = "Superball1.png";
  		if(c == 10 && choix == 3)document.getElementById("c10").src = "Hyperball1.png";
  		if(c == 10 && choix == 4)document.getElementById("c10").src = "Masterball1.png";
      if(c == 10 && choix == 5)document.getElementById("c10").src = "Honorball1.png";

      if(c == 11 && choix == 0)document.getElementById("c11").src = "casevide.png";
   		if(c == 11 && choix == 1)document.getElementById("c11").src = "Pokeball1.png";
  		if(c == 11 && choix == 2)document.getElementById("c11").src = "Superball1.png";
  		if(c == 11 && choix == 3)document.getElementById("c11").src = "Hyperball1.png";
  		if(c == 11 && choix == 4)document.getElementById("c11").src = "Masterball1.png";
      if(c == 11 && choix == 5)document.getElementById("c11").src = "Honorball1.png";

      if(c == 12 && choix == 0)document.getElementById("c12").src = "casevide.png";
   		if(c == 12 && choix == 1)document.getElementById("c12").src = "Pokeball1.png";
  		if(c == 12 && choix == 2)document.getElementById("c12").src = "Superball1.png";
  		if(c == 12 && choix == 3)document.getElementById("c12").src = "Hyperball1.png";
  		if(c == 12 && choix == 4)document.getElementById("c12").src = "Masterball1.png";
      if(c == 12 && choix == 5)document.getElementById("c12").src = "Honorball1.png";

  		c++;
  	}


  	if(ligne == 4){
      if(c == 13 && choix == 0)document.getElementById("c13").src = "casevide.png";
  		if(c == 13 && choix == 1)document.getElementById("c13").src = "Pokeball1.png";
  		if(c == 13 && choix == 2)document.getElementById("c13").src = "Superball1.png";
  		if(c == 13 && choix == 3)document.getElementById("c13").src = "Hyperball1.png";
  		if(c == 13 && choix == 4)document.getElementById("c13").src = "Masterball1.png";
      if(c == 13 && choix == 5)document.getElementById("c13").src = "Honorball1.png";

      if(c == 14 && choix == 0)document.getElementById("c14").src = "casevide.png";
   		if(c == 14 && choix == 1)document.getElementById("c14").src = "Pokeball1.png";
  		if(c == 14 && choix == 2)document.getElementById("c14").src = "Superball1.png";
  		if(c == 14 && choix == 3)document.getElementById("c14").src = "Hyperball1.png";
  		if(c == 14 && choix == 4)document.getElementById("c14").src = "Masterball1.png";
      if(c == 14 && choix == 5)document.getElementById("c14").src = "Honorball1.png";


      if(c == 15 && choix == 0)document.getElementById("c15").src = "casevide.png";
   		if(c == 15 && choix == 1)document.getElementById("c15").src = "Pokeball1.png";
  		if(c == 15 && choix == 2)document.getElementById("c15").src = "Superball1.png";
  		if(c == 15 && choix == 3)document.getElementById("c15").src = "Hyperball1.png";
      if(c == 15 && choix == 4)document.getElementById("c15").src = "Masterball1.png";
      if(c == 15 && choix == 5)document.getElementById("c15").src = "Honorball1.png";

      if(c == 16 && choix == 0)document.getElementById("c16").src = "casevide.png";
   		if(c == 16 && choix == 1)document.getElementById("c16").src = "Pokeball1.png";
  		if(c == 16 && choix == 2)document.getElementById("c16").src = "Superball1.png";
  		if(c == 16 && choix == 3)document.getElementById("c16").src = "Hyperball1.png";
  		if(c == 16 && choix == 4)document.getElementById("c16").src = "Masterball1.png";
      if(c == 16 && choix == 5)document.getElementById("c16").src = "Honorball1.png";

  		c++;
  	}


  	if(ligne == 5){
      if(c == 17 && choix == 0)document.getElementById("c11").src = "casevide.png";
  		if(c == 17 && choix == 1)document.getElementById("c17").src = "Pokeball1.png";
  		if(c == 17 && choix == 2)document.getElementById("c17").src = "Superball1.png";
  		if(c == 17 && choix == 3)document.getElementById("c17").src = "Hyperball1.png";
  		if(c == 17 && choix == 4)document.getElementById("c17").src = "Masterball1.png";
      if(c == 17 && choix == 5)document.getElementById("c17").src = "Honorball1.png";

      if(c == 18 && choix == 0)document.getElementById("c18").src = "casevide.png";
   		if(c == 18 && choix == 1)document.getElementById("c18").src = "Pokeball1.png";
  		if(c == 18 && choix == 2)document.getElementById("c18").src = "Superball1.png";
  		if(c == 18 && choix == 3)document.getElementById("c18").src = "Hyperball1.png";
  		if(c == 18 && choix == 4)document.getElementById("c18").src = "Masterball1.png";
      if(c == 18 && choix == 5)document.getElementById("c18").src = "Honorball1.png";

      if(c == 19 && choix == 0)document.getElementById("c19").src = "casevide.png";
   		if(c == 19 && choix == 1)document.getElementById("c19").src = "Pokeball1.png";
  		if(c == 19 && choix == 2)document.getElementById("c19").src = "Superball1.png";
  		if(c == 19 && choix == 3)document.getElementById("c19").src = "Hyperball1.png";
  		if(c == 19 && choix == 4)document.getElementById("c19").src = "Masterball1.png";
      if(c == 19 && choix == 5)document.getElementById("c19").src = "Honorball1.png";

      if(c == 20 && choix == 0)document.getElementById("c20").src = "casevide.png";
   		if(c == 20 && choix == 1)document.getElementById("c20").src = "Pokeball1.png";
  		if(c == 20 && choix == 2)document.getElementById("c20").src = "Superball1.png";
  		if(c == 20 && choix == 3)document.getElementById("c20").src = "Hyperball1.png";
  		if(c == 20 && choix == 4)document.getElementById("c20").src = "Masterball1.png";
      if(c == 20 && choix == 5)document.getElementById("c20").src = "Honorball1.png";

  		c++;
  	}


  	if(ligne == 6){
      if(c == 21 && choix == 0)document.getElementById("c21").src = "casevide.png";
  		if(c == 21 && choix == 1)document.getElementById("c21").src = "Pokeball1.png";
  		if(c == 21 && choix == 2)document.getElementById("c21").src = "Superball1.png";
  		if(c == 21 && choix == 3)document.getElementById("c21").src = "Hyperball1.png";
  		if(c == 21 && choix == 4)document.getElementById("c21").src = "Masterball1.png";
      if(c == 21 && choix == 5)document.getElementById("c21").src = "Honorball1.png";

      if(c == 22 && choix == 0)document.getElementById("c22").src = "casevide.png";
   		if(c == 22 && choix == 1)document.getElementById("c22").src = "Pokeball1.png";
  		if(c == 22 && choix == 2)document.getElementById("c22").src = "Superball1.png";
  		if(c == 22 && choix == 3)document.getElementById("c22").src = "Hyperball1.png";
  		if(c == 22 && choix == 4)document.getElementById("c22").src = "Masterball1.png";
      if(c == 22 && choix == 5)document.getElementById("c22").src = "Honorball1.png";

      if(c == 23 && choix == 0)document.getElementById("c23").src = "casevide.png";
   		if(c == 23 && choix == 1)document.getElementById("c23").src = "Pokeball1.png";
  		if(c == 23 && choix == 2)document.getElementById("c23").src = "Superball1.png";
  		if(c == 23 && choix == 3)document.getElementById("c23").src = "Hyperball1.png";
  		if(c == 23 && choix == 4)document.getElementById("c23").src = "Masterball1.png";
      if(c == 23 && choix == 5)document.getElementById("c23").src = "Honorball1.png";

      if(c == 24 && choix == 0)document.getElementById("c24").src = "casevide.png";
   		if(c == 24 && choix == 1)document.getElementById("c24").src = "Pokeball1.png";
  		if(c == 24 && choix == 2)document.getElementById("c24").src = "Superball1.png";
  		if(c == 24 && choix == 3)document.getElementById("c24").src = "Hyperball1.png";
  		if(c == 24 && choix == 4)document.getElementById("c24").src = "Masterball1.png";
      if(c == 24 && choix == 5)document.getElementById("c24").src = "Honorball1.png";

  		c++;
  	}


  	if(ligne == 7){

      if(c == 25 && choix == 0)document.getElementById("c25").src = "casevide.png";
  		if(c == 25 && choix == 1)document.getElementById("c25").src = "Pokeball1.png";
  		if(c == 25 && choix == 2)document.getElementById("c25").src = "Superball1.png";
  		if(c == 25 && choix == 3)document.getElementById("c25").src = "Hyperball1.png";
  		if(c == 25 && choix == 4)document.getElementById("c25").src = "Masterball1.png";
      if(c == 25 && choix == 5)document.getElementById("c25").src = "Honorball1.png";

      if(c == 26 && choix == 0)document.getElementById("c26").src = "casevide.png";
   		if(c == 26 && choix == 1)document.getElementById("c26").src = "Pokeball1.png";
  		if(c == 26 && choix == 2)document.getElementById("c26").src = "Superball1.png";
  		if(c == 26 && choix == 3)document.getElementById("c26").src = "Hyperball1.png";
  		if(c == 26 && choix == 4)document.getElementById("c26").src = "Masterball1.png";
      if(c == 26 && choix == 5)document.getElementById("c26").src = "Honorball1.png";

      if(c == 2 && choix == 0)document.getElementById("c27").src = "casevide.png";
   		if(c == 27 && choix == 1)document.getElementById("c27").src = "Pokeball1.png";
  		if(c == 27 && choix == 2)document.getElementById("c27").src = "Superball1.png";
  		if(c == 27 && choix == 3)document.getElementById("c27").src = "Hyperball1.png";
  		if(c == 27 && choix == 4)document.getElementById("c27").src = "Masterball1.png";
      if(c == 27 && choix == 5)document.getElementById("c27").src = "Honorball1.png";

      if(c == 28 && choix == 0)document.getElementById("c28").src = "casevide.png";
   		if(c == 28 && choix == 1)document.getElementById("c28").src = "Pokeball1.png";
  		if(c == 28 && choix == 2)document.getElementById("c28").src = "Superball1.png";
  		if(c == 28 && choix == 3)document.getElementById("c28").src = "Hyperball1.png";
  		if(c == 28 && choix == 4)document.getElementById("c28").src = "Masterball1.png";
      if(c == 28 && choix == 5)document.getElementById("c28").src = "Honorball1.png";

  		c++;
  	}
}

function Revelercode(choix){





if(choix == 1){
  if(code[0] == 1)document.getElementById("c29").src = "Pokeball1.png";
  if(code[0] == 2)document.getElementById("c29").src = "Superball1.png";
  if(code[0] == 3)document.getElementById("c29").src = "Hyperball1.png";
  if(code[0] == 4)document.getElementById("c29").src = "Masterball1.png";
  if(code[0] == 5)document.getElementById("c29").src = "Honorball1.png";


  if(code[1] == 1)document.getElementById("c30").src = "Pokeball1.png";
  if(code[1] == 2)document.getElementById("c30").src = "Superball1.png";
  if(code[1] == 3)document.getElementById("c30").src = "Hyperball1.png";
  if(code[1] == 4)document.getElementById("c30").src = "Masterball1.png";
  if(code[1] == 5)document.getElementById("c30").src = "Honorball1.png";

  if(code[2] == 1)document.getElementById("c31").src = "Pokeball1.png";
  if(code[2] == 2)document.getElementById("c31").src = "Superball1.png";
  if(code[2] == 3)document.getElementById("c31").src = "Hyperball1.png";
  if(code[2] == 4)document.getElementById("c31").src = "Masterball1.png";
  if(code[2] == 5)document.getElementById("c31").src = "Honorball1.png";

  if(code[3] == 1)document.getElementById("c32").src = "Pokeball1.png";
  if(code[3] == 2)document.getElementById("c32").src = "Superball1.png";
  if(code[3] == 3)document.getElementById("c32").src = "Hyperball1.png";
  if(code[3] == 4)document.getElementById("c32").src = "Masterball1.png";
  if(code[3] == 5)document.getElementById("c32").src = "Honorball1.png";
  }
  else{
    document.getElementById("c29").src = "blackBall.png";
    document.getElementById("c30").src = "blackBall.png";
    document.getElementById("c31").src = "blackBall.png";
    document.getElementById("c32").src = "blackBall.png";
  }
}


 function affichageRes(){



  if(ligne == 1){

    if(bonnePokeball >= 1) document.getElementById("r1").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r2").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r3").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r4").src = "Orange.png";

    if(bienPlace >= 1) document.getElementById("r1").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r2").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r3").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r4").src = "Vert.png";
  }
  if(ligne == 2){

    if(bonnePokeball >= 1) document.getElementById("r5").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r6").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r7").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r8").src = "Orange.png";

    if(bienPlace >= 1) document.getElementById("r5").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r6").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r7").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r8").src = "Vert.png";
  }

  if(ligne == 3){

    if(bonnePokeball >= 1) document.getElementById("r9").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r10").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r11").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r12").src = "Orange.png";

    if(bienPlace >= 1) document.getElementById("r9").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r10").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r11").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r12").src = "Vert.png";
  }

  if(ligne == 4){

    if(bonnePokeball >= 1) document.getElementById("r13").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r14").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r15").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r16").src = "Orange.png";
    
    if(bienPlace >= 1) document.getElementById("r13").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r14").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r15").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r16").src = "Vert.png";
  }

  if(ligne == 5){

    if(bonnePokeball >= 1) document.getElementById("r17").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r18").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r19").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r20").src = "Orange.png";
    
    if(bienPlace >= 1) document.getElementById("r17").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r18").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r19").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r20").src = "Vert.png";
  }

  if(ligne == 6){

    if(bonnePokeball >= 1) document.getElementById("r21").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r22").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r23").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r24").src = "Orange.png";
    
    if(bienPlace >= 1) document.getElementById("r21").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r22").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r23").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r24").src = "Vert.png";
  }

  if(ligne == 7){

    if(bonnePokeball >= 1) document.getElementById("r25").src = "Orange.png";
    if(bonnePokeball >= 2) document.getElementById("r26").src = "Orange.png";
    if(bonnePokeball >= 3) document.getElementById("r27").src = "Orange.png";
    if(bonnePokeball >= 4) document.getElementById("r28").src = "Orange.png";
    
    if(bienPlace >= 1) document.getElementById("r25").src = "Vert.png";
    if(bienPlace >= 2) document.getElementById("r26").src = "Vert.png";
    if(bienPlace >= 3) document.getElementById("r27").src = "Vert.png";
    if(bienPlace >= 4) document.getElementById("r28").src = "Vert.png";
  }

}


  	






