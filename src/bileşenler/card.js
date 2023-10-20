const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHead = document.createElement("div");
  divHead.classList.add("headline");
  divHead.textContent = makale["anabaslik"];
  divCard.append(divHead);

  const divAu = document.createElement("div");
  divAu.classList.add("author");
  divCard.append(divAu);

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  divAu.append(divImg);

  const img = document.createElement("img");
  img.setAttribute("src", `${makale["yazarFoto"]}`);
  divImg.append(img);

  const span = document.createElement("span");
  span.textContent = `${makale["yazarAdi"]} tarafından`;
  divAu.append(span);
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.

  divCard.addEventListener("click", () => {
    console.log(divHead.textContent);
  });

  return divCard;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
