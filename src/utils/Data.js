import { time } from "framer-motion";

//  Slides data for homepage carousel
export const slides = [
  {
    id: 1,
    image: "./HomeImg/banner1.jpg",
    title: "Building Trust",
    subtitle: "Your trusted real estate partner for meaningful living",
  },
  {
    id: 2,
    image: "./HomeImg/banner2.png",
    title: "Finding Homes",
    subtitle: "Transform your vision into reality with our expertise",
  },
  {
    id: 3,
    image: "./HomeImg/banner3.jpg",
    title: "Modern Living",
    subtitle: "Discover premium properties designed for your lifestyle",
  },
];

// Nav items
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// About Us cards data
export const aboutCards = [
  {
    title: "Vision",
    description:
      "To become India’s most trusted real estate advisory, helping people find homes that truly match their lifestyle and aspirations.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_77_50)">
          <path
            d="M61.5382 42.2199C60.4861 52.4057 52.4549 60.4732 42.2674 61.5749C41.8542 61.5697 41.5174 61.8993 41.5122 62.3122C41.5122 62.3175 41.5122 62.3244 41.5122 62.3296V78.4871C41.5122 79.3216 40.8351 79.9965 40.0017 79.9965C39.1684 79.9965 38.4913 79.3199 38.4913 78.4871V72.6248C38.4618 72.2205 38.1406 71.8996 37.7361 71.8701C23.9479 70.7545 12.4549 60.874 9.29167 47.416C9.05556 46.6162 9.51215 45.7765 10.3142 45.5405C11.1146 45.3046 11.9549 45.7609 12.191 46.5624C12.2014 46.5954 12.2101 46.6284 12.217 46.6613C15.0278 58.7383 25.2795 67.6489 37.6389 68.7524C37.8351 68.8495 38.0208 68.7524 38.2083 68.565C38.4097 68.4505 38.5226 68.2267 38.4931 67.9959V62.3279C38.4983 61.9149 38.1684 61.5784 37.7552 61.5732C37.75 61.5732 37.7431 61.5732 37.7378 61.5732C32.8177 61.0249 28.2257 58.8337 24.7066 55.3551C21.1875 51.821 18.9913 47.1853 18.4844 42.2268C18.4253 41.8521 18.1076 41.5727 17.7292 41.5606H1.55556C0.696181 41.5606 0 40.8649 0 40.0061C0 39.1473 0.696181 38.4516 1.55556 38.4516H7.69792C8.07639 38.436 8.39062 38.1584 8.45312 37.7853C9.27951 24.0359 18.7708 12.3372 32.0625 8.68513C32.9115 8.52378 33.7309 9.0807 33.8906 9.92908C34.0382 10.7098 33.5764 11.4784 32.8177 11.7143C20.9288 14.9188 12.3872 25.3128 11.5556 37.591C11.467 37.9831 11.7118 38.3735 12.1042 38.462C12.1719 38.4776 12.2413 38.4828 12.3108 38.4793H17.6892C18.0677 38.4672 18.3854 38.1879 18.4444 37.8131C19.4826 27.6064 27.526 19.5199 37.7326 18.4216C38.1458 18.4268 38.4826 18.0972 38.4879 17.6843C38.4879 17.6791 38.4879 17.6721 38.4879 17.6669V1.5094C38.4879 0.674893 39.1649 0 39.9983 0C40.8316 0 41.5087 0.676628 41.5087 1.5094V19.8356C41.5486 20.684 40.8941 21.404 40.0451 21.4439C39.9965 21.4456 39.9479 21.4456 39.8993 21.4439C23.4635 21.4439 15.25 41.5554 26.8681 53.1743C38.4861 64.7932 58.3177 56.4794 58.6007 40.0009C58.5903 39.1768 59.2517 38.5001 60.0764 38.4915C60.0885 38.4915 60.1007 38.4915 60.1129 38.4915H78.441C79.3004 38.4915 79.9965 39.1872 79.9965 40.046C79.9965 40.9048 79.3004 41.6005 78.441 41.6005H72.3958C72.007 41.5849 71.6736 41.8781 71.6406 42.2667C70.6337 56.1081 60.842 67.7374 47.3646 71.0911C45.3819 71.5612 44.6979 68.5424 46.6979 68.0705C58.7292 65.0812 67.5087 54.7548 68.5208 42.4072C68.6094 42.0151 68.3646 41.6248 67.9722 41.5363C67.9045 41.5207 67.8351 41.5155 67.7656 41.5189H62.2899C61.9115 41.5311 61.5938 41.8104 61.5347 42.1852V42.2199H61.5382ZM73.7778 17.0996L62.8542 27.9552C62.5868 28.2449 62.217 28.4166 61.8229 28.434H54.5434C54.3455 28.4513 54.1528 28.5155 53.9826 28.6214L41.0399 41.6525C40.4201 42.232 39.4462 42.199 38.8663 41.5779C38.316 40.9898 38.3142 40.0755 38.8629 39.4839L51.8056 26.444C51.9826 26.3555 52.0938 26.1716 52.0903 25.9738V18.6801C52.0868 18.2551 52.2569 17.8474 52.5608 17.5524L63.4236 6.70556C64 6.08271 64.974 6.04454 65.5972 6.62055C65.9115 6.91028 66.0903 7.31799 66.0903 7.74479V13.6956C66.1163 14.1016 66.4392 14.4243 66.8455 14.4503H72.7031C73.5625 14.4278 74.276 15.1062 74.2986 15.9632C74.3108 16.3952 74.1406 16.8133 73.8316 17.1152L73.7778 17.0979V17.0996ZM61.3333 25.0942L67.6615 18.7704C67.9722 18.4841 67.9913 18 67.7049 17.6912C67.5712 17.5472 67.3872 17.4587 67.191 17.4466H64.5243C63.6649 17.4674 62.9497 16.7943 62.9149 15.9372V13.3521C62.9132 12.9201 62.5608 12.5714 62.1285 12.5749C61.9271 12.5749 61.7344 12.6547 61.5903 12.7935L55.3681 19.1173C55.2014 19.2613 55.099 19.4661 55.0833 19.6864V24.598C55.0781 25.011 55.408 25.3475 55.8212 25.3527C55.8264 25.3527 55.8333 25.3527 55.8385 25.3527H60.8438C61.0399 25.3527 61.2257 25.3527 61.3142 25.1567L61.3316 25.0942H61.3333ZM52.8351 40.0182C52.8455 47.1072 47.1024 52.862 40.0087 52.8724C32.9149 52.8828 27.1563 47.1436 27.1458 40.0546C27.1354 32.9657 32.8785 27.2109 39.9722 27.2005C39.9809 27.2005 39.9896 27.2005 39.9983 27.2005C40.8351 27.2646 41.4618 27.9951 41.3976 28.8313C41.3403 29.5791 40.7465 30.1724 39.9983 30.2297C34.599 30.2297 30.2205 34.6052 30.2205 40.0009C30.2205 45.3965 34.599 49.7721 39.9983 49.7721C45.6701 49.7721 49.4479 45.5267 49.7222 40.0009C49.6858 39.1386 50.3576 38.4099 51.2205 38.3735C52.0833 38.3371 52.8125 39.0085 52.849 39.8707C52.8524 39.9436 52.849 40.0165 52.842 40.0894L52.8333 40.0182H52.8351Z"
            fill="#CFA77F"
          />
        </g>
        <defs>
          <clipPath id="clip0_77_50">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Mission",
    description:
      "To simplify property buying through research-based insights, transparent practices, and personalised service, ensuring every client experiences confidence and clarity at every step.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_76_717)">
          <path
            d="M79.9996 29.2206C79.9955 28.3836 79.583 27.6029 78.8934 27.1282C78.1476 26.6243 77.2038 26.5119 76.3601 26.8221L62.6663 31.9792V24.33L63.0788 24.609C63.7392 25.0712 64.5247 25.3189 65.333 25.3148C66.6559 25.3148 67.8934 24.661 68.6392 23.568C69.8788 21.7504 69.4121 19.2729 67.5996 18.0258L42.2663 0.70579C41.5996 0.247755 40.8101 0 39.9996 0C39.1892 0 38.3996 0.247755 37.733 0.70579L12.3996 18.0278C11.5184 18.6254 10.9121 19.5477 10.7142 20.5928C10.5163 21.638 10.7434 22.7185 11.3476 23.5971C12.1017 24.6839 13.3455 25.3273 14.6663 25.3168C15.4705 25.3168 16.2559 25.0753 16.9205 24.6236L17.333 24.33V32.3248L3.66631 26.8471C2.84548 26.5161 1.91214 26.6118 1.17673 27.1073C0.441309 27.6008 -0.000358073 28.4273 -0.00244141 29.3122V65.2887C-0.00244141 66.7607 1.19131 67.9537 2.66423 67.9537H3.66423C5.15381 67.9453 6.51631 67.1084 7.19756 65.7822L8.31839 63.5565L10.6642 64.6496C9.87881 66.7232 10.8351 69.053 12.8517 69.9794C13.408 70.2355 14.0121 70.3688 14.6246 70.3667C15.1455 70.3625 15.6601 70.2647 16.1455 70.0731C16.5809 71.1891 17.4309 72.0906 18.5184 72.5923C19.1309 72.8713 19.7934 73.017 20.4642 73.0191C21.0205 73.0191 21.5705 72.9213 22.0913 72.7256C22.5142 73.906 23.3934 74.8658 24.533 75.3905C25.1413 75.6736 25.8059 75.8194 26.4788 75.8173C26.958 75.8152 27.4351 75.7382 27.8913 75.5904V75.657C28.258 76.6543 29.0059 77.4641 29.9705 77.9097C31.7226 78.7092 33.7955 78.1512 34.9038 76.5772L38.0642 79.1214C39.2392 80.0083 40.7809 80.2394 42.1642 79.7397C43.5476 79.2401 44.583 78.0742 44.9184 76.6418C46.3455 77.0582 47.8871 76.6459 48.9184 75.5758C49.5871 74.9179 50.0017 74.0435 50.0913 73.1107C50.2809 73.1232 50.4746 73.1232 50.6642 73.1107C53.0976 73.117 55.1663 71.3327 55.5184 68.926C56.0476 69.105 56.5996 69.1987 57.158 69.2049C58.5142 69.2091 59.8142 68.672 60.7726 67.7142C61.7309 66.7565 62.2684 65.4574 62.2642 64.102C62.2601 63.4337 62.1246 62.7737 61.8642 62.1574L70.3434 58.6264L72.8226 63.2109C73.5246 64.4913 74.8684 65.2887 76.3288 65.2887H77.3288C78.7663 65.2887 79.9455 64.152 79.9955 62.7154V29.2185L79.9996 29.2206ZM15.4121 22.425C14.8038 22.8414 13.9746 22.6852 13.5601 22.0794C13.3601 21.7817 13.2871 21.4173 13.3601 21.0675C13.4267 20.7282 13.6226 20.4263 13.9059 20.2285L39.2392 2.90436C39.4601 2.74405 39.7267 2.65869 39.9996 2.66493C40.2705 2.66493 40.5371 2.74821 40.7601 2.90436L66.0934 20.2264C66.6934 20.6407 66.8476 21.461 66.4392 22.0648C66.0226 22.6707 65.1934 22.8268 64.5871 22.4104L40.7601 6.12934C40.3038 5.81288 39.6976 5.81288 39.2392 6.12934L15.4121 22.425ZM39.9996 8.83383L59.9996 22.5187V33.3116C58.6309 34.4359 58.2601 36.3742 59.1205 37.9232L60.4538 40.4008L56.8538 41.7332C55.6246 42.21 54.2371 42.0518 53.1476 41.3064L46.6684 36.5241V29.3163C46.6684 27.8444 45.4746 26.6514 44.0017 26.6514H36.0017C34.5288 26.6514 33.3351 27.8444 33.3351 29.3163V38.0169C32.8309 38.7165 32.3851 39.4556 32.0017 40.228C30.5601 40.3591 29.1309 40.5923 27.7205 40.9213C26.9371 41.117 26.1392 41.2461 25.3351 41.3064C23.5684 41.0962 21.8455 40.5965 20.2413 39.8282L20.8809 38.4958C21.7101 36.8822 21.3496 34.9127 20.0017 33.6989V22.5208L40.0017 8.83591L39.9996 8.83383ZM43.9996 34.7107C41.4309 33.3949 38.3434 33.6281 35.9996 35.3103V29.3142H43.9996V34.7107ZM3.66631 65.2908H2.66631V29.3142L17.8392 35.4707C18.183 35.6081 18.4538 35.885 18.5851 36.2306C18.7246 36.597 18.6955 37.0072 18.5059 37.3507L4.82673 64.585C4.59756 65.0139 4.15381 65.2846 3.66631 65.2908ZM13.9205 67.5165C13.1351 67.1542 12.7892 66.2256 13.1476 65.4386L14.6663 62.2407C15.0288 61.4558 15.958 61.1102 16.7476 61.4683C17.1288 61.6369 17.4226 61.9555 17.5621 62.349C17.7205 62.7362 17.7205 63.1735 17.5621 63.5607L16.0017 66.7586C15.8267 67.1355 15.5101 67.429 15.1205 67.5706C14.7309 67.7122 14.2976 67.6934 13.9226 67.5185L13.9205 67.5165ZM21.1059 70.1814C20.6205 70.3875 20.0726 70.3875 19.5851 70.1814C19.0996 69.9649 18.7246 69.561 18.5455 69.0613C18.3455 68.5699 18.3455 68.0203 18.5455 67.5289L20.8392 62.6259C21.0601 62.145 21.4642 61.7702 21.9601 61.587C22.183 61.5079 22.4184 61.4683 22.6538 61.4662C22.9434 61.4662 23.2288 61.5245 23.4955 61.639C23.9767 61.866 24.3496 62.272 24.5351 62.7716C24.7413 63.2609 24.7413 63.8147 24.5351 64.304L22.2413 69.155C22.0142 69.6359 21.608 70.0107 21.108 70.1939V70.1814H21.1059ZM25.6392 72.8463C24.6371 72.3758 24.1996 71.1911 24.6538 70.1814L26.333 66.6233C26.558 66.1444 26.9601 65.7718 27.4538 65.5844C27.6767 65.5053 27.9101 65.4657 28.1476 65.4657C28.4392 65.4595 28.7267 65.524 28.9871 65.651C29.4705 65.8675 29.8455 66.2714 30.0267 66.7711C30.2121 67.2708 30.1871 67.8225 29.9601 68.3034L28.4121 71.6887L28.3059 71.9157C28.0851 72.4029 27.6788 72.7797 27.1788 72.965C26.6767 73.1503 26.1226 73.1274 25.6392 72.9025V72.8484V72.8463ZM31.0934 75.3509C30.7726 75.2031 30.5246 74.9345 30.4017 74.6035C30.2642 74.2746 30.2642 73.906 30.4017 73.5771L30.8142 72.6839L32.0538 70.019C32.2934 69.5401 32.7976 69.2507 33.3351 69.2861C33.5288 69.2861 33.7184 69.3257 33.8955 69.4048C34.2226 69.5505 34.4788 69.8212 34.6059 70.1585C34.7309 70.4937 34.7163 70.8664 34.5621 71.1911L32.8955 74.8013C32.7434 75.1261 32.4663 75.3738 32.1267 75.4925C31.7871 75.6112 31.4163 75.5862 31.0955 75.428V75.3489L31.0934 75.3509ZM58.8788 65.7697C57.9767 66.6795 56.5246 66.7316 55.558 65.8904L49.0788 60.2129L47.5455 58.8804C47.4101 58.7576 47.2517 58.668 47.0788 58.6139C47.0121 58.6077 46.9455 58.6077 46.8788 58.6139C46.608 58.5619 46.3288 58.5952 46.0788 58.7076C45.9246 58.7909 45.7851 58.8991 45.6663 59.0282C45.433 59.2802 45.3121 59.6174 45.333 59.961C45.3267 60.0005 45.3267 60.0422 45.333 60.0796C45.3767 60.3815 45.5226 60.6584 45.7455 60.8666L52.1059 66.4359C53.0121 67.2812 53.058 68.7011 52.2121 69.6068C51.3642 70.5124 49.9434 70.5603 49.0392 69.7129L48.8934 69.5672L43.5601 64.2373C43.0371 63.7148 42.1892 63.7148 41.6663 64.2373C41.1434 64.7599 41.1434 65.6073 41.6663 66.1299L46.9996 71.4597C47.2809 71.7387 47.4392 72.1176 47.4392 72.5132C47.4392 72.9088 47.2809 73.2877 46.9996 73.5646C46.4038 74.1246 45.4746 74.1246 44.8788 73.5646L43.733 72.4049L42.2392 70.9122C41.9892 70.6602 41.6476 70.5187 41.2913 70.5187C40.9351 70.5187 40.5955 70.6602 40.3455 70.9122C40.0934 71.162 39.9517 71.5034 39.9517 71.8574C39.9517 72.2113 40.0934 72.5528 40.3455 72.8026L41.8392 74.2954C42.1663 74.6077 42.3496 75.0428 42.3455 75.4946C42.3163 76.1129 41.958 76.6667 41.4038 76.9436C40.8496 77.2206 40.1913 77.1768 39.6788 76.8271L36.133 74.083L36.9601 72.2717C37.4121 71.3057 37.4601 70.2001 37.0913 69.1987C36.7226 68.1973 35.9705 67.3853 34.9996 66.9418C34.2892 66.6212 33.5017 66.515 32.733 66.6358C32.6871 66.3693 32.6205 66.107 32.533 65.8509C31.7496 63.7023 29.5121 62.4448 27.2663 62.8924C27.0976 61.4808 26.2913 60.2233 25.0767 59.48C23.8642 58.7368 22.3746 58.591 21.0392 59.0824C20.3892 59.328 19.8017 59.7153 19.3184 60.215C18.9226 59.709 18.4101 59.3072 17.8246 59.0428C15.6996 58.0622 13.1809 58.9845 12.1976 61.1081L11.7038 62.2012L9.51631 61.1623L19.0371 42.2142C21.0184 43.1594 23.1476 43.7548 25.3309 43.9735C26.308 43.9131 27.2767 43.7632 28.2246 43.5196C28.9705 43.3614 29.7705 43.201 30.6121 43.0678L28.4246 47.9708C27.4059 50.2923 28.3913 53.003 30.6642 54.1273H30.7976C31.4226 54.4271 32.1059 54.5811 32.7976 54.5811C34.1663 54.5874 35.4705 53.9982 36.3705 52.9676L41.6371 47.1047L58.7705 62.3094C59.2767 62.7529 59.5746 63.3858 59.5934 64.0583C59.6142 64.7308 59.3538 65.3803 58.8767 65.855V65.7738L58.8788 65.7697ZM60.2121 59.9214L40.8788 42.972C40.3226 42.5244 39.5142 42.5952 39.0413 43.1303C38.5684 43.6653 38.6038 44.4773 39.1184 44.9707L39.5976 45.3975L34.3455 51.2479C33.7205 51.962 32.6934 52.1702 31.8392 51.7538H31.7455C30.8101 51.2229 30.4267 50.0757 30.8538 49.0889L33.9476 42.2392C34.6767 40.6215 35.7246 39.1682 37.0267 37.9628C38.7955 36.3243 41.4788 36.1681 43.4267 37.5901L51.5476 43.5071C53.3559 44.8042 55.6913 45.1123 57.7746 44.3336L61.7746 42.8533L69.0684 56.3237L60.2142 59.9214H60.2121ZM76.3601 62.5863C75.883 62.5988 75.4351 62.3552 75.1871 61.9472L61.4934 36.6303C61.3455 36.3659 61.3226 36.0494 61.4267 35.7642C61.5538 35.4394 61.8184 35.1854 62.1476 35.0709L77.333 29.2206V62.6259L76.3601 62.5863Z"
            fill="#CFA77F"
          />
          <path
            d="M40.0001 23.9844C42.9459 23.9844 45.3334 21.5985 45.3334 18.6546C45.3334 15.7107 42.9459 13.3247 40.0001 13.3247C37.0542 13.3247 34.6667 15.7107 34.6667 18.6546C34.6667 21.5985 37.0563 23.9844 40.0001 23.9844ZM40.0001 15.9896C41.473 15.9896 42.6667 17.1826 42.6667 18.6546C42.6667 20.1265 41.473 21.3195 40.0001 21.3195C38.5272 21.3195 37.3334 20.1265 37.3334 18.6546C37.3334 17.1826 38.5272 15.9896 40.0001 15.9896Z"
            fill="#CFA77F"
          />
        </g>
        <defs>
          <clipPath id="clip0_76_717">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Built on Values That Matter",
    description:
      "Trust | Transparency | Commitment | Expertise | Consistency | Long-Term Relationships.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_77_47)">
          <path
            d="M79.181 48.6184C78.4197 47.3474 75.2971 43.5749 67.0487 48.3781L52.5084 56.8472C51.7793 57.2714 51.0374 57.5714 50.2648 57.7504C50.5519 57.2908 50.7761 56.7698 50.931 56.1956C51.6745 53.4215 50.0261 50.5248 47.1777 49.6006C47.1229 49.5829 47.0664 49.5684 47.0084 49.5587C42.8293 48.8055 38.7035 47.3136 35.389 46.1152C34.2374 45.6991 33.1503 45.3055 32.2261 45.0055C28.5035 43.7975 25.1374 45.2926 22.3374 46.9152L11.5197 53.178L10.5003 51.3764C10.0503 50.5812 9.31482 50.0071 8.42934 49.7619C7.54385 49.5167 6.61966 49.6296 5.82289 50.0796L1.74224 52.3893C0.947079 52.8393 0.372886 53.5747 0.127724 54.4602C-0.117437 55.3457 -0.00453368 56.2698 0.445466 57.0666L12.4406 78.2597C12.8906 79.0549 13.6261 79.629 14.5116 79.8742C14.818 79.9597 15.1277 80.0016 15.4374 80.0016C16.0213 80.0016 16.5971 79.8516 17.118 79.5565L21.1987 77.2468C21.9939 76.7968 22.568 76.0614 22.8132 75.1759C23.0584 74.2904 22.9455 73.3663 22.4955 72.5695L21.2584 70.3841L23.7245 68.9599L42.3487 73.9501C43.4003 74.2324 44.4326 74.3727 45.4439 74.3727C47.4584 74.3727 49.3842 73.813 51.1955 72.6969L77.5842 56.4489C79.989 54.9682 80.7519 51.2345 79.1842 48.6184H79.181ZM20.3229 74.4856C20.2616 74.7066 20.1197 74.8888 19.9245 74.9985L15.8439 77.3081C15.4422 77.5355 14.9116 77.3888 14.6842 76.9872L2.69063 55.794C2.57934 55.5989 2.55353 55.3699 2.61321 55.1489C2.6745 54.9279 2.81643 54.7457 3.0116 54.636L7.09224 52.3264C7.21966 52.2538 7.3616 52.2183 7.50514 52.2183C7.58256 52.2183 7.65998 52.2296 7.7374 52.2506C7.95837 52.3118 8.14063 52.4538 8.25192 52.6489L20.2471 73.8421C20.3584 74.0372 20.3858 74.2662 20.3245 74.4872L20.3229 74.4856ZM76.2277 54.2521L49.839 70.5002C47.7471 71.7889 45.4503 72.1098 43.0132 71.4566L23.8729 66.3277C23.5422 66.239 23.1906 66.2858 22.8939 66.4567L19.9842 68.1373L12.789 55.4231L23.6293 49.1474C26.0535 47.7442 28.6777 46.5668 31.4293 47.4603C32.3132 47.7474 33.3326 48.1152 34.5116 48.541C37.8939 49.7635 42.0955 51.2828 46.4568 52.0796C47.9761 52.6102 48.8261 54.0779 48.439 55.5263C47.9293 57.4311 46.3422 57.6666 45.081 57.523C42.939 57.0827 40.9035 56.5021 38.7503 55.8876C37.7293 55.5957 36.6729 55.294 35.5874 55.0037C34.9003 54.8199 34.1922 55.2279 34.0068 55.9166C33.8213 56.6053 34.2309 57.3117 34.9197 57.4972C35.9842 57.7827 37.0309 58.0811 38.0406 58.3698C40.26 59.0036 42.3568 59.602 44.6148 60.0633C44.6229 60.0649 44.6326 60.0665 44.6406 60.0665C44.6487 60.0665 44.6568 60.0698 44.6664 60.0714L46.4745 60.3649C49.1793 60.7972 51.5777 60.3762 53.81 59.0762L68.3503 50.607C72.5358 48.17 75.7584 47.9216 76.9697 49.9442C77.8051 51.3377 77.4309 53.5118 76.2293 54.2521H76.2277ZM8.27611 56.4198C8.39224 57.215 7.84224 57.9553 7.04547 58.0714C6.24869 58.1875 5.50998 57.6359 5.39385 56.8408C5.27772 56.0456 5.82772 55.3053 6.6245 55.1892C7.42127 55.0731 8.15998 55.6231 8.27611 56.4198ZM53.6277 49.9151C53.8729 50.2119 54.2374 50.3845 54.6229 50.3845C55.0084 50.3845 55.3729 50.2119 55.618 49.9151L73.8309 27.843C74.168 27.4349 74.2213 26.864 73.9664 26.3995L67.8955 15.3642C67.6681 14.9513 67.2358 14.6965 66.7648 14.6965H42.481C42.01 14.6965 41.5777 14.9529 41.3503 15.3642L35.2793 26.3995C35.0245 26.8624 35.0777 27.4349 35.4148 27.843L53.6277 49.9151ZM61.6777 28.3123H70.0987L57.468 43.6201L61.6777 28.3123ZM54.6229 44.2281L50.2455 28.3123H59.0003L54.6229 44.2281ZM50.7342 25.7317L54.6229 18.6641L58.5116 25.7317H50.7342ZM56.8051 17.2771H64.5826L60.6939 24.3447L56.8051 17.2771ZM48.5519 24.3447L44.6632 17.2771H52.4406L48.5519 24.3447ZM46.3697 25.7317H38.5922L42.481 18.6641L46.3697 25.7317ZM47.5681 28.3123L51.7777 43.6201L39.1471 28.3123H47.5681ZM70.6535 25.7317H62.8761L66.7648 18.6641L70.6535 25.7317ZM53.3326 6.34665V1.2903C53.3326 0.577408 53.91 0 54.6229 0C55.3358 0 55.9132 0.577408 55.9132 1.2903V6.34665C55.9132 7.05954 55.3358 7.63694 54.6229 7.63694C53.91 7.63694 53.3326 7.05954 53.3326 6.34665ZM40.639 5.38376C40.2826 4.76603 40.4939 3.97734 41.1116 3.62089C41.7293 3.26445 42.518 3.47574 42.8745 4.09347L45.4019 8.47241C45.7584 9.09014 45.5471 9.87883 44.9293 10.2353C44.7261 10.353 44.5035 10.4079 44.2858 10.4079C43.839 10.4079 43.4068 10.1772 43.1664 9.76271L40.639 5.38376ZM63.8439 8.4708L66.3713 4.09185C66.7277 3.47412 67.5164 3.26284 68.1342 3.61928C68.7519 3.97573 68.9632 4.76442 68.6068 5.38215L66.0793 9.76109C65.8406 10.1756 65.4068 10.4062 64.96 10.4062C64.7406 10.4062 64.5197 10.3498 64.3164 10.2337C63.6987 9.87722 63.4874 9.08853 63.8439 8.4708Z"
            fill="#CFA77F"
          />
        </g>
        <defs>
          <clipPath id="clip0_77_47">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

// Services data for homepage section
export const services = [
  {
    title: "Property Consultation",
    description:
      "At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people. it’s the for meaningful living.",
    icon: "/svg/svg1.svg",
  },
  {
    title: "Investment Advisory",
    description:
      "At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people. it’s the for meaningful living.",
    icon: "/svg/svg2.svg",
  },
  {
    title: "Legal & Documentation",
    description:
      "At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people. it’s the for meaningful living.",
    icon: "/svg/svg3.svg",
  },
  {
    title: "NRI Assistance",
    description:
      "At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people. it’s the for meaningful living.",
    icon: "/svg/svg4.svg",
  },
  {
    title: "Developer Partnerships",
    description:
      "At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people. it’s the for meaningful living.",
    icon: "/svg/svg5.svg",
  },
];

// Projects
export const projects = [
  {
    id: 1,
    slug: "sobha-atlantis",
    title: "Sobha Atlantis",
    subtitle: "Luxury Apartments, SilverSand Island, Kochi",
    details: "1850 to 3118 Sq.ft | 3 & 4 BHK",
    image: "/projectImg/project1.jpg",

    overviewSections: [
      {
        id: 1,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/project1.jpg",
      },
      {
        id: 2,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
      {
        id: 3,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
    ],
  },
  {
    id: 2,
    slug: "marina-one",
    title: "Marina One",
    subtitle: "Luxury Apartments, SilverSand Island, Kochi",
    details: "1850 to 3118 Sq.ft | 3 & 4 BHK",
    image: "/projectImg/sectionImg.png",

    overviewSections: [
      {
        id: 1,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/project2.png",
      },
      {
        id: 2,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
      {
        id: 3,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Immaculately crafted, the newly launched E7 and S10 towers host the most coveted residences, offering uninterrupted views of the pristine seascape and the Central Urban Park.",
        image: "/projectImg/project2.png",
      },
    ],
  },

  {
    id: 3,
    slug: "sobha-atlantis",
    title: "Sobha Atlantis",
    subtitle: "Luxury Apartments, SilverSand Island, Kochi",
    details: "1850 to 3118 Sq.ft | 3 & 4 BHK",
    image: "/projectImg/project1.jpg",

    overviewSections: [
      {
        id: 1,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/project1.jpg",
      },
      {
        id: 2,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
      {
        id: 3,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
    ],
  },

  {
    id: 4,
    slug: "marina-one",
    title: "Marina One",
    subtitle: "Luxury Apartments, SilverSand Island, Kochi",
    details: "1850 to 3118 Sq.ft | 3 & 4 BHK",
    image: "/projectImg/sectionImg.png",

    overviewSections: [
      {
        id: 1,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/project2.png",
      },
      {
        id: 2,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
      {
        id: 3,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Immaculately crafted, the newly launched E7 and S10 towers host the most coveted residences, offering uninterrupted views of the pristine seascape and the Central Urban Park.",
        image: "/projectImg/project2.png",
      },
    ],
  },

  {
    id: 5,
    slug: "sobha-atlantis",
    title: "Sobha Atlantis",
    subtitle: "Luxury Apartments, SilverSand Island, Kochi",
    details: "1850 to 3118 Sq.ft | 3 & 4 BHK",
    image: "/projectImg/project1.jpg",

    overviewSections: [
      {
        id: 1,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/project1.jpg",
      },
      {
        id: 2,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
      {
        id: 3,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
    ],
  },
  {
    id: 6,
    slug: "marina-one",
    title: "Marina One",
    subtitle: "Luxury Apartments, SilverSand Island, Kochi",
    details: "1850 to 3118 Sq.ft | 3 & 4 BHK",
    image: "/projectImg/sectionImg.png",

    overviewSections: [
      {
        id: 1,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/project2.png",
      },
      {
        id: 2,
        heading: "UNVEILING THE MAGNIFICENT SIGNATURE TOWERS",
        body: "Marina One stands as a refined confluence of living for those Born Rare. With its iconic location along Kochi’s Marine Drive, these ultra-luxe abodes are framed by emerald backwaters of Arabian Sea. The success of earlier phases, swiftly embraced by the city’s most discerning, affirms the legacy it continues to shape—one where luxury finds its most timeless expression.",
        image: "/projectImg/overview-2.png",
      },
      {
        id: 3,
        heading: "THE ONE AND ONLY ADDRESS FOR THE RARE FEW.",
        body: "Immaculately crafted, the newly launched E7 and S10 towers host the most coveted residences, offering uninterrupted views of the pristine seascape and the Central Urban Park.",
        image: "/projectImg/project2.png",
      },
    ],
  },
];

// Project Overview section icon buttons
export const overviewButtons = [
  {
    label: "Floor Plan",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 7.94375C80.0042 6.85833 79.5729 5.81458 78.8 5.05L74.95 1.2C74.1896 0.43125 73.1521 0 72.0708 0H72.0583C70.9833 0 69.9542 0.433333 69.2021 1.2L51.7354 18.6667H17.3333V4C17.3333 1.79167 15.5417 0 13.3333 0H10.6667C4.77917 0.00625 0.00625 4.77917 0 10.6667V69.6667C0.333333 75.5104 5.2 80.0604 11.0542 79.9979H76C78.2083 79.9979 80 78.2083 80 75.9979V22.6667C80 20.4563 78.2083 18.6667 76 18.6667H70.9333L78.8 10.8C79.5667 10.0458 79.9979 9.01875 80 7.94375ZM47.7062 33.3333C47.4229 33.3708 47.1396 33.2729 46.9437 33.0667C46.7458 32.8687 46.6458 32.5938 46.6771 32.3146L47.1833 27.7812C47.2042 27.6854 47.2313 27.5917 47.2625 27.5021L52.5146 32.7542C52.4271 32.7729 52.35 32.8146 52.2583 32.8271L47.7062 33.3354V33.3333ZM54.6917 31.1562L48.8583 25.3208L63.3917 10.7875L69.2229 16.6167L54.6917 31.1562ZM65.2708 8.9L67.2479 6.925L73.0771 12.7562L71.1 14.7333L65.2688 8.90208L65.2708 8.9ZM2.66667 10.6667C2.67083 6.25 6.25 2.67083 10.6667 2.66667H13.3333C14.0708 2.66667 14.6667 3.2625 14.6667 4V57.3333C14.6667 58.0688 14.0687 58.6667 13.3333 58.6667H10.6667C7.60417 58.6667 4.6875 59.9833 2.66667 62.2854V10.6667ZM76 21.3333C76.7354 21.3333 77.3333 21.9312 77.3333 22.6667V76C77.3333 76.7375 76.7354 77.3333 76 77.3333H11.0542C6.65208 77.4062 2.96458 74.0187 2.66667 69.6271V69.3333C2.67083 64.9167 6.25 61.3375 10.6667 61.3333H13.3333C15.5417 61.3333 17.3333 59.5417 17.3333 57.3333V21.3333H49.0667L46.0375 24.3625C45.1917 25.1958 44.6604 26.2938 44.5312 27.475L44.025 32.0187C43.9833 32.4604 44.025 32.9083 44.15 33.3354H21.3312C20.5938 33.3354 19.9979 33.9313 19.9979 34.6688C19.9979 35.4062 20.5958 36.0021 21.3312 36.0021H25.3312V72.0021C25.3312 72.7396 25.9271 73.3354 26.6646 73.3354C27.4021 73.3354 27.9979 72.7396 27.9979 72.0021V53.3354H42.6646V64.0021H33.3312C32.5938 64.0021 31.9979 64.5979 31.9979 65.3354C31.9979 66.0729 32.5938 66.6687 33.3312 66.6687H59.9979C61.4708 66.6687 62.6646 65.475 62.6646 64.0021V44.0021C62.6646 43.2646 62.0667 42.6687 61.3313 42.6687C60.5958 42.6687 59.9979 43.2667 59.9979 44.0021V50.6688H27.9979V36.0021H47.6083C47.7375 36.0021 47.8687 35.9958 47.9979 35.9792L52.5542 35.4604C53.7104 35.3292 54.7896 34.8146 55.6208 34L68.2708 21.3333H75.9979H76ZM60 53.3333V64H45.3333V53.3333H60ZM76.9187 8.91042L74.9625 10.8687L69.1333 5.03958L71.0917 3.08125C71.3479 2.81667 71.7 2.66875 72.0667 2.66875C72.4417 2.66875 72.7979 2.82083 73.0604 3.0875L76.9167 6.93542C77.1833 7.2 77.3354 7.56042 77.3333 7.93542C77.3333 8.30208 77.1833 8.65417 76.9208 8.91042H76.9187Z"
          fill="#CFA77F"
        />
      </svg>
    ),
  },
  {
    label: "Master Plan",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_84_856)">
          <path d="M72.0002 20H69.3335V38.6667H72.0002V20Z" fill="#CFA77F" />
          <path
            d="M0.183333 65.3116C0.243333 65.5683 0.32 65.82 0.418333 66.065C0.456667 66.1583 0.516667 66.24 0.56 66.3316C0.946667 67.1883 1.57333 67.915 2.36333 68.4266C2.55833 68.5483 2.76 68.6583 2.96833 68.7566C3.07 68.8066 3.165 68.8733 3.27167 68.92C3.51 69.0116 3.75333 69.0866 4.00167 69.1433C4.095 69.1683 4.18 69.2066 4.275 69.2266C4.62333 69.2966 4.97833 69.3333 5.335 69.335H41.335V66.6683H5.33333C5.155 66.6683 4.975 66.65 4.8 66.615C4.735 66.6016 4.675 66.575 4.61333 66.5583C4.50833 66.5316 4.405 66.5 4.30333 66.4616C4.21167 66.4183 4.12333 66.37 4.03667 66.3166C3.97667 66.2816 3.91333 66.255 3.855 66.2183C3.71167 66.12 3.57833 66.01 3.455 65.8866C3.33333 65.7633 3.22167 65.63 3.125 65.4866C3.075 65.41 3.03667 65.325 2.99167 65.2433C2.94667 65.1616 2.91 65.11 2.88 65.035C2.83667 64.9233 2.8 64.8083 2.77333 64.69C2.75833 64.6383 2.735 64.5883 2.725 64.535C2.565 63.7516 2.76667 62.9366 3.27167 62.3166C3.77667 61.6966 4.53333 61.3366 5.335 61.3366H9.335C10.0717 61.3366 10.6683 60.74 10.6683 60.0033V13.3333H57.335V10.6666H10.6667V3.99996C10.6667 3.26329 10.07 2.66663 9.33333 2.66663H5.33333C2.38833 2.66663 0 5.05329 0 7.99996V64C0 64.3583 0.0366667 64.715 0.108333 65.0666C0.126667 65.15 0.161667 65.2283 0.183333 65.3116ZM2.66667 7.99996C2.66667 6.52663 3.86 5.33329 5.33333 5.33329H8V58.6666H5.33333C4.39667 58.665 3.47667 58.9116 2.66667 59.3816V7.99996Z"
            fill="#CFA77F"
          />
          <path
            d="M36.2851 30.2233L33.4418 26.6667H45.3335V24H30.6668C30.2718 24.0017 29.8985 24.1783 29.6468 24.4833C29.6468 24.4917 29.6318 24.4917 29.6268 24.5L18.9601 37.8333C18.8901 37.9233 18.8318 38.0217 18.7868 38.1267C18.7868 38.135 18.7768 38.1433 18.7718 38.1517C18.7135 38.2983 18.6818 38.4533 18.6785 38.6117C18.6785 38.6317 18.6685 38.6467 18.6685 38.6667V54.6667C18.6685 55.4033 19.2651 56 20.0018 56H54.6685V53.3333H42.6685V40H61.3351V48H64.0018V38.6667C64.0018 38.6483 63.9918 38.6317 63.9918 38.6117C63.9885 38.455 63.9568 38.2983 63.8985 38.1533C63.8985 38.1417 63.8851 38.1333 63.8818 38.1233C63.8368 38.02 63.7801 37.9233 63.7101 37.835L59.7101 32.8283L57.6285 34.4917L59.8951 37.3317H41.9785L36.2885 30.2217L36.2851 30.2233ZM30.6668 27.4667L35.9285 34.0433L38.5601 37.3333H22.7768L30.6685 27.4667H30.6668ZM21.3335 40H40.0001V53.3333H36.0001V44C36.0001 43.2633 35.4035 42.6667 34.6668 42.6667H26.6668C25.9301 42.6667 25.3335 43.2633 25.3335 44V53.3333H21.3335V40ZM28.0001 53.3333V45.3333H33.3335V53.3333H28.0001Z"
            fill="#CFA77F"
          />
          <path
            d="M49.3333 42.6666C48.5967 42.6666 48 43.2633 48 44V49.3333C48 50.07 48.5967 50.6666 49.3333 50.6666H54.6667C55.4033 50.6666 56 50.07 56 49.3333V44C56 43.2633 55.4033 42.6666 54.6667 42.6666H49.3333ZM53.3333 48H50.6667V45.3333H53.3333V48Z"
            fill="#CFA77F"
          />
          <path
            d="M79.1766 36.1C78.6782 35.8934 78.1049 36.0084 77.7232 36.39L36.3899 77.7234C36.0099 78.105 35.8949 78.6784 36.0999 79.1767C36.3066 79.675 36.7932 80 37.3316 80H78.6649C79.4016 80 79.9982 79.4034 79.9982 78.6667V37.3334C79.9982 36.7934 79.6732 36.3067 79.1749 36.1H79.1766ZM77.3332 77.3334H40.5516L77.3332 40.5517V77.3334Z"
            fill="#CFA77F"
          />
          <path
            d="M56.1014 71.1767C56.3081 71.675 56.7948 72 57.3331 72H70.6664C71.4031 72 71.9998 71.4033 71.9998 70.6667V57.3333C71.9998 56.7933 71.6748 56.3083 71.1764 56.1017C70.6781 55.895 70.1048 56.01 69.7231 56.39L56.3898 69.7233C56.0081 70.105 55.8948 70.6783 56.1014 71.1767ZM69.3331 60.5517V69.3333H60.5514L69.3331 60.5517Z"
            fill="#CFA77F"
          />
          <path
            d="M74.2766 0.390029C73.7566 -0.131637 72.9116 -0.131637 72.3916 0.390029L48.3916 24.39C48.2449 24.5367 48.1349 24.715 48.0699 24.91L46.7366 28.91C46.5766 29.39 46.7016 29.9167 47.0583 30.2734L47.4483 30.665L44.3916 33.7217L46.2766 35.6067L49.3333 32.55L49.7233 32.94C49.9733 33.19 50.3133 33.33 50.6666 33.3317C50.8099 33.3317 50.9516 33.3084 51.0883 33.2634L55.0883 31.93C55.2849 31.8634 55.4633 31.7534 55.6099 31.6067L79.6099 7.60836C80.1299 7.08836 80.1299 6.24336 79.6099 5.72336L74.2766 0.390029ZM51.8849 24.6667L57.3333 19.2184L60.7816 22.6667L55.3333 28.115L51.8849 24.6667ZM51.0283 30.475L49.5266 28.9734L50.2499 26.8017L53.1999 29.7517L51.0283 30.475ZM62.6666 20.7817L59.2183 17.3334L73.3333 3.21836L76.7816 6.6667L62.6666 20.7817Z"
            fill="#CFA77F"
          />
          <path
            d="M13.3335 56V60C13.3335 60.7367 13.9302 61.3333 14.6668 61.3333H18.6668V58.6667H16.0002V56H13.3335Z"
            fill="#CFA77F"
          />
          <path
            d="M18.6668 16H14.6668C13.9302 16 13.3335 16.5967 13.3335 17.3333V21.3333H16.0002V18.6667H18.6668V16Z"
            fill="#CFA77F"
          />
        </g>
        <defs>
          <clipPath id="clip0_84_856">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Brochure",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 77 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_84_868)">
          <path
            d="M75.4921 6.53873H70.2926V1.51013C70.2926 1.05426 70.086 0.622493 69.7331 0.335317C69.3782 0.0481401 68.915 -0.0623124 68.4698 0.0340826L38.4619 6.50459L8.53016 0.0340826C8.085 -0.0623124 7.61979 0.0481401 7.26487 0.335317C6.91195 0.622493 6.70542 1.05225 6.70542 1.51013V6.54074H1.50792C0.675755 6.54074 0 7.21751 0 8.05093V60.4918C0 61.3252 0.67375 62.002 1.50792 62.002H75.4941C76.3262 62.002 77.002 61.3272 77.002 60.4918V8.04892C77.002 7.2155 76.3283 6.53873 75.4941 6.53873H75.4921ZM9.71924 3.37979L36.958 9.26791L36.9921 58.6221L9.71924 52.734V3.37979ZM3.01383 9.5571H6.70542V53.951C6.70542 54.6619 7.2007 55.2764 7.89451 55.425L24.3593 58.9796H3.01383V9.5571ZM73.9862 58.9816H52.6407L69.1055 55.427C69.7993 55.2764 70.2946 54.6639 70.2946 53.951V37.602C70.2946 36.7686 69.6208 36.0918 68.7867 36.0918C67.9525 36.0918 67.2808 36.7666 67.2808 37.602V52.732L40.0059 58.6201L39.9698 9.2659L67.2808 3.37778V24.0585C67.2808 24.8919 67.9545 25.5667 68.7867 25.5667C69.6188 25.5667 70.2946 24.8899 70.2946 24.0585V9.5571H73.9862V58.9816Z"
            fill="#CFA77F"
          />
          <path
            d="M70.2925 30.8051C70.2925 31.6365 69.6187 32.3113 68.7886 32.3113C67.9584 32.3113 67.2847 31.6365 67.2847 30.8051C67.2847 29.9737 67.9584 29.299 68.7886 29.299C69.6187 29.299 70.2925 29.9737 70.2925 30.8051Z"
            fill="#CFA77F"
          />
          <path
            d="M14.6564 22.9162L31.4741 26.5531C32.3985 26.7519 33.2988 26.023 33.2988 25.0771V17.5322C33.2988 16.8213 32.8035 16.2067 32.1097 16.0581L15.292 12.4232C14.8469 12.3268 14.3817 12.4373 14.0287 12.7245C13.6738 13.0096 13.4673 13.4434 13.4673 13.8993V21.4442C13.4673 22.1551 13.9626 22.7696 14.6564 22.9182V22.9162ZM16.4811 15.7649L30.285 18.7492V23.2074L16.4811 20.2232V15.7649Z"
            fill="#CFA77F"
          />
          <path
            d="M14.6563 30.4616L31.474 34.0965C32.2901 34.2732 33.1103 33.729 33.2707 32.9096C33.4271 32.1144 32.8997 31.3171 32.1097 31.1464L15.292 27.5115C14.4799 27.3368 13.6778 27.8529 13.5013 28.6683C13.3249 29.4816 13.8422 30.2849 14.6563 30.4616Z"
            fill="#CFA77F"
          />
          <path
            d="M32.1097 38.6936L15.292 35.0587C14.4799 34.882 13.6778 35.4001 13.5013 36.2155C13.3249 37.0308 13.8422 37.8321 14.6563 38.0088L31.474 41.6437C32.2901 41.8184 33.1103 41.2762 33.2707 40.4569C33.4271 39.6616 32.8997 38.8643 32.1097 38.6936Z"
            fill="#CFA77F"
          />
          <path
            d="M32.1097 46.2388L15.292 42.6039C14.4799 42.4272 13.6778 42.9453 13.5013 43.7607C13.3249 44.576 13.8422 45.3773 14.6563 45.554L31.474 49.1909C32.2901 49.3676 33.1103 48.8214 33.2707 48.004C33.4271 47.2088 32.8997 46.4115 32.1097 46.2408V46.2388Z"
            fill="#CFA77F"
          />
          <path
            d="M61.8597 12.4193L45.044 16.0542C44.2519 16.2249 43.7286 17.0221 43.883 17.8174C44.0414 18.6367 44.8655 19.179 45.6796 19.0042L62.4953 15.3693C63.3094 15.1926 63.8268 14.3913 63.6503 13.576C63.4759 12.7627 62.6718 12.2445 61.8597 12.4193Z"
            fill="#CFA77F"
          />
          <path
            d="M61.8597 19.9665L45.044 23.6034C44.2519 23.7741 43.7286 24.5713 43.883 25.3666C44.0414 26.1839 44.8655 26.7302 45.6796 26.5534L62.4953 22.9165C63.3094 22.7398 63.8268 21.9365 63.6503 21.1232C63.4759 20.3079 62.6718 19.7897 61.8597 19.9665Z"
            fill="#CFA77F"
          />
          <path
            d="M63.125 27.8129C62.7701 27.5257 62.3049 27.4152 61.8597 27.5116L45.0441 31.1465C44.3503 31.2971 43.855 31.9116 43.855 32.6226V47.7124C43.855 48.6583 44.7553 49.3872 45.6797 49.1884L62.4954 45.5515C63.1892 45.4009 63.6845 44.7884 63.6845 44.0775V28.9877C63.6845 28.5318 63.4779 28.1 63.125 27.8129ZM60.6707 42.8605L46.8688 45.8447V33.8416L60.6707 30.8573V42.8605Z"
            fill="#CFA77F"
          />
        </g>
        <defs>
          <clipPath id="clip0_84_868">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

// Testimonials data for homepage section
export const testimonials = [
  {
    name: "Full Name",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    avatar: "/HomeImg/testimonials.png",
    rating: 5,
  },
  {
    name: "Full Name",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    avatar: "/HomeImg/testimonials.png",
    rating: 4,
  },
  {
    name: "Full Name",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    avatar: "/HomeImg/testimonials.png",
    rating: 3,
  },
  {
    name: "Full Name",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    avatar: "/HomeImg/testimonials.png",
    rating: 5,
  },
];

export const blogs = [
  {
    id: 1,
    slug: "why-nris-prefer-buying-luxury-flats-in-cochin",
    category: "Why NRIs Prefer Buying Luxury Flats in Cochin?",
    title:
      "For NRIs, buying a luxury home in Kerala is about more than comfort — it’s about belonging. Cochin has emerged as the natural choice for NRIs returning home. The city offers international-grade infrastructure, proximity to the airport, excellent schools, and a cosmopolitan culture that feels familiar. Projects like Sobha Marina One offer exactly what overseas buyers look for — high-end amenities, world-class security, and professional property management. Plus, being RERA-approved ensures complete transparency and trust. It’s where global quality meets local warmth — where your Kerala roots and modern lifestyle blend perfectly. At Shantira Realty, we understand the NRI mindset — trust, convenience, and legacy. Let’s make your homecoming a luxurious one. ",
    image: "/blogImg/BLOG1.png",
    date_time: "20-12-2025 04:02 PM",
  },
  {
    id: 2,
    slug: "top-5-prime-locations-in-cochin-for-luxury-apartments",
    category: "Top 5 Prime Locations in Cochin for Luxury Apartments",
    title:
      "When it comes to luxury living, location is everything — and Cochin offers some of the most desirable addresses in South India. Here are our top five picks: Marine Drive — The heart of Cochin’s premium life, home to Sobha Marina One. Panampilly Nagar — Elegant and peaceful, perfect for families who love city convenience. Kakkanad — The IT hub of Cochin, modern and fast-growing. Edappally — A dynamic blend of shopping and connectivity. Thevara — Calm, green, and residential. Among these, Marine Drive remains the crown jewel — a location that commands respect, ensures appreciation, and delivers unmatched lifestyle value. At Shantira Realty, we specialize in helping you find homes that fit your aspirations — whether it’s an urban apartment or a serene waterfront retreat.",
    image: "/blogImg/BLOG2.png",
    date_time: "22-12-2025 11:45 AM",
  },
  {
    id: 3,
    slug: "investing-in-cochins-luxury-apartments-smart-or-sentimental",
    category: "Investing in Cochin’s Luxury Apartments — Smart or Sentimental?",
    title:
      "For many, buying a home in Cochin is emotional — a way of reconnecting with roots. But for smart investors, it’s also one of the most rewarding decisions they can make. Cochin’s luxury segment has seen consistent growth thanks to its robust infrastructure, expanding IT sector, and stable demand from NRIs. Unlike speculative markets, Cochin offers genuine end-user value and long-term appreciation. Projects like Sobha Marina One at Marine Drive are redefining investment benchmarks. Backed by reputed developers and RERA approvals, it’s not just a luxury address — it’s an asset that grows in worth and prestige over time. Whether you’re buying for yourself or as an investment, Cochin offers the perfect blend of emotional satisfaction and financial sense. With Shantira Realty, you don’t just buy a property — you make an informed, strategic move toward a better future.",
    image: "/blogImg/BLOG3.png",
    date_time: "22-12-2025 12:10 PM",
  },
  {
    id: 4,
    slug: "cochin-keralas-new-face-of-luxury-living",
    category: "Cochin — Kerala’s New Face of Luxury Living",
    title:
      "Cochin is no longer just a port city. It’s Kerala’s rising face of luxury living — where the skyline meets the backwaters, and tradition blends seamlessly with modern comfort. Over the last decade, Cochin has evolved into a real estate powerhouse. Its infrastructure growth, cultural diversity, and premium lifestyle options have made it a preferred destination for NRIs, business leaders, and modern professionals. Areas like Marine Drive, Panampilly Nagar, Kakkanad, and Edappally have transformed into hubs of refined living. Among them, Marine Drive stands apart — offering waterfront serenity and proximity to every major landmark in the city. Developers like Sobha are leading this transformation with ultra-luxury projects such as Sobha Marina One, one of Kerala’s largest and most exclusive waterfront communities. With 16.7 acres of prime land and views that stretch across the backwaters, it defines a new standard for high-end living. Cochin is no longer just a great place to live — it’s a statement of lifestyle and investment. Shantira Realty is proud to bring you closer to this transformation.",
    image: "/blogImg/blog4.jpg",
    date_time: "22-12-2025 12:36 PM",
  },
  {
    id: 5,
    slug: "what-makes-a-flat-truly-luxury-in-cochin",
    category: "What Makes a Flat Truly “Luxury” in Cochin",
    title:
      "Luxury is not defined by imported marble or branded taps. It’s defined by how a space makes you feel — calm, connected, and comfortable. A truly luxurious flat in Cochin focuses on four essentials: space, privacy, view, and craftsmanship. These are not visible at first glance, but you feel them every day you live there. Projects like Sobha Marina One at Marine Drive bring all these elements together. Every apartment is thoughtfully planned — large windows for natural light, premium finishes, and an uninterrupted view of the water. It’s not about excess; it’s about excellence. Sobha’s attention to design detail, quality construction, and timeless architecture make their homes stand apart. At Shantira Realty, we help you find homes that reflect more than status — homes that reflect peace and perfection. Because luxury isn’t just what you see, it’s what you experience.",
    image: "/blogImg/blog7.jpg",
    date_time: "22-12-2025 12:46 PM",
  },
  {
    id: 6,
    slug: "your-luxury-apartment-checklist-for-cochin",
    category: "Your Luxury Apartment Checklist for Cochin",
    title:
      "Choosing the right luxury apartment can be overwhelming — but it doesn’t have to be. Here’s a simple checklist before you finalize: Location — Choose central, accessible areas like Marine Drive or Panampilly Nagar. Builder Reputation — Look for names like Sobha and Puravankara. RERA Approval — Always ensure the project is compliant. Design & Layout — Prioritize ventilation, privacy, and view. Amenities — Seek a balance between luxury and practicality. Investment Value — Think long-term appreciation and rental demand. A property like Sobha Marina One checks every box effortlessly — from craftsmanship to connectivity. At Shantira Realty, we don’t just sell homes. We simplify luxury buying with expertise and clarity — ensuring your investment stands the test of time.",
    image: "/blogImg/blog7.jpg",
    date_time: "22-12-2025 5:46 PM",
  },
  {
    id: 7,
    slug: "your-luxury-apartment-checklist-for-cochin",
    category: "How Lifestyle Has Redefined Luxury Homes in Kerala",
    title:
      "Luxury homes in Kerala are no longer about chandeliers and imported flooring — they’re about balance, wellness, and smarter living. Today’s luxury buyer seeks serenity, not show. They want green spaces, fitness zones, natural ventilation, and community living. Sobha Marina One embodies this new philosophy. With open-air decks, landscaped gardens, and panoramic views of the backwaters, it offers a lifestyle that nourishes the soul. Luxury has shifted from being material to being mindful. It’s about how your space supports your peace of mind. At Shantira Realty, we believe true luxury lies in thoughtful design and timeless comfort — where every day feels like a retreat.",
    image: "/blogImg/blog7.jpg",
    date_time: "22-12-2025 5:48 PM",
  },
  {
    id: 8,
    slug: "size-isnt-luxury-lifestyle-is",
    category: "Size Isn’t Luxury — Lifestyle Is",
    title:
      "The modern buyer knows — bigger doesn’t always mean better. A truly luxurious home is one that feels calm, balanced, and intelligently designed. At Sobha Marina One, luxury is redefined through smart architecture — maximizing space, light, and functionality while keeping an intimate sense of privacy. It’s not just the number of square feet that matters; it’s the feeling you get when you walk in — of peace, air, and light. At Shantira Realty, we guide our clients to look beyond the size chart. Because real luxury is about comfort, quality, and the life you live inside your home.",
    image: "/blogImg/blog7.jpg",
    date_time: "22-12-2025 5:49 PM",
  },
  {
    id: 9,
    slug: "buying-a-flat-in-cochin-faqs-simplified",
    category: "Buying a Flat in Cochin — FAQs Simplified",
    title:
      "Is now the right time to buy? Yes. Cochin’s real estate market is stable and growing, especially for luxury properties. How much GST applies? 5% for under-construction; none for ready-to-move apartments. What’s the registration cost? Around 8% (stamp duty + registration). Can NRIs buy property? Absolutely. It’s straightforward through Indian banking channels under FEMA. Which projects are most trusted? Sobha Marina One leads the list — RERA-approved, premium, and centrally located at Marine Drive. With Shantira Realty, you don’t just find a property — you find confidence.",
    image: "/blogImg/blog7.jpg",
    date_time: "22-12-2025 5:50 PM",
  },
  {
    id: 10,
    slug: "inside-sobha-marina-one-cochins-waterfront-landmark",
    category: "Inside Sobha Marina One — Cochin’s Waterfront Landmark",
    title:
      "Welcome to Sobha Marina One — Cochin’s most iconic luxury address on Marine Drive. Spread across 16.7 acres, this joint venture between Sobha Ltd. and Puravankara Ltd. brings together unmatched craftsmanship, panoramic views, and architectural elegance. With 12 towers and over 1,000 ultra-premium apartments, each home offers breathtaking backwater views, state-of-the-art amenities, and Sobha’s signature quality. From landscaped gardens to sky lounges, wellness zones to infinity pools — every detail is designed for refined living. This isn’t just a project. It’s a symbol of Cochin’s evolution — a lifestyle destination for those who believe luxury is a daily experience. Shantira Realty is proud to be an official channel partner for Sobha Marina One, connecting you to Kerala’s most prestigious waterfront community.",
    image: "/blogImg/blog7.jpg",
    date_time: "22-12-2025 5:55 PM",
  },
];

export const projectPageBottom = [
  {
    id: 1,
    title:
      "At Shantira Realty, we believe a home is more than just a property.",
    image: "/projectImg/bottomImg1.jpg",
  },
  {
    id: 2,
    title:
      "At Shantira Realty, we believe a home is more than just a property.",
    image: "/projectImg/bottomImg2.jpg",
  },
  {
    id: 3,
    title:
      "At Shantira Realty, we believe a home is more than just a property.",
    image: "/projectImg/bottomImg3.jpg",
  },
  {
    id: 4,
    title:
      "At Shantira Realty, we believe a home is more than just a property.",
    image: "/projectImg/bottomImg4.jpg",
  },
];

export const uSPs = [
  "USP / Details",
  "USP / Details",
  "USP / Details",
  "USP / Details",
];

export const faqs = [
  {
    question: "What is the starting price of SOBHA Atlantis?",
    answer: "The starting price of SOBHA Atlantis is INR 2.17 Crore* onwards.",
  },
  {
    question: "What is the starting price of SOBHA Atlantis?",
    answer:
      "Pricing varies by tower and configuration. Please contact our sales team for the latest details.",
  },
  {
    question: "What is the starting price of SOBHA Atlantis?",
    answer:
      "Exclusive launch offers and payment plans may be available for a limited period.",
  },
  {
    question: "What is the starting price of SOBHA Atlantis?",
    answer:
      "Taxes, registration, and other statutory charges are additional as applicable.",
  },
];
