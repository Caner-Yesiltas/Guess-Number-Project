let rastgelesayi = Math.ceil(math.random() * 20); // 1 ile 20 arasinda random sayi ureten fonksiyon

let message = document.querySelector(".msg");

let myScore = 10;
let enYuksekSkor = 0;

document.querySelector(".check").addEventListener("click", () => {
  // click eventi gerceklestiginde bu fonksiyon baslayacak arrow fonksiyon isimsiz anonim parametresiz!

  const tahmin = document.querySelector(".guess").value; // fonksiyon icinde tanimlamak daha sagliklidir global scope ne kadar az tanimlarsak o kadar iyi sadece tanim bu !

  if (!tahmin) {
    message.textContent = "lutfen bir tahmin giriniz";
  } else if (tahmin === rastgelesayi) {
    message.textContent = "tebrikler bildiniz🎉";
  }
});
