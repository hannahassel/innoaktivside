<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="d4105a92-d7de-4087-817c-dd84fab68eef"></script>

</head>
<body>
<x-dc>
<helmet>
<style>/* INNOAKTIV / UiB webfonts
   ------------------------------------------------------------------
   Open Sans  — primary UI + body typeface (all weights used in file)
   Bebas Neue — rare display accent (1 use in source)
   Times New Roman — serif for the INNOAKTIV wordmark, canvas titles and
                     as a "variation / contrast to Open Sans" (per the
                     source Tekst frame). It is a system font shipped with
                     every OS, so no @font-face is needed — it is referenced
                     by the system serif stack in typography.css.

   NOTE (font substitution): the .fig references the retail "Open Sans" and
   "Bebas Neue" faces. Both are freely available on Google Fonts and match
   exactly, so they are loaded from the Google Fonts CDN below. If you have
   licensed binaries, drop them in assets/fonts and replace the @import with
   local @font-face rules using the same family names. */

/* latin-ext */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("ad032e72-ac72-4981-b1cb-1e290ce288f8") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("5f1b8193-c538-4dda-a864-b93f9f3e05ea") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("00f5271d-802a-42b6-9160-832b23369b2d") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("a17d4c39-169c-40d7-bed0-6edb955b4e61") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("118b8746-3e22-422b-8041-34d7f2387716") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("52009a30-b327-4bcc-8453-0d11ef5e22c3") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("a036bda8-59ee-4fc0-b31d-9410da75b2ee") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("131d78e4-8297-4880-8f98-d030cace5399") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("9b4db007-0b34-4859-b700-1ff68e0df226") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("d9a316f1-209f-4f87-9f0c-48c219dd270d") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("465b3891-e9a1-42f1-a13c-ac0d7364bc09") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("49a4e5ec-41b8-4950-be23-dd1a07914a90") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("387529a2-5ef1-4f96-bf54-90ee693b5c82") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("263b79db-9d88-4802-b02b-a4f9851d9e72") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("f752cd1e-0b16-4f16-8480-a1583e0feb1a") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("a5878eb1-d3b8-4b2a-b060-100a18dbc70d") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("b06f8a54-544f-4b5b-b302-1224858155a0") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("d43c737b-97af-4ee2-8d5b-aac8dcbb3b00") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("ac988413-9935-445f-ac90-3e387c54ad2e") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("acd5e978-86f4-4d8f-9c3d-049be593b604") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("40260946-9c0b-4fe5-8522-80574b660b0d") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("070d5728-b561-4a16-808f-5fa345486fe4") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("387529a2-5ef1-4f96-bf54-90ee693b5c82") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("263b79db-9d88-4802-b02b-a4f9851d9e72") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("f752cd1e-0b16-4f16-8480-a1583e0feb1a") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("a5878eb1-d3b8-4b2a-b060-100a18dbc70d") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("b06f8a54-544f-4b5b-b302-1224858155a0") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("d43c737b-97af-4ee2-8d5b-aac8dcbb3b00") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("ac988413-9935-445f-ac90-3e387c54ad2e") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("acd5e978-86f4-4d8f-9c3d-049be593b604") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("40260946-9c0b-4fe5-8522-80574b660b0d") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("070d5728-b561-4a16-808f-5fa345486fe4") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("387529a2-5ef1-4f96-bf54-90ee693b5c82") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("263b79db-9d88-4802-b02b-a4f9851d9e72") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("f752cd1e-0b16-4f16-8480-a1583e0feb1a") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("a5878eb1-d3b8-4b2a-b060-100a18dbc70d") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("b06f8a54-544f-4b5b-b302-1224858155a0") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("d43c737b-97af-4ee2-8d5b-aac8dcbb3b00") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("ac988413-9935-445f-ac90-3e387c54ad2e") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("acd5e978-86f4-4d8f-9c3d-049be593b604") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("40260946-9c0b-4fe5-8522-80574b660b0d") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("070d5728-b561-4a16-808f-5fa345486fe4") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

</style>
<style>/* INNOAKTIV / UiB — Color tokens
   Values transcribed verbatim from the Figma "Farger" and "Tillegsfarger"
   color-documentation frames. Base tokens keep the Norwegian source names;
   semantic aliases below map them to roles used across the toolkit. */

:root {
  /* ── Hovedfarger (main brand colors) ───────────────────────────── */
  --uib-morkebla:      #004281; /* Mørkeblå hovedfarge  0,66,129   */
  --uib-sterk-bla:     #00a2ff; /* Sterk blå hovedfarge 0,162,255  */
  --uib-morkerod:      #820a12; /* Mørkerød hovedfarge  130,10,18  */
  --uib-sterk-rod:     #ff2130; /* Sterk rød hovedfarge 255,33,48  */

  /* Header / active red used across product chrome (rgb 225,40,49) */
  --uib-rod:           #e12831;
  /* Deep red used on filled boxes / "Mellomrød" (rgb 186,0,3)      */
  --uib-mellrod:       #ba0003;
  --uib-mellombla:     #0077c6; /* Mellomblå 0,119,198 */

  /* ── Lyse farger / bakgrunn (light + background) ───────────────── */
  --uib-lys-bla:       #b0deff; /* Lys blå        */
  --uib-lys-rod:       #ff8474; /* Lys rød        */
  --uib-bakgrunn-bla:  #f0fbfd; /* Bakgrunnsblå   */
  --uib-bakgrunn-rod:  #ffd9ca; /* Bakgrunnsrød   */
  --uib-bakgrunn-beige:#fff9f0; /* Bakgrunn beige */

  /* ── Tekstfarger ──────────────────────────────────────────────── */
  --uib-font-mork-bla: #00102c; /* Font mørk blå  */
  --uib-font-mork-rod: #200505; /* Font mørk rød  */

  /* ── Signalfarger (additional / signal palette) ───────────────── */
  --uib-gronn-signal-mork:  #00a75f; /* Grønn signal mørk    */
  --uib-gronn-signal-sterk: #67f3b0; /* Grønn signal sterk   */
  --uib-gronn-signal-bg:    #cafee4; /* Grønn signal bakgrunn*/
  --uib-gul-signal:         #fff0a4; /* Gul signal           */
  --uib-gra-signal:         #eae2d5; /* Grå signal           */

  /* ── Neutrals used in canvas UI ───────────────────────────────── */
  --uib-white:      #ffffff;
  --uib-black:      #000000;
  --uib-gray-fill:  #d9d9d9; /* empty illustration / box-header fill */
  --uib-gray-text:  #7b7b7b; /* placeholder + "(Din egen tittel)"    */
  --uib-gray-btn:   #c0c0c0; /* inactive download button             */

  /* ── Semantic aliases ─────────────────────────────────────────── */
  --color-bg:          var(--uib-bakgrunn-beige);
  --color-surface:     var(--uib-white);
  --color-header:      var(--uib-rod);        /* app header bar        */
  --color-footer:      var(--uib-morkerod);   /* footer band           */
  --color-accent:      var(--uib-sterk-rod);  /* primary action red    */
  --color-accent-deep: var(--uib-morkerod);   /* filled box / section  */
  --color-brand-blue:  var(--uib-morkebla);

  --text-heading:      var(--uib-font-mork-rod);
  --text-body:         var(--uib-font-mork-rod);
  --text-muted:        var(--uib-gray-text);
  --text-on-red:       var(--uib-white);

  --surface-card:      var(--uib-bakgrunn-rod); /* course / info cards */
  --surface-panel:     var(--uib-bakgrunn-bla); /* edit modal panels   */

  --link:              var(--uib-sterk-rod);
  --link-hover:        var(--uib-morkerod);
}
</style>
<style>/* INNOAKTIV / UiB — Typography tokens
   Type scale transcribed from the Figma "Tekst" specimen frame:
   H1 = 48px, H2 = 36px (SemiBold), H3 = 24px, Brødtekst (body) = 16px.
   Open Sans is the working typeface; Times New Roman is used as a serif
   contrast for the INNOAKTIV wordmark and the large canvas titles. */

:root {
  /* Families */
  --font-sans:  "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Times New Roman", Times, Georgia, serif;
  --font-display: "Bebas Neue", "Open Sans", sans-serif; /* rare accent */

  /* Weights */
  --fw-regular:  400; /* @kind font */
  --fw-semibold: 600; /* @kind font */
  --fw-bold:     700; /* @kind font */

  /* Type scale (px) */
  --fs-h1:    48px; /* H1                 */
  --fs-h2:    36px; /* H2 / section head  */
  --fs-label: 30px; /* colour-group label */
  --fs-h3:    24px; /* H3 / breadcrumb    */
  --fs-body:  16px; /* Brødtekst          */
  --fs-small: 14px; /* fine print         */

  /* Line-heights — the source sets display text to 100% */
  --lh-tight: 1;   /* @kind other */
  --lh-body:  1.4; /* @kind other */

  /* Semantic roles */
  --type-title:    var(--fw-bold) var(--fs-h1)/var(--lh-tight) var(--font-serif);   /* "LEAN CANVAS" */
  --type-heading:  var(--fw-bold) var(--fs-h1)/var(--lh-tight) var(--font-sans);    /* page H1       */
  --type-section:  var(--fw-semibold) var(--fs-h2)/var(--lh-tight) var(--font-sans);
  --type-body:     var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans);
  --type-wordmark: var(--fw-regular) var(--fs-h3)/var(--lh-tight) var(--font-serif); /* INNOAKTIV    */
}
</style>
<style>/* INNOAKTIV / UiB — Spacing, radius, shadow tokens
   Distances taken from the source auto-layout values (header padding 60px,
   footer padding 33px, specimen gap 27px, box radius 10px, etc.). */

:root {
  /* Spacing scale (observed source values, not snapped to a grid) */
  --space-2:  2px;
  --space-7:  7px;   /* watermark stack gap        */
  --space-10: 10px;  /* box radius / small gap     */
  --space-20: 20px;  /* header inner gap           */
  --space-27: 27px;  /* type-specimen row gap      */
  --space-33: 33px;  /* footer vertical padding    */
  --space-60: 60px;  /* header side padding        */

  /* Radii */
  --radius-box:   10px; /* canvas boxes, course cards          */
  --radius-panel: 20px; /* edit-modal toolbar / rounded panels */
  --radius-pill:  999px;

  /* Borders */
  --border-box:   3px solid var(--uib-sterk-rod); /* Sprikende box outline (inset) */

  /* Shadows (rgba 0,0,0,0.25 is the source drop shadow) */
  --shadow-card:  0 4px 12px rgba(0, 0, 0, 0.25);
  --shadow-soft:  0 2px 8px rgba(0, 0, 0, 0.15);

  /* Chrome dimensions */
  --header-h: 140px;
  --footer-h: 221px;
  --content-max: 1280px;
}
</style>
<style>/* INNOAKTIV / UiB Design System — global stylesheet entry point.
   This file is a manifest of @import lines only. Consumers link this one
   file; everything reachable from here ships with the design system. */

/* INNOAKTIV / UiB webfonts
   ------------------------------------------------------------------
   Open Sans  — primary UI + body typeface (all weights used in file)
   Bebas Neue — rare display accent (1 use in source)
   Times New Roman — serif for the INNOAKTIV wordmark, canvas titles and
                     as a "variation / contrast to Open Sans" (per the
                     source Tekst frame). It is a system font shipped with
                     every OS, so no @font-face is needed — it is referenced
                     by the system serif stack in typography.css.

   NOTE (font substitution): the .fig references the retail "Open Sans" and
   "Bebas Neue" faces. Both are freely available on Google Fonts and match
   exactly, so they are loaded from the Google Fonts CDN below. If you have
   licensed binaries, drop them in assets/fonts and replace the @import with
   local @font-face rules using the same family names. */

/* latin-ext */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("ad032e72-ac72-4981-b1cb-1e290ce288f8") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("5f1b8193-c538-4dda-a864-b93f9f3e05ea") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("00f5271d-802a-42b6-9160-832b23369b2d") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("a17d4c39-169c-40d7-bed0-6edb955b4e61") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("118b8746-3e22-422b-8041-34d7f2387716") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("52009a30-b327-4bcc-8453-0d11ef5e22c3") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("a036bda8-59ee-4fc0-b31d-9410da75b2ee") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("131d78e4-8297-4880-8f98-d030cace5399") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("9b4db007-0b34-4859-b700-1ff68e0df226") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("d9a316f1-209f-4f87-9f0c-48c219dd270d") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("465b3891-e9a1-42f1-a13c-ac0d7364bc09") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("49a4e5ec-41b8-4950-be23-dd1a07914a90") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("387529a2-5ef1-4f96-bf54-90ee693b5c82") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("263b79db-9d88-4802-b02b-a4f9851d9e72") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("f752cd1e-0b16-4f16-8480-a1583e0feb1a") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("a5878eb1-d3b8-4b2a-b060-100a18dbc70d") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("b06f8a54-544f-4b5b-b302-1224858155a0") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("d43c737b-97af-4ee2-8d5b-aac8dcbb3b00") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("ac988413-9935-445f-ac90-3e387c54ad2e") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("acd5e978-86f4-4d8f-9c3d-049be593b604") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("40260946-9c0b-4fe5-8522-80574b660b0d") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("070d5728-b561-4a16-808f-5fa345486fe4") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("387529a2-5ef1-4f96-bf54-90ee693b5c82") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("263b79db-9d88-4802-b02b-a4f9851d9e72") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("f752cd1e-0b16-4f16-8480-a1583e0feb1a") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("a5878eb1-d3b8-4b2a-b060-100a18dbc70d") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("b06f8a54-544f-4b5b-b302-1224858155a0") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("d43c737b-97af-4ee2-8d5b-aac8dcbb3b00") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("ac988413-9935-445f-ac90-3e387c54ad2e") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("acd5e978-86f4-4d8f-9c3d-049be593b604") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("40260946-9c0b-4fe5-8522-80574b660b0d") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url("070d5728-b561-4a16-808f-5fa345486fe4") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("387529a2-5ef1-4f96-bf54-90ee693b5c82") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("263b79db-9d88-4802-b02b-a4f9851d9e72") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("f752cd1e-0b16-4f16-8480-a1583e0feb1a") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("a5878eb1-d3b8-4b2a-b060-100a18dbc70d") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("b06f8a54-544f-4b5b-b302-1224858155a0") format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("d43c737b-97af-4ee2-8d5b-aac8dcbb3b00") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("ac988413-9935-445f-ac90-3e387c54ad2e") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("acd5e978-86f4-4d8f-9c3d-049be593b604") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("40260946-9c0b-4fe5-8522-80574b660b0d") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url("070d5728-b561-4a16-808f-5fa345486fe4") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


