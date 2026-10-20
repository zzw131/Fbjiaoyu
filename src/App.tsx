/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';

/**
 * 金刚区 Icon 1：01_模考大赛 (1:1 还原上传的橙色 3D 奖杯图标)
 */
function MockExamIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="mockBg" x1="12" y1="108" x2="108" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F56A00" />
          <stop offset="55%" stopColor="#FF8519" />
          <stop offset="100%" stopColor="#FFC845" />
        </linearGradient>
        <linearGradient id="cupBody" x1="34" y1="24" x2="84" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF2" />
          <stop offset="45%" stopColor="#FFF1B8" />
          <stop offset="100%" stopColor="#FFCA52" />
        </linearGradient>
        <linearGradient id="cupHandle" x1="20" y1="35" x2="98" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2A6" />
          <stop offset="100%" stopColor="#FFC436" />
        </linearGradient>
        <linearGradient id="cupStar" x1="52" y1="38" x2="68" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FF9408" />
        </linearGradient>
        <linearGradient id="cupBaseOrange" x1="60" y1="90" x2="60" y2="103" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9626" />
          <stop offset="100%" stopColor="#EE4400" />
        </linearGradient>
        <clipPath id="mockSquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#mockSquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#mockBg)" />
        <circle cx="16" cy="112" r="32" fill="#FFD15C" fillOpacity="0.35" />
        <circle cx="52" cy="126" r="28" fill="#FFB340" fillOpacity="0.28" />
        <circle cx="114" cy="64" r="34" fill="#E35500" fillOpacity="0.32" />
        <circle cx="110" cy="98" r="38" fill="#FF9838" fillOpacity="0.28" />

        <rect
          x="14"
          y="74"
          width="14"
          height="6"
          rx="3"
          transform="rotate(-12 14 74)"
          fill="#FFF4C2"
        />
        <rect
          x="92"
          y="73"
          width="14"
          height="6"
          rx="3"
          transform="rotate(6 92 73)"
          fill="#FFF4C2"
        />

        <path
          d="M34 39H24C21.2 39 19 41.2 19 44V49C19 57.5 25.8 64 34.5 64H37"
          stroke="url(#cupHandle)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path
          d="M86 39H96C98.8 39 101 41.2 101 44V49C101 57.5 94.2 64 85.5 64H83"
          stroke="url(#cupHandle)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        <rect x="52" y="74" width="16" height="14" rx="2" fill="#FFD966" />
        <rect x="54" y="74" width="5" height="14" fill="#FFF2B2" fillOpacity="0.7" />

        <path
          d="M30 31C30 27.1 33.1 24 37 24H83C86.9 24 90 27.1 90 31V46C90 63.7 76.6 78 60 78C43.4 78 30 63.7 30 46V31Z"
          fill="url(#cupBody)"
        />
        <path
          d="M35.5 28.5C34 30 33.5 34 33.5 41"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />

        <path
          d="M60 36.5L64.1 44.6L73 45.9C74.2 46.1 74.7 47.6 73.8 48.5L67.4 54.7L68.9 63.6C69.1 64.8 67.8 65.7 66.7 65.1L58.8 60.9L50.9 65.1C49.8 65.7 48.5 64.8 48.7 63.6L50.2 54.7L43.8 48.5C42.9 47.6 43.4 46.1 44.6 45.9L53.5 44.6L57.6 36.5C58.1 35.4 59.5 35.4 60 36.5Z"
          fill="url(#cupStar)"
        />

        <path
          d="M43 91C43 87.7 45.7 85 49 85H71C74.3 85 77 87.7 77 91V93H43V91Z"
          fill="#FFF1B0"
        />
        <rect x="37" y="92" width="46" height="10" rx="5" fill="url(#cupBaseOrange)" />
      </g>
    </svg>
  );
}

/**
 * 金刚区 Icon 2：02_会员中心 (1:1 还原上传的紫色 3D 皇冠图标)
 */
function VipCenterIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="vipBg" x1="14" y1="12" x2="96" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AA78FF" />
          <stop offset="50%" stopColor="#653BFF" />
          <stop offset="100%" stopColor="#461CF2" />
        </linearGradient>
        <linearGradient id="crownGold" x1="30" y1="30" x2="88" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF59E" />
          <stop offset="48%" stopColor="#FFDA47" />
          <stop offset="100%" stopColor="#FFA914" />
        </linearGradient>
        <linearGradient id="crownBase" x1="25" y1="81" x2="95" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8C4" />
          <stop offset="55%" stopColor="#FFD859" />
          <stop offset="100%" stopColor="#F59F18" />
        </linearGradient>
        <radialGradient id="ballTop" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFE0" />
          <stop offset="55%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFA818" />
        </radialGradient>
        <clipPath id="vipSquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#vipSquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#vipBg)" />
        <circle cx="112" cy="14" r="28" fill="#C49EFF" fillOpacity="0.28" />
        <circle cx="10" cy="112" r="32" fill="#9E6EFF" fillOpacity="0.28" />
        <circle cx="108" cy="104" r="36" fill="#8A58FF" fillOpacity="0.32" />

        <path
          d="M21 46L39.5 55.5C41.2 56.4 43.3 55.8 44.3 54.2L57.5 33.5C58.7 31.6 61.3 31.6 62.5 33.5L75.7 54.2C76.7 55.8 78.8 56.4 80.5 55.5L99 46L89.5 84H30.5L21 46Z"
          fill="url(#crownGold)"
        />
        <path
          d="M58 34L44.3 54.2C43.3 55.8 41.2 56.4 39.5 55.5L23 47L32 82H47L58 34Z"
          fill="white"
          fillOpacity="0.26"
        />

        <circle cx="21.5" cy="43.5" r="7.5" fill="url(#ballTop)" />
        <circle cx="60" cy="29.5" r="9.2" fill="url(#ballTop)" />
        <circle cx="98.5" cy="43.5" r="7.5" fill="url(#ballTop)" />

        <g>
          <path d="M60 55L48.5 66.5H60V55Z" fill="#DFCCFF" />
          <path d="M60 55L71.5 66.5H60V55Z" fill="#7C4DFF" />
          <path d="M60 78L48.5 66.5H60V78Z" fill="#8152FF" />
          <path d="M60 78L71.5 66.5H60V78Z" fill="#4E1DF5" />
        </g>

        <rect x="25" y="81" width="70" height="11.5" rx="5.75" fill="url(#crownBase)" />
        <ellipse cx="34" cy="84.5" rx="6" ry="1.8" fill="white" fillOpacity="0.7" />
      </g>
    </svg>
  );
}

/**
 * 金刚区 Icon 3：03_历年试卷 (1:1 还原上传的蓝色 3D 100分试卷图标)
 */
function PastPapersIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="paperBg" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#33D2FF" />
          <stop offset="50%" stopColor="#0A78FF" />
          <stop offset="100%" stopColor="#004BE0" />
        </linearGradient>
        <linearGradient id="sheetGrad" x1="26" y1="22" x2="86" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#E5F2FF" />
          <stop offset="100%" stopColor="#C2DFFF" />
        </linearGradient>
        <linearGradient id="foldGrad" x1="72" y1="22" x2="94" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D9EDFF" />
          <stop offset="100%" stopColor="#A6D1FF" />
        </linearGradient>
        <linearGradient id="badgeGrad" x1="64" y1="68" x2="102" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5FAFF" />
          <stop offset="100%" stopColor="#B8DCFF" />
        </linearGradient>
        <clipPath id="paperSquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#paperSquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#paperBg)" />
        <circle cx="108" cy="14" r="26" fill="#6BE0FF" fillOpacity="0.28" />
        <circle cx="14" cy="108" r="34" fill="#42B8FF" fillOpacity="0.28" />
        <circle cx="108" cy="96" r="34" fill="#3B8CFF" fillOpacity="0.3" />

        <path
          d="M24 33C24 26.4 29.4 21 36 21H71.5L94 43.5V89C94 95.6 88.6 101 82 101H36C29.4 101 24 95.6 24 89V33Z"
          fill="url(#sheetGrad)"
        />
        <path
          d="M71.5 21V37.5C71.5 40.8 74.2 43.5 77.5 43.5H94L71.5 21Z"
          fill="url(#foldGrad)"
        />

        <rect x="36" y="42.5" width="29" height="6.8" rx="3.4" fill="#82BCFF" />
        <rect x="36" y="56.5" width="45" height="6.8" rx="3.4" fill="#82BCFF" />
        <rect x="36" y="70.5" width="23" height="6.8" rx="3.4" fill="#82BCFF" />

        <rect
          x="61"
          y="68"
          width="43"
          height="31"
          rx="9"
          fill="url(#badgeGrad)"
          stroke="white"
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />
        <text
          x="82.5"
          y="89.5"
          textAnchor="middle"
          fill="#0062EB"
          fontSize="18.5"
          fontWeight="900"
          fontFamily="-apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif"
          letterSpacing="-0.5"
        >
          100
        </text>
      </g>
    </svg>
  );
}

/**
 * 金刚区 Icon 4：04_快速练习 (1:1 还原上传的薄荷绿 3D 铅笔图标)
 */
function QuickPracticeIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="quickBg" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#35F2B0" />
          <stop offset="50%" stopColor="#00CF86" />
          <stop offset="100%" stopColor="#00A666" />
        </linearGradient>
        <linearGradient id="qEraser" x1="70" y1="18" x2="98" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF28C" />
          <stop offset="55%" stopColor="#FFC226" />
          <stop offset="100%" stopColor="#F58D00" />
        </linearGradient>
        <linearGradient id="qWood" x1="36" y1="68" x2="58" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFBF0" />
          <stop offset="100%" stopColor="#FBE0B4" />
        </linearGradient>
        <clipPath id="quickSquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#quickSquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#quickBg)" />
        <circle cx="110" cy="16" r="24" fill="#69FFD0" fillOpacity="0.25" />
        <circle cx="14" cy="110" r="30" fill="#69FFD0" fillOpacity="0.28" />
        <circle cx="106" cy="100" r="34" fill="#45F5B8" fillOpacity="0.25" />

        <rect
          x="29"
          y="33"
          width="6.5"
          height="14"
          rx="3.25"
          transform="rotate(-25 29 33)"
          fill="#E5FFF6"
        />
        <rect
          x="17"
          y="48"
          width="6.5"
          height="14"
          rx="3.25"
          transform="rotate(-58 17 48)"
          fill="#E5FFF6"
        />

        <rect x="40" y="98" width="45" height="6.8" rx="3.4" fill="#DCFFF3" />

        <path
          d="M68 27L74.5 20.5C79.5 15.5 87.5 15.5 92.5 20.5L99.5 27.5C104.5 32.5 104.5 40.5 99.5 45.5L93 52L68 27Z"
          fill="url(#qEraser)"
        />
        <path d="M62.5 32.5L68 27L93 52L87.5 57.5L62.5 32.5Z" fill="#00DF94" />
        <path d="M62.5 32.5L68 27L78 37L72.5 42.5L62.5 32.5Z" fill="#DCFFF4" />

        <path d="M62.5 32.5L36.5 64.5L44.5 72.5L71 41L62.5 32.5Z" fill="#F5FFFC" />
        <path d="M71 41L44.5 72.5L53.5 81.5L79.5 49.5L71 41Z" fill="#BCFAE5" />
        <path d="M79.5 49.5L53.5 81.5L62.5 86.5L87.5 57.5L79.5 49.5Z" fill="#48EBBA" />

        <path
          d="M36.5 64.5C38 70 42.5 73 47 72.5C47.5 78 51.5 82 56.5 82C57.5 85.5 60 87 62.5 86.5L45.5 93L34 83.5L36.5 64.5Z"
          fill="url(#qWood)"
        />
        <path
          d="M34.8 83.2C38.5 83.2 42.2 85.5 44.2 88.8C45.5 91 45.8 92.5 45.5 93.2L36.5 96.2C34.2 97 32.8 95.5 33.4 93.2L34.8 83.2Z"
          fill="#2D3552"
        />
      </g>
    </svg>
  );
}

/**
 * 金刚区右滑随机 Icon 5：错题本 (珊瑚红 3D 错题本图标)
 */
function ErrorBookIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="errBg" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF758F" />
          <stop offset="55%" stopColor="#FF4769" />
          <stop offset="100%" stopColor="#E61E4D" />
        </linearGradient>
        <linearGradient id="errBook" x1="28" y1="22" x2="90" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFD6E0" />
        </linearGradient>
        <clipPath id="errSquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#errSquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#errBg)" />
        <circle cx="106" cy="18" r="26" fill="#FFA3B5" fillOpacity="0.3" />
        <circle cx="14" cy="106" r="32" fill="#FF8FA5" fillOpacity="0.28" />
        <rect x="28" y="22" width="64" height="76" rx="12" fill="url(#errBook)" />
        <rect x="22" y="34" width="12" height="6" rx="3" fill="#FFE8EE" />
        <rect x="22" y="57" width="12" height="6" rx="3" fill="#FFE8EE" />
        <rect x="22" y="80" width="12" height="6" rx="3" fill="#FFE8EE" />
        <path
          d="M50 43L70 63M70 43L50 63"
          stroke="#FF3B61"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <rect x="44" y="76" width="32" height="6.5" rx="3.25" fill="#FF8DA3" />
      </g>
    </svg>
  );
}

/**
 * 金刚区右滑随机 Icon 6：收藏夹 (琥珀金粉 3D 收藏星标图标)
 */
function FavoritesIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="favBg" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB84D" />
          <stop offset="55%" stopColor="#FF7A33" />
          <stop offset="100%" stopColor="#F04826" />
        </linearGradient>
        <linearGradient id="favStar" x1="35" y1="25" x2="85" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="50%" stopColor="#FFE885" />
          <stop offset="100%" stopColor="#FFB82E" />
        </linearGradient>
        <clipPath id="favSquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#favSquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#favBg)" />
        <circle cx="106" cy="18" r="28" fill="#FFD685" fillOpacity="0.3" />
        <circle cx="16" cy="106" r="32" fill="#FFAE66" fillOpacity="0.28" />
        <path
          d="M60 22L69.8 43.2L93 46.2C96.2 46.6 97.5 50.5 95.1 52.7L78.1 68.8L82.4 91.8C83 95 79.6 97.4 76.7 95.8L56.2 84.6L35.7 95.8C32.8 97.4 29.4 95 30 91.8L34.3 68.8L17.3 52.7C14.9 50.5 16.2 46.6 19.4 46.2L42.6 43.2L52.4 22C53.8 19 58.6 19 60 22Z"
          transform="translate(3.8, 0)"
          fill="url(#favStar)"
        />
        <circle cx="53" cy="46" r="4" fill="white" fillOpacity="0.7" />
      </g>
    </svg>
  );
}

/**
 * 金刚区右滑随机 Icon 7：申论批改 (靛蓝 3D 智能印章图标)
 */
function EssayGradingIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="essayBg" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6B8AFF" />
          <stop offset="55%" stopColor="#4258FF" />
          <stop offset="100%" stopColor="#2635D9" />
        </linearGradient>
        <linearGradient id="essayCard" x1="28" y1="24" x2="90" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6E2FF" />
        </linearGradient>
        <clipPath id="essaySquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#essaySquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#essayBg)" />
        <circle cx="106" cy="18" r="28" fill="#99B0FF" fillOpacity="0.28" />
        <circle cx="16" cy="106" r="32" fill="#7D96FF" fillOpacity="0.26" />
        <rect x="26" y="23" width="68" height="74" rx="14" fill="url(#essayCard)" />
        <rect x="38" y="38" width="32" height="6.5" rx="3.25" fill="#7A96FF" />
        <rect x="38" y="52" width="44" height="6.5" rx="3.25" fill="#7A96FF" />
        <circle cx="75" cy="76" r="14" fill="#FFD43B" />
        <path
          d="M69.5 76L73.5 80L81.5 72"
          stroke="#7A4600"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/**
 * 金刚区右滑随机 Icon 8：每日一练 (青蓝 3D 日历打卡图标)
 */
function DailyPracticeIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none"
    >
      <defs>
        <linearGradient id="dailyBg" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2CE6D8" />
          <stop offset="55%" stopColor="#00B8BA" />
          <stop offset="100%" stopColor="#008C99" />
        </linearGradient>
        <linearGradient id="dailyCard" x1="26" y1="28" x2="94" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#CFFAF7" />
        </linearGradient>
        <clipPath id="dailySquircle">
          <rect x="2" y="2" width="116" height="116" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#dailySquircle)">
        <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#dailyBg)" />
        <circle cx="106" cy="18" r="28" fill="#80FFF5" fillOpacity="0.28" />
        <circle cx="16" cy="106" r="32" fill="#5CECE0" fillOpacity="0.26" />
        <rect x="25" y="29" width="70" height="67" rx="14" fill="url(#dailyCard)" />
        <rect x="40" y="21" width="8" height="15" rx="4" fill="#FFE066" />
        <rect x="72" y="21" width="8" height="15" rx="4" fill="#FFE066" />
        <path
          d="M46 64L56 74L76 54"
          stroke="#00A8AD"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/**
 * 图3 1:1 还原：3D 高光彩色铅笔图标（已激活状态）
 */
function ActivePencilIcon({ idSuffix }: { idSuffix: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`eraser-${idSuffix}`} x1="60" y1="12" x2="88" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF36D" />
          <stop offset="38%" stopColor="#FFD426" />
          <stop offset="78%" stopColor="#FF9E1B" />
          <stop offset="100%" stopColor="#F2730C" />
        </linearGradient>

        <linearGradient id={`ferrule-${idSuffix}`} x1="50" y1="22" x2="78" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B8D4FF" />
          <stop offset="22%" stopColor="#FFFFFF" />
          <stop offset="52%" stopColor="#B0CCFF" />
          <stop offset="82%" stopColor="#6D9BF2" />
          <stop offset="100%" stopColor="#9BC0FF" />
        </linearGradient>

        <linearGradient id={`bodyLeft-${idSuffix}`} x1="28" y1="44" x2="56" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#26C6FF" />
          <stop offset="100%" stopColor="#1499FF" />
        </linearGradient>

        <linearGradient id={`bodyMid-${idSuffix}`} x1="33" y1="50" x2="62" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0982FF" />
          <stop offset="100%" stopColor="#0062E6" />
        </linearGradient>

        <linearGradient id={`bodyRight-${idSuffix}`} x1="42" y1="52" x2="54" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004AD1" />
          <stop offset="70%" stopColor="#003EB8" />
          <stop offset="100%" stopColor="#3B93FF" />
        </linearGradient>

        <linearGradient id={`wood-${idSuffix}`} x1="23" y1="58" x2="42" y2="77" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF3DC" />
          <stop offset="32%" stopColor="#FFE1B3" />
          <stop offset="72%" stopColor="#FCC178" />
          <stop offset="100%" stopColor="#EDA054" />
        </linearGradient>

        <linearGradient id={`lead-${idSuffix}`} x1="18" y1="73" x2="31" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5D6B99" />
          <stop offset="45%" stopColor="#252E54" />
          <stop offset="85%" stopColor="#121738" />
          <stop offset="100%" stopColor="#3D4C82" />
        </linearGradient>
      </defs>

      <path
        d="M57 22L63.5 15.5C69.5 9.5 79 9.5 85 15.5C91 21.5 91 31 85 37L78.5 43.5L57 22Z"
        fill={`url(#eraser-${idSuffix})`}
      />
      <ellipse
        cx="68.5"
        cy="17"
        rx="4.2"
        ry="2.2"
        transform="rotate(-12 68.5 17)"
        fill="white"
        fillOpacity="0.82"
      />
      <path
        d="M84 26C85.5 30 84.5 34.5 81 38"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />

      <path
        d="M50.5 27.5L27.5 55.5C27.5 59.5 31 61 35 59L57.5 34.5L50.5 27.5Z"
        fill={`url(#bodyLeft-${idSuffix})`}
      />
      <path
        d="M57.5 34.5L35 59C37 64 41.5 66 45.5 65L66 43L57.5 34.5Z"
        fill={`url(#bodyMid-${idSuffix})`}
      />
      <path
        d="M66 43L45.5 65C46 69.5 49 72 52 71.5L73.5 50.5L66 43Z"
        fill={`url(#bodyRight-${idSuffix})`}
      />
      <rect
        x="46"
        y="31.5"
        width="4.6"
        height="19"
        rx="2.3"
        transform="rotate(42 46 31.5)"
        fill="white"
        fillOpacity="0.65"
      />

      <path
        d="M50.5 26.5C49.5 25.5 49.5 24 50.5 23L54 19.5C55 18.5 56.5 18.5 57.5 19.5L81 43C82 44 82 45.5 81 46.5L77.5 50C76.5 51 75 51 74 50L50.5 26.5Z"
        fill={`url(#ferrule-${idSuffix})`}
      />
      <path
        d="M51.5 25.8L74.8 49"
        stroke="#6292EB"
        strokeWidth="0.9"
        strokeOpacity="0.6"
      />

      <path
        d="M27.5 55.5C28 59.8 31.5 60.8 35.2 58.8C36.8 63.8 41.2 66 45.5 64.8C45.8 69.5 48.8 71.8 51.8 71.2L34 80.5L20.5 67L27.5 55.5Z"
        fill={`url(#wood-${idSuffix})`}
      />
      <path
        d="M27.5 55.5C28 59.5 31.2 60.5 34.8 58.8L25 71.5L20.5 67L27.5 55.5Z"
        fill="#FFF7E8"
        fillOpacity="0.65"
      />

      <path
        d="M22.2 69.2C25.5 68.5 29.5 70.5 32 73.5C34.2 76.2 35 79.5 34 81.2L22.5 85.2C19.5 86.2 17.2 83.8 18.2 80.8L22.2 69.2Z"
        fill={`url(#lead-${idSuffix})`}
      />
      <path
        d="M23.8 70.8C25.2 70.8 26.5 71.8 26.2 73.2L21.5 82.2C20.8 83.2 19.8 82.5 20.1 81.2L23.8 70.8Z"
        fill="white"
        fillOpacity="0.65"
      />
    </svg>
  );
}

/**
 * 图2 1:1 还原：3D 果冻蓝描边空心铅笔图标（未激活状态）
 */
