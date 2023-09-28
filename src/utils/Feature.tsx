import axios from "axios";
import _ from "lodash";
import { generate } from 'random-words' ;



 const generateMCQ = ( 
    meaning : {
        Text : string
    }[],
    idx : number) : string[] => {

        // Correct ans  for Word
        const correctAns = meaning[idx].Text ;

        // All 3 wrong answers 
        const allMeaningExceptForCorrect = meaning.filter((i) => i.Text !== correctAns);

        // now Shuffle it here randomly  
        const incorrectOptions : string[] =
         _.sampleSize(allMeaningExceptForCorrect,3).map((i) => i.Text);

        const mcqOptions = _.shuffle([...incorrectOptions , correctAns]);

         return mcqOptions;
 }


 const translateWords = async(params : LangType) => {
    try{
         const words = generate(8).map((i) => ({                     // words generated normally 
             Text : i,
         }));

         console.log(' Random Words to be Converted  -',words[0]);

          const response  = await  axios.post("https://microsoft-translator-text.p.rapidapi.com/translate" , 
          words , 
                {
                        params: {
                            'to[0]': params,
                            'api-version': '3.0',
                            profanityAction: 'NoAction',
                            textType: 'plain'
                        },

                        headers: {
                            'content-type': 'application/json',
                            'X-RapidAPI-Key': '03abedefd0msh9a549c33e0fb11ep15e587jsne2b4cdb753e4',
                            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                        },

                })
            //  console.log('data is -',data[0].translations[0].text);

            const recieve : FetchDataType[] = response.data;
            const arr : WordType[] = recieve.map((i,idx) => {

                const options: string[] = generateMCQ(words,idx);

                 return {
                    word    : i.translations[0].text,                  // sehat in hindi
                    meaning : words[idx].Text,                      // Health
                    options,
                 }
            })

            return arr;

    }
    catch(error){
        console.log('Error is -',error);
        throw new Error(" Some Error ");
    }
}

export default translateWords;