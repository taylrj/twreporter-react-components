import DarkBgIcon from '../../static/link-arrow-darkbg.svg'
import Link from 'react-router-dom/Link'
import LinkIcon from '../../static/link-arrow.svg'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../styles/common-variables'

const Wrapper = styled.div`
  font-size: ${fonts.size.base};
  color: ${(props) => { return props.isDarkBg ? colors.lightBlue : colors.blue }};
  cursor: pointer;
  display: inline-block;
  > span {
    padding-right: 7px;
  }
  svg {
    width: 7px;
    margin-bottom: -1px;
    margin-left: 7px;
    transition: 0.3s all ease-out;
  }
  &:hover {
    > svg {
      transform: translateX(5px);
    }
  }
`

const TextSpan = styled.span`
  color: ${(props) => { return props.isDarkBg ? colors.lightBlue : colors.blue }};
`

const A = styled.a`
  text-decoration: none;
  &:visited {
    color: ${(props) => { return props.isDarkBg ? colors.lightBlue : colors.blue }};
  }
`

const BottomLink = (props) => {
  const { path, isDarkBg, text, target, redirect } = props
  return (
    <Wrapper
      isDarkBg={isDarkBg}
    >
      {redirect ? (<A href={path} target={target} rel="noreferrer noopener" isDarkBg={isDarkBg}><TextSpan>{text}</TextSpan></A>) :
        (<Link to={`/${path}`}><TextSpan>{text}</TextSpan></Link>)}
      {isDarkBg ? <LinkIcon /> : <DarkBgIcon />}
    </Wrapper>
  )
}

BottomLink.propTypes = {
  isDarkBg: PropTypes.bool,
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
  target: PropTypes.string,
  redirect: PropTypes.bool,
}

BottomLink.defaultProps = {
  isDarkBg: false,
  path: '',
  target: '',
  redirect: false,
}

export default BottomLink

export {
  A,
  TextSpan,
  Wrapper,
  LinkIcon,
  DarkBgIcon,
}