function InactivePencilIcon({ idSuffix }: { idSuffix: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`outlineBlue-${idSuffix}`} x1="20" y1="84" x2="84" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2684FF" />
          <stop offset="50%" stopColor="#4CA0FF" />
          <stop offset="100%" stopColor="#63B3FF" />
        </linearGradient>
        <linearGradient id={`tipFill-${idSuffix}`} x1="18" y1="84" x2="32" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2280FF" />
          <stop offset="75%" stopColor="#4DA0FF" />
          <stop offset="100%" stopColor="#8CC8FF" />
        </linearGradient>
      </defs>

      <path
        d="M59 20.5C65.2 14.3 75.3 14.3 81.5 20.5C87.7 26.7 87.7 36.8 81.5 43L44 80.5C41.8 82.7 38.8 84.1 35.7 84.6L21.8 86.8C18.8 87.3 16.2 84.7 16.7 81.7L18.9 67.8C19.4 64.7 20.8 61.7 23 59.5L59 20.5Z"
        stroke={`url(#outlineBlue-${idSuffix})`}
        strokeWidth="6.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.5 23.5L78.5 45.5"
        stroke={`url(#outlineBlue-${idSuffix})`}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M24.5 58.5L45 79"
        stroke={`url(#outlineBlue-${idSuffix})`}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M17.5 82.5L20 69.5L34 83.5L21 86C18.8 86.4 17.1 84.7 17.5 82.5Z"
        fill={`url(#tipFill-${idSuffix})`}
      />
      <path
        d="M60 21.5C65.6 15.9 74.6 15.9 80.2 21.5C85.8 27.1 85.8 36.1 80.2 41.7L43 78.9"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      <path
        d="M24 58.5L58.5 22.5"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      <path
        d="M57.5 24.5L77.5 44.5"
        stroke="#B8E0FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
      <path
        d="M25.5 59.5L44 78"
        stroke="#B8E0FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
      <ellipse
        cx="79"
        cy="22.5"
        rx="3.2"
        ry="1.5"
        transform="rotate(42 79 22.5)"
        fill="white"
        fillOpacity="0.85"
      />
      <ellipse
        cx="21.5"
        cy="79"
        rx="2"
        ry="3.8"
        transform="rotate(15 21.5 79)"
        fill="white"
        fillOpacity="0.55"
      />
    </svg>
  );
}

/**
 * 5 支铅笔进度条组件
 */
function PencilProgressRow({
  activeCount,
  countText,
  rowKey,
  className = 'mt-1',
}: {
  activeCount: number;
  countText: string;
  rowKey: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center gap-[4px]">
        {[0, 1, 2, 3, 4].map((index) =>
          index < activeCount ? (
            <ActivePencilIcon key={index} idSuffix={`${rowKey}-${index}`} />
          ) : (
            <InactivePencilIcon key={index} idSuffix={`${rowKey}-${index}`} />
          )
        )}
      </div>
      <span className="ml-2.5 text-[13.5px] text-[#595959] font-normal tabular-nums leading-none">
        {countText}
      </span>
    </div>
  );
}

/**
 * 金刚区下方横向滚动插图贴图列表（直接采用 <img> 贴图展示）
 */
const PROMO_CARD_IMAGES = [
  { id: '01', src: '/promo/01_chaozhi.svg', alt: '超值精品班' },
  { id: '02', src: '/promo/02_quancheng.svg', alt: '全程护航班' },
  { id: '03', src: '/promo/03_bishi.svg', alt: '笔试系统班' },
  { id: '04', src: '/promo/04_mokao.svg', alt: '模考争霸赛' },
  { id: '05', src: '/promo/05_zudui.svg', alt: '组队打卡营' },
  { id: '06', src: '/promo/06_xingce.svg', alt: '行测会员' },
  { id: '07', src: '/promo/07_xuexi.svg', alt: '学习中心' },
];

/**
 * 金刚区下方横向可拖拽滚动推广贴图栏
 */
function PromoCardsScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  return (
    <div
      ref={scrollRef}
      onMouseDown={(e) => {
        const el = scrollRef.current;
        if (!el) return;
        dragState.current = {
          isDown: true,
          startX: e.pageX - el.offsetLeft,
          scrollLeft: el.scrollLeft,
        };
      }}
      onMouseLeave={() => {
        dragState.current.isDown = false;
      }}
      onMouseUp={() => {
        dragState.current.isDown = false;
      }}
      onMouseMove={(e) => {
        if (!dragState.current.isDown) return;
        const el = scrollRef.current;
        if (!el) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - dragState.current.startX) * 1.25;
        el.scrollLeft = dragState.current.scrollLeft - walk;
      }}
      className="pl-3.5 pr-3.5 pt-3 flex items-center gap-2.5 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing"
    >
      {PROMO_CARD_IMAGES.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          referrerPolicy="no-referrer"
          draggable={false}
          className="w-[162px] h-[89px] rounded-[14px] shrink-0 object-cover block pointer-events-none select-none"
        />
      ))}
    </div>
  );
}

const KINGKONG_PAGES = [
  [
    { id: 'mock', label: '模考大赛', Icon: MockExamIcon },
    { id: 'vip', label: '会员中心', Icon: VipCenterIcon },
    { id: 'papers', label: '历年试卷', Icon: PastPapersIcon },
    { id: 'quick', label: '快速练习', Icon: QuickPracticeIcon },
  ],
  [
    { id: 'errorbook', label: '错题本', Icon: ErrorBookIcon },
    { id: 'favorites', label: '收藏夹', Icon: FavoritesIcon },
    { id: 'grading', label: '申论批改', Icon: EssayGradingIcon },
    { id: 'daily', label: '每日一练', Icon: DailyPracticeIcon },
  ],
];

interface SubTopicLeaf {
  id: string;
  title: string;
  progress: string;
}

interface SecondaryCategory {
  id: string;
  title: string;
  activePencils: number;
  progress: string;
  hasContinue?: boolean;
  nestedCard?: {
    id: string;
    title: string;
    activePencils: number;
    progress: string;
    leaves: SubTopicLeaf[];
  };
}

interface PrimaryCategory {
  id: string;
  title: string;
  activePencils: number;
  progress: string;
  hasContinue?: boolean;
  children: SecondaryCategory[];
}

const QUESTION_BANK_DATA: PrimaryCategory[] = [
  {
    id: 'politics',
    title: '政治理论',
    activePencils: 2,
    progress: '0/2314',
    hasContinue: true,
    children: [
      {
        id: 'marxism',
        title: '马克思主义',
        activePencils: 1,
        progress: '0/372',
        hasContinue: true,
        nestedCard: {
          id: 'philosophy',
          title: '马克思主义哲学',
          activePencils: 2,
          progress: '0/353',
          leaves: [
            { id: 'zonglun', title: '总论', progress: '0/6' },
            { id: 'weiwulun', title: '唯物论', progress: '0/39' },
            { id: 'bianzhengfa', title: '唯物辩证法', progress: '0/181' },
            { id: 'renshilun', title: '认识论', progress: '0/72' },
            { id: 'weiwushiguan', title: '唯物史观', progress: '0/50' },
            { id: 'qita', title: '哲学-其他', progress: '0/7' },
          ],
        },
      },
      {
        id: 'econ',
        title: '马克思主义政治经济学',
        activePencils: 0,
        progress: '0/16',
      },
      {
        id: 'socialism',
        title: '科学社会主义',
        activePencils: 0,
        progress: '0/3',
      },
      {
        id: 'newthought',
        title: '新思想',
        activePencils: 0,
        progress: '0/131',
      },
    ],
  },
  {
    id: 'commonsense',
    title: '常识判断',
    activePencils: 1,
    progress: '0/4620',
    hasContinue: true,
    children: [
      { id: 'cs-law', title: '法律常识', activePencils: 1, progress: '0/1420' },
      { id: 'cs-econ', title: '经济常识', activePencils: 0, progress: '0/860' },
      { id: 'cs-hum', title: '人文历史', activePencils: 0, progress: '0/1240' },
      { id: 'cs-tech', title: '科技地理', activePencils: 0, progress: '0/1100' },
    ],
  },
  {
    id: 'verbal',
    title: '言语理解与表达',
    activePencils: 3,
    progress: '0/5890',
    hasContinue: true,
    children: [
      { id: 'vb-reading', title: '片段阅读', activePencils: 2, progress: '0/2450' },
      { id: 'vb-statement', title: '语句表达', activePencils: 1, progress: '0/1120' },
      { id: 'vb-logic', title: '逻辑填空', activePencils: 0, progress: '0/2320' },
    ],
  },
  {
    id: 'quant',
    title: '数量关系',
    activePencils: 0,
    progress: '0/3150',
    hasContinue: false,
    children: [
      { id: 'qt-math', title: '数学运算', activePencils: 0, progress: '0/2650' },
      { id: 'qt-num', title: '数字推理', activePencils: 0, progress: '0/500' },
    ],
  },
  {
    id: 'reasoning',
    title: '判断推理',
    activePencils: 2,
    progress: '0/6420',
    hasContinue: true,
    children: [
      { id: 'rs-graph', title: '图形推理', activePencils: 2, progress: '0/1580' },
      { id: 'rs-def', title: '定义判断', activePencils: 0, progress: '0/1620' },
      { id: 'rs-analogy', title: '类比推理', activePencils: 0, progress: '0/1540' },
      { id: 'rs-logic', title: '逻辑判断', activePencils: 0, progress: '0/1680' },
    ],
  },
  {
    id: 'data-analysis',
    title: '资料分析',
    activePencils: 1,
    progress: '0/4180',
    hasContinue: false,
    children: [
      { id: 'da-calc', title: '计算题', activePencils: 1, progress: '0/1980' },
      { id: 'da-comp', title: '综合分析', activePencils: 0, progress: '0/2200' },
    ],
  },
];

