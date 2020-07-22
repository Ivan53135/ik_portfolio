$(function () {
    /* Параллакс от движения мыши */
    if ($(window).width() > 960)
    {
        $("body").parallax({
          elements: [
            {
              selector: ".ellips",
              properties: {
                x: {
                  right: {
                    initial: 0,
                    multiplier: 0.002,
                    unit: "%",
                    invert: false,
                  },
                },
                y: {
                  top: {
                    initial: -10,
                    multiplier: 0.002,
                    unit: "%",
                    invert: true,
                  },
                },
              },
            },
            {
              selector: ".lines-dot",
              properties: {
                x: {
                  left: {
                    initial: -14,
                    multiplier: 0.0009,
                    unit: "%",
                    invert: false,
                  },
                },
                y: {
                  bottom: {
                    initial: -10,
                    multiplier: 0.009,
                    unit: "%",
                    invert: true,
                  },
                },
              },
            },
            {
              selector: ".plus-yellow",
              properties: {
                x: {
                  left: {
                    initial: 30,
                    multiplier: 0.01,
                    unit: "%",
                    invert: false,
                  },
                },
                y: {
                  top: {
                    initial: -40,
                    multiplier: 0.01,
                    unit: "%",
                    invert: true,
                  },
                },
              },
            },
            {
              selector: ".mousemove-slider",
              properties: {
                x: {
                  left: {
                    initial: 9,
                    multiplier: 0.0003,
                    unit: "%",
                    invert: false,
                  },
                },
              },
            },
            {
              selector: ".plus-dots",
              properties: {
                x: {
                  left: {
                    initial: 70,
                    multiplier: 0.005,
                    unit: "%",
                    invert: false,
                  },
                },
                y: {
                  top: {
                    initial: -80,
                    multiplier: 0.005,
                    unit: "%",
                    invert: true,
                  },
                },
              },
            },
            {
              selector: ".line-wave",
              properties: {
                x: {
                  left: {
                    initial: -20,
                    multiplier: 0.002,
                    unit: "%",
                    invert: false,
                  },
                },
                y: {
                  top: {
                    initial: 10,
                    multiplier: 0.0009,
                    unit: "%",
                    invert: true,
                  },
                },
              },
            },
            {
              selector: ".triangles",
              properties: {
                x: {
                  left: {
                    initial: 50,
                    multiplier: 0.005,
                    unit: "%",
                    invert: false,
                  },
                },
                y: {
                  top: {
                    initial: -5,
                    multiplier: 0.005,
                    unit: "%",
                    invert: true,
                  },
                },
              },
            },
          ],
        });
    };
});