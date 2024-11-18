const CustomResponsiveText = ({ maxFontSize, minFontSize, children, ...props }) => {
    const calculatedFontSize = Math.max(minFontSize, Math.min(maxFontSize, 30)); // กำหนด logic การคำนวณ

    return (
        <div
            {...props}
            style={{ fontSize: `${calculatedFontSize}px`, ...props.style }}
        >
            {children}
        </div>
    );
};

export default CustomResponsiveText;
