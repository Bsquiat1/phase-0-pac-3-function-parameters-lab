function introduction(name) {
    return `Hi, my name is ${name}.`;}
    console.log(introduction("Aki"));
    function introductionWithLanguage(name, language) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
      }
      console.log(introductionWithLanguage("John", "JavaScript"));
function introductionWithLanguageOptional(name, language = "javascript") {return `Hi, my name is ${name} and I am learning to program in ${language}.`;}
console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));

      