/* INNOAKTIV / UiB — Color tokens
   Values transcribed verbatim from the Figma "Farger" and "Tillegsfarger"
   color-documentation frames. Base tokens keep the Norwegian source names;
   semantic aliases below map them to roles used across the toolkit. */

:root {
  /* ── Hovedfarger (main brand colors) ───────────────────────────── */
  --uib-morkebla:      #004281; /* Mørkeblå hovedfarge  0,66,129   */
  --uib-sterk-bla:     #00a2ff; /* Sterk blå hovedfarge 0,162,255  */
  --uib-morkerod:      #820a12; /* Mørkerød hovedfarge  130,10,18  */
  --uib-sterk-rod:     #ff2130; /* Sterk rød hovedfarge 255,33,48  */

  /* Header / active red used across product chrome (rgb 225,40,49) */
  --uib-rod:           #e12831;
  /* Deep red used on filled boxes / "Mellomrød" (rgb 186,0,3)      */
  --uib-mellrod:       #ba0003;
  --uib-mellombla:     #0077c6; /* Mellomblå 0,119,198 */

  /* ── Lyse farger / bakgrunn (light + background) ───────────────── */
  --uib-lys-bla:       #b0deff; /* Lys blå        */
  --uib-lys-rod:       #ff8474; /* Lys rød        */
  --uib-bakgrunn-bla:  #f0fbfd; /* Bakgrunnsblå   */
  --uib-bakgrunn-rod:  #ffd9ca; /* Bakgrunnsrød   */
  --uib-bakgrunn-beige:#fff9f0; /* Bakgrunn beige */

  /* ── Tekstfarger ──────────────────────────────────────────────── */
  --uib-font-mork-bla: #00102c; /* Font mørk blå  */
  --uib-font-mork-rod: #200505; /* Font mørk rød  */

  /* ── Signalfarger (additional / signal palette) ───────────────── */
  --uib-gronn-signal-mork:  #00a75f; /* Grønn signal mørk    */
  --uib-gronn-signal-sterk: #67f3b0; /* Grønn signal sterk   */
  --uib-gronn-signal-bg:    #cafee4; /* Grønn signal bakgrunn*/
  --uib-gul-signal:         #fff0a4; /* Gul signal           */
  --uib-gra-signal:         #eae2d5; /* Grå signal           */

  /* ── Neutrals used in canvas UI ───────────────────────────────── */
  --uib-white:      #ffffff;
  --uib-black:      #000000;
  --uib-gray-fill:  #d9d9d9; /* empty illustration / box-header fill */
  --uib-gray-text:  #7b7b7b; /* placeholder + "(Din egen tittel)"    */
  --uib-gray-btn:   #c0c0c0; /* inactive download button             */

  /* ── Semantic aliases ─────────────────────────────────────────── */
  --color-bg:          var(--uib-bakgrunn-beige);
  --color-surface:     var(--uib-white);
  --color-header:      var(--uib-rod);        /* app header bar        */
  --color-footer:      var(--uib-morkerod);   /* footer band           */
  --color-accent:      var(--uib-sterk-rod);  /* primary action red    */
  --color-accent-deep: var(--uib-morkerod);   /* filled box / section  */
  --color-brand-blue:  var(--uib-morkebla);

  --text-heading:      var(--uib-font-mork-rod);
  --text-body:         var(--uib-font-mork-rod);
  --text-muted:        var(--uib-gray-text);
  --text-on-red:       var(--uib-white);

  --surface-card:      var(--uib-bakgrunn-rod); /* course / info cards */
  --surface-panel:     var(--uib-bakgrunn-bla); /* edit modal panels   */

  --link:              var(--uib-sterk-rod);
  --link-hover:        var(--uib-morkerod);
}

/* INNOAKTIV / UiB — Typography tokens
   Type scale transcribed from the Figma "Tekst" specimen frame:
   H1 = 48px, H2 = 36px (SemiBold), H3 = 24px, Brødtekst (body) = 16px.
   Open Sans is the working typeface; Times New Roman is used as a serif
   contrast for the INNOAKTIV wordmark and the large canvas titles. */

:root {
  /* Families */
  --font-sans:  "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Times New Roman", Times, Georgia, serif;
  --font-display: "Bebas Neue", "Open Sans", sans-serif; /* rare accent */

  /* Weights */
  --fw-regular:  400; /* @kind font */
  --fw-semibold: 600; /* @kind font */
  --fw-bold:     700; /* @kind font */

  /* Type scale (px) */
  --fs-h1:    48px; /* H1                 */
  --fs-h2:    36px; /* H2 / section head  */
  --fs-label: 30px; /* colour-group label */
  --fs-h3:    24px; /* H3 / breadcrumb    */
  --fs-body:  16px; /* Brødtekst          */
  --fs-small: 14px; /* fine print         */

  /* Line-heights — the source sets display text to 100% */
  --lh-tight: 1;   /* @kind other */
  --lh-body:  1.4; /* @kind other */

  /* Semantic roles */
  --type-title:    var(--fw-bold) var(--fs-h1)/var(--lh-tight) var(--font-serif);   /* "LEAN CANVAS" */
  --type-heading:  var(--fw-bold) var(--fs-h1)/var(--lh-tight) var(--font-sans);    /* page H1       */
  --type-section:  var(--fw-semibold) var(--fs-h2)/var(--lh-tight) var(--font-sans);
  --type-body:     var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-sans);
  --type-wordmark: var(--fw-regular) var(--fs-h3)/var(--lh-tight) var(--font-serif); /* INNOAKTIV    */
}

/* INNOAKTIV / UiB — Spacing, radius, shadow tokens
   Distances taken from the source auto-layout values (header padding 60px,
   footer padding 33px, specimen gap 27px, box radius 10px, etc.). */

:root {
  /* Spacing scale (observed source values, not snapped to a grid) */
  --space-2:  2px;
  --space-7:  7px;   /* watermark stack gap        */
  --space-10: 10px;  /* box radius / small gap     */
  --space-20: 20px;  /* header inner gap           */
  --space-27: 27px;  /* type-specimen row gap      */
  --space-33: 33px;  /* footer vertical padding    */
  --space-60: 60px;  /* header side padding        */

  /* Radii */
  --radius-box:   10px; /* canvas boxes, course cards          */
  --radius-panel: 20px; /* edit-modal toolbar / rounded panels */
  --radius-pill:  999px;

  /* Borders */
  --border-box:   3px solid var(--uib-sterk-rod); /* Sprikende box outline (inset) */

  /* Shadows (rgba 0,0,0,0.25 is the source drop shadow) */
  --shadow-card:  0 4px 12px rgba(0, 0, 0, 0.25);
  --shadow-soft:  0 2px 8px rgba(0, 0, 0, 0.15);

  /* Chrome dimensions */
  --header-h: 140px;
  --footer-h: 221px;
  --content-max: 1280px;
}

</style>
<script src="5b96050f-fd3a-43af-a3bd-f653b8eb72f6"></script>
<script src="d00dca99-cc74-41d1-b1d8-6a980461d230"></script>
<script src="af0b48b2-49b4-4047-afee-105bd3bc8a3d"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<style>/* latin-ext */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("ad032e72-ac72-4981-b1cb-1e290ce288f8") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("5f1b8193-c538-4dda-a864-b93f9f3e05ea") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("0d63aba3-e131-4a2d-b72d-add0d507fd77") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("a3943e70-524b-463c-9335-8eda87f71a9c") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("58481367-a9f7-4d7b-9d9f-1e72bcd709af") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("aca33688-ca2c-44c9-b8c7-008bbdb5c26a") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("0d63aba3-e131-4a2d-b72d-add0d507fd77") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("a3943e70-524b-463c-9335-8eda87f71a9c") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("58481367-a9f7-4d7b-9d9f-1e72bcd709af") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("aca33688-ca2c-44c9-b8c7-008bbdb5c26a") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("d02c197d-a614-4a6c-bdb0-1f9afb10f75f") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("b249233a-450f-4a82-95ad-84f6d4fc93d1") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* math */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("03d3a5cc-a5f7-4e2c-9db7-20552c7a7df8") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("904e950d-062a-480a-bd07-e925aba7f248") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("8eb41021-65cb-499b-812a-39d2d684606c") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("d1b2b22a-7ebd-45e6-a44d-0802582a3fe1") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("c5d1a447-9838-4f67-a881-bb884d2c7fa9") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("17b16c70-1d1d-4da8-a61a-ccaa79da89c9") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("3beb61b7-0411-4f39-ae4a-8614e626b547") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* math */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("9b269f89-c8d0-4dad-882c-243c1741e1b3") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("7767e6d9-32ec-408f-9f39-43ea6fc0ce73") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("3de4c948-2d55-4df7-8d06-a0560ac3d3ba") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("0a9b026a-66e7-4a98-8fd8-93bec1d7e256") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("5349aafd-d2c3-4a80-8d0a-62c64991ed31") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("17b16c70-1d1d-4da8-a61a-ccaa79da89c9") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("3beb61b7-0411-4f39-ae4a-8614e626b547") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* math */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("9b269f89-c8d0-4dad-882c-243c1741e1b3") format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("7767e6d9-32ec-408f-9f39-43ea6fc0ce73") format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("3de4c948-2d55-4df7-8d06-a0560ac3d3ba") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("0a9b026a-66e7-4a98-8fd8-93bec1d7e256") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("5349aafd-d2c3-4a80-8d0a-62c64991ed31") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("e058a4ca-e4fa-46c4-ad5d-cdc9486c6431") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("5cd6e049-7ea3-4d87-979a-1016d3af5422") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("ba4cdc54-6c41-4472-a0ab-14dd11e0affb") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("675cf4b5-73c4-436d-876b-a86ff4973aff") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("b28a4c46-2adb-4b60-9c95-98ce47af50c9") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("0897028c-4126-436d-8b5e-548c321d55ef") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("ee85a84a-3f85-4c4a-9013-b08eae8868c3") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("d724c6a8-794c-4da4-a89f-1759f898d88c") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("b28a4c46-2adb-4b60-9c95-98ce47af50c9") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("0897028c-4126-436d-8b5e-548c321d55ef") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("ee85a84a-3f85-4c4a-9013-b08eae8868c3") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("d724c6a8-794c-4da4-a89f-1759f898d88c") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("f27b7d14-5ec0-4c91-877a-fdd8cdcf4220") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("c32fd7ca-9627-4c85-9bb4-33e702a271fb") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("857ab149-7565-407d-9cf5-216b54210036") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("9f29018a-3a37-412a-ae50-334c9c3d2385") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("39b254dc-7535-49aa-9f91-5cc553f1f52c") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("f033481c-117c-451b-8ea3-41c03ca93f8f") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("f27b7d14-5ec0-4c91-877a-fdd8cdcf4220") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("c32fd7ca-9627-4c85-9bb4-33e702a271fb") format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("857ab149-7565-407d-9cf5-216b54210036") format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("9f29018a-3a37-412a-ae50-334c9c3d2385") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("39b254dc-7535-49aa-9f91-5cc553f1f52c") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("f033481c-117c-451b-8ea3-41c03ca93f8f") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<style>
  html,body{margin:0}
  body{background:var(--uib-bakgrunn-beige);font-family:'Open Sans',-apple-system,sans-serif;color:var(--uib-font-mork-rod)}
  *{box-sizing:border-box}
  a{color:var(--uib-sterk-rod);text-decoration:none}
  a:hover{color:var(--uib-morkerod)}
  [contenteditable]:focus{outline:none}
  @media print{
    body *{visibility:hidden}
    #poster-print,#poster-print *{visibility:visible}
    #poster-print{position:fixed !important;left:0;top:0;transform:none !important;box-shadow:none !important}
    @page{margin:10mm}
  }
</style>
</helmet>

<input type="file" accept="image/*" ref="{{ fileRef }}" sc-camel-on-change="{{ onFile }}" style="display:none">

