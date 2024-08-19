//Sayiların veya seçilen işlemlerin gözüktüğü alan.
var sayi_cikti = document.getElementById('sayi_input');
//İşlem sonuçlarının gözüktüğü alan.
var sonuc_cikti = document.getElementById('sonuc_area');
//Sayı butonlarını tanımladık.
var buttonValue1 = document.getElementById("sayi1");
var buttonValue2 = document.getElementById("sayi2");
var buttonValue3 = document.getElementById("sayi3");
var buttonValue4 = document.getElementById("sayi4");
var buttonValue5 = document.getElementById("sayi5");
var buttonValue6 = document.getElementById("sayi6");
var buttonValue7 = document.getElementById("sayi7");
var buttonValue8 = document.getElementById("sayi8");
var buttonValue9 = document.getElementById("sayi9");
var buttonValue0 = document.getElementById("sayi0");
//İşlem butonlarını tanımladık.
var bolmeButton = document.getElementById('bolme_Btn');
var carpmaButton = document.getElementById('carpma_Btn');
var cikarmaButton = document.getElementById('cikarma_Btn');
var toplamButton = document.getElementById('toplam_Btn');
//Sonuç veya silme butonları tanımladık.
var sonucButton = document.getElementById('sonuc_Btn');
var deleteButton = document.getElementById('dlt_Btn');




//Sayı butonlarının işlevleri için fonksiyon.
function buttonİslem(){
    ///SAYI BUTONLARINA İŞLEV EKLİYOR
    buttonValue1.addEventListener('click', function() {
        sayi_cikti.value += buttonValue1.value;
    });
    buttonValue2.addEventListener('click', function() {
        sayi_cikti.value += buttonValue2.value;
    });
    buttonValue3.addEventListener('click', function() {
        sayi_cikti.value += buttonValue3.value;
    });
    buttonValue4.addEventListener('click', function() {
        sayi_cikti.value += buttonValue4.value;
    });
    buttonValue5.addEventListener('click', function() {
        sayi_cikti.value += buttonValue5.value;
    });
    buttonValue6.addEventListener('click', function() {
        sayi_cikti.value += buttonValue6.value;
    });
    buttonValue7.addEventListener('click', function() {
        sayi_cikti.value += buttonValue7.value;
    });
    buttonValue8.addEventListener('click', function() {
        sayi_cikti.value += buttonValue8.value;
    });
    buttonValue9.addEventListener('click', function() {
        sayi_cikti.value += buttonValue9.value;
    });
    buttonValue0.addEventListener('click', function() {
        sayi_cikti.value += buttonValue0.value;
    });
}

//sayi_cikti alanına sadece istediğimiz karakterlerin girilebilmesini sağlıyoruz.
sayi_cikti.addEventListener('input', function(e){
    const allowedChars = /^[0-9+\-*/().]*$/;
    if (!allowedChars.test(e.target.value)) {
        e.target.value = e.target.value.slice(0,-1);
    }
})



//Bölme butonu işlevi kodları.
function bolme_islem() {
    sayi_cikti.value += bolmeButton.value;
}
bolmeButton.addEventListener('click', bolme_islem);
//Carpma butonu islevi kodları.
function carpma_islem() {
    sayi_cikti.value += carpmaButton.value;    
}
carpmaButton.addEventListener('click', carpma_islem);
//Toplam butonu işlevi kodları.
function toplam_islem() {
    sayi_cikti.value += toplamButton.value;
}
toplamButton.addEventListener('click', toplam_islem);
//Cikarma butonu işlevi kodları.
function cikarma_islem() {
    sayi_cikti.value += cikarmaButton.value;
}
cikarmaButton.addEventListener('click', cikarma_islem);



//İşlem sonuçlarının kodları 
function sonuc_islem() {
    var toplam = eval(sayi_cikti.value);
    if (isNaN(toplam)) {
        sonuc_cikti.innerHTML = 'Geçerli bir sayı değil.';
    }
    else {
        sonuc_cikti.innerHTML = toplam;
    }
}
sonucButton.addEventListener('click', sonuc_islem);





//Delet butonu işlevi kodları. 
function delete_ciktilar() {
    sonuc_cikti.innerHTML = '';
    sayi_cikti.value = '';
}
deleteButton.addEventListener('click', delete_ciktilar);



//Sayı butonları için yazdığımız fonksiyonu dahil etmemiz gerekiyor.
buttonİslem();