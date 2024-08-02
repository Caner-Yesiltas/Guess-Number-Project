let rastgelesayi = Math.ceil(math.random() * 20); // 1 ile 20 arasinda random sayi ureten fonksiyon

let message = document.querySelector(".msg");

let myScore = 10;
let enYuksekSkor = 0;

document.querySelector(".check").addEventListener("click", () => {
  // click eventi gerceklestiginde bu fonksiyon baslayacak arrow fonksiyon isimsiz anonim parametresiz!

  const tahmin = document.querySelector(".guess").value; // fonksiyon icinde tanimlamak daha sagliklidir global scope ne kadar az tanimlarsak o kadar iyi sadece tanim bu !

  if (!tahmin) {
    message.textContent = "lutfen bir tahmin giriniz";
  } else if (tahmin === rastgeleSayi) {
    message.textContent = "tebrikler bildiniz🎉";
    
    document.querySelector("body").style.backgroundColor="green"
    document.querySelector("number").textContent=rastgelesayi;
    document.querySelector(".check".disabled) = true;     // buton tiklanmaz kapali olur disabled komutu ile ! 


    if( myscore>enYuksekSkor) {
      enYuksekSkor=myScore;
      document.querySelector('.top-score').textContent=enYuksekSkor;
    }
  }

  else{
    if(myscore>1) {

      myScore--;

    
      document.querySelector('.my-score').textContent=myscore; // tempral literate ilede kullanilabilirdi 

      tahmin > rastgeleSayi ? (message.textContent="azalt") : (message.textContent="arttir");


    }

    else{document.querySelector{"body"}.style.backgroundColor="red";
    document.querySelector(".my-score").textContent=0;

    message.textContent="oyunu kaybettiniz";
    document.querySelector("check"),disabled=true;

    }
  }
});
