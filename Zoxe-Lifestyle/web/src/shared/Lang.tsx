import { useState, useEffect } from "react";
import { fetchNui } from "../functions/fetchNui";
import { useNuiEvent } from "../functions/useNuiEvent";

interface LangComponent {
    [key: string]: string;
}

const LangData: LangComponent = {
    Test: "Test",
};

const Lang = () => {
    const [Lang, SetLang] = useState<LangComponent>(LangData);

    useNuiEvent<LangComponent>(`Zoxe_Lifestyle:Lang`, (data) => {
        SetLang(data);
    });

    useEffect(() => {
        fetchNui<LangComponent>('ui:Lang')
            .then(data => {
                SetLang(data);
            })
            .catch(error => {
                console.error('Error fetching language data:', error);
            });
    }, []);

    return Lang;
};

export default Lang;
