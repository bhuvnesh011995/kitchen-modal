import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useStateManager } from "react-select";
import { getLanguageById } from "../utility/language/language";
import { IntlProvider } from "react-intl";


const Settingcontext = createContext();

export default function SettingProvider({children}) {
    const [languge,setLanguage] = useState()

    

    const getLanguageData = useCallback(async (id)=>{
        try {
            let res = await getLanguageById(id)
            if(res.status===200){
                setLanguage(res.data)
            }else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    },[])

    return(
        <Settingcontext.Provider value={{getLanguageData}}>
            <IntlProvider messages={languge??{}}>
                {children}
            </IntlProvider>
        </Settingcontext.Provider>
    )
};


const useSetting =()=>useContext(Settingcontext)

export {useSetting}