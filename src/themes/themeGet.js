import { themeGet } from '@styled-system/theme-get'

const luminanceThreshold = 0.75

const convertHexToRGB = (colorInHex) => {
  colorInHex = colorInHex.substr(1)
  return {
    R: parseInt(colorInHex.substr(0, 2), 16),
    G: parseInt(colorInHex.substr(2, 2), 16),
    B: parseInt(colorInHex.substr(4, 2), 16)
  }
}

const convertRGBToHex = (colorInRGB) => {
  const padValue = (number, length) => {
    var str = '' + number

    while (str.length < length) {
      str = '0' + str
    }

    return str
  }

  const convertIntToHex = (int) => (
    padValue(Math.min(Math.max(Math.round(int), 0), 255).toString(16), 2)
  )

  return `#${convertIntToHex(colorInRGB.R)}${convertIntToHex(colorInRGB.G)}${convertIntToHex(colorInRGB.B)}`
}

const calcColorShade = (colorInHex, shadePercentage) => {
  const colorInRGB = convertHexToRGB(colorInHex)
  const shadeInRGB = {
    R: colorInRGB.R * (1 - shadePercentage),
    G: colorInRGB.G * (1 - shadePercentage),
    B: colorInRGB.B * (1 - shadePercentage)
  }
  const shadeInHex = convertRGBToHex(shadeInRGB)
  return shadeInHex
}

const calcColorTint = (colorInHex, tintPercentage) => {
  const colorInRGB = convertHexToRGB(colorInHex)
  const tintInRGB = {
    R: colorInRGB.R + (255 - colorInRGB.R) * tintPercentage,
    G: colorInRGB.G + (255 - colorInRGB.G) * tintPercentage,
    B: colorInRGB.B + (255 - colorInRGB.B) * tintPercentage
  }
  const tintInHex = convertRGBToHex(tintInRGB)
  return tintInHex
}

const calcColorLuminance = (colorInHex) => {
  const colorInRGB = convertHexToRGB(colorInHex)
  // http://www.w3.org/TR/AERT#color-contrast
  return ((0.299 * colorInRGB.R) + (0.587 * colorInRGB.G) + (0.114 * colorInRGB.B)) / 255
}

themeGet.fontFamily = (fontFamilyPath, fallbackFontFamily = 'sans-serif') => props => (
  themeGet(`fonts.${fontFamilyPath}`, fallbackFontFamily)(props)
)

themeGet.fontSize = (fontSizePath, fallbackFontSize = '1em') => props => (
  themeGet(`fontSizes.${fontSizePath}`, fallbackFontSize)(props)
)

themeGet.fontWeight = (fontWeightPath, fallbackFontWeight = 400) => props => (
  themeGet(`fontWeights.${fontWeightPath}`, fallbackFontWeight)(props)
)

themeGet.lineHeight = (lineHeightPath, fallbackLineHeight = '1.5') => props => (
  themeGet(`lineHeights.${lineHeightPath}`, fallbackLineHeight)(props)
)

themeGet.border = (borderPath, fallbackBorder = '1px solid black') => props => (
  themeGet(`borders.${borderPath}`, fallbackBorder)(props)
)

themeGet.borderRadius = (borderRadiusPath, fallbackBorderRadius = '4px') => props => (
  themeGet(`radii.${borderRadiusPath}`, fallbackBorderRadius)(props)
)

themeGet.shadow = (shadowPath, fallbackShadow = '') => props => (
  themeGet(`shadows.${shadowPath}`, fallbackShadow)(props)
)

themeGet.color = (colorPath, fallbackColor = '#000000') => props => (
  themeGet(`colors.${colorPath}`, fallbackColor)(props)
)

themeGet.colorShade = (colorPath, colorShadePercentage, fallbackColor = '#000000') => props => (
  calcColorShade(themeGet(`colors.${colorPath}`, fallbackColor)(props), colorShadePercentage)
)

themeGet.colorTint = (colorPath, colorTintPercentage, fallbackColor = '#000000') => props => (
  calcColorTint(themeGet(`colors.${colorPath}`, fallbackColor)(props), colorTintPercentage)
)

themeGet.colorLuminance = (colorPath, fallbackColor = '#000000') => props => (
  calcColorLuminance(themeGet(`colors.${colorPath}`, fallbackColor)(props))
)

themeGet.colorShadeOrTint = (colorPath, colorShadeLevel, colorTintLevel, fallbackColor = '#000000') => props => {
  const luminance = calcColorLuminance(themeGet(`colors.${colorPath}`, fallbackColor)(props))
  return (luminance > luminanceThreshold)
    ? themeGet.colorShade(colorPath, colorShadeLevel)
    : themeGet.colorTint(colorPath, colorTintLevel)
}

themeGet.colorText = (colorPath, tintPercentage = 0, shadePercentage = 0, fallbackColor = '#ffffff') => props => {
  const luminance = calcColorLuminance(themeGet(`colors.${colorPath}`, fallbackColor)(props))
  return (luminance > luminanceThreshold)
    ? calcColorTint(themeGet.color('black', '#000000')(props), tintPercentage)
    : calcColorShade(themeGet.color('white', '#ffffff')(props), shadePercentage)
}

themeGet.padding = (paddingPath, fallbackPadding) => props => (
  themeGet(`space.${paddingPath}`, fallbackPadding)(props)
)

themeGet.space = themeGet.padding

export default themeGet
