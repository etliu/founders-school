import React from 'react';
import Scrollchor from 'react-scrollchor';
import anime from 'animejs';
require('../scss/Header.scss');

class Navbar extends React.Component {
  render() {
    let animeStyle = {
      offset: -35,
    };

    return (
      <div className="nav">
        <div className="nav-inner">
          <ul className="nav-links inline">
            <li><Scrollchor to="#about" animate={animeStyle}>About</Scrollchor></li>
            <li><Scrollchor to="#speakers" animate={animeStyle}>Speakers</Scrollchor></li>
            <li><Scrollchor to="#schedule" animate={animeStyle}>Schedule</Scrollchor></li>
            <li><Scrollchor to="#faq" animate={animeStyle}>Faq</Scrollchor></li>
            <li><Scrollchor to="#sponsors" animate={animeStyle}>Sponsors</Scrollchor></li>
          </ul>

        </div>
      </div>
    )
  }
}

class LogoSVG extends React.Component {
  render() {
    return (
        <svg width="248" height="328" viewBox="0 0 448 592" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>FS_Logo</title>
          <desc>Created using Figma</desc>
          <g id="Canvas" transform="translate(4922 1783)">
            <g id="FS_Logo">
              <g id="FOUNDERS">
                <use xlinkHref="#path0_fill" transform="translate(-4929 -1359)" fill="#309CAB"/>
              </g>
              <g id="SCHOOL">
                <use xlinkHref="#path1_fill" transform="translate(-4929 -1293)" fill="#309CAB"/>
              </g>
              <g id="Logomark">
                <g id="Subtract">
                  <use xlinkHref="#path2_fill" transform="translate(-4913 -1783)" fill="#309CAB"/>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <path id="path0_fill" d="M 7.905 22.835L 42.67 22.835L 42.67 31.505L 17.935 31.505L 17.935 46.04L 40.545 46.04L 40.545 54.625L 17.935 54.625L 17.935 78L 7.905 78L 7.905 22.835ZM 74.7044 21.73C 78.3877 21.73 81.7594 22.3533 84.8194 23.6C 87.8794 24.79 90.5144 26.575 92.7244 28.955C 97.371 33.9417 99.6944 41.0817 99.6944 50.375C 99.6944 59.725 97.371 66.95 92.7244 72.05C 88.3044 76.81 82.2694 79.19 74.6194 79.19C 67.026 79.19 61.0194 76.7533 56.5994 71.88C 51.9527 66.8367 49.6294 59.6683 49.6294 50.375C 49.6294 40.9683 51.9527 33.7717 56.5994 28.785C 60.9627 24.0817 66.9977 21.73 74.7044 21.73ZM 89.3244 50.545C 89.3244 44.1983 87.9927 39.325 85.3294 35.925C 82.7227 32.4683 79.181 30.74 74.7044 30.74C 70.2277 30.74 66.6577 32.4683 63.9944 35.925C 61.331 39.325 59.9994 44.1983 59.9994 50.545C 59.9994 56.835 61.331 61.68 63.9944 65.08C 66.6577 68.4233 70.2277 70.095 74.7044 70.095C 79.181 70.095 82.7227 68.4233 85.3294 65.08C 87.9927 61.68 89.3244 56.835 89.3244 50.545ZM 119.892 22.835L 119.892 57.175C 119.892 61.7083 121.025 64.9667 123.292 66.95C 125.615 68.9333 128.59 69.925 132.217 69.925C 135.844 69.925 138.79 68.9333 141.057 66.95C 143.38 64.9667 144.542 61.7083 144.542 57.175L 144.542 22.835L 154.572 22.835L 154.572 57.175C 154.572 64.2017 152.617 69.6417 148.707 73.495C 144.797 77.2917 139.3 79.19 132.217 79.19C 125.134 79.19 119.637 77.2917 115.727 73.495C 111.817 69.6417 109.862 64.2017 109.862 57.175L 109.862 22.835L 119.892 22.835ZM 179.343 22.835L 203.653 61.935L 203.653 22.835L 213.683 22.835L 213.683 78L 203.483 78L 178.408 37.54L 178.408 78L 168.378 78L 168.378 22.835L 179.343 22.835ZM 246.476 22.835C 254.863 22.835 261.634 25.3283 266.791 30.315C 272.004 35.3017 274.611 42.0167 274.611 50.46C 274.611 58.8467 272.004 65.5333 266.791 70.52C 261.634 75.5067 254.863 78 246.476 78L 228.541 78L 228.541 22.835L 246.476 22.835ZM 238.656 68.905L 246.476 68.905C 251.689 68.905 255.911 67.1483 259.141 63.635C 262.201 60.235 263.731 55.8433 263.731 50.46C 263.731 44.9633 262.201 40.515 259.141 37.115C 255.968 33.6583 251.746 31.93 246.476 31.93L 238.656 31.93L 238.656 68.905ZM 285.963 22.835L 321.493 22.835L 321.493 31.505L 295.993 31.505L 295.993 46.04L 319.878 46.04L 319.878 54.71L 295.993 54.71L 295.993 69.245L 321.493 69.245L 321.493 78L 285.963 78L 285.963 22.835ZM 375.972 39.75C 375.972 43.66 374.867 47.0033 372.657 49.78C 370.447 52.5567 367.274 54.4833 363.137 55.56L 377.927 78L 364.837 78L 352.682 56.495L 345.032 56.495L 345.032 78L 335.002 78L 335.002 22.835L 355.402 22.835C 361.919 22.835 366.991 24.3933 370.617 27.51C 374.187 30.5133 375.972 34.5933 375.972 39.75ZM 354.467 49.78C 358.151 49.78 360.927 48.9583 362.797 47.315C 364.667 45.615 365.602 43.405 365.602 40.685C 365.602 37.9083 364.752 35.6983 363.052 34.055C 361.352 32.355 358.802 31.505 355.402 31.505L 345.032 31.505L 345.032 49.78L 354.467 49.78ZM 385.539 28.615C 385.539 26.915 386.191 25.4983 387.494 24.365C 388.798 23.175 390.554 22.58 392.764 22.58C 395.031 22.58 396.873 23.4867 398.289 25.3C 399.763 27.0567 400.499 29.2667 400.499 31.93C 400.499 34.5367 399.564 37.115 397.694 39.665C 395.881 42.215 393.444 44.255 390.384 45.785L 383.414 41.96C 387.778 39.75 390.413 37.2567 391.319 34.48C 389.676 34.1967 388.288 33.5733 387.154 32.61C 386.078 31.6467 385.539 30.315 385.539 28.615ZM 440.066 38.05C 439.159 33.2333 435.759 30.825 429.866 30.825C 426.976 30.825 424.709 31.42 423.066 32.61C 421.479 33.7433 420.686 35.1317 420.686 36.775C 420.686 38.4183 421.196 39.7217 422.216 40.685C 423.292 41.5917 424.936 42.4417 427.146 43.235L 439.131 47.91C 443.211 49.4967 446.356 51.5083 448.566 53.945C 450.776 56.325 451.881 59.3283 451.881 62.955C 451.881 67.9417 450.011 71.9083 446.271 74.855C 442.531 77.745 437.204 79.19 430.291 79.19C 424.171 79.19 419.212 77.6883 415.416 74.685C 411.166 71.3983 408.927 66.7517 408.701 60.745L 418.646 60.745C 418.646 65.2783 420.997 68.14 425.701 69.33C 427.117 69.7267 428.987 69.925 431.311 69.925C 433.634 69.925 435.787 69.3583 437.771 68.225C 439.754 67.035 440.746 65.4767 440.746 63.55C 440.746 61.5667 440.207 60.065 439.131 59.045C 438.054 57.9683 436.297 56.9767 433.861 56.07L 422.896 51.735C 418.646 50.0917 415.387 48.165 413.121 45.955C 410.854 43.745 409.721 40.685 409.721 36.775C 409.721 32.185 411.506 28.5583 415.076 25.895C 418.702 23.1183 423.604 21.73 429.781 21.73C 436.014 21.73 440.802 23.175 444.146 26.065C 447.546 28.8983 449.501 32.8933 450.011 38.05L 440.066 38.05Z"/>
            <path id="path1_fill" d="M 47.306 48.77C 46.1433 42.5933 41.7833 39.505 34.226 39.505C 30.52 39.505 27.6133 40.268 25.506 41.794C 23.4713 43.2473 22.454 45.0277 22.454 47.135C 22.454 49.2423 23.108 50.9137 24.416 52.149C 25.7967 53.3117 27.904 54.4017 30.738 55.419L 46.107 61.414C 51.339 63.4487 55.372 66.0283 58.206 69.153C 61.04 72.205 62.457 76.0563 62.457 80.707C 62.457 87.1017 60.059 92.1883 55.263 95.967C 50.467 99.673 43.6363 101.526 34.771 101.526C 26.923 101.526 20.5647 99.6003 15.696 95.749C 10.246 91.5343 7.37567 85.5757 7.085 77.873L 19.838 77.873C 19.838 83.6863 22.8537 87.356 28.885 88.882C 30.7017 89.3907 33.0997 89.645 36.079 89.645C 39.0583 89.645 41.8197 88.9183 44.363 87.465C 46.9063 85.939 48.178 83.9407 48.178 81.47C 48.178 78.9267 47.4877 77.001 46.107 75.693C 44.7263 74.3123 42.4737 73.0407 39.349 71.878L 25.288 66.319C 19.838 64.2117 15.6597 61.741 12.753 58.907C 9.84633 56.073 8.393 52.149 8.393 47.135C 8.393 41.249 10.682 36.5983 15.26 33.183C 19.9107 29.6223 26.1963 27.842 34.117 27.842C 42.1103 27.842 48.2507 29.695 52.538 33.401C 56.898 37.0343 59.405 42.1573 60.059 48.77L 47.306 48.77ZM 112.673 27.842C 117.033 27.842 120.811 28.387 124.009 29.477C 127.206 30.4943 129.967 31.9477 132.293 33.837C 136.871 37.543 139.85 42.7387 141.231 49.424L 127.497 51.931C 126.334 48.225 124.517 45.2457 122.047 42.993C 119.649 40.6677 116.633 39.505 113 39.505C 108.058 39.505 104.062 41.576 101.01 45.718C 97.7398 50.2233 96.1048 56.4727 96.1048 64.466C 96.1048 72.3867 97.5581 78.5997 100.465 83.105C 103.371 87.5377 107.332 89.754 112.346 89.754C 117.36 89.754 121.138 88.555 123.682 86.157C 126.225 83.6863 127.497 80.5253 127.497 76.674L 141.34 76.674C 141.34 84.5947 138.796 90.735 133.71 95.095C 128.696 99.3823 121.792 101.526 113 101.526C 103.626 101.526 96.1775 98.256 90.6548 91.716C 85.0595 85.0307 82.2618 75.9473 82.2618 64.466C 82.2618 52.8393 85.1321 43.756 90.8728 37.216C 96.3955 30.9667 103.662 27.842 112.673 27.842ZM 176.851 29.259L 176.851 58.798L 207.698 58.798L 207.698 29.259L 220.56 29.259L 220.56 100L 207.698 100L 207.698 70.025L 176.851 70.025L 176.851 100L 163.989 100L 163.989 29.259L 176.851 29.259ZM 275.72 27.842C 280.443 27.842 284.767 28.6413 288.691 30.24C 292.615 31.766 295.994 34.055 298.828 37.107C 304.786 43.5017 307.766 52.6577 307.766 64.575C 307.766 76.565 304.786 85.83 298.828 92.37C 293.16 98.474 285.421 101.526 275.611 101.526C 265.873 101.526 258.171 98.4013 252.503 92.152C 246.544 85.6847 243.565 76.4923 243.565 64.575C 243.565 52.5123 246.544 43.2837 252.503 36.889C 258.098 30.8577 265.837 27.842 275.72 27.842ZM 294.468 64.793C 294.468 56.6543 292.76 50.405 289.345 46.045C 286.002 41.6123 281.46 39.396 275.72 39.396C 269.979 39.396 265.401 41.6123 261.986 46.045C 258.57 50.405 256.863 56.6543 256.863 64.793C 256.863 72.859 258.57 79.072 261.986 83.432C 265.401 87.7193 269.979 89.863 275.72 89.863C 281.46 89.863 286.002 87.7193 289.345 83.432C 292.76 79.072 294.468 72.859 294.468 64.793ZM 357.755 27.842C 362.478 27.842 366.802 28.6413 370.726 30.24C 374.65 31.766 378.029 34.055 380.863 37.107C 386.822 43.5017 389.801 52.6577 389.801 64.575C 389.801 76.565 386.822 85.83 380.863 92.37C 375.195 98.474 367.456 101.526 357.646 101.526C 347.909 101.526 340.206 98.4013 334.538 92.152C 328.579 85.6847 325.6 76.4923 325.6 64.575C 325.6 52.5123 328.579 43.2837 334.538 36.889C 340.133 30.8577 347.872 27.842 357.755 27.842ZM 376.503 64.793C 376.503 56.6543 374.795 50.405 371.38 46.045C 368.037 41.6123 363.496 39.396 357.755 39.396C 352.014 39.396 347.436 41.6123 344.021 46.045C 340.606 50.405 338.898 56.6543 338.898 64.793C 338.898 72.859 340.606 79.072 344.021 83.432C 347.436 87.7193 352.014 89.863 357.755 89.863C 363.496 89.863 368.037 87.7193 371.38 83.432C 374.795 79.072 376.503 72.859 376.503 64.793ZM 425.511 88.773L 454.614 88.773L 454.614 100L 412.649 100L 412.649 29.259L 425.511 29.259L 425.511 88.773Z"/>
            <path id="path2_fill" fill-rule="evenodd" d="M 59.3386 355.4C 8.80199 303.372 -13.2571 226.491 8.14183 151.759C 25.5193 91.0722 67.9631 44.3511 121.012 19.619C 122.522 21.8423 124.033 24.0414 125.513 26.1963L 125.551 26.252L 125.557 26.2603L 125.657 26.406C 126.635 27.8293 127.598 29.2327 128.54 30.6106C 134.013 38.6223 138.647 45.6513 141.29 51.1162C 143.656 56.007 145.392 62.477 146.906 70.569C 148.137 77.1455 149.174 84.5124 150.322 92.6706L 150.325 92.6891L 150.326 92.7005C 150.586 94.548 150.852 96.4362 151.127 98.365C 154.09 119.152 158.046 144.044 167.326 170.534C 183.549 216.835 215.874 267.555 286.58 310.812C 280.689 309.625 274.472 308.989 268.22 309.032C 250.342 309.157 231.203 314.864 218.245 330.37C 212.305 337.477 207.394 343.882 203.121 349.566C 202.052 350.987 201.03 352.355 200.044 353.674L 200.038 353.682C 197.054 357.673 194.41 361.21 191.863 364.393C 185.126 372.812 179.675 377.954 172.319 380.866C 155.878 387.376 135.877 386.752 114.483 380.745C 96.2493 375.624 77.3288 366.678 59.3386 355.4ZM 281.693 320.083C 267.481 321.451 253.366 327.121 244.033 339.306C 236.865 348.664 232.33 359.687 227.923 370.4C 219.95 389.78 212.395 408.144 190.427 413.793C 186.188 414.883 182.03 415.735 177.935 416.363C 169.209 415.026 160.469 413.122 151.76 410.628C 131.07 404.703 112.003 395.865 94.8777 384.687C 100.524 386.888 106.171 388.797 111.78 390.372C 134.376 396.718 156.796 397.767 176 390.164C 185.812 386.28 192.6 379.478 199.671 370.64C 202.324 367.325 205.101 363.611 208.108 359.589L 208.134 359.554C 209.102 358.259 210.094 356.931 211.114 355.575C 215.342 349.952 220.136 343.701 225.918 336.783C 236.403 324.236 252.287 319.143 268.29 319.032C 272.874 319 277.388 319.379 281.693 320.083ZM 133.562 20.2516C 132.49 18.6908 131.411 17.1201 130.336 15.5437C 172.281 -1.59458 220.07 -5.29941 267.01 8.14187C 362.596 35.5126 423.535 125.068 418.477 220.302L 417.114 216.719C 416.219 214.43 415.204 211.73 414.058 208.68C 394.889 157.664 338.94 8.76309 190.428 48.7074C 198.097 64.6773 197.057 81.8918 197.057 81.8918C 197.477 84.3521 197.147 88.9286 196.689 95.2567C 194.27 128.714 188.309 211.135 271.145 288.661C 216.683 249.899 190.58 206.663 176.764 167.227C 167.825 141.713 163.975 117.635 161.027 96.9538C 160.76 95.0789 160.499 93.2267 160.242 91.4005C 159.091 83.2176 158.014 75.5585 156.736 68.7299C 155.177 60.3958 153.248 52.8728 150.292 46.7619C 147.268 40.5089 142.19 32.8636 136.797 24.9694C 135.792 23.4992 134.773 22.0157 133.748 20.5227L 133.562 20.2516Z"/>
          </defs>
        </svg>

    )
  }
}

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimated: false
    };
  }

  componentDidMount() {
    let timeline = anime.timeline();

    timeline
      .add({
        targets: 'header.header-wrapper',
        translateX: [-window.innerWidth, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 600,
        offset: '+=400'
      })
      .add({
        targets: 'div.nav',
        translateY: [-75, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 400,
        offset: '-=400'
      })
      .add({
        targets: ['g#FOUNDERS', 'g#Logomark', 'g#SCHOOL'],
        translateX: [ -265, 0 ],
        translateY: [30, 0],
        opacity: [0, 1],
        offset: '-=400',
        elasticity: 100,
        delay: function(el, i, l) {
          return i * 100;
        },
        easing: 'easeInOutQuad',
        duration: 800,
        complete: () => {
          // pulse
        }
      })
      .add({
        targets: ['div.description > .anime-group'],
        translateX: [15, 0],
        opacity: [0, 1],
        delay: function(el, i, l) {
          return i * 200;
        },
        easing: 'easeInOutQuad',
        duration: 1000,
        offset: '-=400'
      });

  }

  render() {
    return (
      <div className="logo">
        <LogoSVG/>
      </div>
      // <object className="logo" data="./assets/logo.svg" type="image/svg+xml">
      //   <img src="./assets/logo.svg" />
      // </object>
    )
  }
}

class HeaderWrapper extends React.Component {
  render() {
    return (
       <header className="header-wrapper" style={{backgroundImage: 'url(\'./assets/vladspeaking.jpg\')'}}>
       {/* <header className="header-wrapper"> */}
        {/* <Navbar /> */}
        <Title />
        <header className="header-wrapper-2">
      </header>
      </header>
    )
  }
}

function handleApply() {
  window.location.href = "https://uclafoundersschool.typeform.com/to/G7VxEU";
}

function handleSponsor() {
  window.location.href="mailto:uclafoundersschool@gmail.com?Subject=Thanks%20for%20your%20interest%20in%20Founders%20School%202016!";
}

class Description extends React.Component {
  render() {
    return (
      <div className="description-wrapper">
        <div className="description">
          <h1 className="anime-group">Tech Meets <span>Entrepreneurship</span></h1>
          <p className="anime-group">SoCal’s Largest University Entrepreneurship Conference</p>
          <h3 className="anime-group"><i className="fa fa-calendar-check-o"></i>&nbsp;MAY 7, 9AM - 5PM</h3>
          <button className="anime-group" onClick={handleApply}>Sign up for our mailing list</button>
        </div>
      </div>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="title-wrapper">
        <Logo />
        <Description />
      </div>
    )
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper />
    )
  }
}