<sc-if value="{{ isFormat }}" hint-placeholder-val="{{ true }}">
<div style="min-height:100vh;display:flex;flex-direction:column;background:var(--uib-bakgrunn-beige)">
  <header style="display:none;align-items:center;justify-content:space-between;padding:24px 60px;box-sizing:border-box">
    <button sc-camel-on-click="{{ noop }}" aria-label="Tilbake" style="display:flex;align-items:center;gap:20px;background:none;border:none;cursor:pointer;padding:0;font:inherit">
      <svg sc-camel-view-box="0 0 24 24" width="34" height="34"><path d="M 7.41 10.58 L 2.83 6 L 7.41 1.41 L 6 0 L 0 6 L 6 12 L 7.41 10.58 Z" fill="var(--uib-black)" transform="matrix(1 0 0 1 8 6)"></path></svg>
      <span style="font-family:'Open Sans',sans-serif;font-size:24px;color:var(--uib-black)">INNOV101 &lt; FRA IDÉ TIL PLAKAT</span>
    </button>
    <button sc-camel-on-click="{{ onHelp }}" aria-label="Hjelp" title="Hjelp" style="width: 50px; height: 50px; border-radius: 0px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex: none; padding: 0; background-color: #FFFFFF00">
      <svg sc-camel-view-box="0 0 24 24" width="27" height="27" style="width: 40px; height: 40px"><path d="M 13.07 9.25 L 12.17 10.17 C 11.45 10.89 11 11.5 11 13 L 9 13 L 9 12.5 C 9 11.39 9.45 10.39 10.17 9.67 L 11.41 8.41 C 11.78 8.05 12 7.55 12 7 C 12 5.89 11.1 5 10 5 C 9.47 5 8.961 5.211 8.586 5.586 C 8.211 5.961 8 6.47 8 7 L 6 7 C 6 5.939 6.421 4.922 7.172 4.172 C 7.922 3.421 8.939 3 10 3 C 11.061 3 12.078 3.421 12.828 4.172 C 13.579 4.922 14 5.939 14 7 C 14 7.88 13.64 8.67 13.07 9.25 Z M 11 17 L 9 17 L 9 15 L 11 15 M 10 0 C 8.687 0 7.386 0.259 6.173 0.761 C 4.96 1.264 3.858 2 2.929 2.929 C 1.054 4.804 0 7.348 0 10 C 0 12.652 1.054 15.196 2.929 17.071 C 3.858 18 4.96 18.736 6.173 19.239 C 7.386 19.741 8.687 20 10 20 C 12.652 20 15.196 18.946 17.071 17.071 C 18.946 15.196 20 12.652 20 10 C 20 4.47 15.5 0 10 0 Z" fill="#200505" transform="matrix(1 0 0 1 2 2)"></path></svg>
    </button>
  </header>
  <main style="flex:1;width:100%;max-width:1040px;margin:0 auto;padding:8px 40px 90px;display:flex;flex-direction:column;align-items:center;text-align:center">
    <h1 style="font-family:'Open Sans',sans-serif;font-weight:700;font-size:48px;line-height:1.05;margin:12px 0 0;text-align:center;color:#200505">Fra idé til plakat</h1>
    <p style="font-size:18px;line-height:1.5;max-width:640px;color:var(--uib-font-mork-rod);margin:18px 0 0;text-align:center">Bruk det du har lært om problem, løsning, verdiforslag, kanal og bruker til å lage en plakat som treffer målgruppen din.</p>
    <div style="margin-top: 40px">{{ formatCards }}</div>
    <p style="font-size: 15px; color: var(--uib-gray-text); margin: 20px 0 0; text-align: center">Velg formatet som passer best. Du kan endre formatet underveis.</p><div style="margin-top:48px;display:flex;align-items:center;gap:20px">
      <button sc-camel-on-click="{{ onStart }}" style="display:flex;align-items:center;justify-content:center;gap:9px;flex-shrink:0;background:#ff2130;color:#ffffff;border:none;border-radius:9px;padding:12px 36px;font-family:'Open Sans','Segoe UI',Tahoma,Arial,sans-serif;font-size:14px;font-weight:bold;white-space:nowrap;box-shadow:0 3px 12px rgba(0,0,0,0.12);cursor:pointer" style-hover="background:#d4141f">
        <span>Neste</span>
        <svg sc-camel-view-box="0 0 24 24" width="22" height="22"><path d="M 0 6.92 L 0 8.92 L 12 8.92 L 6.5 14.42 L 7.92 15.84 L 15.84 7.92 L 7.92 0 L 6.5 1.42 L 12 6.92 L 0 6.92 Z" fill="#fff" transform="matrix(1 0 0 1 4 4.08)"></path></svg>
      </button>
    </div>
  </main>
  
</div>
</sc-if>

<sc-if value="{{ isChoose }}" hint-placeholder-val="{{ false }}">
<div style="min-height:100vh;display:flex;flex-direction:column;background:var(--uib-bakgrunn-beige)">
  <header style="display:none;align-items:center;justify-content:space-between;padding:24px 60px;box-sizing:border-box">
    <button sc-camel-on-click="{{ onBackFormat }}" aria-label="Tilbake" style="display:flex;align-items:center;gap:20px;background:none;border:none;cursor:pointer;padding:0;font:inherit">
      <svg sc-camel-view-box="0 0 24 24" width="34" height="34"><path d="M 7.41 10.58 L 2.83 6 L 7.41 1.41 L 6 0 L 0 6 L 6 12 L 7.41 10.58 Z" fill="var(--uib-black)" transform="matrix(1 0 0 1 8 6)"></path></svg>
      <span style="font-family:'Open Sans',sans-serif;font-size:24px;color:var(--uib-black)">INNOV101 &lt; FRA IDÉ TIL PLAKAT</span>
    </button>
    <button sc-camel-on-click="{{ onHelp }}" aria-label="Hjelp" title="Hjelp" style="width:50px;height:50px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none;padding:0;background:transparent">
      <svg sc-camel-view-box="0 0 24 24" width="40" height="40"><path d="M 13.07 9.25 L 12.17 10.17 C 11.45 10.89 11 11.5 11 13 L 9 13 L 9 12.5 C 9 11.39 9.45 10.39 10.17 9.67 L 11.41 8.41 C 11.78 8.05 12 7.55 12 7 C 12 5.89 11.1 5 10 5 C 9.47 5 8.961 5.211 8.586 5.586 C 8.211 5.961 8 6.47 8 7 L 6 7 C 6 5.939 6.421 4.922 7.172 4.172 C 7.922 3.421 8.939 3 10 3 C 11.061 3 12.078 3.421 12.828 4.172 C 13.579 4.922 14 5.939 14 7 C 14 7.88 13.64 8.67 13.07 9.25 Z M 11 17 L 9 17 L 9 15 L 11 15 M 10 0 C 8.687 0 7.386 0.259 6.173 0.761 C 4.96 1.264 3.858 2 2.929 2.929 C 1.054 4.804 0 7.348 0 10 C 0 12.652 1.054 15.196 2.929 17.071 C 3.858 18 4.96 18.736 6.173 19.239 C 7.386 19.741 8.687 20 10 20 C 12.652 20 15.196 18.946 17.071 17.071 C 18.946 15.196 20 12.652 20 10 C 20 4.47 15.5 0 10 0 Z" fill="#200505" transform="matrix(1 0 0 1 2 2)"></path></svg>
    </button>
  </header>
  <main style="flex:1;width:100%;max-width:900px;margin:0 auto;padding:8px 40px 90px;display:flex;flex-direction:column;align-items:center;text-align:center">
    <h1 style="font-family:'Open Sans',sans-serif;font-weight:700;font-size:40px;margin:12px 0 0;color:#200505">Vil du starte med en mal eller fra blankt?</h1>
    <p style="font-size:17px;color:var(--uib-font-mork-rod);margin:16px 0 0;max-width:620px">Bruksområde: <b>{{ usecaseLabel }}</b>. Malen gir et ferdig oppsett med plassholder-overskrift, tekst og bildeflate – alt kan byttes ut og redigeres med verktøyene.</p>
    <div style="margin-top:40px">{{ chooseCards }}</div>
  </main>
  
</div>
</sc-if>

<sc-if value="{{ isEditor }}" hint-placeholder-val="{{ false }}">
<div style="min-height:100vh;display:flex;flex-direction:column;background:var(--uib-bakgrunn-beige)">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px 28px;background:#fff;border-bottom:1px solid rgba(0,0,0,.08)">
    <button sc-camel-on-click="{{ onClose }}" style="display:inline-flex;align-items:center;gap:12px;background:none;border:none;cursor:pointer;font:inherit;color:var(--uib-black);padding:6px">
      <svg sc-camel-view-box="0 0 24 24" width="26" height="26"><path d="M 7.41 10.58 L 2.83 6 L 7.41 1.41 L 6 0 L 0 6 L 6 12 L 7.41 10.58 Z" fill="currentColor" transform="matrix(1 0 0 1 8 6)"></path></svg>
      <span style="font-size:18px">Tilbake til start</span>
    </button>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
      
      <div>{{ fmtSwitch }}</div>
    </div>
    <div style="display:flex;align-items:center;gap:16px">
      <button sc-camel-on-click="{{ onHelp }}" aria-label="Hjelp" title="Hjelp" style="width: 50px; height: 50px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex: none; padding: 0; border-radius: 0px; background-color: #FFFFFF00">
        <svg sc-camel-view-box="0 0 24 24" width="27" height="27" style="width: 35px; height: 35px"><path d="M 13.07 9.25 L 12.17 10.17 C 11.45 10.89 11 11.5 11 13 L 9 13 L 9 12.5 C 9 11.39 9.45 10.39 10.17 9.67 L 11.41 8.41 C 11.78 8.05 12 7.55 12 7 C 12 5.89 11.1 5 10 5 C 9.47 5 8.961 5.211 8.586 5.586 C 8.211 5.961 8 6.47 8 7 L 6 7 C 6 5.939 6.421 4.922 7.172 4.172 C 7.922 3.421 8.939 3 10 3 C 11.061 3 12.078 3.421 12.828 4.172 C 13.579 4.922 14 5.939 14 7 C 14 7.88 13.64 8.67 13.07 9.25 Z M 11 17 L 9 17 L 9 15 L 11 15 M 10 0 C 8.687 0 7.386 0.259 6.173 0.761 C 4.96 1.264 3.858 2 2.929 2.929 C 1.054 4.804 0 7.348 0 10 C 0 12.652 1.054 15.196 2.929 17.071 C 3.858 18 4.96 18.736 6.173 19.239 C 7.386 19.741 8.687 20 10 20 C 12.652 20 15.196 18.946 17.071 17.071 C 18.946 15.196 20 12.652 20 10 C 20 4.47 15.5 0 10 0 Z" fill="#200505" transform="matrix(1 0 0 1 2 2)"></path></svg>
      </button>
      <button sc-camel-on-click="{{ onSave }}" style="display:flex;align-items:center;gap:9px;flex-shrink:0;background:#ff2130;color:#ffffff;border:none;border-radius:9px;padding:12px 20px;font-family:'Open Sans','Segoe UI',Tahoma,Arial,sans-serif;font-size:14px;font-weight:bold;white-space:nowrap;box-shadow:0 3px 12px rgba(0,0,0,0.12);cursor:pointer" style-hover="background:#d4141f">
        <span>Last ned som PDF</span>
        <svg sc-camel-view-box="0 0 24 24" width="20" height="20"><path d="M 0 10 L 2 10 L 2 15 L 18 15 L 18 10 L 20 10 L 20 15 C 20 16.11 19.11 17 18 17 L 2 17 C 0.9 17 0 16.11 0 15 L 0 10 Z M 10 13 L 15.55 7.54 L 14.13 6.13 L 11 9.25 L 11 0 L 9 0 L 9 9.25 L 5.88 6.13 L 4.46 7.55 L 10 13 Z" fill="#fff" transform="matrix(1 0 0 1 2 2)"></path></svg>
      </button>
    </div>
  </div>

  <div style="flex:1;display:flex;gap:36px;padding:32px 40px;justify-content:center;align-items:flex-start;overflow:auto">
    <div style="background:var(--uib-bakgrunn-bla);border-radius:20px;padding:14px 10px;display:flex;flex-direction:column;gap:6px;width:98px;flex:none;position:sticky;top:32px">
      <button sc-camel-on-click="{{ onDraw }}" style="{{ tbDraw }}" style-hover="background:var(--uib-lys-bla)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"></path></svg></span><span>Tegn</span>
      </button>
      <button sc-camel-on-click="{{ onErase }}" style="{{ tbErase }}" style-hover="background:var(--uib-lys-bla)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><path d="M15.14 3c-.51 0-1.02.2-1.41.59L2.59 14.73a2 2 0 0 0 0 2.83L5.03 20h5.66l10.72-10.72a2 2 0 0 0 0-2.83l-3.86-3.86A1.99 1.99 0 0 0 15.14 3zM7.05 18l-2.02-2.02 6.36-6.36 2.02 2.02L7.05 18z" fill="currentColor"></path><path d="M6 22h16v-2H6z" fill="currentColor"></path></svg></span><span>Viskelær</span>
      </button>
      <button sc-camel-on-click="{{ onText }}" style="{{ tbStyle }}" style-hover="background:var(--uib-lys-bla)">
        <span style="font-size:24px;font-weight:700;line-height:1;height:26px;display:flex;align-items:center;justify-content:center">T</span><span>Tekst</span>
      </button>
      <button sc-camel-on-click="{{ onShapeOpen }}" style="{{ tbStyle }}" style-hover="background:var(--uib-lys-bla)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor"></rect><circle cx="17.5" cy="7" r="4" fill="currentColor"></circle><path d="M7 13l4 8H3z" fill="currentColor"></path><path d="M17 13v8M13 17h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></span><span>Form</span>
      </button>
      <button sc-camel-on-click="{{ onColorOpen }}" style="{{ tbStyle }}" style-hover="background:var(--uib-lys-bla)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><path d="M12 2.7l5.66 5.66a8 8 0 1 1-11.31 0L12 2.7z" fill="currentColor"></path></svg></span><span>Farge</span>
      </button>
      <button sc-camel-on-click="{{ onBgOpen }}" style="{{ tbStyle }}" style-hover="background:var(--uib-lys-bla)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 3v10h12V7H6z" fill="currentColor"></path></svg></span><span>Bakgrunn</span>
      </button>
      <button sc-camel-on-click="{{ onImage }}" style="{{ tbStyle }}" style-hover="background:var(--uib-lys-bla)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 12l4-5 3 4 2-2 3 3V6H6z" fill="currentColor"></path></svg></span><span>Bilde</span>
      </button>
      <div style="height:1px;background:rgba(0,0,0,.12);margin:4px 8px"></div>
      <button sc-camel-on-click="{{ onDelete }}" style="{{ tbStyle }}" style-hover="background:var(--uib-lys-rod)">
        <span style="height:26px;display:flex;align-items:center;justify-content:center"><svg sc-camel-view-box="0 0 24 24" width="24" height="24"><path d="M7 4V3h6v1h4v2H3V4h4zM5 7h12l-1 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 7z" fill="currentColor"></path></svg></span><span>Slett</span>
      </button>
    </div>

    <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      {{ propsBar }}
      {{ canvasNode }}
      <div style="display:flex;align-items:center;gap:12px">
        <button sc-camel-on-click="{{ onUndo }}" disabled="{{ noUndo }}" aria-label="Angre" title="Angre siste steg" style="{{ undoStyle }}" style-hover="background:var(--uib-lys-bla)">
          <svg sc-camel-view-box="0 0 24 24" width="22" height="22"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="currentColor"></path></svg>
          <span style="font-size:16px">Angre</span>
        </button>
        <button sc-camel-on-click="{{ onRedo }}" disabled="{{ noRedo }}" aria-label="Gjør om" title="Gjør om" style="{{ redoStyle }}" style-hover="background:var(--uib-lys-bla)">
          <svg sc-camel-view-box="0 0 24 24" width="22" height="22"><path d="M11.5 8c2.65 0 5.05.99 6.9 2.6L22 7v9h-9l3.62-3.62c-1.39-1.16-3.16-1.88-5.12-1.88-3.54 0-6.55 2.31-7.6 5.5l-2.37-.78C2.92 11.03 6.85 8 11.5 8z" fill="currentColor"></path></svg>
          <span style="font-size:16px">Gjør om</span>
        </button>
      </div>
      <div style="font-size:14px;color:var(--uib-gray-text)">{{ hintText }}</div>
    </div>
  </div>
  {{ overlays }}
  
