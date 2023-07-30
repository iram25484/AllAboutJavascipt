
const zodiac=document.getElementById("zodiac");

const body=document.body;
const getcolor=()=>{
switch (zodiac.value) {
    case "taurus":
        body.style.backgroundColor= "#7fffd4";
        break;

   case "aries":
    body.style.backgroundColor="#ffc17f" ;
    break;
       
   case "gemini":
    body.style.backgroundColor="#947fff" ;
    break;
       
    case "cancer":
        body.style.backgroundColor="#96ff7f" ;
        break;
       
        case "leo":
            body.style.backgroundColor= "#f2ff7f";
            break;
       
            case "virgo":
                body.style.backgroundColor="#e01327" ;
                break;
       
                case "libra":
                    body.style.backgroundColor= "#13d6e0";
                    break;
       
                    case "scorpio":
                        body.style.backgroundColor= "#2113e0";
                        break;
       
                        case "pisces":
                            body.style.backgroundColor="#c113e0" ;
                            break;
       
                            case "capricorn":
                                body.style.backgroundColor="#13e024" ;
                                break;
                                                                                                                


    default:
        break;
}
}