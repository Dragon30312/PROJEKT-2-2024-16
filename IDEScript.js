function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML  = htmlCode + '<style>' + cssCode + '</style>';
    output.contentWindow.eval(jsCode);
}

//syntax highlighting nie udalo mi sie zainplementowac, zabraklo mi czasu :/. ale bylem blisko tym kodem:
// function highlightCode(code, language) {
//     if (language === "html") {
//         return code.replace(/(&lt;\/?[\w\s="/.':;#-\/]+&gt;)/g, '<span class="keyword">$1</span>');
//     } else if (language === "css") {
//         return code.replace(/([{}])/g, '<span class="keyword">$1</span>')
//             .replace(/(["'][^"']*["'])/g, '<span class="string">$1</span>')
//             .replace(/(\/\*[^*]*\*+([^/*][^*]*\*+)*\/)/g, '<span class="comment">$1</span>');
//     } else if (language === "js") {
//         return code.replace(/(\b(function|return|if|else|var|let|const)\b)/g, '<span class="keyword">$1</span>')
//             .replace(/(["'][^"']*["'])/g, '<span class="string">$1</span>')
//             .replace(/(\/\/[^\n]*\n)/g, '<span class="comment">$1</span>')
//             .replace(/(\/\*[^*]*\*+([^/*][^*]*\*+)*\/)/g, '<span class="comment">$1</span>');
//     }
// }
//
// function applyHighlighting(editorId, language) {
//     const editor = document.getElementById(editorId);
//     const code = editor.innerText;
//     const highlightedCode = highlightCode(escapeHtml(code), language);
//     editor.innerHTML = `<span class="highlight">${highlightedCode}</span>`;
// }
//
// function escapeHtml(code) {
//     return code.replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;');
// }
//
// document.getElementById("html-code").addEventListener("input", () => {
//     applyHighlighting("html-code", "html");
//     run();
// });
// document.getElementById("css-code").addEventListener("input", () => {
//     applyHighlighting("css-code", "css");
//     run();
// });
// document.getElementById("js-code").addEventListener("input", () => {
//     applyHighlighting("js-code", "js");
//     run();
// });
//
//
// applyHighlighting("html-code", "html");
// applyHighlighting("css-code", "css");
// applyHighlighting("js-code", "js");