</div>
</sc-if>

<sc-if value="{{ isExport }}" hint-placeholder-val="{{ false }}">
<div sc-camel-on-click="{{ onOverlayClick }}" style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:24px">
  <div style="background:#ffffff;border-radius:16px;width:100%;max-width:760px;max-height:93vh;box-shadow:0 20px 60px rgba(0,0,0,0.15);overflow:hidden;display:flex;flex-direction:column">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:#f3efe8;border-bottom:1px solid #e6ded3;font-family:'Open Sans','Segoe UI',Tahoma,Arial,sans-serif;font-size:14px;color:#6f665c;font-weight:600">
      <span>Forhåndsvisning – {{ previewFormatLabel }}</span>
    </div>
    <div style="flex:1;overflow:auto;padding:26px;background:#faf6ef;display:flex;justify-content:center;align-items:center">
      <div style="background:#ffffff;box-shadow:0 6px 24px rgba(0,0,0,0.14);border-radius:4px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        {{ previewNode }}
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:12px;padding:14px 20px;background:#FFF3E6;border-top:1px solid #f0e2cf">
      <button sc-camel-on-click="{{ onBackEdit }}" style="background:#ffffff;color:#ff2130;border:1.5px solid #ff2130;border-radius:9px;padding:9px 22px;font-family:'Open Sans','Segoe UI',Tahoma,Arial,sans-serif;font-size:14px;font-weight:bold;cursor:pointer;white-space:nowrap" style-hover="background:#fff4f0">Avbryt</button>
      <button sc-camel-on-click="{{ onDownload }}" style="display:inline-flex;align-items:center;gap:8px;background:#ff2130;color:#ffffff;border:none;border-radius:9px;padding:9px 22px;font-family:'Open Sans','Segoe UI',Tahoma,Arial,sans-serif;font-size:14px;font-weight:bold;cursor:pointer;white-space:nowrap" style-hover="background:#d4141f">
          <span>Last ned</span>
          <svg sc-camel-view-box="0 0 24 24" width="22" height="22"><path d="M 0 10 L 2 10 L 2 15 L 18 15 L 18 10 L 20 10 L 20 15 C 20 16.11 19.11 17 18 17 L 2 17 C 0.9 17 0 16.11 0 15 L 0 10 Z M 10 13 L 15.55 7.54 L 14.13 6.13 L 11 9.25 L 11 0 L 9 0 L 9 9.25 L 5.88 6.13 L 4.46 7.55 L 10 13 Z" fill="currentColor" transform="matrix(1 0 0 1 2 2)"></path></svg>
        </button>
    </div>
  </div>
</div>
</sc-if>

<sc-if value="{{ helpOpen }}" hint-placeholder-val="{{ false }}">
{{ helpOverlay }}
</sc-if>
</x-dc>
<script type="text/x-dc" data-dc-script="" data-props="{&quot;$preview&quot;:{&quot;width&quot;:&quot;100%&quot;,&quot;height&quot;:&quot;100%&quot;},&quot;accent&quot;:{&quot;editor&quot;:&quot;enum&quot;,&quot;options&quot;:[&quot;Rød&quot;,&quot;Blå&quot;,&quot;Grønn&quot;],&quot;default&quot;:&quot;Rød&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;section&quot;:&quot;Uttrykk&quot;,&quot;label&quot;:&quot;Aksentfarge&quot;},&quot;paper&quot;:{&quot;editor&quot;:&quot;enum&quot;,&quot;options&quot;:[&quot;Hvit&quot;,&quot;Beige&quot;,&quot;Blå tone&quot;],&quot;default&quot;:&quot;Hvit&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;section&quot;:&quot;Uttrykk&quot;,&quot;label&quot;:&quot;Plakatflate&quot;},&quot;corners&quot;:{&quot;editor&quot;:&quot;enum&quot;,&quot;options&quot;:[&quot;Runde&quot;,&quot;Skarpe&quot;],&quot;default&quot;:&quot;Runde&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;section&quot;:&quot;Uttrykk&quot;,&quot;label&quot;:&quot;Hjørner&quot;}}">
class Component extends DCLogic {
  FORMATS = {
    landscape: { name: "Liggende", sub: "A4 liggende", dim: "297 × 210 mm", w: 720, h: 509 },
    portrait:  { name: "Stående",  sub: "A4 stående",  dim: "210 × 297 mm", w: 445, h: 630 },
    square:    { name: "Kvadrat",  sub: "1:1 format",  dim: "1080 × 1080 px", w: 560, h: 560 },
  };
  SHAPES = {
    rect:     { label: "Firkant",     canFill: true,  path: a => '<rect x="6" y="6" width="88" height="88" ' + a + '/>' },
    triangle: { label: "Trekant",     canFill: true,  path: a => '<polygon points="50,6 94,94 6,94" ' + a + '/>' },
    ellipse:  { label: "Sirkel",      canFill: true,  path: a => '<ellipse cx="50" cy="50" rx="44" ry="44" ' + a + '/>' },
    arrow:    { label: "Pil",         canFill: false, path: a => '<path d="M6 50 H82 M62 30 L88 50 L62 70" ' + a + '/>' },
    line:     { label: "Strek",       canFill: false, path: a => '<line x1="6" y1="50" x2="94" y2="50" ' + a + '/>' },
    star:     { label: "Stjerne",     canFill: true,  path: a => '<polygon points="50,6 61,38 95,38 68,59 79,93 50,72 21,93 32,59 5,38 39,38" ' + a + '/>' },
    heart:    { label: "Hjerte",      canFill: true,  path: a => '<path d="M50 90 C 10 60 10 20 38 20 C 46 20 50 28 50 33 C 50 28 54 20 62 20 C 90 20 90 60 50 90 Z" ' + a + '/>' },
    thumb:    { label: "Tommel opp",  canFill: true,  path: a => '<path d="M20 44 H10 A4 4 0 0 0 6 48 V88 A4 4 0 0 0 10 92 H20 Z M20 44 L40 12 C42 8 50 8 52 14 C54 20 50 34 48 40 H82 A8 8 0 0 1 89 51 L83 84 A8 8 0 0 1 75 92 H20 Z" ' + a + '/>' },
    bubble:   { label: "Snakkeboble", canFill: true,  path: a => '<path d="M14 14 H86 A8 8 0 0 1 94 22 V62 A8 8 0 0 1 86 70 H42 L24 90 L28 70 H14 A8 8 0 0 1 6 62 V22 A8 8 0 0 1 14 14 Z" ' + a + '/>' },
  };
  SHAPE_SIZE = { rect: [130, 130], triangle: [140, 120], ellipse: [130, 130], arrow: [170, 90], line: [220, 60], star: [130, 130], heart: [130, 120], thumb: [120, 130], bubble: [180, 130] };
  PALETTE = ["#ff2130", "#820a12", "#004281", "#00a2ff", "#00a75f", "#fff0a4", "#200505", "#7b7b7b", "#ffffff"];
  DRAW_WIDTHS = [2, 4, 8, 14];
  FRAMES = {
    rect:     { label: "Firkant",  radius: "0" },
    rounded:  { label: "Avrundet", radius: "18px" },
    ellipse:  { label: "Sirkel",   radius: "50%" },
    triangle: { label: "Trekant",  clip: "polygon(50% 0%, 100% 100%, 0% 100%)", poly: "50,0 100,100 0,100" },
  };
  USECASES = {
    social:       { label: "Kvadrat",     format: "square",    dim: "Kvadrat · 1080 × 1080 px", desc: "Ofte brukt digitalt, for eksempel i sosiale medier." },
    flyer:        { label: "Stående",  format: "portrait",  dim: "A4 stående · 210 × 297 mm", desc: "Et vanlig valg for flygeblad, oppslag eller annet du vil dele ut eller henge opp." },
    presentation: { label: "Liggende", format: "landscape", dim: "A4 liggende · 297 × 210 mm", desc: "Gir god bredde til flere elementer side om side. Kan passe til presentasjoner eller stand." },
  };
  CONCEPTS = [
    { key: "problem", label: "Problem",      head: "PROBLEM",      ph: "Hvilket problem løser du?" },
    { key: "losning", label: "Løsning",      head: "LØSNING",      ph: "Hva er løsningen din?" },
    { key: "verdi",   label: "Verdiforslag", head: "VERDIFORSLAG", ph: "Hvorfor er dette verdifullt?" },
    { key: "kanal",   label: "Kanal",        head: "KANAL",        ph: "Hvordan når du brukeren?" },
    { key: "bruker",  label: "Bruker",       head: "BRUKER",       ph: "Hvem er målgruppen?" },
  ];
  LAYOUTS = {
    landscape: { title: [40, 26, 640, 54, 34], fs: 18, boxes: [[40, 104, 210, 175], [255, 104, 210, 175], [470, 104, 210, 175], [147, 296, 210, 175], [363, 296, 210, 175]] },
    portrait:  { title: [30, 22, 385, 48, 30], fs: 16, boxes: [[30, 90, 385, 96], [30, 196, 385, 96], [30, 302, 385, 96], [30, 408, 385, 96], [30, 514, 385, 96]] },
    square:    { title: [30, 24, 500, 48, 30], fs: 16, boxes: [[30, 98, 250, 140], [290, 98, 240, 140], [30, 250, 250, 140], [290, 250, 240, 140], [30, 402, 500, 130]] },
  };
  FONTS = [
    { label: "Open Sans", css: "'Open Sans', sans-serif" },
    { label: "Lora", css: "'Lora', serif" },
    { label: "Playfair", css: "'Playfair Display', serif" },
    { label: "Bebas Neue", css: "'Bebas Neue', sans-serif" },
    { label: "Roboto Mono", css: "'Roboto Mono', monospace" },
    { label: "Caveat", css: "'Caveat', cursive" },
    { label: "Times", css: "'Times New Roman', serif" },
  ];
  SJEKK = '<path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" fill="currentColor"/>';
  BILDE = '<path d="M 5.5 10.5 L 8 13.5 L 11.5 9 L 16 15 L 2 15 M 18 16 L 18 2 C 18 0.89 17.1 0 16 0 L 2 0 C 1.47 0 0.961 0.211 0.586 0.586 C 0.211 0.961 0 1.47 0 2 L 0 16 C 0 16.53 0.211 17.039 0.586 17.414 C 0.961 17.789 1.47 18 2 18 L 16 18 C 16.53 18 17.039 17.789 17.414 17.414 C 17.789 17.039 18 16.53 18 16 Z" fill="currentColor" transform="matrix(1 0 0 1 4 0) matrix(1 0 0 1 3 3)"/>';

