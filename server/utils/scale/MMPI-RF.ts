export default {
  // Validity Scales
  VRINr: {
    type: 'pair',
    count: 0,
    items: {
      TF: {
        indices: [
          [17, 94],
          [24, 319],
          [25, 174],
          [29, 116],
          [35, 114],
          [40, 144],
          [44, 177],
          [47, 201],
          [55, 99],
          [67, 278],
          [71, 264],
          [79, 289],
          [93, 164],
          [108, 152],
          [123, 338],
          [146, 275],
          [158, 261],
          [158, 261],
          [166, 207],
          [175, 291],
          [252, 287],
          [299, 324],
          [318, 337],
        ],
        weight: 1,
      },
      FT: {
        indices: [
          [6, 136],
          [8, 323],
          [32, 257],
          [44, 177],
          [55, 171],
          [58, 180],
          [60, 327],
          [62, 74],
          [66, 223],
          [83, 105],
          [88, 265],
          [89, 232],
          [93, 164],
          [95, 144],
          [108, 152],
          [119, 303],
          [134, 293],
          [141, 266],
          [147, 276],
          [156, 205],
          [158, 228],
          [165, 317],
          [175, 291],
          [187, 331],
          [194, 233],
          [196, 245],
          [213, 260],
          [219, 267],
          [239, 302],
          [246, 282],
          [316, 329],
        ],
        weight: 1,
      },
    },
    bias: 0,
  },
  TRINr: {
    type: 'pair',
    count: 0,
    items: {
      TT: {
        indices: [
          [17, 44],
          [30, 217],
          [37, 322],
          [48, 182],
          [57, 67],
          [83, 120],
          [101, 189],
          [109, 278],
          [134, 248],
          [146, 293],
          [158, 202],
          [169, 282],
          [212, 264],
          [234, 261],
          [269, 314],
        ],
        weight: 1,
      },
      FF: {
        indices: [
          [4, 22],
          [44, 94],
          [59, 306],
          [73, 338],
          [83, 158],
          [108, 246],
          [119, 134],
          [147, 319],
          [178, 221],
          [201, 278],
          [261, 293],
        ],
        weight: -1,
      },
    },
    bias: 11,
  },
  Fr: {
    type: 'single',
    count: 32,
    items: {
      T: [14, 30, 46, 56, 67, 71, 74, 106, 117, 120, 139, 146, 164, 203, 218, 231, 240, 253, 264, 275, 277, 281, 294, 301, 310, 312, 332],
      F: [59, 83, 102, 174, 227],
    },
  },
  Fpr: {
    type: 'single',
    count: 21,
    items: {
      T: [40, 41, 79, 86, 124, 129, 150, 168, 178, 191, 208, 252, 255, 270, 314, 317],
      F: [7, 98, 157, 221, 283],
    },
  },
  Fs: {
    type: 'single',
    count: 16,
    items: {
      T: [15, 33, 43, 122, 133, 137, 159, 170, 199, 216, 225, 308],
      F: [2, 78, 186, 272],
    },
  },
  FBSr: {
    type: 'single',
    count: 30,
    items: {
      T: [6, 15, 43, 76, 77, 79, 93, 101, 133, 187, 200, 210, 230, 247, 261, 315],
      F: [36, 45, 55, 88, 99, 141, 156, 162, 171, 189, 193, 234, 265, 290],
    },
  },
  Lr: {
    type: 'single',
    count: 14,
    items: {
      T: [61, 182, 268],
      F: [16, 45, 70, 95, 127, 154, 183, 211, 241, 298, 325],
    },
  },
  Kr: {
    type: 'single',
    count: 14,
    items: {
      T: [80, 202],
      F: [10, 23, 36, 44, 72, 89, 99, 155, 171, 187, 322, 338],
    },
  },
  // HO Scales
  EID: {
    type: 'single',
    count: 41,
    items: {
      T: [22, 30, 35, 48, 89, 91, 114, 119, 120, 158, 167, 169, 172, 187, 204, 228, 232, 250, 261, 288, 322, 331, 335],
      F: [4, 17, 25, 37, 57, 64, 73, 83, 102, 105, 140, 202, 217, 222, 234, 246, 282, 293],
    },
  },
  THD: {
    type: 'single',
    count: 26,
    items: {
      T: [12, 14, 46, 71, 92, 110, 122, 129, 139, 150, 168, 179, 199, 203, 216, 252, 264, 270, 273, 287, 294, 311, 330, 332],
      F: [85, 212],
    },
  },
  BXD: {
    type: 'single',
    count: 23,
    items: {
      T: [21, 49, 66, 84, 96, 107, 131, 156, 193, 205, 223, 226, 231, 248, 253, 266, 292, 312, 316, 329],
      F: [61, 190, 237],
    },
  },
  // RC Scales
  RCd: {
    type: 'single',
    count: 24,
    items: {
      T: [6, 22, 30, 48, 62, 74, 89, 117, 130, 144, 158, 172, 187, 204, 232, 247, 261, 274, 288, 299, 315, 331],
      F: [105, 217],
    },
  },
  RC1: {
    type: 'single',
    count: 27,
    items: {
      T: [15, 43, 76, 101, 137, 176, 230, 242, 277, 301, 328],
      F: [2, 28, 52, 65, 69, 88, 113, 125, 162, 174, 189, 227, 254, 265, 290, 313],
    },
  },
  RC2: {
    type: 'single',
    count: 17,
    items: {
      T: [],
      F: [4, 17, 25, 53, 64, 83, 102, 140, 160, 182, 195, 202, 222, 246, 282, 302, 323],
    },
  },
  RC3: {
    type: 'single',
    count: 15,
    items: {
      T: [10, 36, 55, 87, 99, 121, 142, 171, 185, 213, 238, 260, 279, 304, 326],
      F: [],
    },
  },
  RC4: {
    type: 'single',
    count: 22,
    items: {
      T: [5, 21, 49, 66, 96, 141, 156, 173, 205, 218, 223, 253, 266, 297, 312, 329],
      F: [19, 38, 80, 126, 190, 237],
    },
  },
  RC6: {
    type: 'single',
    count: 17,
    items: {
      T: [14, 34, 71, 92, 110, 129, 150, 168, 194, 233, 252, 264, 270, 287, 310, 332],
      F: [212],
    },
  },
  RC7: {
    type: 'single',
    count: 24,
    items: {
      T: [9, 23, 35, 51, 63, 77, 91, 112, 119, 132, 146, 149, 161, 206, 228, 235, 250, 263, 275, 289, 303, 318, 322, 335],
      F: [],
    },
  },
  RC8: {
    type: 'single',
    count: 18,
    items: {
      T: [12, 32, 46, 106, 122, 139, 159, 179, 199, 203, 216, 240, 257, 273, 294, 311, 330],
      F: [85],
    },
  },
  RC9: {
    type: 'single',
    count: 28,
    items: {
      T: [13, 26, 39, 47, 72, 84, 97, 107, 118, 131, 143, 155, 166, 181, 193, 207, 219, 231, 244, 248, 256, 267, 292, 305, 316, 327, 337],
      F: [61],
    },
  },
  // SOM Scales
  MLS: {
    type: 'single',
    count: 8,
    items: {
      T: [18],
      F: [4, 25, 163, 174, 202, 262, 333],
    },
  },
  GIC: {
    type: 'single',
    count: 5,
    items: {
      T: [43, 76, 210, 230],
      F: [2],
    },
  },
  HPC: {
    type: 'single',
    count: 6,
    items: {
      T: [101, 176, 328],
      F: [88, 189, 265],
    },
  },
  NUC: {
    type: 'single',
    count: 10,
    items: {
      T: [122, 277, 301],
      F: [69, 113, 125, 162, 186, 227, 313],
    },
  },
  COG: {
    type: 'single',
    count: 10,
    items: {
      T: [31, 136, 159, 200, 240, 257, 280, 306],
      F: [59, 102],
    },
  },
  // Internalize Scales
  SUI: {
    type: 'single',
    count: 5,
    items: {
      T: [93, 120, 164, 151, 334],
      F: [],
    },
  },
  HLP: {
    type: 'single',
    count: 5,
    items: {
      T: [135, 169, 214, 336],
      F: [282],
    },
  },
  SFD: {
    type: 'single',
    count: 4,
    items: {
      T: [48, 89, 232, 288],
      F: [],
    },
  },
  NFC: {
    type: 'single',
    count: 9,
    items: {
      T: [27, 68, 108, 152, 198, 229, 271, 274, 324],
      F: [],
    },
  },
  STW: {
    type: 'single',
    count: 7,
    items: {
      T: [29, 123, 167, 224, 309],
      F: [73, 234],
    },
  },
  AXY: {
    type: 'single',
    count: 5,
    items: {
      T: [79, 146, 228, 275, 289],
      F: [],
    },
  },
  ANP: {
    type: 'single',
    count: 7,
    items: {
      T: [119, 155, 248, 303, 318],
      F: [134, 293],
    },
  },
  BRF: {
    type: 'single',
    count: 9,
    items: {
      T: [20, 56, 90, 165, 208, 243, 284, 317],
      F: [128],
    },
  },
  MSF: {
    type: 'single',
    count: 9,
    items: {
      T: [54, 151, 258, 320],
      F: [82, 115, 184, 220, 286],
    },
  },
  // Externalize Scales
  JCP: {
    type: 'single',
    count: 6,
    items: {
      T: [21, 66, 96, 205, 223, 253],
      F: [],
    },
  },
  SUB: {
    type: 'single',
    count: 7,
    items: {
      T: [49, 86, 141, 192, 266, 297],
      F: [237],
    },
  },
  AGG: {
    type: 'single',
    count: 9,
    items: {
      T: [23, 26, 41, 84, 231, 312, 316, 329, 337],
      F: [],
    },
  },
  ACT: {
    type: 'single',
    count: 8,
    items: {
      T: [72, 81, 166, 181, 207, 219, 267, 285],
      F: [],
    },
  },
  // INPER Scales
  FML: {
    type: 'single',
    count: 10,
    items: {
      T: [58, 103, 138, 180, 215, 281, 307],
      F: [19, 80, 269],
    },
  },
  IPP: {
    type: 'single',
    count: 10,
    items: {
      T: [24],
      F: [60, 104, 147, 197, 239, 276, 302, 321, 327],
    },
  },
  SAV: {
    type: 'single',
    count: 10,
    items: {
      T: [278],
      F: [11, 17, 47, 57, 94, 109, 153, 201, 222],
    },
  },
  SHY: {
    type: 'single',
    count: 7,
    items: {
      T: [35, 44, 91, 114, 177, 249],
      F: [295],
    },
  },
  DSF: {
    type: 'single',
    count: 6,
    items: {
      T: [67, 124, 175, 236, 291],
      F: [8],
    },
  },
  // Interest Scales
  AES: {
    type: 'single',
    count: 7,
    items: {
      T: [3, 50, 100, 145, 196, 245, 296],
      F: [],
    },
  },
  MEC: {
    type: 'single',
    count: 9,
    items: {
      T: [1, 42, 75, 111, 148, 188, 226, 259, 300],
      F: [],
    },
  },
  // PSY5 Scales
  AGGRr: {
    type: 'single',
    count: 18,
    items: {
      T: [26, 39, 84, 104, 147, 182, 197, 231, 239, 256, 276, 302, 316, 321, 327, 329],
      F: [24, 319],
    },
  },
  PSYCr: {
    type: 'single',
    count: 26,
    items: {
      T: [12, 14, 34, 40, 46, 71, 92, 129, 137, 139, 150, 168, 179, 199, 203, 216, 240, 252, 264, 270, 287, 294, 311, 330, 332],
      F: [85],
    },
  },
  DISCr: {
    type: 'single',
    count: 20,
    items: {
      T: [21, 42, 49, 66, 75, 107, 115, 131, 156, 193, 205, 223, 226, 253, 292, 297, 300],
      F: [61, 190, 237],
    },
  },
  NEGEr: {
    type: 'single',
    count: 20,
    items: {
      T: [9, 23, 29, 56, 77, 116, 123, 146, 155, 167, 206, 209, 263, 277, 309],
      F: [37, 73, 134, 234, 293],
    },
  },
  INTRr: {
    type: 'single',
    count: 20,
    items: {
      T: [],
      F: [4, 11, 17, 47, 53, 57, 64, 102, 109, 118, 140, 153, 166, 181, 195, 201, 207, 222, 246, 323],
    },
  },
}
