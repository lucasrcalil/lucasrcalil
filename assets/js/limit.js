// const aboutElement = document.getElementById("about");
// const originalContent = aboutElement.innerHTML;
// const maxLength = 500;

// // Obter o conteúdo do elemento sem as tags <br>
// const contentWithoutBreaks = originalContent.replace(/<br\s*\/?>/gi, "");

// // Verificar se o conteúdo precisa ser limitado
// if (contentWithoutBreaks.length > maxLength) {
//   // Limitar o conteúdo a 700 caracteres, garantindo que as palavras não sejam cortadas
//   const limitedContent = contentWithoutBreaks.substring(0, maxLength).trim();

//   // Verificar se o conteúdo limitado termina com uma palavra incompleta
//   const lastSpaceIndex = limitedContent.lastIndexOf(" ");
//   const finalContent =
//     lastSpaceIndex !== -1
//       ? limitedContent.substring(0, lastSpaceIndex).trim() + "..." // Adicionar as reticências
//       : limitedContent + "..."; // Caso não haja palavras incompletas

//   // Adicionar as tags <br> de volta ao conteúdo limitado
//   const formattedContent = finalContent.replace(/\n/g, "<br>");

//   // Definir o conteúdo limitado no elemento "about"
//   aboutElement.innerHTML = formattedContent;
// }