  state = {
    screen: "format", usecase: "presentation", format: "landscape",
    elements: [], selectedId: null, editingId: null,
    guides: { v: null, h: null },
    mode: "select", drawColor: "#820a12", drawWidth: 4, drawing: null,
    panel: null, bgEdit: false, bgColor: null, helpOpen: false, exportOpen: false, history: [], future: [],
  };
  seq = 1;

  snapshot() {
    const snap = JSON.stringify(this.state.elements);
    this.setState(s => {
      if (s.history.length && s.history[s.history.length - 1] === snap) return { future: [] };
      return { history: [...s.history, snap].slice(-40), future: [] };
    });
  }
  undo() {
    this.setState(s => {
      if (!s.history.length) return {};
      const prev = s.history[s.history.length - 1];
      return { elements: JSON.parse(prev), history: s.history.slice(0, -1), future: [...s.future, JSON.stringify(s.elements)].slice(-40), selectedId: null, editingId: null, panel: null };
    });
  }
  redo() {
    this.setState(s => {
      if (!s.future.length) return {};
      const next = s.future[s.future.length - 1];
      return { elements: JSON.parse(next), future: s.future.slice(0, -1), history: [...s.history, JSON.stringify(s.elements)].slice(-40), selectedId: null, editingId: null, panel: null };
    });
  }

  esc(t) { return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  fmt() { return this.FORMATS[this.state.format]; }

  setUsecase(k) { this.setState({ usecase: k, format: this.USECASES[k].format }); }
  startBlank() { this.setState({ elements: [], isTemplate: false, screen: "editor", selectedId: null, editingId: null, panel: null, mode: "select", history: [], future: [] }); }
  seedTemplate(fmtOverride, carry) {
    const th = this.theme(), f = fmtOverride || this.state.format, els = [];
    const prevTexts = [], prevImgs = [];
    if (carry) this.state.elements.forEach(e => { if (e.type === "text") prevTexts.push(e); else if (e.type === "image") prevImgs.push(e); });
    let ti = 0, ii = 0;
    const T = (o) => { const ph = o.text; if (carry && prevTexts[ti]) o.text = prevTexts[ti].text; ti++; els.push(Object.assign({ id: "e" + (this.seq++), type: "text", fontFamily: "'Open Sans', sans-serif", weight: 400, italic: false, align: "left", list: false, placeholder: ph }, o)); };
    const S = (o) => els.push(Object.assign({ id: "e" + (this.seq++), type: "shape", fillMode: "fill", strokeWidth: 1 }, o));
    const I = (o) => { const p = carry ? prevImgs[ii] : null; if (p) { o.src = p.src; o.frame = p.frame; } ii++; els.push(Object.assign({ id: "e" + (this.seq++), type: "image", src: null, frame: "rect" }, o)); };
    if (f === "landscape") {
      S({ shape: "ellipse", x: 452, y: -70, w: 360, h: 360, color: th.accent });
      I({ x: 500, y: 60, w: 240, h: 240, frame: "ellipse" });
      S({ shape: "rect", x: 40, y: 44, w: 44, h: 44, color: th.deep });
      T({ x: 96, y: 48, w: 300, h: 36, text: "Logoen din", color: th.deep, fontSize: 20, weight: 700 });
      T({ x: 40, y: 120, w: 400, h: 130, text: "OVERSKRIFT HER", color: "#200505", fontSize: 52, weight: 700 });
      S({ shape: "rect", x: 40, y: 258, w: 70, h: 8, color: th.accent });
      T({ x: 40, y: 280, w: 380, h: 34, text: "Slagord eller undertittel her", color: th.deep, fontSize: 22, weight: 600 });
      T({ x: 40, y: 326, w: 360, h: 90, text: "Kort beskrivelse her. Bytt ut med din egen tekst om idéen din.", color: "#5c5148", fontSize: 16, weight: 400 });
      S({ shape: "rect", x: 40, y: 430, w: 210, h: 56, color: th.accent });
      T({ x: 40, y: 447, w: 210, h: 30, text: "Handling her", color: "#ffffff", fontSize: 20, weight: 700, align: "center" });
    } else if (f === "portrait") {
      S({ shape: "rect", x: 30, y: 30, w: 40, h: 40, color: th.deep });
      T({ x: 82, y: 34, w: 300, h: 32, text: "Logoen din", color: th.deep, fontSize: 18, weight: 700 });
      I({ x: 30, y: 88, w: 385, h: 220, frame: "rounded" });
      S({ shape: "rect", x: 30, y: 330, w: 64, h: 8, color: th.accent });
      T({ x: 30, y: 348, w: 385, h: 110, text: "OVERSKRIFT HER", color: "#200505", fontSize: 42, weight: 700 });
      T({ x: 30, y: 466, w: 385, h: 34, text: "Slagord eller undertittel her", color: th.deep, fontSize: 20, weight: 600 });
      T({ x: 30, y: 506, w: 385, h: 60, text: "Kort beskrivelse her. Bytt ut med din egen tekst.", color: "#5c5148", fontSize: 15, weight: 400 });
      S({ shape: "rect", x: 30, y: 572, w: 190, h: 48, color: th.accent });
      T({ x: 30, y: 586, w: 190, h: 26, text: "Handling her", color: "#ffffff", fontSize: 18, weight: 700, align: "center" });
    } else {
      S({ shape: "ellipse", x: 288, y: 12, w: 262, h: 262, color: th.accent });
      I({ x: 316, y: 40, w: 206, h: 206, frame: "ellipse" });
      S({ shape: "rect", x: 30, y: 32, w: 40, h: 40, color: th.deep });
      T({ x: 82, y: 36, w: 240, h: 32, text: "Logoen din", color: th.deep, fontSize: 18, weight: 700 });
      S({ shape: "rect", x: 30, y: 120, w: 60, h: 8, color: th.accent });
      T({ x: 30, y: 138, w: 250, h: 150, text: "OVERSKRIFT HER", color: "#200505", fontSize: 36, weight: 700 });
      T({ x: 30, y: 300, w: 260, h: 34, text: "Slagord her", color: th.deep, fontSize: 20, weight: 600 });
      T({ x: 30, y: 344, w: 270, h: 90, text: "Kort beskrivelse her. Bytt ut med din egen tekst.", color: "#5c5148", fontSize: 15, weight: 400 });
      S({ shape: "rect", x: 30, y: 462, w: 200, h: 52, color: th.accent });
      T({ x: 30, y: 477, w: 200, h: 28, text: "Handling her", color: "#ffffff", fontSize: 19, weight: 700, align: "center" });
    }
    this.setState({ elements: els, format: f, isTemplate: true, screen: "editor", selectedId: null, editingId: null, panel: null, mode: "select", bgEdit: false, bgColor: null, history: [], future: [] });
  }
  conceptStatus() {
    const kw = { problem: "problem", losning: "løsn", verdi: "verdi", kanal: "kanal", bruker: "bruker" };
    return this.CONCEPTS.map(c => {
      const done = this.state.elements.some(el => {
        if (el.type !== "text") return false;
        if (el.role === c.key) return el.text && el.text.trim() !== (el.placeholder || "").trim();
        if (el.role && el.text && el.text.trim() === (el.placeholder || "").trim()) return false;
        return (el.text || "").toLowerCase().includes(kw[c.key]);
      });
      return { key: c.key, label: c.label, done };
    });
  }
  bringForward(id) { this.snapshot(); this.setState(s => { const a = [...s.elements]; const i = a.findIndex(e => e.id === id); if (i < 0 || i === a.length - 1) return {}; const t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; return { elements: a }; }); }
  sendBackward(id) { this.snapshot(); this.setState(s => { const a = [...s.elements]; const i = a.findIndex(e => e.id === id); if (i <= 0) return {}; const t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; return { elements: a }; }); }
  duplicate(id) {
    const el = this.state.elements.find(e => e.id === id);
    if (!el) return;
    this.snapshot();
    const copy = Object.assign({}, el, { id: "e" + (this.seq++), x: (el.x || 0) + 16, y: (el.y || 0) + 16 });
    if (el.points) copy.points = el.points.map(p => ({ x: p.x + 16, y: p.y + 16 }));
    this.setState(s => ({ elements: [...s.elements, copy], selectedId: copy.id }));
  }
  layerGroup(sel) {
    return React.createElement("div", { style: { display: "flex", gap: 6 } },
      this.chip("Fremover", false, () => this.bringForward(sel.id)),
      this.chip("Bakover", false, () => this.sendBackward(sel.id)),
      this.chip("Dupliser", false, () => this.duplicate(sel.id)));
  }
  theme() {
    const A = { "Rød": { accent: "#ff2130", deep: "#820a12" }, "Blå": { accent: "#00a2ff", deep: "#004281" }, "Grønn": { accent: "#00a75f", deep: "#0a6b40" } };
    const P = { "Hvit": "#ffffff", "Beige": "#fff9f0", "Blå tone": "#f0fbfd" };
    const a = A[this.props.accent] || A["Rød"];
    return { accent: a.accent, deep: a.deep, paper: P[this.props.paper] || "#ffffff", radius: (this.props.corners === "Skarpe") ? 0 : 10 };
  }
  // Larger, easier-to-work-with canvas on screen only — never affects download size.
  editorScale() {
    const f = this.fmt();
    const vw = (typeof window !== "undefined" ? window.innerWidth : 1200);
    const avail = Math.max(320, vw - 260); // toolbar + gaps + padding
    return Math.max(0.5, Math.min(1.5, 640 / f.h, avail / f.w));
  }
  // Real download geometry (mm) + screen->page scale for print.
  PRINT = { landscape: { w: "297mm", h: "210mm", scale: 1122.5 / 720 }, portrait: { w: "210mm", h: "297mm", scale: 793.7 / 445 }, square: { w: "210mm", h: "210mm", scale: 793.7 / 560 } };

  componentDidMount() {
    this._key = e => {
      if (this.state.screen !== "editor") return;
      if (e.key !== "Delete" && e.key !== "Backspace") return;
      if (this.state.editingId || !this.state.selectedId) return;
      const t = e.target;
      if (t && (t.isContentEditable || /input|textarea/i.test(t.tagName))) return;
      e.preventDefault(); this.remove();
    };
    document.addEventListener("keydown", this._key);
    this._resize = () => this.forceUpdate();
    window.addEventListener("resize", this._resize);
  }
  componentWillUnmount() { document.removeEventListener("keydown", this._key); window.removeEventListener("resize", this._resize); }

  add(el) {
    const f = this.fmt(), id = "e" + (this.seq++);
    const node = Object.assign({ id, x: Math.round(f.w / 2 - (el.w || 120) / 2), y: Math.round(f.h / 2 - (el.h || 80) / 2) }, el);
    this.setState(s => ({ elements: [...s.elements, node], selectedId: id, mode: "select", panel: null }));
  }
  update(id, patch) { this.setState(s => ({ elements: s.elements.map(e => e.id === id ? Object.assign({}, e, patch) : e) })); }
  select(id) { this.setState(s => ({ selectedId: id, editingId: s.editingId === id ? id : null, panel: null, bgEdit: false })); }
  remove() { this.snapshot(); this.setState(s => ({ elements: s.elements.filter(e => e.id !== s.selectedId), selectedId: null, panel: null })); }
  deleteAll() { this.snapshot(); this.setState({ elements: [], selectedId: null, panel: null }); }

  addText() { this.snapshot(); this.add({ type: "text", w: 260, h: 54, text: "Din tekst", color: "#200505", fontFamily: "'Open Sans', sans-serif", fontSize: 32, weight: 400, italic: false, align: "left", list: false }); }
  toggleList(el) {
    this.snapshot();
    const lines = (el.text || "").split("\n");
    const text = el.list
      ? lines.map(l => l.replace(/^•\s?/, "")).join("\n")
      : lines.map(l => l.trim() ? (l.trimStart().startsWith("•") ? l : "• " + l) : l).join("\n");
    this.update(el.id, { list: !el.list, text });
  }
  onColorLive(c) {
    if (this.state.bgEdit) this.setState({ bgColor: c });
    else if (this.state.mode === "draw") this.setState({ drawColor: c });
    else if (this.state.selectedId) this.update(this.state.selectedId, { color: c });
  }
  addShape(kind) {
    const sz = this.SHAPE_SIZE[kind] || [130, 110];
    this.snapshot();
    this.add({ type: "shape", shape: kind, w: sz[0], h: sz[1], color: "#820a12", fillMode: "stroke", strokeWidth: 1 });
  }

  pickFile() { this.fileRefEl && this.fileRefEl.click(); }
  onFileChange(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      this.snapshot();
      if (this._replaceId) { const rid = this._replaceId; this._replaceId = null; this.update(rid, { src: ev.target.result }); }
      else this.add({ type: "image", src: ev.target.result, w: 260, h: 190 });
    };
    reader.readAsDataURL(file);
  }

