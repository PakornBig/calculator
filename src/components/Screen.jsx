import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import CustomResponsiveText from "../context/CustomResponsiveText";

const Screen = () => {
    const { calc } = useContext(CalcContext);

    const initialFontSize = 30;
    const fontSize = calc.num ? Math.min(initialFontSize, Math.floor(initialFontSize * 0.8)) : initialFontSize;

    return (
        <CustomResponsiveText className="screen" maxFontSize={initialFontSize} minFontSize={fontSize}>
            {calc.num ? calc.num : calc.res}
        </CustomResponsiveText>
    );
};

export default Screen;
