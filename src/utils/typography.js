import Typography from "typography";

const typography = new Typography({
    baseFontSize: "16px",
    googleFonts: [
        {
            name: 'Montserrat',
            styles: [
                '800',
                '300',
            ],
        },
        {
            name: 'Merriweather',
            styles: [
                '300',
            ],
        },
    ],
    headerFontFamily: [
        "Montserrat",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: [
        "Merriweather",
        "Georgia",
        "serif",
    ],
});

export default typography;
