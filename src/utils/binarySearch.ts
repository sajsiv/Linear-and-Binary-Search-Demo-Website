import dictionary from "../interfaces/dictionaryInterface";

export default function BinarySearch(
  dictionary: dictionary[],
  searchTerm: string
) {
  const capitalisedSearchTerm = searchTerm.toUpperCase()
  let middle = Math.floor(dictionary.length / 2);
  let left = 0;
  let right = dictionary.length - 1;
  const start = window.performance.now();
  while (left <= right) {
      middle = Math.floor((right + left)/2)
      if (dictionary[middle].word === capitalisedSearchTerm){
        const runtime = window.performance.now() - start;
        let resultString = ""
        for (const [key, value] of Object.entries({
            defintion: dictionary[middle].definitions[0],
            runtime: runtime,
            units: "milliseconds"
        }))
        resultString += `${key}: ${value}\n`
        return resultString
        } else if (dictionary[middle].word < capitalisedSearchTerm){
            left = middle + 1
        } else if (dictionary[middle].word > capitalisedSearchTerm){
            right = middle - 1
        }
      }
      const nullRuntime = window.performance.now() - start
      let resultString = ""
      for (const [key, value] of Object.entries({
  defintion: "Not found",
  runtime: nullRuntime,
  units: "milliseconds", 
  }))
  {
  resultString += `${key}: ${value}\n`
  }
  
      return resultString 
  }
