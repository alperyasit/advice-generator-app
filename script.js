async function getRandomAdvice() {
  try {
    // API'yi çağırıyoruz
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    // HTML'deki p etiketine öğüt yazdırıyoruz
    const adviceParagraph = document.getElementById("advice");
    adviceParagraph.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Veri çekilirken bir hata oluştu:", error);
    const adviceParagraph = document.getElementById("advice");
    adviceParagraph.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
  }
}
