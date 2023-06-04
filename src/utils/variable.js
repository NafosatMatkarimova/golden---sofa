//colors

const primarycolor = '#4295E4';
const secondarycolor = '#F2F8FF';
const dark = '#161C24';
const grey = '#454F5B'
const deepDark ='#0D2436';
const light = '#ffff';
const borderColor = "#c4cdd5"

const Colors = {
    primarycolor,
    secondarycolor,
    dark,
    grey,
    deepDark,
    light,
    borderColor,
}

export const adaptiveValue = (property, startSize, minSize) => {
    const addSize = startSize - minSize;
    return `
		${property}: ${startSize}px;
		@media (max-width: 1440px) {
			${property}: calc(${minSize}px + ${addSize} * ((100vw - 420px) / (1440 - 420)));
		}
`;
};

export default Colors;