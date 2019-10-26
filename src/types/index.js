import PropTypes, {
  node,
  bool,
  string,
  array,
  object,
  oneOf,
  oneOfType
} from 'prop-types'

import propTypes from '@styled-system/prop-types'

const childrenType = {
  children: node
}

const disabledType = {
  disabled: bool
}

const textAlignType = {
  textAlign: oneOf([
    'left',
    'center',
    'right',
    'justify'
  ])
}

const textTransformType = {
  textTransform: oneOf([
    'none',
    'uppercase',
    'lowercase',
    'capitalize',
    'full-width'
  ])
}

const textDecorationType = {
  textDecoration: oneOf([
    'none',
    'underline',
    'overline',
    'line-through',
    'underline overline',
    'overline underline'
  ])
}

const nowrapType = {
  nowrap: bool
}

const objectFitType = {
  objectFit: oneOf([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down'
  ])
}

const themeType = {
  theme: object
}

const cssType = {
  css: oneOfType([
    string,
    object,
    array
  ])
}

const types = {
  ...PropTypes,
  ...propTypes,
  children: {
    ...childrenType
  },
  base: {
    children: node,
    as: string
  },
  text: {
    ...textAlignType,
    ...textTransformType,
    ...textDecorationType,
    ...nowrapType
  },
  nowrap: {
    ...nowrapType
  },
  disabled: {
    ...disabledType
  },
  objectFit: {
    ...objectFitType
  },
  css: {
    ...cssType
  },
  theme: {
    ...themeType
  }
}

export default types
