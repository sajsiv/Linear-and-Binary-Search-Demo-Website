import dictionary from "../interfaces/dictionaryInterface";


export default function linearSearch (dictionary: dictionary[], searchTerm: string){
    const start = window.performance.now()
    for (let i = 0; i < dictionary.length ;i++){
        if (searchTerm.toUpperCase()===dictionary[i].word){
            const runtime = window.performance.now() - start;
            let resultString = ""
        for (const [key, value] of Object.entries({
    defintion: dictionary[i].definitions[0],
    runtime: runtime,
    units: "milliseconds"
}))
{
  resultString += `${key}: ${value}\n`
}
            return resultString
        }
    }
    const nullRuntime = window.performance.now() - start
    let resultString = ""
    for (const [key, value] of Object.entries({
defintion: "Not found",
runtime: nullRuntime,
units: "milliseconds"
}))
{
resultString += `${key}: ${value}\n`
}

    return resultString
}