  applyColor(c) {
    if (this.state.bgEdit) { this.snapshot(); this.setState({ bgColor: c }); return; }
    if (this.state.mode === "draw") { this.setState({ drawColor: c, panel: null }); return; }
    if (this.state.selectedId) { this.snapshot(); this.update(this.state.selectedId, { color: c }); }
    this.setState({ panel: null });
  }
  setFormat(k) {
    if (this.state.screen === "editor" && this.state.isTemplate) this.seedTemplate(k, true);
    else this.setState({ format: k });
  }
  setMode(m) { this.setState(s => ({ mode: s.mode === m ? "select" : m, panel: null, bgEdit: false, selectedId: (s.mode === m ? s.selectedId : null) })); }

  startEdit(id) { this.setState({ editingId: id, selectedId: id }); }
  commitActiveEdit() {
    const id = this.state.editingId;
    if (id && this.canvasEl) {
      const n = this.canvasEl.querySelector('[data-edit="' + id + '"]');
      if (n) this.commitText(id, n.innerText);
    }
  }
  commitText(id, text) {
    const cur = this.state.elements.find(e => e.id === id);
    if (cur && cur.text !== text) this.snapshot();
    this.setState(s => ({ elements: s.elements.map(e => e.id === id ? Object.assign({}, e, { text }) : e), editingId: null }));
  }

