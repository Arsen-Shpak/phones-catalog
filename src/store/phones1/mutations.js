export default {
    SET_PHONES_TO_STATE(state, phones) {
      state.phones = phones;
    },
    SET_CURRENT_PHONE(state, currentPhone) {
      const phoneWithNewKeys = {
        ...currentPhone,
        screen: "6.5” OLED",
        resolution: "2688x1242",
        processor: "Apple A12 Bionic",
        camera: "12 Mp + 12 Mp + 12 Mp (Triple)",
        zoom: "Optical, 2x",
        cell: "GSM, LTE, UMTS",
        description: [
          {
            title: "And then there was Pro",
            text: [
              "A transformative triple-camera system that adds tons of capability without complexity.",
              "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
            ],
          },
          {
            title: "Camera",
            text: [
              "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.",
            ],
          },
          {
            title:
              "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
            text: [
              "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.",
            ],
          },
        ],
        colorsAvailable: ["black", "green", "yellow", "white", "violet", "red"],
      };
      state.currentPhone = phoneWithNewKeys;
    },
};