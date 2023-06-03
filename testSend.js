const sentences = [
  "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
  "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
  "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.",
];

const calcSentences = (dataSentences) => {
  let tempData = "";

  for (i = 0; i < dataSentences.length; i++) {
    tempData += dataSentences[i].replace(/\./g, "").replace(/\,/g, "");
  }

  return (
    `Preview Kalimat yang telah diolah : \n\n` +
    `${tempData} \n\n` +
    `Jumlah kata : ${tempData.split(" ").length} \n` +
    `Jumlah keseluruhan karakter :  ${tempData.length} \n`
  );
};

console.log(calcSentences(sentences));
