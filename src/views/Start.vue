<template>
  <div class="bg">
      <svg class="planet" width="291" height="305" viewBox="0 0 291 305" fill="none" xmlns="http://www.w3.org/2000/svg">

          <circle cx="242.5" cy="242.5" r="242.5" fill="#9E4C4E"/>
          <path d="M293.814 259.228C217.265 243.247 275.84 365.144 349.354 315.846C286.417 337.151 237.209 271.476 293.814 259.228Z" fill="#173040"/>
          <path d="M334.009 41.5438C268.392 17.1341 336.949 115.441 389.15 91.9443C340.963 96.8853 289.514 40.9668 334.009 41.5438Z" fill="#173040"/>
          <path d="M160.858 299C139.358 319.5 155.358 346.5 186.358 338.5C160.858 330 149.358 326 160.858 299Z" fill="#173040"/>
          <path d="M431.502 306.877C461.098 309.439 470.761 279.579 444.254 261.624C454.749 286.37 459.357 297.64 431.502 306.877Z" fill="#173040"/>
          <path d="M137.003 54.1583C111.464 47.0106 85.8665 65.2808 99.9338 82.1941C104.281 63.6595 106.417 55.2495 137.003 54.1583Z" fill="#173040"/>
          <path d="M40.9543 173.784C12.9287 163.932 -3.86674 190.445 17.3331 214.436C8.05862 196.074 11.676 175.793 40.9543 173.784Z" fill="#173040"/>
          <path d="M36.681 270.242C24.843 261.874 23.5 287 41 284C28 283 25.6448 268.162 36.681 270.242Z" fill="#173040"/>
          <path d="M232.401 461.663C219.796 473.245 246.744 486.305 248.65 462.259C243.721 478.668 226.877 475.038 232.401 461.663Z" fill="#173040"/>
          <path d="M239.93 146.682C222.988 144.23 229.892 173.37 249.734 159.654C233.901 166.201 226.072 150.851 239.93 146.682Z" fill="#173040"/>
          <path d="M106.209 188.219C65.4459 229.552 152.321 283.508 158.645 193.364C142.619 254.229 88.2849 237.563 106.209 188.219Z" fill="#173040"/>
          <path d="M441.299 140.605C392.777 109.66 438.891 196.465 480.194 188.972C443.121 183.357 407.39 131.575 441.299 140.605Z" fill="#173040"/>
        <defs>
          <clipPath id="clip0">
            <rect width="291" height="305" fill="white"/>
          </clipPath>
        </defs>
      </svg>


      <div class="title">
        <h2>Beginne</h2><br>
        <h3>deine</h3><br>
        <h1>Reise</h1>
      </div>
      <p class="paragraph">Um deine Reise im Solarsystem zu starten, musst du deine Ortnungsdienste aktivieren.</p>
      <button id="startButton"><router-link to="/Walking">Start</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'start',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    transform: translateX(10%);
  }

  h3 {
    transform: translateX(25%);
  }

  .planet {
    position: fixed;
    top: -7px;
    right: 0;
    transform: rotate(-90deg);
  }

  .title {
  transform: rotate(-7.23deg);
  margin-top: 40%;
  margin-bottom: 40%;
  }

  .paragraph {
    text-align: center;
  }

</style>