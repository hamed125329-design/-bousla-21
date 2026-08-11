// رقم الواتساب بدون علامة + ولا صفر بادئة: 966541066355
const WA_NUMBER = '966541066355';
const BOOK_TITLE = 'البوصلة';
const PRICE = '75 SAR';

const form = document.getElementById('purchaseForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('buyerName').value.trim();
  const email = document.getElementById('buyerEmail').value.trim();

  if(!name){
    alert('الرجاء إدخال الاسم.');
    return;
  }

  let message = `أرغب بشراء كتاب "${BOOK_TITLE}" - السعر ${PRICE}.\nالاسم: ${name}`;
  if(email){ message += `\nالإيميل: ${email}`; }
  message += `\nالمرجوا إعلامي بطريقة الدفع المناسبة.`;

  const encoded = encodeURIComponent(message);
  // رابط wa.me لفتح محادثة جديدة
  const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

  // يفتح الرابط في نافذة/تبويب جديد
  window.open(url, '_blank');
});