/**
 * 通用跟手滑动轮播容器（同时支持手机触摸滑动、电脑鼠标左右拖拽、触控板横向滚动与圆点切换）
 */
function SwipeCarousel({
  activeIndex,
  onChange,
  children,
  className = '',
}: {
  activeIndex: number;
  onChange: (newIndex: number) => void;
  children: React.ReactNode[];
  className?: string;
}) {
  const count = React.Children.count(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const wheelLockRef = useRef(false);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX;
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const dx = clientX - startXRef.current;
    if ((activeIndex === 0 && dx > 0) || (activeIndex === count - 1 && dx < 0)) {
      setDragOffset(dx * 0.35);
    } else {
      setDragOffset(dx);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 32;
    if (dragOffset < -threshold && activeIndex < count - 1) {
      onChange(activeIndex + 1);
    } else if (dragOffset > threshold && activeIndex > 0) {
      onChange(activeIndex - 1);
    }
    setDragOffset(0);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 12) {
      if (wheelLockRef.current) return;
      if (e.deltaX > 0 && activeIndex < count - 1) {
        wheelLockRef.current = true;
        onChange(activeIndex + 1);
        setTimeout(() => {
          wheelLockRef.current = false;
        }, 350);
      } else if (e.deltaX < 0 && activeIndex > 0) {
        wheelLockRef.current = true;
        onChange(activeIndex - 1);
        setTimeout(() => {
          wheelLockRef.current = false;
        }, 350);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      onWheel={handleWheel}
      className={`overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <div
        className={`flex w-full h-full ${
          isDragging ? '' : 'transition-transform duration-300 ease-out'
        }`}
        style={{
          transform: `translate3d(calc(${-activeIndex * 100}% + ${dragOffset}px), 0, 0)`,
        }}
      >
        {React.Children.map(children, (child, idx) => (
          <div key={idx} className="w-full h-full shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [expandedPrimary, setExpandedPrimary] = useState<Record<string, boolean>>({
    politics: true,
  });
  const [expandedNested, setExpandedNested] = useState<Record<string, boolean>>({
    philosophy: true,
  });

  // 头图 Banner 当前页索引（共 4 张主题 Banner，每次显示 1 张）
  const [bannerPage, setBannerPage] = useState(0);
  // 金刚区当前页索引（共 2 页，每页显示 4 个 3D 图标）
  const [kingkongPage, setKingkongPage] = useState(0);

  const togglePrimary = (id: string) => {
    setExpandedPrimary((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleNested = (id: string) => {
    setExpandedNested((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F8FB] flex justify-center items-start sm:py-4">
      {/* 1:1 Mobile Screen Container */}
      <div className="w-full max-w-[375px] bg-[#F7F8FB] min-h-screen sm:min-h-[812px] sm:shadow-xl flex flex-col justify-between overflow-hidden relative">
        <div>
          {/* 1. iOS Status Bar */}
          <div className="h-[44px] px-5 flex items-center justify-between bg-[#F7F8FB] select-none">
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-black pl-1">
              9:41
            </span>
            <div className="flex items-center gap-[5px] pr-0.5">
              {/* Cellular Signal */}
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                <rect x="0.5" y="7" width="3" height="3.5" rx="0.8" fill="black" />
                <rect x="5" y="5" width="3" height="5.5" rx="0.8" fill="black" />
                <rect x="9.5" y="2.8" width="3" height="7.7" rx="0.8" fill="black" />
                <rect x="14" y="0.5" width="3" height="10" rx="0.8" fill="black" />
              </svg>
              {/* Wi-Fi */}
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path
                  d="M8 10.6C8.82843 10.6 9.5 9.92843 9.5 9.1C9.5 8.27157 8.82843 7.6 8 7.6C7.17157 7.6 6.5 8.27157 6.5 9.1C6.5 9.92843 7.17157 10.6 8 10.6Z"
                  fill="black"
                />
                <path
                  d="M4.65 6.75C5.55 5.85 6.72 5.35 8 5.35C9.28 5.35 10.45 5.85 11.35 6.75"
                  stroke="black"
                  strokeWidth="1.45"
                  strokeLinecap="round"
                />
                <path
                  d="M2.15 4.25C3.72 2.68 5.79 1.8 8 1.8C10.21 1.8 12.28 2.68 13.85 4.25"
                  stroke="black"
                  strokeWidth="1.45"
                  strokeLinecap="round"
                />
              </svg>
              {/* Battery */}
              <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                <rect
                  x="0.5"
                  y="0.8"
                  width="21"
                  height="10.4"
                  rx="2.6"
                  stroke="black"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <rect x="2" y="2.3" width="18" height="7.4" rx="1.4" fill="black" />
                <path
                  d="M23 4.2V7.8C23.8 7.45 24.3 6.75 24.3 6C24.3 5.25 23.8 4.55 23 4.2Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
          </div>

          {/* 2. Top App Header ("练习") */}
          <div className="px-3.5 pt-1.5 pb-2.5 flex items-center justify-between bg-[#F7F8FB]">
            <h1 className="text-[22px] font-bold text-[#444444] tracking-tight leading-none">
              练习
            </h1>
            <div className="flex items-center gap-[18px]">
              {/* Search Icon */}
              <button
                type="button"
                aria-label="搜索"
                className="p-0.5 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <circle
                    cx="9.8"
                    cy="9.8"
                    r="7.4"
                    stroke="#526288"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M15.3 15.3L19.5 19.5"
                    stroke="#526288"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {/* Grid + Diamond Category Icon */}
              <button
                type="button"
                aria-label="分类"
                className="p-0.5 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="2.5" width="7.2" height="7.2" rx="1" fill="#5D6B92" />
                  <rect x="2" y="12.2" width="7.2" height="7.2" rx="1" fill="#5D6B92" />
                  <rect x="11.8" y="12.2" width="7.2" height="7.2" rx="1" fill="#5D6B92" />
                  <rect
                    x="15.4"
                    y="1.1"
                    width="7"
                    height="7"
                    rx="1"
                    transform="rotate(45 15.4 1.1)"
                    fill="#3478F6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 3. Subject Category Bar */}
          <div className="px-3.5 h-[40px] flex items-center justify-between border-b border-[#ECEDF2] shadow-[0_2px_5px_rgba(0,0,0,0.015)] bg-[#F7F8FB]">
            <div className="flex items-center gap-[26px] overflow-x-auto no-scrollbar">
              <span className="text-[15px] text-[#8E939E] whitespace-nowrap">
                公务员行测-国考
              </span>
              <span className="text-[15px] text-[#8E939E] whitespace-nowrap">
                公务员申论
              </span>
              <span className="text-[15px] text-[#8E939E] whitespace-nowrap">
                事业单位
              </span>
            </div>
            <button
              type="button"
              aria-label="添加科目"
              className="pl-1 flex items-center justify-center shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1.75V16.25M1.75 9H16.25"
                  stroke="#526288"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* 4. Hero Banner（支持向右滑动/拖拽切换，每次显示 1 个，指示圆点居中） */}
          <div className="px-3.5 pt-3.5">
            <div className="relative w-full h-[142px] rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(38,29,100,0.1)]">
              <SwipeCarousel
                activeIndex={bannerPage}
                onChange={setBannerPage}
                className="w-full h-full"
              >
                {/* Banner 1: 原版 1:1 夜晚小屋主题 */}
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 343 142"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full block pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="skyGrad" x1="0" y1="0" x2="343" y2="142" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#3B317A" />
                        <stop offset="55%" stopColor="#2E256D" />
                        <stop offset="100%" stopColor="#261D64" />
                      </linearGradient>
                      <linearGradient id="leftWall" x1="40" y1="78" x2="88" y2="132" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#8480B0" />
                        <stop offset="100%" stopColor="#5C588B" />
                      </linearGradient>
                      <linearGradient id="frontWall" x1="88" y1="70" x2="122" y2="135" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#D3D1E7" />
                        <stop offset="100%" stopColor="#9A96BF" />
                      </linearGradient>
                    </defs>

                    <rect width="343" height="142" fill="url(#skyGrad)" />
                    <circle cx="55" cy="49" r="56" fill="white" fillOpacity="0.04" />
                    <circle cx="55" cy="49" r="41" fill="white" fillOpacity="0.05" />
                    <circle cx="55" cy="49" r="27" fill="white" fillOpacity="0.07" />

                    <path
                      d="M59.5 34.2C54.2 33.7 49.4 37.6 48.9 42.9C48.4 48.2 52.3 53.0 57.6 53.5C61.1 53.8 64.3 52.2 66.2 49.5C62.2 55.3 54.4 57.1 48.3 53.4C42.2 49.7 40.0 41.9 43.4 35.6C46.8 29.3 54.5 26.8 61.0 29.9C62.8 30.8 64.3 32.1 65.5 33.7C63.7 34.2 61.6 34.4 59.5 34.2Z"
                      fill="#FFF7BD"
                    />

                    <path
                      d="M115 118C155 102 185 110 220 120C255 102 295 100 343 116V142H115V118Z"
                      fill="#211A5A"
                    />
                    <path
                      d="M0 126C45 120 100 122 155 130C205 116 250 112 292 126C315 117 330 118 343 126V142H0V126Z"
                      fill="#17174C"
                    />
                    <path
                      d="M180 132C210 122 245 122 275 134C298 123 322 123 343 132V142H180V132Z"
                      fill="#24276E"
                      fillOpacity="0.7"
                    />

                    <circle cx="15" cy="60" r="1" fill="#B8B5E0" fillOpacity="0.7" />
                    <circle cx="101" cy="24" r="2.2" fill="#FFF9D6" />
                    <circle cx="129" cy="52" r="1.2" fill="#D5D2F0" fillOpacity="0.8" />
                    <circle cx="189" cy="18" r="1.2" fill="#D5D2F0" fillOpacity="0.7" />
                    <circle cx="305" cy="36" r="1.4" fill="#FFF9D6" fillOpacity="0.9" />
                    <circle cx="318" cy="49" r="1" fill="#D5D2F0" fillOpacity="0.6" />
                    <circle cx="297" cy="95" r="2" fill="#FFF9D6" fillOpacity="0.9" />

                    <rect x="61" y="64" width="8" height="16" fill="#5D598C" />
                    <rect x="59.5" y="62.5" width="11" height="3" fill="#8B87B8" />

                    <polygon points="44,95 88,95 88,134 44,134" fill="url(#leftWall)" />
                    <polygon points="39,95 66,68 103,68 86,95" fill="#0A0D29" />
                    <polygon points="86,95 103,69 121,95 121,134 86,134" fill="url(#frontWall)" />
                    <polygon points="103,67 106,67 125,95 121,95" fill="#181D45" />

                    <rect x="95" y="102" width="17" height="18" rx="1" fill="#FFF4A3" />
                    <line x1="103.5" y1="102" x2="103.5" y2="120" stroke="#B6AC85" strokeWidth="1.6" />
                    <line x1="95" y1="111" x2="112" y2="111" stroke="#B6AC85" strokeWidth="1.6" />

                    <circle cx="29" cy="109" r="15.5" fill="#5B63A7" />
                    <line x1="29" y1="105" x2="29" y2="135" stroke="#14183E" strokeWidth="2.2" />
                    <line x1="29" y1="115" x2="22" y2="108" stroke="#14183E" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="29" y1="112" x2="36" y2="106" stroke="#14183E" strokeWidth="1.8" strokeLinecap="round" />

                    <circle cx="129" cy="112" r="10.5" fill="#3E4589" />
                    <line x1="129" y1="109" x2="129" y2="134" stroke="#0E1233" strokeWidth="1.8" />
                    <line x1="129" y1="116" x2="124" y2="111" stroke="#0E1233" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="129" y1="114" x2="134" y2="109" stroke="#0E1233" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                  <div className="absolute top-[33px] left-[138px] right-3 flex flex-col items-start pointer-events-none">
                    <div className="text-white text-[20px] leading-[1.28] font-normal tracking-[0.02em]">
                      <div>说完晚安的你</div>
                      <div>其实都在做什么？</div>
                    </div>
                    <span className="mt-2.5 ml-[48px] px-3.5 py-[3px] rounded-full bg-[#6A76B8]/70 text-white text-[12px] leading-tight tracking-wide">
                      立即参与
                    </span>
                  </div>
                </div>

                {/* Banner 2: 2026国考万人模考冲刺季 */}
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 343 142"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full block pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="banner2Grad" x1="0" y1="0" x2="343" y2="142" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="55%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                    <rect width="343" height="142" fill="url(#banner2Grad)" />
                    <circle cx="62" cy="54" r="54" fill="white" fillOpacity="0.05" />
                    <circle cx="62" cy="54" r="36" fill="white" fillOpacity="0.07" />
                    <circle cx="115" cy="24" r="2" fill="#FEF08A" />
                    <circle cx="298" cy="30" r="1.6" fill="#FEF08A" />
                    <path d="M0 122C65 106 135 114 210 126C260 112 305 110 343 122V142H0V122Z" fill="#172554" fillOpacity="0.65" />
                    <rect x="34" y="96" width="60" height="28" rx="3" fill="#3B82F6" />
                    <rect x="44" y="84" width="40" height="14" rx="2" fill="#60A5FA" />
                    <path d="M51 44H77V58C77 65.2 71.2 71 64 71C56.8 71 51 65.2 51 58V44Z" fill="#FDE047" />
                    <rect x="59" y="71" width="10" height="9" fill="#FACC15" />
                    <rect x="53" y="79" width="22" height="5" rx="2" fill="#FEF08A" />
                  </svg>
                  <div className="absolute top-[31px] left-[134px] right-3 flex flex-col items-start pointer-events-none">
                    <div className="text-white text-[19.5px] leading-[1.28] font-normal tracking-[0.02em]">
                      <div>全真考场模拟季</div>
                      <div>看看你的行测能拿几分？</div>
                    </div>
                    <span className="mt-2.5 ml-[42px] px-3.5 py-[3px] rounded-full bg-white/25 text-white text-[12px] leading-tight tracking-wide">
                      立即模考
                    </span>
                  </div>
                </div>

                {/* Banner 3: 核心考点通关计划 */}
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 343 142"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full block pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="banner3Grad" x1="0" y1="0" x2="343" y2="142" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#134E4A" />
                        <stop offset="55%" stopColor="#0F766E" />
                        <stop offset="100%" stopColor="#0D9488" />
                      </linearGradient>
                    </defs>
                    <rect width="343" height="142" fill="url(#banner3Grad)" />
                    <circle cx="60" cy="54" r="50" fill="white" fillOpacity="0.05" />
                    <circle cx="60" cy="54" r="32" fill="white" fillOpacity="0.08" />
                    <path d="M0 124C70 110 150 116 225 128C275 114 315 112 343 124V142H0V124Z" fill="#042F2E" fillOpacity="0.55" />
                    <rect x="34" y="96" width="58" height="11" rx="3" fill="#5EEAD4" />
                    <rect x="40" y="84" width="48" height="12" rx="3" fill="#99F6E4" />
                    <rect x="45" y="72" width="38" height="12" rx="3" fill="#CCFBF1" />
                    <circle cx="64" cy="48" r="14" fill="#FEF08A" />
                    <path d="M59 48L63 52L71 44" stroke="#0F766E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="absolute top-[31px] left-[134px] right-3 flex flex-col items-start pointer-events-none">
                    <div className="text-white text-[19.5px] leading-[1.28] font-normal tracking-[0.02em]">
                      <div>核心考点30天通关</div>
                      <div>每天半小时攻克高频题</div>
                    </div>
                    <span className="mt-2.5 ml-[42px] px-3.5 py-[3px] rounded-full bg-white/25 text-white text-[12px] leading-tight tracking-wide">
                      加入计划
                    </span>
                  </div>
                </div>

                {/* Banner 4: 历年真题深度精讲 */}
                <div className="relative w-full h-full">
                  <svg
                    viewBox="0 0 343 142"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full block pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="banner4Grad" x1="0" y1="0" x2="343" y2="142" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#4C1D95" />
                        <stop offset="55%" stopColor="#6D28D9" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                    </defs>
                    <rect width="343" height="142" fill="url(#banner4Grad)" />
                    <circle cx="60" cy="52" r="52" fill="white" fillOpacity="0.05" />
                    <circle cx="60" cy="52" r="34" fill="white" fillOpacity="0.08" />
                    <path d="M0 124C65 110 140 116 220 128C270 114 310 112 343 124V142H0V124Z" fill="#2E1065" fillOpacity="0.65" />
                    <polygon points="52,118 60,54 68,54 76,118" fill="#DDD6FE" />
                    <rect x="57" y="42" width="14" height="12" rx="2" fill="#FEF08A" />
                    <polygon points="54,42 64,30 74,42" fill="#F43F5E" />
                    <polygon points="71,45 128,28 128,62" fill="#FEF08A" fillOpacity="0.22" />
                  </svg>
                  <div className="absolute top-[31px] left-[134px] right-3 flex flex-col items-start pointer-events-none">
                    <div className="text-white text-[19.5px] leading-[1.28] font-normal tracking-[0.02em]">
                      <div>近10年国省考真题集</div>
                      <div>名师逐题拆解命题规律</div>
                    </div>
                    <span className="mt-2.5 ml-[42px] px-3.5 py-[3px] rounded-full bg-white/25 text-white text-[12px] leading-tight tracking-wide">
                      立即刷题
                    </span>
                  </div>
                </div>
              </SwipeCarousel>

              {/* 头图 Banner 居中指示圆点 */}
              <div className="absolute bottom-[8px] inset-x-0 flex justify-center items-center gap-[8px] z-10">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`切换到第 ${idx + 1} 张 Banner`}
                    onClick={() => setBannerPage(idx)}
                    className={`h-[5.5px] rounded-full transition-all duration-200 ${
                      bannerPage === idx
                        ? 'w-[12px] bg-white'
                        : 'w-[5.5px] bg-white/55'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 5. 金刚区（每次固定显示 4 个图标，支持左右滑动/拖拽切换，圆点居中） */}
          <div className="px-3.5 pt-3">
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(30,90,220,0.05)] pt-3.5 pb-2.5 px-2 relative">
              <SwipeCarousel
                activeIndex={kingkongPage}
                onChange={setKingkongPage}
                className="w-full"
              >
                {KINGKONG_PAGES.map((pageItems, pageIdx) => (
                  <div key={pageIdx} className="w-full grid grid-cols-4">
                    {pageItems.map(({ id, label, Icon }) => (
                      <button
                        key={id}
                        type="button"
                        className="flex flex-col items-center select-none"
                      >
                        <Icon />
                        <span className="mt-1.5 text-[12px] text-[#4A4A4A] whitespace-nowrap">
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
              </SwipeCarousel>

              {/* 居中滚动指示圆点 */}
              <div className="flex justify-center items-center gap-[8px] pt-2">
                {KINGKONG_PAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`切换到金刚区第 ${idx + 1} 页`}
                    onClick={() => setKingkongPage(idx)}
                    className={`h-[5.5px] rounded-full transition-all duration-200 ${
                      kingkongPage === idx
                        ? 'w-[12px] bg-[#3478F6]'
                        : 'w-[5.5px] bg-[#C5CAD6]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 6. 金刚区下方横向可滚动推广插图卡片栏（替换为用户上传的 7 张插图） */}
          <PromoCardsScroller />

          {/* 7. 专项题库列表 */}
          <div className="mt-3 px-3.5 space-y-2.5">
            {QUESTION_BANK_DATA.map((primary) => {
              const isExpanded = !!expandedPrimary[primary.id];
              const hasVisibleChildren = isExpanded && primary.children.length > 0;

              return (
                <div
                  key={primary.id}
                  className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(30,90,220,0.05)] px-3.5 py-1"
                >
                  {/* 一级标题行：左侧圆标、标题文字、右侧“继续上次 >”三者严格上下居中对齐 */}
                  <div
                    className={`py-3.5 ${
                      hasVisibleChildren ? 'border-b border-[#F0F3F8]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => togglePrimary(primary.id)}
                      >
                        <button
                          type="button"
                          className="w-[28px] h-[28px] rounded-full bg-[#EDF3FE] flex items-center justify-center shrink-0"
                          aria-label={`展开或收起${primary.title}`}
                        >
                          <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-b from-[#2B76FA] to-[#175CE5] flex items-center justify-center shadow-[0_2px_4px_rgba(23,92,229,0.25)]">
                            <svg
                              width="11"
                              height="7"
                              viewBox="0 0 11 7"
                              fill="none"
                              className={`transition-transform duration-150 ${
                                isExpanded ? '' : 'rotate-180'
                              }`}
                            >
                              <path
                                d="M1.5 5.5L5.5 1.5L9.5 5.5"
                                stroke="white"
                                strokeWidth="1.9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>

                        <div className="text-[16.5px] font-bold text-[#141414] leading-none tracking-tight">
                          {primary.title}
                        </div>
                      </div>

                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-[13.5px] leading-none text-[#0066FF] font-normal shrink-0"
                      >
                        {primary.hasContinue && <span className="leading-none">继续上次</span>}
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="block">
                          <path
                            d="M1 1L6 6L1 11"
                            stroke="#7C8494"
                            strokeWidth="1.35"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <PencilProgressRow
                      activeCount={primary.activePencils}
                      countText={primary.progress}
                      rowKey={primary.id}
                      className="pl-[40px] mt-1.5"
                    />
                  </div>

                  {/* 二级子节点列表 */}
                  {hasVisibleChildren &&
                    primary.children.map((secondary, secIdx) => {
                      const hasNestedCard = !!secondary.nestedCard;
                      const isNestedOpen =
                        hasNestedCard && !!expandedNested[secondary.nestedCard!.id];

                      return (
                        <React.Fragment key={secondary.id}>
                          <div
                            className={`${
                              hasNestedCard ? 'pt-3.5 pb-2.5' : 'py-3.5'
                            } ${
                              secIdx > 0 ? 'border-t border-[#F0F3F8]' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-[24px] h-[24px] rounded-full bg-[#BFC5CE] flex items-center justify-center shrink-0 ml-[2px]">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                                    <path
                                      d="M1.5 1.5L5.5 5.5L9.5 1.5"
                                      stroke="white"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>

                                <div className="text-[16px] font-bold text-[#141414] leading-none tracking-tight">
                                  {secondary.title}
                                </div>
                              </div>

                              <button
                                type="button"
                                className="flex items-center gap-1.5 text-[13.5px] leading-none text-[#0066FF] font-normal shrink-0"
                              >
                                {secondary.hasContinue && <span className="leading-none">继续上次</span>}
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="block">
                                  <path
                                    d="M1 1L6 6L1 11"
                                    stroke="#7C8494"
                                    strokeWidth="1.35"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>

                            <PencilProgressRow
                              activeCount={secondary.activePencils}
                              countText={secondary.progress}
                              rowKey={secondary.id}
                              className="pl-[40px] mt-1.5"
                            />
                          </div>

                          {/* 三级嵌套浅蓝卡片（如：马克思主义哲学） */}
                          {hasNestedCard && secondary.nestedCard && (
                            <div className="mb-3 bg-[#EFF6FF] rounded-[14px] p-2.5 border border-[#E5F0FF]">
                              <div className="px-1 pt-0.5 pb-2">
                                <div className="flex items-center justify-between">
                                  <div
                                    className="flex items-center gap-2.5 cursor-pointer"
                                    onClick={() => toggleNested(secondary.nestedCard!.id)}
                                  >
                                    <button
                                      type="button"
                                      className="w-[26px] h-[26px] rounded-full bg-[#DCEAFE] border border-white/90 shadow-[0_1px_3px_rgba(23,92,229,0.08)] flex items-center justify-center shrink-0"
                                      aria-label={`展开或收起${secondary.nestedCard.title}`}
                                    >
                                      <svg
                                        width="11"
                                        height="7"
                                        viewBox="0 0 11 7"
                                        fill="none"
                                        className={`transition-transform duration-150 ${
                                          isNestedOpen ? '' : 'rotate-180'
                                        }`}
                                      >
                                        <path
                                          d="M1.5 5.5L5.5 1.5L9.5 5.5"
                                          stroke="#0A5CFF"
                                          strokeWidth="1.9"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </button>

                                    <div className="text-[15.5px] font-bold text-[#141414] leading-none tracking-tight">
                                      {secondary.nestedCard.title}
                                    </div>
                                  </div>

                                  <svg
                                    width="7"
                                    height="12"
                                    viewBox="0 0 7 12"
                                    fill="none"
                                    className="mr-1 block"
                                  >
                                    <path
                                      d="M1 1L6 6L1 11"
                                      stroke="#6E7787"
                                      strokeWidth="1.35"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>

                                <PencilProgressRow
                                  activeCount={secondary.nestedCard.activePencils}
                                  countText={secondary.nestedCard.progress}
                                  rowKey={secondary.nestedCard.id}
                                  className="pl-[36px] mt-1.5"
                                />
                              </div>

                              {/* 四级叶子考点列表 */}
                              {isNestedOpen && (
                                <div className="bg-[#F6FAFF] rounded-[11px] px-3.5 py-0.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85)]">
                                  {secondary.nestedCard.leaves.map((leaf, idx) => (
                                    <div
                                      key={leaf.id}
                                      className={`py-2.5 flex items-center justify-between cursor-pointer ${
                                        idx !== secondary.nestedCard!.leaves.length - 1
                                          ? 'border-b border-[#E8F0FA]'
                                          : ''
                                      }`}
                                    >
                                      <span className="text-[14px] font-bold text-[#181818]">
                                        {leaf.title}
                                      </span>
                                      <div className="flex items-center gap-2.5">
                                        <span className="text-[13px] text-[#595959] tabular-nums">
                                          {leaf.progress}
                                        </span>
                                        <svg
                                          width="6"
                                          height="11"
                                          viewBox="0 0 7 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M1 1L6 6L1 11"
                                            stroke="#7C8494"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                </div>
              );
            })}
          </div>

          {/* 8. "自定义刷题" Pill Button */}
          <div className="pt-3.5 pb-3 flex justify-center bg-[#F7F8FB]">
            <button
              type="button"
              className="h-[31px] pl-1.5 pr-3.5 rounded-full bg-[#ECEEF4] flex items-center gap-2.5"
            >
              <div className="w-[21px] h-[21px] rounded-full bg-[#D2D6DF] flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1.2L12 4.1V9.9L7 12.8L2 9.9V4.1L7 1.2Z"
                    fill="white"
                  />
                  <circle cx="7" cy="7" r="2" fill="#D2D6DF" />
                </svg>
              </div>
              <span className="text-[13px] text-[#666666] tracking-wide">
                自定义刷题
              </span>
              <svg width="5" height="8" viewBox="0 0 5 8" fill="none" className="ml-0.5">
                <path d="M0.5 0.5L4.5 4L0.5 7.5V0.5Z" fill="#B8BCC8" />
              </svg>
            </button>
          </div>
        </div>

        {/* 9. Bottom Tab Navigation + iOS Home Indicator */}
        <div className="bg-[#F7F8FB] pt-1.5 pb-2 select-none">
          <div className="grid grid-cols-4 items-center">
            {/* Tab 1: 练习 (Active) */}
            <button type="button" className="flex flex-col items-center justify-center">
              <div className="w-[24px] h-[24px] flex items-center justify-center">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <rect x="1" y="1" width="18" height="19" rx="2" fill="#3478F6" />
                  <rect x="4.2" y="1" width="1.8" height="5.5" fill="white" />
                  <rect x="4.5" y="14.5" width="9" height="1.8" rx="0.9" fill="white" />
                </svg>
              </div>
              <span className="mt-1 text-[10.5px] text-[#444444]">练习</span>
            </button>

            {/* Tab 2: 课程 */}
            <button type="button" className="flex flex-col items-center justify-center">
              <div className="w-[24px] h-[24px] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 2C6.03 2 2 5.8 2 10.5C2 12.6 2.81 14.52 4.15 16.01L3.3 19.2L6.72 18.08C8.01 18.67 9.46 19 11 19C15.97 19 20 15.2 20 10.5C20 5.8 15.97 2 11 2Z"
                    stroke="#9EA5B5"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.3 7.4L14.2 10.5L9.3 13.6V7.4Z"
                    stroke="#9EA5B5"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="mt-1 text-[10.5px] text-[#666666]">课程</span>
            </button>

            {/* Tab 3: 发现 */}
            <button type="button" className="flex flex-col items-center justify-center">
              <div className="w-[24px] h-[24px] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="9" stroke="#9EA5B5" strokeWidth="1.5" />
                  <path
                    d="M12.6 6.2L10.3 15.8L9.4 11.2L12.6 6.2Z"
                    stroke="#9EA5B5"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6 6.2C13 9.2 13 12.8 10.3 15.8C9 12.8 9 9.2 11.6 6.2Z"
                    stroke="#9EA5B5"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="mt-1 text-[10.5px] text-[#666666]">发现</span>
            </button>

            {/* Tab 4: 我 */}
            <button type="button" className="flex flex-col items-center justify-center">
              <div className="w-[24px] h-[24px] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="9" stroke="#9EA5B5" strokeWidth="1.5" />
                  <path
                    d="M7.2 10.5C7.2 12.7 8.9 14.5 11 14.5C13.1 14.5 14.8 12.7 14.8 10.5"
                    stroke="#9EA5B5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="mt-1 text-[10.5px] text-[#666666]">我</span>
            </button>
          </div>

          <div className="mt-3.5 flex justify-center">
            <div className="w-[134px] h-[5px] bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
