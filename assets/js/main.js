let currentItem = 1;
let carouselItems = document.querySelectorAll(".carousel-item");
const timeToDelay = 4000;
let interval = setTimeout(moveNext, timeToDelay);

function generateIndicatorButtons() {
  let indicatorsEl = document.querySelector(".carousel-container .indicators");
  for (let index = 1; index <= carouselItems.length; index++) {
    const btnEl = document.createElement("button");
    btnEl.setAttribute("onclick", `setPosition(${index})`);
    if (index == 1) btnEl.classList.add("active");
    indicatorsEl.appendChild(btnEl);
  }
}

function setIndicatorButton() {
  document
    .querySelectorAll(".carousel-container .indicators > button")
    .forEach((indicator, i) => {
      indicator.classList.remove("active");
      if (i + 1 == currentItem) {
        indicator.classList.add("active");
      }
    });
}

function moveNext() {
  if (carouselItems.length == currentItem) {
    Array.from(carouselItems).forEach((carouselItem, i) => {
      carouselItem.style.setProperty("--pos", i + 1);
    });
  } else {
    Array.from(carouselItems).forEach((carouselItem) => {
      let currentPos = carouselItem.style.getPropertyValue("--pos");
      carouselItem.style.setProperty("--pos", currentPos - 1);
    });
  }

  currentItem++;
  if (currentItem == carouselItems.length + 1) currentItem = 1;
  setIndicatorButton();
  clearTimeout(interval);
  interval = setTimeout(moveNext, timeToDelay);
}

function movePrev() {
  if (currentItem == 1) {
    Array.from(carouselItems)
      .reverse()
      .forEach((carouselItem, i) => {
        carouselItem.style.setProperty("--pos", 1 - i);
      });

    currentItem = carouselItems.length;
  } else {
    Array.from(carouselItems).forEach((carouselItem) => {
      let currentPos = carouselItem.style.getPropertyValue("--pos");
      carouselItem.style.setProperty("--pos", Number(currentPos) + 1);
    });
    currentItem--;
  }

  setIndicatorButton();
  clearTimeout(interval);
  interval = setTimeout(moveNext, timeToDelay);
}

function setPosition(num) {
  num = Number(num);
  Array.from(carouselItems).forEach((carouselItem, index) => {
    carouselItem.style.setProperty("--pos", -num + (index + 2));
  });
  currentItem = num;
  setIndicatorButton();
  clearTimeout(interval);
  interval = setTimeout(moveNext, timeToDelay);
}

generateIndicatorButtons();

// table
let names = [
  "کالو بٹ اینڈ پولا بٹ",
  "یاسر جٹ چھت علی حسن",
  "استاد حاجی اختر",
  "استاد سید آفتاب شاہ",
  "استاد عمران مانا",
  "استاد امجد چھت چوہدری افتخار",
  "استاد سید خرم شاہ چھت حسن شاہ",
  "استاد لالہ مظہر",
  "استاد پپو چھت راحیل گجر",
  "استاد چوہدری نواز چھت میاں اقبال",
  "اشرف بھٹی",
  "باوا عرفان علی",
  "جمیل کھٹانہ",
  "حاجی نثار",
  "خرم بٹ اینڈ قاسم بٹ",
  "خرم شہزاد",
  "راجہ فیصل",
  "رخسار عرف مٹھو گجر",
  "سید ارشد شاہ",
  "سید امتیاز شاہ",
  "سید شازیب اسجد",
  "شاہد مغل",
  "شیخ عثمان",
  "شیر علی",
  "عدنان کیانی",
  "فاروق بٹ",
  "فیصل گجر",
  "مانی گجر چھت احمد رضا",
  "محمّد آصف",
  "مرزا ارشد",
  "میاں افنان شیراز",
  "میاں عمیر نمبردار",
  "میسم علی",
  "وسیم بلا",
  "چوھدری اختر",
  "چوہدری راسب",
  "چوہدری احسان گورسی",
  "چوہدری اعجاز",
  "چوہدری ایذد مانی ہ",
  "چوہدری بلال اصغر",
  "چوہدری جواد",
  "چوہدری سجاد",
  "چوہدری سلمان مہر",
  "چوہدری سلیم",
  "چوہدری شعیب بجار",
  "چوہدری شہباز",
  "چوہدری عادل",
  "چوہدری عباس",
  "چوہدری عبدالستار",
  "چوہدری عثمان",
  "چوہدری عرفان پاگ بند",
  "چوہدری علی رضا کھٹانہ",
  "چوہدری عمران مانی",
  "چوہدری غضنفر",
  "چوہدری فیصل گجر",
  "چوہدری قمر",
  "چوہدری نبیل گورسی",
  "چوہدری نوید گورسی",
  "چوہدری یاسر نمبردار",
];
let cities = [
  "دھڑ",
  "اکیہ",
  "علی چک",
  "رجادی",
  "لالہ موسیٰ",
  "میکن",
  "باغ سیداں",
  "ملک پور",
  "ڈلہ",
  "برنالی",
  "علی چک",
  "ہیل",
  "چک پیرانہ",
  "ٹھیکریاں",
  "علی چک",
  "چک پیرانہ",
  "علی چک",
  "ڈلہ",
  "دھمالی سیداں",
  "چک رجادی",
  "چک رجادی",
  "باہر وال",
  "لالہ موسیٰ",
  "ٹھیکریاں",
  "پنجن کسانہ",
  "دھڑ",
  "شاہ جہانیاں",
  "پنجن کسانہ",
  "ملکپور",
  "ڈلہ",
  "لالہ موسیٰ",
  "دھڑ",
  "چک پرانا",
  "علی چک",
  "جنڈانوالہ",
  "رجادی",
  "چک پیرانہ",
  "چک پیرانہ",
  "شاہجہانیاں ہ",
  "کھوریاں",
  "راجادی",
  "جاتریا",
  "باہر وال",
  "گنجہ",
  "چک رجادی",
  "جاتریا",
  "میکن",
  "رجادی",
  "جاتریا",
  "مغلیوالی",
  "علی چک",
  "ڈلہ",
  "کھو ڑیاں",
  "چک پیرانہ",
  "رجادی",
  "کھوریاں",
  "چک پیرانہ",
  "چک پیرانہ",
  "چک رجادی",
];

function addRows() {
  let tableBodyEl = document.querySelector("main > table > tbody");
  names.forEach((name, index) => {
    let html = `<tr>
    <td>${index + 1}</td>
    <td>
      <img
        src="./assets/imgs/avatar/(${index + 1}).jpg"
        alt="${name}"
      />
    </td>
    <td class="name">
      <span>${name}</span>
      <br />
      <span>${cities[index]}</span>
    </td>
    <td>0</td>
    <td>00:00:00</td>
    <td>00:00:00</td>
  </tr>`;
    tableBodyEl.innerHTML += html;
  });
}

addRows();
