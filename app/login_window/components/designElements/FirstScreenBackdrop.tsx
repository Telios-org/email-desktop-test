import React from 'react';

type Props = {
    className?: string;
  };

const FirstScreenBackdrop = (props: Props) => {
    const { className = '' } = props;
    return (
        <div className={className}>
<svg width="417px" height="590px" viewBox="10 7 417 590" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>FirstTimeLoginBackdrop</title>
    <defs>
        <linearGradient x1="34.4517994%" y1="65.579787%" x2="93.02325%" y2="-11.552763%" id="linearGradient-1">
            <stop stopColor="#A996FF" offset="0%"></stop>
            <stop stopColor="#25C3FF" offset="100%"></stop>
        </linearGradient>
        <path d="M2.30029133,478.394706 C10.8564346,472.898055 -5.98597344,481.441163 2.42918724,478.394706 C76.0421734,451.745329 143.708992,513.878036 195.771167,577.94048 C195.77653,577.947079 195.787255,577.970435 195.787255,577.960277 C195.787255,577.94048 361.997134,577.944759 382.580908,577.960277 C382.61482,577.960303 382.567695,578.003804 382.580908,577.95017 C390.067993,547.558242 396.658932,511.12525 402.300291,468.455581 L402.300291,2.94475921 L2.30029133,2.94475921 L2.30029133,478.394706 Z" id="path-2"></path>
        <filter x="-2.6%" y="-1.8%" width="105.2%" height="103.7%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.317408422 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M2.30029133,357.944759 C2.30029133,408.675505 2.30029133,434.290147 2.30029133,434.788685 C110.19388,411.76985 186.300174,509.487019 235.840174,577.850952 C235.939057,577.987408 235.787471,577.944759 235.926458,577.944759 C240.231374,577.944759 366.884758,577.951069 366.884758,577.951069 C381.112419,541.414375 392.997466,489.140733 402.300291,420.266586 L402.300291,0.981586402 C259.294111,-0.327195467 162.225279,-0.327195467 111.093796,0.981586402 C105.673358,1.12033011 126.222142,27.4859541 12.2854297,107.349317 C8.57255857,109.951835 5.2593168,112.286984 2.3457044,114.354763 C2.32711641,114.367955 2.28998922,114.364503 2.28998922,114.394306 C2.28998922,117.327957 2.29342326,118.187857 2.30029133,116.974007 C2.30029133,226.89043 2.30029133,307.214014 2.30029133,357.944759 Z" id="path-4"></path>
        <filter x="-2.0%" y="-1.2%" width="104.0%" height="102.8%" filterUnits="objectBoundingBox" id="filter-5">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M75.0198434,54.4960116 C75.0198434,54.5190751 75.0198434,54.5382948 75.0156515,54.5613584 C74.9837929,58.7690462 71.4217096,62.1881214 67.0505859,62.1881214 L40.5046288,62.1881214 C38.562303,62.1881214 37.1844192,60.3600289 37.7821869,58.5762428 L43.7514798,40.7622543 C44.5860909,38.2719942 47.6734394,37.2648844 49.8987197,38.760578 C54.1229167,41.6000289 59.1144444,44.2705491 64.6360404,45.7346821 C67.5886187,46.5192486 70.5491616,46.9038439 73.4380227,46.9038439 C73.9678813,46.9038439 74.4937576,46.8923121 75.0198434,46.8654046 L75.0198434,54.4960116 Z M67.0505859,0.085982659 L26.9703889,0.085982659 C29.122101,1.40141618 31.2897424,2.88598266 33.4733131,4.54352601 C34.8597904,5.59736994 36.2026717,6.67812139 37.5134848,7.77809249 L67.0505859,7.77809249 C71.4456035,7.77809249 75.0198434,11.231763 75.0198434,15.4702023 L75.0198434,39.1579191 C72.3581843,39.3387861 69.5569343,39.0656647 66.7437374,38.3195376 C58.8187045,36.2156936 51.8458662,30.8273121 47.2915556,26.9544509 C44.9088687,24.9313295 42.5379192,22.7584971 40.2388611,20.6546532 C36.5254495,17.2507514 32.6841843,13.7317341 28.5484369,10.5896243 C27.2135202,9.57806358 25.8945328,8.63953757 24.5837197,7.77809249 C21.4953232,5.73898844 18.4610025,4.10734104 15.457702,2.87384393 C11.4508561,1.22803468 6.74668434,2.24 3.89555051,5.41690751 C3.87836364,5.43592486 3.86138636,5.45514451 3.84440909,5.47436416 C3.11124242,6.30121387 2.46568687,7.20109827 1.92786364,8.16653179 C4.83642677,8.02815029 7.68525505,8.38583815 10.3311944,9.20115607 C10.5581869,9.27803468 10.7853889,9.35491329 11.0125909,9.43968208 C11.9130152,9.76641618 12.8253864,10.143526 13.7417399,10.5665607 C16.9255025,12.0280636 20.2046313,14.0432948 23.6193687,16.6355202 C27.4685985,19.5546821 31.0067879,22.8007803 34.75625,26.2313873 C37.3219141,28.585896 38.2611136,32.1522543 37.1716338,35.4036127 L29.2329773,59.0949711 C28.6150884,60.9388439 26.8362475,62.1881214 24.8283182,62.1881214 L15.9492045,62.1881214 C11.5543965,62.1881214 7.98015657,58.7342486 7.98015657,54.4960116 L7.98015657,16.5663295 C6.09567929,15.9701156 4.01963131,15.727948 1.93582828,15.8740173 C1.29823737,15.9163006 0.656664141,15.9970231 0.0113181818,16.1125434 L0.0113181818,54.4960116 C0.0113181818,62.9925145 7.14701263,69.8802312 15.9492045,69.8802312 L67.0505859,69.8802312 C75.8406212,69.8802312 82.9886818,62.9767341 82.9886818,54.4960116 L82.9886818,15.4702023 C82.9886818,6.98968208 75.8406212,0.085982659 67.0505859,0.085982659 L67.0505859,0.085982659 Z" id="path-6"></path>
        <linearGradient x1="8.8478676%" y1="83.4229389%" x2="91.1602154%" y2="16.5940827%" id="linearGradient-8">
            <stop stopColor="#A995FF" offset="0%"></stop>
            <stop stopColor="#24C3FF" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-9" points="0.0129850746 0.074757764 28.7993806 0.074757764 28.7993806 33.8338012 0.0129850746 33.8338012"></polygon>
        <linearGradient x1="90.5591503%" y1="50.4634059%" x2="-63.4335012%" y2="48.0780739%" id="linearGradient-11">
            <stop stopColor="#A996FF" offset="0%"></stop>
            <stop stopColor="#25C3FF" offset="100%"></stop>
        </linearGradient>
        <rect id="path-12" x="0" y="0" width="321" height="44" rx="7"></rect>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="First-Login" transform="translate(10.000000, 7.000000)">
            <g id="FirstTimeLoginBackdrop" transform="translate(-2.300291, -2.944759)">
                <g id="gradient-path" fillRule="nonzero">
                    <use fill="black" fillOpacity="1" filter="url(#filter-3)" href="#path-2"></use>
                    <use fill="url(#linearGradient-1)" href="#path-2"></use>
                </g>
                <g id="dark-path" fillRule="nonzero">
                    <use fill="black" fillOpacity="1" filter="url(#filter-5)" href="#path-4"></use>
                    <use fill="#0F061E" href="#path-4"></use>
                </g>
                <g id="Telios_main_rgb" transform="translate(108.300291, 134.417596)">
                    <g id="Group-3" transform="translate(64.000000, 0.527163)">
                        <mask id="mask-7" fill="white">
                            <use href="#path-6"></use>
                        </mask>
                        <g id="Clip-2"></g>
                        <path d="M75.0198434,54.4960116 C75.0198434,54.5190751 75.0198434,54.5382948 75.0156515,54.5613584 C74.9837929,58.7690462 71.4217096,62.1881214 67.0505859,62.1881214 L40.5046288,62.1881214 C38.562303,62.1881214 37.1844192,60.3600289 37.7821869,58.5762428 L43.7514798,40.7622543 C44.5860909,38.2719942 47.6734394,37.2648844 49.8987197,38.760578 C54.1229167,41.6000289 59.1144444,44.2705491 64.6360404,45.7346821 C67.5886187,46.5192486 70.5491616,46.9038439 73.4380227,46.9038439 C73.9678813,46.9038439 74.4937576,46.8923121 75.0198434,46.8654046 L75.0198434,54.4960116 Z M67.0505859,0.085982659 L26.9703889,0.085982659 C29.122101,1.40141618 31.2897424,2.88598266 33.4733131,4.54352601 C34.8597904,5.59736994 36.2026717,6.67812139 37.5134848,7.77809249 L67.0505859,7.77809249 C71.4456035,7.77809249 75.0198434,11.231763 75.0198434,15.4702023 L75.0198434,39.1579191 C72.3581843,39.3387861 69.5569343,39.0656647 66.7437374,38.3195376 C58.8187045,36.2156936 51.8458662,30.8273121 47.2915556,26.9544509 C44.9088687,24.9313295 42.5379192,22.7584971 40.2388611,20.6546532 C36.5254495,17.2507514 32.6841843,13.7317341 28.5484369,10.5896243 C27.2135202,9.57806358 25.8945328,8.63953757 24.5837197,7.77809249 C21.4953232,5.73898844 18.4610025,4.10734104 15.457702,2.87384393 C11.4508561,1.22803468 6.74668434,2.24 3.89555051,5.41690751 C3.87836364,5.43592486 3.86138636,5.45514451 3.84440909,5.47436416 C3.11124242,6.30121387 2.46568687,7.20109827 1.92786364,8.16653179 C4.83642677,8.02815029 7.68525505,8.38583815 10.3311944,9.20115607 C10.5581869,9.27803468 10.7853889,9.35491329 11.0125909,9.43968208 C11.9130152,9.76641618 12.8253864,10.143526 13.7417399,10.5665607 C16.9255025,12.0280636 20.2046313,14.0432948 23.6193687,16.6355202 C27.4685985,19.5546821 31.0067879,22.8007803 34.75625,26.2313873 C37.3219141,28.585896 38.2611136,32.1522543 37.1716338,35.4036127 L29.2329773,59.0949711 C28.6150884,60.9388439 26.8362475,62.1881214 24.8283182,62.1881214 L15.9492045,62.1881214 C11.5543965,62.1881214 7.98015657,58.7342486 7.98015657,54.4960116 L7.98015657,16.5663295 C6.09567929,15.9701156 4.01963131,15.727948 1.93582828,15.8740173 C1.29823737,15.9163006 0.656664141,15.9970231 0.0113181818,16.1125434 L0.0113181818,54.4960116 C0.0113181818,62.9925145 7.14701263,69.8802312 15.9492045,69.8802312 L67.0505859,69.8802312 C75.8406212,69.8802312 82.9886818,62.9767341 82.9886818,54.4960116 L82.9886818,15.4702023 C82.9886818,6.98968208 75.8406212,0.085982659 67.0505859,0.085982659 L67.0505859,0.085982659 Z" id="Fill-1" fill="url(#linearGradient-8)" mask="url(#mask-7)"></path>
                    </g>
                    <g id="Group-6" transform="translate(0.000000, 91.527163)">
                        <mask id="mask-10" fill="white">
                            <use href="#path-9"></use>
                        </mask>
                        <g id="Clip-5"></g>
                        <polyline id="Fill-4" fill="#FFFFFF" mask="url(#mask-10)" points="0 5.82772671 11.0630672 5.82772671 11.0630672 33.8338012 17.7363134 33.8338012 17.7363134 5.82772671 28.7993806 5.82772671 28.7993806 0.074757764 0 0.074757764 0 5.82772671"></polyline>
                    </g>
                    <polyline id="Fill-7" fill="#FFFFFF" points="48.0004865 110.874275 63.161338 110.874275 63.161338 105.508809 48.0004865 105.508809 48.0004865 97.321194 65.5419043 97.321194 65.5419043 91.527163 41 91.527163 41 125.527163 66 125.527163 66 119.733132 48.0004865 119.733132 48.0004865 110.874275"></polyline>
                    <polyline id="Fill-8" fill="#FFFFFF" points="85.9022029 91.527163 79 91.527163 79 125.527163 104 125.527163 104 119.733132 85.9022029 119.733132 85.9022029 91.527163"></polyline>
                    <polygon id="Fill-9" fill="#FFFFFF" points="115 125.527163 122 125.527163 122 91.527163 115 91.527163"></polygon>
                    <path d="M161.958191,112.612147 C161.541216,113.951994 160.925086,115.156137 160.110006,116.224785 C159.295131,117.293434 158.293201,118.154644 157.107705,118.796672 C155.922413,119.442685 154.561553,119.765692 153.021433,119.765692 C151.512489,119.765692 150.167217,119.450656 148.981925,118.820583 C147.796634,118.190511 146.794499,117.357196 145.979624,116.320429 C145.164749,115.279887 144.54103,114.083714 144.108057,112.731911 C143.679187,111.376332 143.464854,109.976707 143.464854,108.529051 C143.464854,107.141591 143.671393,105.782027 144.088778,104.442179 C144.501856,103.106527 145.110192,101.910354 145.909479,100.853661 C146.712868,99.8009536 147.710901,98.947713 148.91178,98.3017 C150.112864,97.6596721 151.481313,97.3366656 153.021433,97.3366656 C154.499407,97.3366656 155.832783,97.6437316 157.018075,98.2578634 C158.199469,98.8717855 159.201604,99.6973398 160.016479,100.733897 C160.835251,101.774649 161.463072,102.970822 161.911427,104.322625 C162.355886,105.678413 162.582115,107.077829 162.582115,108.529051 C162.582115,109.912735 162.371474,111.272509 161.958191,112.612147 Z M164.613457,96.9102551 C163.225319,95.3031929 161.556804,94.0073915 159.603196,93.0144611 C157.645691,92.0215307 155.485749,91.527163 153.115165,91.527163 C150.806934,91.527163 148.666066,91.9936347 146.697075,92.9188176 C144.723982,93.8477759 143.024087,95.0999505 141.593287,96.6749218 C140.162076,98.2498931 139.039341,100.060198 138.220364,102.105416 C137.405489,104.151054 137,106.292336 137,108.529051 C137,110.666557 137.382107,112.759807 138.154116,114.80922 C138.922227,116.854858 140.006198,118.673133 141.409924,120.26006 C142.809549,121.850971 144.486268,123.126847 146.443773,124.087896 C148.397176,125.048736 150.572706,125.527163 152.97467,125.527163 C155.282901,125.527163 157.423564,125.060691 159.392555,124.135718 C161.365648,123.20655 163.057749,121.962556 164.473167,120.403525 C165.888584,118.844494 166.995936,117.05013 167.799121,115.020642 C168.598408,112.990945 169,110.857844 169,108.620919 C169,106.511519 168.613996,104.434209 167.845884,102.388781 C167.073876,100.343143 165.997699,98.5168978 164.613457,96.9102551 L164.613457,96.9102551 Z" id="Fill-10" fill="#FFFFFF"></path>
                    <path d="M207.228089,111.727842 C206.715904,110.675676 205.984395,109.774117 205.037623,109.023793 C204.094699,108.269082 202.936511,107.641584 201.575032,107.141507 C200.209705,106.641013 198.693886,106.168509 197.02779,105.731725 C195.743694,105.417976 194.609662,105.120103 193.634459,104.838313 C192.655195,104.556315 191.846516,104.242566 191.204361,103.897066 C190.562206,103.551566 190.070543,103.150293 189.733219,102.697634 C189.399957,102.241214 189.229158,101.66928 189.229158,100.97828 C189.229158,99.7909634 189.680419,98.8616227 190.578452,98.2063424 C191.476486,97.5473022 192.837965,97.2176776 194.666738,97.2176776 C195.694955,97.2176776 196.706712,97.3446813 197.698375,97.5949286 C198.693886,97.8451758 199.616289,98.1509872 200.465797,98.5121538 C201.319153,98.8737381 202.038264,99.2390825 202.631894,99.6161245 C203.225096,99.9933754 203.635528,100.291249 203.859128,100.509745 L206.797136,95.2441081 C205.28944,94.2393589 203.521804,93.3697601 201.502138,92.6311337 C199.482257,91.8964762 197.267636,91.527163 194.861693,91.527163 C193.12655,91.527163 191.508978,91.7535971 190.001496,92.2100164 C188.489525,92.6628846 187.169089,93.3300714 186.030996,94.2078169 C184.889269,95.0853535 183.999145,96.1811776 183.357204,97.4996758 C182.715049,98.8179652 182.393972,100.323 182.393972,102.01478 C182.393972,103.301319 182.597264,104.405289 182.995297,105.330661 C183.397606,106.255824 183.999145,107.069859 184.803762,107.776734 C185.604318,108.479641 186.608166,109.091264 187.81103,109.611394 C189.014109,110.127555 190.432022,110.604027 192.069902,111.04478 C193.414921,111.422031 194.634245,111.767531 195.727448,112.07752 C196.816588,112.39106 197.747114,112.73656 198.519025,113.113811 C199.287088,113.491062 199.880718,113.927846 200.299273,114.432101 C200.717828,114.932595 200.924968,115.544009 200.924968,116.262791 C200.924968,118.554288 199.096409,119.697738 195.438863,119.697738 C194.122061,119.697738 192.837965,119.542952 191.586362,119.229203 C190.33882,118.915454 189.196665,118.530266 188.172723,118.073637 C187.144506,117.620978 186.254596,117.164141 185.498717,116.711482 C184.747114,116.258822 184.222745,115.889509 183.93416,115.607511 L181,121.202773 C182.987174,122.580804 185.234502,123.649055 187.737922,124.399588 C190.241342,125.15409 192.77298,125.527163 195.341171,125.527163 C197.011543,125.527163 198.604532,125.348564 200.132535,124.987398 C201.652416,124.629991 203.001496,124.054088 204.172082,123.271804 C205.34224,122.489311 206.27298,121.460958 206.96366,120.190295 C207.654767,118.919632 208,117.394544 208,115.607511 C208,114.070934 207.744121,112.776249 207.228089,111.727842" id="Fill-11" fill="#FFFDFD"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
        </div>
    )
};

export default FirstScreenBackdrop;