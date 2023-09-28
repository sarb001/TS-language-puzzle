/// <reference types="vite/client" />

type LangType = "hi" | "es" | "fr" | "ja" ;

type WordType = {
    word : string;
    meaning : string;
    options : string[];
}

interface StateType {
    loading : boolean;
    results  : string[];
    words   : WordType[];
    error?  : string;
}

type FetchDataType = {
    translations : {            // array of objects ( translations )
        text : string;
    }[];
}