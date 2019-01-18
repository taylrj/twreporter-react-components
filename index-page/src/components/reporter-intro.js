import AboutAuthorIcon from '../static/about-author.svg'
import AboutDonateIcon from '../static/about-donate.svg'
import AboutHiringIcon from '../static/about-hiring.svg'
import AboutSubscribeIcon from '../static/about-subscribe.svg'
import BottomLink, { Wrapper as BTWrapper, TextSpan as BTText, LinkIcon } from './common-utils/bottom-link'
import ReporterIcon from '../static/reporter-large.svg'
import React from 'react'
import SectionAnimationWrapper from './animations/section-animation-wrapper'
import SectionName from './common-utils/section-name'
import Section from './common-utils/section'
import appConfig from '../conf/app-config.json'
import sectionStrings from '../constants/section-strings'
import smoothScroll from 'smoothscroll'
import styled from 'styled-components'
import { centerBlock, finalMedia, breakPoints } from '../utils/style-utils'
import { colors, fonts } from '../styles/common-variables'
import { externalLinks } from 'shared/configs'
import { itemPlusPaddingWidthPct } from '../constants/mobile-mockup-specification'

const mobileWidth = breakPoints.mobileMaxWidth
const ContentContainer = styled(Section)`
  padding-bottom: 123px;
  color: ${colors.textGrey};
  ${finalMedia.mobile`
    padding-bottom: 0px;
  `}
`

const TopContainer = styled.div`
  padding: 0 10px 100px 10px;
  ${centerBlock}
  font-size: ${fonts.size.medium};
  max-width: 500px;
  text-align: justify;

  ${finalMedia.mobile`
    padding: 0 0 40px 0;
    max-width: ${itemPlusPaddingWidthPct}%;
    font-size: ${fonts.size.large};
  `}
`

const ReporterIconWrapper = styled.div`
  ${centerBlock}
  margin-bottom: 30px;
  width: 38px;
`

const FlexContainer = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  ${finalMedia.tablet`
    max-width: 700px;
  `}
  ${finalMedia.mobile`
    display: block;
  `}
  ${finalMedia.overDesktop`
    max-width: 1440px;
  `}
`

const Item = styled.div`
  position: relative;
  flex-shrink: 1;
  flex-basis: 150px;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  margin: 0;
  text-align: center;
  ${finalMedia.mobile`
    margin: 0 auto 60px auto;
  `}
  ${finalMedia.overDesktop`
    flex-basis: 220px;
  `}
`

const ItemTitle = styled.h3`
  margin: 0;
  font-size: ${fonts.size.xlarge};
  font-weight: ${fonts.weight.bold};
  ${finalMedia.mobile`
    margin: 6px;
  `}
  color: ${colors.textGrey};
`

const ItemIconContainer = styled.div`
  width: 82px;
  height: 82px;
  margin: 40px auto;
  ${finalMedia.mobile`
    width: 60px;
    height: 60px;
    order: -1;
    margin: 5px auto;
  `}
`

// 320 is the iPhone5 mobile width
// 186 is the width on the mockup
const mobileDescPct = ((186 / 320) * 100)

const ItemDescription = styled.div`
  line-height: 1.5;
  font-size: ${fonts.size.medium};
  ${finalMedia.mobile`
    line-height: 1.43;
    font-size: ${fonts.size.large};
    max-width: ${`${mobileDescPct}%`};
    margin: 0 auto;
  `}
`

const ItemLink = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: -43px;
  ${finalMedia.mobile`
    position: relative;
    margin-top: 20px;
    bottom: 0;
  `}
`

class ReporterIntro extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleNewsLetterLinkClick = this._handleNewsLetterLinkClick.bind(this)
  }

  _handleNewsLetterLinkClick() {
    /* WORKAROUND
     * react-router does not scroll the target element into view
     * when you are using anchor links like
     * <Link to="#news-letter" />
     * Hence, the following code is a navie way to scroll to
     * news-letter section
     */
    const element = document.getElementById('news-letter')
    if (element) {
      const offsetTop = element.offsetTop
      return smoothScroll(offsetTop)
    }
    return null
  }

  render() {
    const authorHref = 'authors'
    const donationHref = externalLinks.monthlyDonation
    const hiringHref = 'a/hiring-job-description'
    return (
      <ContentContainer
        mobileWidth={mobileWidth}
      >
        <SectionName
          mobileWidth={mobileWidth}
        >
          <span>{sectionStrings.donation}</span>
        </SectionName>
        <TopContainer>
          <ReporterIconWrapper>
            <ReporterIcon />
          </ReporterIconWrapper>
          <span itemProp="description">{appConfig.description}</span>
        </TopContainer>
        <FlexContainer>
          <Item>
            <ItemTitle>作者群</ItemTitle>
            <ItemIconContainer><AboutAuthorIcon /></ItemIconContainer>
            <ItemDescription>
              透過報導認識報導者們
            </ItemDescription>
            <ItemLink><BottomLink text="前往作者群" path={authorHref} /></ItemLink>
          </Item>
          <Item>
            <ItemTitle>贊助我們</ItemTitle>
            <ItemIconContainer>
              <AboutDonateIcon />
            </ItemIconContainer>
            <ItemDescription>
              您的支持，將成為《報導者》繼續追蹤真相的動力！
            </ItemDescription>
            <ItemLink><BottomLink text="前往贊助夥伴" path={donationHref} redirect target={'_blank'} /></ItemLink>
          </Item>
          <Item>
            <ItemTitle>訂閱</ItemTitle>
            <ItemIconContainer><AboutSubscribeIcon /></ItemIconContainer>
            <ItemDescription>
              透過電子報追蹤報導者們
            </ItemDescription>
            <ItemLink>
              <BTWrapper onClick={this.handleNewsLetterLinkClick}>
                <BTText>
                  前往訂閱電子報
                </BTText>
                <LinkIcon />
              </BTWrapper>
            </ItemLink>
          </Item>
          <Item>
            <ItemTitle>加入我們</ItemTitle>
            <ItemIconContainer>
              <AboutHiringIcon />
            </ItemIconContainer>
            <ItemDescription>
              歡迎你／妳成為報導者一員
            </ItemDescription>
            <ItemLink><BottomLink text="前往徵才說明" path={hiringHref} /></ItemLink>
          </Item>
        </FlexContainer>
      </ContentContainer>
    )
  }
}

export default SectionAnimationWrapper(ReporterIntro)