  componentDidUpdate(pp, ps) {
    if (this.state.editingId && this.state.editingId !== ps.editingId && this.canvasEl) {
      const n = this.canvasEl.querySelector('[data-edit="' + this.state.editingId + '"]');
      if (n) { n.focus(); const r = document.createRange(); r.selectNodeContents(n); r.collapse(false); const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
    }
  }

  snap(el, nx, ny) {
    const f = this.fmt(), T = 7;
    let x = nx, y = ny, gv = null, gh = null;
    const tx = [{ p: 0, e: nx }, { p: f.w / 2, e: nx + el.w / 2 }, { p: f.w, e: nx + el.w }];
    const ty = [{ p: 0, e: ny }, { p: f.h / 2, e: ny + el.h / 2 }, { p: f.h, e: ny + el.h }];
    for (const t of tx) if (Math.abs(t.e - t.p) < T) { x = nx + (t.p - t.e); gv = t.p; break; }
    for (const t of ty) if (Math.abs(t.e - t.p) < T) { y = ny + (t.p - t.e); gh = t.p; break; }
    return { x: Math.round(x), y: Math.round(y), gv, gh };
  }
  startDrag(e, id) {
    if (this.state.editingId === id || this.state.mode !== "select") return;
    e.preventDefault(); e.stopPropagation();
    this.select(id);
    this.snapshot();
    const el = this.state.elements.find(x => x.id === id);
    const sx = e.clientX, sy = e.clientY, ox = el.x, oy = el.y, k = this.editorScale();
    const move = ev => {
      const s = this.snap(el, ox + (ev.clientX - sx) / k, oy + (ev.clientY - sy) / k);
      this.update(id, { x: s.x, y: s.y });
      this.setState({ guides: { v: s.gv, h: s.gh } });
    };
    const up = () => { document.removeEventListener("pointermove", move); document.removeEventListener("pointerup", up); this.setState({ guides: { v: null, h: null } }); };
    document.addEventListener("pointermove", move); document.addEventListener("pointerup", up);
  }
  startResize(e, id) {
    e.preventDefault(); e.stopPropagation();
    this.snapshot();
    const el = this.state.elements.find(x => x.id === id);
    const sx = e.clientX, sy = e.clientY, ow = el.w, oh = el.h, k = this.editorScale();
    const move = ev => {
      const w = Math.max(24, ow + (ev.clientX - sx) / k);
      const h = Math.max(el.type === "text" ? 24 : 20, oh + (ev.clientY - sy) / k);
      this.update(id, { w: Math.round(w), h: Math.round(h) });
    };
    const up = () => { document.removeEventListener("pointermove", move); document.removeEventListener("pointerup", up); };
    document.addEventListener("pointermove", move); document.addEventListener("pointerup", up);
  }

  cpt(e) { const r = this.canvasEl.getBoundingClientRect(); const k = this.editorScale(); return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k }; }
  async downloadPdf() {
    const el = document.getElementById("poster-print");
    if (!el || !window.html2canvas || !(window.jspdf && window.jspdf.jsPDF)) { window.print(); return; }
    if (this.state.saving) return;
    this.setState({ saving: true });
    try {
      if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) {} }
      await new Promise(r => setTimeout(r, 80));
      const w0 = el.offsetWidth, h0 = el.offsetHeight;
      // Capture a natural-size clone (outside the scaled preview wrapper) to avoid distortion.
      const clone = el.cloneNode(true);
      Object.assign(clone.style, { transform: "none", boxShadow: "none", position: "fixed", left: "-10000px", top: "0", margin: "0" });
      document.body.appendChild(clone);
      let canvas;
      try {
        canvas = await window.html2canvas(clone, { scale: 5, backgroundColor: "#ffffff", useCORS: true, logging: false, width: w0, height: h0 });
      } finally { document.body.removeChild(clone); }
      const img = canvas.toDataURL("image/png");
      const f = this.state.format;
      let doc, w, h;
      if (f === "square") { doc = new window.jspdf.jsPDF({ orientation: "portrait", unit: "px", format: [1080, 1080] }); w = 1080; h = 1080; }
      else if (f === "portrait") { doc = new window.jspdf.jsPDF({ orientation: "portrait", unit: "mm", format: "a4" }); w = 210; h = 297; }
      else { doc = new window.jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: "a4" }); w = 297; h = 210; }
      doc.addImage(img, "PNG", 0, 0, w, h);
      doc.save("plakat.pdf");
    } catch (err) { window.print(); }
    this.setState({ saving: false });
  }
  beginDraw(e) {
    e.preventDefault();
    this._draw = { points: [this.cpt(e)], color: this.state.drawColor, strokeWidth: this.state.drawWidth };
    this.setState({ drawing: { points: this._draw.points.slice(), color: this._draw.color, strokeWidth: this._draw.strokeWidth }, selectedId: null });
    const move = ev => { this._draw.points.push(this.cpt(ev)); this.setState({ drawing: { points: this._draw.points.slice(), color: this._draw.color, strokeWidth: this._draw.strokeWidth } }); };
    const up = () => {
      document.removeEventListener("pointermove", move); document.removeEventListener("pointerup", up);
      const d = this._draw; this._draw = null;
      if (d.points.length > 1) { const id = "e" + (this.seq++); this.snapshot(); this.setState(st => ({ elements: [...st.elements, { id, type: "draw", points: d.points, color: d.color, strokeWidth: d.strokeWidth }], drawing: null })); }
      else this.setState({ drawing: null });
    };
    document.addEventListener("pointermove", move); document.addEventListener("pointerup", up);
  }
  eraseAt(x, y) {
    this.setState(st => ({ elements: st.elements.filter(el => {
      if (el.type !== "draw") return true;
      const th = 12 + (el.strokeWidth || 4);
      return !el.points.some(p => Math.hypot(p.x - x, p.y - y) < th);
    }) }));
  }
  beginErase(e) {
    e.preventDefault();
    this.snapshot();
    const at = ev => { const p = this.cpt(ev); this.eraseAt(p.x, p.y); };
    at(e);
    const move = ev => at(ev);
    const up = () => { document.removeEventListener("pointermove", move); document.removeEventListener("pointerup", up); };
    document.addEventListener("pointermove", move); document.addEventListener("pointerup", up);
  }

  shapeMarkup(el) {
    const S = this.SHAPES[el.shape] || this.SHAPES.rect;
    const filled = el.fillMode === "fill" && S.canFill;
    const attr = filled
      ? 'fill="' + el.color + '" stroke="none"'
      : 'fill="none" stroke="' + el.color + '" stroke-width="' + (el.strokeWidth || 4) + '" vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"';
    return S.path(attr);
  }

  renderStroke(el) {
    const R = React.createElement, f = this.fmt();
    return R("svg", { key: el.id, width: f.w, height: f.h, style: { position: "absolute", left: 0, top: 0, pointerEvents: "none", overflow: "visible" } },
      R("polyline", { points: el.points.map(p => p.x + "," + p.y).join(" "), fill: "none", stroke: el.color, strokeWidth: el.strokeWidth, strokeLinejoin: "round", strokeLinecap: "round" }));
  }

  renderEl(el, interactive) {
    const R = React.createElement;
    const sel = interactive && this.state.selectedId === el.id;
    const editing = this.state.editingId === el.id;
    let inner;
    if (el.type === "text") {
      inner = R("div", {
        "data-edit": el.id, contentEditable: editing, suppressContentEditableWarning: true,
        onKeyDown: e => {
          if (e.key === "Enter") {
            e.preventDefault();
            document.execCommand("insertText", false, el.list ? "\n• " : "\n");
          }
        },
        onBlur: e => this.commitText(el.id, e.currentTarget.innerText),
        dangerouslySetInnerHTML: { __html: this.esc(el.text) },
        style: { width: "100%", height: "100%", color: el.color, fontSize: el.fontSize, fontWeight: el.weight, fontStyle: el.italic ? "italic" : "normal", textAlign: el.align, fontFamily: el.fontFamily || "'Open Sans', sans-serif", lineHeight: 1.3, whiteSpace: "pre-wrap", cursor: editing ? "text" : "move", overflow: "hidden", userSelect: editing ? "text" : "none" },
      });
    } else if (el.type === "image") {
      const F = this.FRAMES[el.frame] || this.FRAMES.rect;
      if (el.src && F.poly) {
        const cid = "clip_" + el.id;
        inner = R("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { width: "100%", height: "100%", display: "block", pointerEvents: "none" } },
          R("defs", null, R("clipPath", { id: cid }, R("polygon", { points: F.poly }))),
          R("image", { href: el.src, xlinkHref: el.src, width: 100, height: 100, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#" + cid + ")" }));
      } else if (el.src) {
        inner = R("div", { style: { width: "100%", height: "100%", borderRadius: F.radius || "0", overflow: "hidden", backgroundImage: "url(" + el.src + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" } });
      } else {
        inner = R("div", { style: { width: "100%", height: "100%", background: "#eae2d5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "#8a7d6b", fontSize: 14, borderRadius: F.radius || "0", clipPath: F.clip || undefined, border: F.clip ? "none" : "2px dashed #c9bda9" } },
          R("svg", { viewBox: "0 0 33 43", width: 36, height: 36, dangerouslySetInnerHTML: { __html: this.BILDE } }),
          interactive ? R("span", null, "Dobbeltklikk for bilde") : null);
      }
    } else if (el.type === "shape") {
      inner = R("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { width: "100%", height: "100%", overflow: "visible", display: "block", pointerEvents: "none" }, dangerouslySetInnerHTML: { __html: this.shapeMarkup(el) } });
    }
    const children = [inner];
    const th = this.theme();
    if (sel) children.push(R("div", { key: "h", onPointerDown: e => this.startResize(e, el.id), style: { position: "absolute", right: -7, bottom: -7, width: 14, height: 14, background: "#fff", border: "2px solid " + th.accent, borderRadius: 3, cursor: "nwse-resize", zIndex: 2 } }));
    return R("div", {
      key: el.id,
      onPointerDown: interactive ? e => this.startDrag(e, el.id) : undefined,
      onDoubleClick: interactive ? (el.type === "text" ? () => this.startEdit(el.id) : (el.type === "image" ? () => { this.select(el.id); this._replaceId = el.id; this.pickFile(); } : undefined)) : undefined,
      style: { position: "absolute", left: el.x, top: el.y, width: el.w, height: el.h, boxSizing: "border-box", cursor: "move", pointerEvents: interactive && this.state.mode === "select" ? "auto" : "none", boxShadow: sel ? "0 0 0 2px " + th.accent : "none" },
    }, children);
  }

  buildCanvas(interactive) {
    const R = React.createElement, f = this.fmt(), s = this.state;
    const kids = s.elements.map(e => e.type === "draw" ? this.renderStroke(e) : this.renderEl(e, interactive));
    const th = this.theme();
    if (interactive && s.drawing) kids.push(R("svg", { key: "cur", width: f.w, height: f.h, style: { position: "absolute", left: 0, top: 0, pointerEvents: "none", overflow: "visible" } },
      R("polyline", { points: s.drawing.points.map(p => p.x + "," + p.y).join(" "), fill: "none", stroke: s.drawing.color, strokeWidth: s.drawing.strokeWidth, strokeLinejoin: "round", strokeLinecap: "round" })));
    if (interactive) {
      const g = s.guides;
      if (g.v != null) kids.push(R("div", { key: "gv", style: { position: "absolute", left: g.v, top: 0, width: 1, height: "100%", background: th.accent, pointerEvents: "none" } }));
      if (g.h != null) kids.push(R("div", { key: "gh", style: { position: "absolute", top: g.h, left: 0, height: 1, width: "100%", background: th.accent, pointerEvents: "none" } }));
    }
    const cur = s.mode === "draw" ? "crosshair" : (s.mode === "erase" ? "cell" : "default");
    const canvas = R("div", {
      id: interactive ? undefined : "poster-print",
      ref: interactive ? (c => this.canvasEl = c) : undefined,
      onPointerDown: interactive ? (e => {
        if (s.mode === "draw") return this.beginDraw(e);
        if (s.mode === "erase") return this.beginErase(e);
        if (e.target === e.currentTarget) this.select(null);
      }) : undefined,
      style: { position: "relative", width: f.w, height: f.h, background: s.bgColor || th.paper, boxShadow: "0 6px 30px rgba(0,0,0,.14)", overflow: "hidden", flex: "none", cursor: interactive ? cur : "default", touchAction: "none", transform: interactive ? "scale(" + this.editorScale() + ")" : undefined, transformOrigin: "top left" },
    }, kids);
    if (!interactive) return canvas;
    const k = this.editorScale();
    return R("div", { style: { width: f.w * k, height: f.h * k, flex: "none" } }, canvas);
  }

  swatch(c, cur, on) {
    return React.createElement("button", { key: c, onClick: on, style: { width: 34, height: 34, borderRadius: 7, background: c, border: cur === c ? "3px solid #200505" : "2px solid rgba(0,0,0,.15)", cursor: "pointer", padding: 0 } });
  }
  panel(title, children, w) {
    const R = React.createElement;
    return R("div", { style: { position: "fixed", left: 150, top: 150, zIndex: 40, background: "#fff", borderRadius: 12, boxShadow: "0 10px 40px rgba(0,0,0,.22)", padding: 18, width: w || 260 } },
      R("div", { style: { fontWeight: 700, fontSize: 15, marginBottom: 12, color: "#200505" } }, title), children);
  }
  chip(label, active, on, danger) {
    return React.createElement("button", { onClick: on, style: { padding: "7px 13px", borderRadius: 6, border: "1px solid " + (active ? "transparent" : "rgba(0,0,0,.16)"), background: active ? (danger ? "#ff2130" : "#004281") : "#fff", color: active ? "#fff" : (danger ? "#ff2130" : "#200505"), cursor: "pointer", fontSize: 14, fontFamily: "'Open Sans',sans-serif", whiteSpace: "nowrap" } }, label);
  }
  stepBtn(label, on) {
    return React.createElement("button", { onClick: on, style: { width: 30, height: 30, borderRadius: 6, border: "1px solid rgba(0,0,0,.16)", background: "#fff", color: "#200505", cursor: "pointer", fontSize: 16, lineHeight: "1", display: "flex", alignItems: "center", justifyContent: "center" } }, label);
  }
  barWrap(children) {
    const R = React.createElement;
    const kids = [];
    children.filter(c => c != null).forEach((c, i) => {
      if (i > 0) kids.push(R("span", { key: "sep" + i, style: { width: 1, alignSelf: "stretch", background: "rgba(0,0,0,.1)", margin: "2px 0" } }));
      kids.push(c);
    });
    return R("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 16, rowGap: 12, flexWrap: "wrap", background: "#fff", border: "1px solid rgba(0,0,0,.1)", borderRadius: 10, padding: "12px 20px", boxShadow: "0 2px 10px rgba(0,0,0,.06)" } }, kids);
  }
  grp(label, children) {
    const R = React.createElement;
    return R("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
      R("span", { style: { fontSize: 13, color: "#7b7b7b" } }, label), children);
  }

  renderVals() {
    const R = React.createElement, s = this.state, f = this.fmt(), th = this.theme();
    const tbBase = "display:flex;flex-direction:column;align-items:center;gap:5px;background:transparent;border:none;border-radius:12px;padding:11px 4px;cursor:pointer;color:#00102c;font-family:'Open Sans',sans-serif;font-size:13px;width:100%";
    const tbActive = tbBase + ";background:var(--uib-lys-bla);color:#004281;font-weight:700";

    const formatCards = R("div", { style: { display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "stretch" } },
      Object.entries(this.USECASES).map(([k, uc]) => {
        const on = s.usecase === k, ff = this.FORMATS[uc.format];
        const scale = 118 / Math.max(ff.w, ff.h);
        const mw = Math.round(ff.w * scale), mh = Math.round(ff.h * scale);
        return R("div", { key: k, onClick: () => this.setUsecase(k),
          style: { width: 296, cursor: "pointer", background: "#fff", border: "2px solid " + (on ? th.accent : "rgba(0,0,0,.1)"), borderRadius: th.radius, padding: "26px 30px", boxShadow: on ? "0 8px 24px " + th.deep + "29" : "0 2px 8px rgba(0,0,0,.05)", transition: "all .15s", display: "flex", flexDirection: "column", gap: 14, textAlign: "left" } },
          R("div", { style: { height: 148, display: "flex", alignItems: "center", justifyContent: "center", background: th.paper === "#ffffff" ? "var(--uib-bakgrunn-beige)" : th.paper, borderRadius: Math.max(0, th.radius - 4) } },
            R("div", { style: { width: mw, height: mh, background: th.paper, border: "1px solid rgba(0,0,0,.15)", boxShadow: "0 2px 8px rgba(0,0,0,.12)", padding: 10, display: "flex", flexDirection: "column", gap: 6, boxSizing: "border-box" } },
              R("div", { style: { height: 8, width: "70%", background: th.accent, borderRadius: 2 } }),
              R("div", { style: { height: 4, width: "90%", background: "#d9d9d9", borderRadius: 2 } }),
              R("div", { style: { height: 4, width: "80%", background: "#d9d9d9", borderRadius: 2 } }),
              R("div", { style: { flex: 1 } }),
              R("div", { style: { height: 6, width: "50%", background: th.deep, borderRadius: 2 } }))),
          R("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 } },
            R("span", { style: { fontWeight: 700, fontSize: 19, color: "#200505", minWidth: 0 } }, uc.label),
            on ? R("span", { style: { width: 24, height: 24, borderRadius: "50%", background: th.accent, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" } },
              R("svg", { viewBox: "0 0 24 24", width: 16, height: 16, dangerouslySetInnerHTML: { __html: this.SJEKK } })) : null),
          R("div", { style: { fontSize: 13, fontWeight: 600, color: th.deep } }, uc.dim),
          R("div", { style: { fontSize: 14, color: "#7b7b7b", lineHeight: 1.45 } }, uc.desc));
      }));

    const startCard = (title, desc, primary, on, icon) => R("button", { onClick: on,
      style: { width: 320, textAlign: "left", cursor: "pointer", background: "#fff", border: "2px solid " + (primary ? th.accent : "rgba(0,0,0,.12)"), borderRadius: th.radius, padding: 28, boxShadow: primary ? "0 8px 24px " + th.deep + "22" : "0 2px 8px rgba(0,0,0,.05)", display: "flex", flexDirection: "column", gap: 12, fontFamily: "'Open Sans',sans-serif" } },
      R("div", { style: { width: 52, height: 52, borderRadius: 12, background: primary ? th.accent : "var(--uib-bakgrunn-bla)", display: "flex", alignItems: "center", justifyContent: "center", color: primary ? "#fff" : th.deep } },
        R("svg", { viewBox: "0 0 24 24", width: 28, height: 28, dangerouslySetInnerHTML: { __html: icon } })),
      R("div", { style: { fontWeight: 700, fontSize: 22, color: "#200505" } }, title),
      R("div", { style: { fontSize: 15, color: "#7b7b7b", lineHeight: 1.5 } }, desc));
    const chooseCards = R("div", { style: { display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" } },
      startCard("Bruk mal", "Et ferdig, visuelt oppsett med plassholder-overskrift, tekst, bildeflate og en handlingsknapp. Du bytter bare ut innholdet.", true, () => this.seedTemplate(),
        '<path d="M4 4h16v4H4zM4 10h7v10H4zM13 10h7v10h-7z" fill="currentColor"/>'),
      startCard("Start blankt", "Et tomt lerret med alle verktøyene. Full frihet til å bygge plakaten helt fra bunnen.", false, () => this.startBlank(),
        '<path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 1.5V8h4.5z" fill="currentColor"/>'));

    const cs = this.conceptStatus(), doneCount = cs.filter(c => c.done).length;
    const progressNode = R("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center", maxWidth: 720 } },
      R("span", { style: { fontSize: 13, color: "#7b7b7b", fontWeight: 600 } }, "Innhold " + doneCount + "/5"),
      cs.map(c => R("span", { key: c.key, title: c.done ? "Representert på plakaten" : "Mangler ennå", style: { display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 12px 5px 6px", borderRadius: 20, fontSize: 13, background: c.done ? "#e8f7ee" : "#f3ece2", color: c.done ? "#0a6b40" : "#8a7d6b", border: "1px solid " + (c.done ? "#bfe6cd" : "rgba(0,0,0,.08)") } },
        R("span", { style: { width: 16, height: 16, borderRadius: "50%", background: c.done ? "#00a75f" : "#cabda9", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" } },
          c.done ? R("svg", { viewBox: "0 0 24 24", width: 11, height: 11, dangerouslySetInnerHTML: { __html: this.SJEKK } }) : null),
        c.label)));

    const fmtSwitch = R("div", { style: { display: "flex", gap: 6, background: "var(--uib-bakgrunn-rod)", borderRadius: 8, padding: 4 } },
      [["landscape", 22, 15, "Liggende"], ["portrait", 15, 20, "Stående"], ["square", 18, 18, "Kvadrat"]].map(([k, gw, gh, t]) => {
        const active = s.format === k;
        return R("button", { key: k, onClick: () => this.setFormat(k), title: t, style: { border: "none", cursor: "pointer", borderRadius: 6, padding: "7px 14px", background: active ? th.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center" } },
          R("div", { style: { width: gw, height: gh, borderRadius: 2, border: "2px solid " + (active ? "#fff" : th.deep) } }));
      }));

    // Properties bar
    let propsBar = null;
    const sel = s.elements.find(e => e.id === s.selectedId);
    if (s.mode === "draw" || s.mode === "erase") {
      if (s.mode === "draw") {
        propsBar = this.barWrap([
          R("span", { key: "l", style: { fontWeight: 700, fontSize: 14, color: "#004281" } }, "Tegn"),
          this.grp("Tykkelse", R("div", { style: { display: "flex", gap: 6 } }, this.DRAW_WIDTHS.map(w =>
            R("button", { key: w, onClick: () => this.setState({ drawWidth: w }), title: w + " px", style: { width: 34, height: 30, borderRadius: 6, border: "1px solid " + (s.drawWidth === w ? "#004281" : "rgba(0,0,0,.16)"), background: s.drawWidth === w ? "var(--uib-lys-bla)" : "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } },
              R("div", { style: { width: 18, height: Math.max(2, w / 1.4), background: "#200505", borderRadius: 4 } }))))),
          this.grp("Farge", R("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
            ["#820a12", "#ff2130", "#004281", "#00a2ff", "#200505"].map(c => this.swatch(c, s.drawColor, () => this.setState({ drawColor: c }))),
            this.chip("Flere farger", false, () => this.setState({ panel: "color", bgEdit: false })))),
        ]);
      } else {
        propsBar = this.barWrap([R("span", { key: "l", style: { fontWeight: 700, fontSize: 14, color: "#004281" } }, "Viskelær"),
          R("span", { key: "m", style: { fontSize: 13, color: "#7b7b7b" } }, "Klikk og dra over strekene for å viske dem ut.")]);
      }
    } else if (sel && sel.type === "text") {
      const curFont = sel.fontFamily || "'Open Sans', sans-serif";
      propsBar = this.barWrap([
        this.grp("Skrift", R("select", { value: curFont, onChange: e => { this.snapshot(); this.update(sel.id, { fontFamily: e.target.value }); },
          style: { fontFamily: curFont, fontSize: 14, padding: "7px 10px", borderRadius: 6, border: "1px solid rgba(0,0,0,.16)", background: "#fff", color: "#200505", cursor: "pointer", maxWidth: 150 } },
          this.FONTS.map(ft => R("option", { key: ft.label, value: ft.css, style: { fontFamily: ft.css } }, ft.label)))),
        this.grp("Størrelse", R("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
          this.stepBtn("−", () => { this.snapshot(); this.update(sel.id, { fontSize: Math.max(10, sel.fontSize - 2) }); }),
          R("span", { style: { minWidth: 34, textAlign: "center", fontSize: 14 } }, sel.fontSize),
          this.stepBtn("+", () => { this.snapshot(); this.update(sel.id, { fontSize: Math.min(200, sel.fontSize + 2) }); }))),
        R("div", { key: "st", style: { display: "flex", gap: 6 } },
          this.chip(R("b", null, "Fet"), sel.weight === 700, () => { this.snapshot(); this.update(sel.id, { weight: sel.weight === 700 ? 400 : 700 }); }),
          this.chip(R("i", null, "Kursiv"), !!sel.italic, () => { this.snapshot(); this.update(sel.id, { italic: !sel.italic }); }),
          this.chip("• Liste", !!sel.list, () => this.toggleList(sel))),
        this.grp("Justering", R("div", { style: { display: "flex", gap: 6 } },
          [["left", "Venstre"], ["center", "Midtstilt"], ["right", "Høyre"]].map(([a, lbl]) =>
            this.chip(lbl, (sel.align || "left") === a, () => { this.snapshot(); this.update(sel.id, { align: a }); })))),
        this.chip("Farge", false, () => this.setState({ panel: "color" })),
        this.layerGroup(sel),
      ]);
    } else if (sel && sel.type === "image") {
      const fr = sel.frame || "rect";
      propsBar = this.barWrap([
        this.chip("Bytt bilde", false, () => { this.setState({ mode: "select" }); this._replaceId = sel.id; this.pickFile(); }),
        this.grp("Ramme", R("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } },
          Object.entries(this.FRAMES).map(([k, F]) => this.chip(F.label, fr === k, () => { this.snapshot(); this.update(sel.id, { frame: k }); })))),
        this.layerGroup(sel),
      ]);
    } else if (sel && sel.type === "shape") {
      const canFill = this.SHAPES[sel.shape].canFill;
      propsBar = this.barWrap([
        canFill ? R("div", { key: "fm", style: { display: "flex", gap: 6 } },
          this.chip("Kontur", sel.fillMode === "stroke", () => { this.snapshot(); this.update(sel.id, { fillMode: "stroke" }); }),
          this.chip("Fyll", sel.fillMode === "fill", () => { this.snapshot(); this.update(sel.id, { fillMode: "fill" }); })) : R("span", { key: "fm", style: { fontSize: 13, color: "#7b7b7b" } }, "Kun kontur"),
        (sel.fillMode === "stroke" || !canFill) ? this.grp("Tykkelse", R("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
          this.stepBtn("−", () => { this.snapshot(); this.update(sel.id, { strokeWidth: Math.max(1, (sel.strokeWidth || 4) - 1) }); }),
          R("span", { style: { minWidth: 26, textAlign: "center", fontSize: 14 } }, sel.strokeWidth || 4),
          this.stepBtn("+", () => { this.snapshot(); this.update(sel.id, { strokeWidth: Math.min(24, (sel.strokeWidth || 4) + 1) }); }))) : null,
        this.chip("Farge", false, () => this.setState({ panel: "color" })),
        this.layerGroup(sel),
      ]);
    }

    // Overlays / popovers
    let overlays = null;
    if (s.panel === "color") {
      const canColor = s.bgEdit || s.mode === "draw" || !!sel;
      const activeColor = s.bgEdit ? (s.bgColor || th.paper) : (s.mode === "draw" ? s.drawColor : (sel ? sel.color : "#820a12"));
      overlays = this.panel(s.bgEdit ? "Bakgrunnsfarge" : (canColor ? "Velg farge" : "Velg et element først"),
        canColor
          ? R("div", null,
              R("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 } },
                R("label", { style: { position: "relative", width: 54, height: 54, borderRadius: "50%", cursor: "pointer", display: "block", background: "conic-gradient(red,orange,yellow,lime,cyan,blue,magenta,red)", flex: "none", boxShadow: "0 0 0 3px #fff, 0 0 0 4px rgba(0,0,0,.15)" } },
                  R("span", { style: { position: "absolute", inset: 16, borderRadius: "50%", background: activeColor, boxShadow: "inset 0 0 0 2px rgba(255,255,255,.8)" } }),
                  R("input", { type: "color", value: activeColor, onPointerDown: () => { if (this.state.mode !== "draw") this.snapshot(); }, onInput: e => this.onColorLive(e.target.value), onChange: e => this.onColorLive(e.target.value), style: { position: "absolute", inset: 0, opacity: 0, width: "100%", height: "100%", cursor: "pointer", border: "none", padding: 0 } })),
                R("div", null,
                  R("div", { style: { fontSize: 14, fontWeight: 700, color: "#200505" } }, "Fargehjul"),
                  R("div", { style: { fontSize: 13, color: "#7b7b7b", marginTop: 2 } }, "Klikk sirkelen for alle nyanser"),
                  R("div", { style: { fontSize: 12, color: "#7b7b7b", marginTop: 4, fontFamily: "monospace" } }, String(activeColor).toUpperCase()))),
              R("div", { style: { fontSize: 12, color: "#7b7b7b", margin: "0 0 8px" } }, "Hurtigfarger"),
              R("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 } }, this.PALETTE.map(c => this.swatch(c, activeColor, () => { if (this.state.mode !== "draw") this.snapshot(); this.onColorLive(c); }))),
              s.bgEdit ? R("button", { onClick: () => { this.snapshot(); this.setState({ bgColor: null }); }, style: { marginTop: 10, width: "100%", padding: "9px", border: "1px solid rgba(0,0,0,.16)", borderRadius: 8, background: "#fff", color: "#200505", cursor: "pointer", fontSize: 14, fontFamily: "'Open Sans',sans-serif" } }, "Tilbakestill til standard") : null,
              R("button", { onClick: () => this.setState({ panel: null, bgEdit: false }), style: { marginTop: 10, width: "100%", padding: "10px", border: "none", borderRadius: 8, background: "#004281", color: "#fff", cursor: "pointer", fontSize: 15, fontFamily: "'Open Sans',sans-serif" } }, "Ferdig"))
          : R("div", { style: { fontSize: 14, color: "#7b7b7b" } }, "Klikk på et element, og velg deretter farge."));
    } else if (s.panel === "shape") {
      overlays = this.panel("Legg til form", R("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 } },
        Object.entries(this.SHAPES).map(([k, S]) =>
          R("button", { key: k, onClick: () => this.addShape(k), title: S.label, style: { background: "#fff9f0", border: "1px solid rgba(0,0,0,.12)", borderRadius: 8, padding: "12px 4px 8px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontSize: 11, color: "#200505" } },
            R("svg", { viewBox: "0 0 100 100", width: 34, height: 34, dangerouslySetInnerHTML: { __html: S.path('fill="none" stroke="#820a12" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"') } }),
            S.label))), 300);
    } else if (s.panel === "slett") {
      overlays = this.panel("Slette", R("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
        sel ? R("button", { onClick: () => this.remove(), style: { padding: "11px 14px", borderRadius: 8, border: "1px solid rgba(0,0,0,.16)", background: "#fff", color: "#200505", cursor: "pointer", fontSize: 15, fontFamily: "'Open Sans',sans-serif", textAlign: "left" } }, "Slett valgt element") : R("div", { style: { fontSize: 13, color: "#7b7b7b" } }, "Ingen element er valgt."),
        R("button", { onClick: () => this.deleteAll(), disabled: s.elements.length === 0, style: { padding: "11px 14px", borderRadius: 8, border: "none", background: s.elements.length ? "#ff2130" : "#e7dccd", color: s.elements.length ? "#fff" : "#a99", cursor: s.elements.length ? "pointer" : "default", fontSize: 15, fontFamily: "'Open Sans',sans-serif", textAlign: "left" } }, "Slett alt på plakaten"),
        R("div", { style: { fontSize: 12, color: "#7b7b7b" } }, "Tips: trykk Delete for å slette et valgt element.")));
    }

    let previewNode = null;
    let previewFormatLabel = "";
    if (s.exportOpen) {
      previewFormatLabel = s.format === "square" ? f.name : f.sub;
      const scale = Math.min(1, 520 / f.h, 660 / f.w);
      const P = this.PRINT[s.format];
      const printCss = "@media print{@page{size:" + P.w + " " + P.h + ";margin:0}#poster-print{transform:scale(" + P.scale + ") !important;transform-origin:top left !important}}";
      previewNode = R("div", { style: { width: f.w * scale, height: f.h * scale, position: "relative" } },
        R("style", { dangerouslySetInnerHTML: { __html: printCss } }),
        R("div", { style: { transform: "scale(" + scale + ")", transformOrigin: "top left", position: "absolute" } }, this.buildCanvas(false)));
    }

    const helpOverlay = R("div", { style: { position: "fixed", inset: 0, zIndex: 60, background: "rgba(130,10,18,.28)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }, onClick: () => this.setState({ helpOpen: false }) },
      R("div", { onClick: e => e.stopPropagation(), style: { width: 500, maxWidth: "100%", background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 12px 48px rgba(0,0,0,.25)" } },
        R("div", { style: { background: "#ba0003", color: "#fff", fontWeight: 700, fontSize: 20, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" } }, "Slik lager du plakaten",
          R("button", { onClick: () => this.setState({ helpOpen: false }), "aria-label": "Lukk", style: { width: 34, height: 34, borderRadius: "50%", background: "#fff", border: "none", cursor: "pointer", color: "#ff2130", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, flex: "none" } },
            R("svg", { viewBox: "0 0 24 24", width: 20, height: 20 }, R("path", { d: "M6 6 L18 18 M18 6 L6 18", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" })))),
        R("div", { style: { padding: "24px 28px", fontSize: 16, lineHeight: 1.6, color: "#200505" } },
          R("p", { style: { margin: "0 0 10px" } }, R("b", null, "Legg til innhold:"), " Tekst, Form, Bilde eller frihåndstegning med Tegn. Bilder kan settes inn i ulike rammer, for eksempel sirkel eller firkant."),
          R("p", { style: { margin: "0 0 10px" } }, R("b", null, "Flytt og form:"), " Dra elementer for å flytte dem. De fester seg til hjelpelinjene. Dra hjørnet for å endre størrelse, og dobbeltklikk på tekst for å skrive."),
          R("p", { style: { margin: "0 0 10px" } }, R("b", null, "Stil:"), " Endre farge på elementer eller hele bakgrunnen, og juster skrift, størrelse og stil i linjen over plakaten."),
          R("p", { style: { margin: "0 0 10px" } }, R("b", null, "Angre:"), " Bruk Angre og Gjør om under plakaten, Viskelær for tegninger, og Delete for å slette et valgt element."),
          R("p", { style: { margin: 0 } }, R("b", null, "Ferdig?"), " Trykk Lagre plakat og last den ned som PDF."))));

    const hintText = s.mode === "draw" ? "Tegnemodus: klikk og dra på plakaten for å tegne."
      : s.mode === "erase" ? "Viskemodus: dra over strekene du vil fjerne."
      : s.selectedId ? "Dra for å flytte · dra hjørnet for å endre størrelse · dobbeltklikk tekst for å redigere · Delete for å slette"
      : "Velg et verktøy til venstre for å legge til innhold.";

    return {
      isFormat: s.screen === "format", isChoose: s.screen === "choose", isEditor: s.screen === "editor", isExport: s.exportOpen,
      helpOpen: s.helpOpen, helpOverlay,
      noop: () => {}, onHelp: () => this.setState({ helpOpen: true }),
      watermarkUrl: (window.__resources && window.__resources.watermark) || "assets/innoaktiv-watermark.png",
      fileRef: c => this.fileRefEl = c, onFile: e => this.onFileChange(e),
      formatCards, chooseCards, progressNode, usecaseLabel: this.USECASES[s.usecase].label,
      onStart: () => this.setState({ screen: "choose" }),
      onBackFormat: () => this.setState({ screen: "format" }),
      tbStyle: tbBase, tbDraw: s.mode === "draw" ? tbActive : tbBase, tbErase: s.mode === "erase" ? tbActive : tbBase,
      fmtSwitch, hintText, propsBar,
      onDraw: () => this.setMode("draw"), onErase: () => this.setMode("erase"),
      onText: () => this.addText(), onImage: () => { this._replaceId = null; this.setState({ mode: "select" }); this.pickFile(); },
      onShapeOpen: () => this.setState(st => ({ panel: st.panel === "shape" ? null : "shape", mode: "select" })),
      onColorOpen: () => this.setState(st => ({ panel: st.panel === "color" && !st.bgEdit ? null : "color", bgEdit: false })),
      onBgOpen: () => this.setState(st => ({ panel: st.panel === "color" && st.bgEdit ? null : "color", bgEdit: true, mode: "select", selectedId: null })),
      onDelete: () => this.setState(st => ({ panel: st.panel === "slett" ? null : "slett", mode: "select" })),
      onUndo: () => this.undo(), noUndo: s.history.length === 0,
      onRedo: () => this.redo(), noRedo: s.future.length === 0,
      undoStyle: "display:inline-flex;align-items:center;justify-content:center;gap:8px;width:130px;background:transparent;border:1px solid rgba(0,0,0,.16);border-radius:6px;padding:9px 16px;font-family:'Open Sans',sans-serif;cursor:" + (s.history.length ? "pointer" : "default") + ";color:" + (s.history.length ? "var(--uib-black)" : "#b9b0a3"),
      redoStyle: "display:inline-flex;align-items:center;justify-content:center;gap:8px;width:130px;background:transparent;border:1px solid rgba(0,0,0,.16);border-radius:6px;padding:9px 16px;font-family:'Open Sans',sans-serif;cursor:" + (s.future.length ? "pointer" : "default") + ";color:" + (s.future.length ? "var(--uib-black)" : "#b9b0a3"),
      canvasNode: this.buildCanvas(true), overlays,
      onClose: () => this.setState({ screen: "format", panel: null, mode: "select" }),
      onSave: () => { this.commitActiveEdit(); this.setState({ exportOpen: true, selectedId: null, panel: null, mode: "select" }); },
      previewNode, previewFormatLabel, onBackEdit: () => this.setState({ exportOpen: false }),
      onOverlayClick: e => { if (e.target === e.currentTarget) this.setState({ exportOpen: false }); },
      onDownload: () => this.downloadPdf(),
    };
  }
}
</script>


</body></html>