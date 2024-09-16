const R16 = [
    [0x0041, 0x005a, 1],
    [0x0061, 0x007a, 1],
    [0x00aa, 0x00b5, 11],
    [0x00ba, 0x00c0, 6],
    [0x00c1, 0x00d6, 1],
    [0x00d8, 0x00f6, 1],
    [0x00f8, 0x02c1, 1],
    [0x02c6, 0x02d1, 1],
    [0x02e0, 0x02e4, 1],
    [0x02ec, 0x02ee, 2],
    [0x0370, 0x0374, 1],
    [0x0376, 0x0377, 1],
    [0x037a, 0x037d, 1],
    [0x037f, 0x0386, 7],
    [0x0388, 0x038a, 1],
    [0x038c, 0x038e, 2],
    [0x038f, 0x03a1, 1],
    [0x03a3, 0x03f5, 1],
    [0x03f7, 0x0481, 1],
    [0x048a, 0x052f, 1],
    [0x0531, 0x0556, 1],
    [0x0559, 0x0560, 7],
    [0x0561, 0x0588, 1],
    [0x05d0, 0x05ea, 1],
    [0x05ef, 0x05f2, 1],
    [0x0620, 0x064a, 1],
    [0x066e, 0x066f, 1],
    [0x0671, 0x06d3, 1],
    [0x06d5, 0x06e5, 16],
    [0x06e6, 0x06ee, 8],
    [0x06ef, 0x06fa, 11],
    [0x06fb, 0x06fc, 1],
    [0x06ff, 0x0710, 17],
    [0x0712, 0x072f, 1],
    [0x074d, 0x07a5, 1],
    [0x07b1, 0x07ca, 25],
    [0x07cb, 0x07ea, 1],
    [0x07f4, 0x07f5, 1],
    [0x07fa, 0x0800, 6],
    [0x0801, 0x0815, 1],
    [0x081a, 0x0824, 10],
    [0x0828, 0x0840, 24],
    [0x0841, 0x0858, 1],
    [0x0860, 0x086a, 1],
    [0x0870, 0x0887, 1],
    [0x0889, 0x088e, 1],
    [0x08a0, 0x08c9, 1],
    [0x0904, 0x0939, 1],
    [0x093d, 0x0950, 19],
    [0x0958, 0x0961, 1],
    [0x0971, 0x0980, 1],
    [0x0985, 0x098c, 1],
    [0x098f, 0x0990, 1],
    [0x0993, 0x09a8, 1],
    [0x09aa, 0x09b0, 1],
    [0x09b2, 0x09b6, 4],
    [0x09b7, 0x09b9, 1],
    [0x09bd, 0x09ce, 17],
    [0x09dc, 0x09dd, 1],
    [0x09df, 0x09e1, 1],
    [0x09f0, 0x09f1, 1],
    [0x09fc, 0x0a05, 9],
    [0x0a06, 0x0a0a, 1],
    [0x0a0f, 0x0a10, 1],
    [0x0a13, 0x0a28, 1],
    [0x0a2a, 0x0a30, 1],
    [0x0a32, 0x0a33, 1],
    [0x0a35, 0x0a36, 1],
    [0x0a38, 0x0a39, 1],
    [0x0a59, 0x0a5c, 1],
    [0x0a5e, 0x0a72, 20],
    [0x0a73, 0x0a74, 1],
    [0x0a85, 0x0a8d, 1],
    [0x0a8f, 0x0a91, 1],
    [0x0a93, 0x0aa8, 1],
    [0x0aaa, 0x0ab0, 1],
    [0x0ab2, 0x0ab3, 1],
    [0x0ab5, 0x0ab9, 1],
    [0x0abd, 0x0ad0, 19],
    [0x0ae0, 0x0ae1, 1],
    [0x0af9, 0x0b05, 12],
    [0x0b06, 0x0b0c, 1],
    [0x0b0f, 0x0b10, 1],
    [0x0b13, 0x0b28, 1],
    [0x0b2a, 0x0b30, 1],
    [0x0b32, 0x0b33, 1],
    [0x0b35, 0x0b39, 1],
    [0x0b3d, 0x0b5c, 31],
    [0x0b5d, 0x0b5f, 2],
    [0x0b60, 0x0b61, 1],
    [0x0b71, 0x0b83, 18],
    [0x0b85, 0x0b8a, 1],
    [0x0b8e, 0x0b90, 1],
    [0x0b92, 0x0b95, 1],
    [0x0b99, 0x0b9a, 1],
    [0x0b9c, 0x0b9e, 2],
    [0x0b9f, 0x0ba3, 4],
    [0x0ba4, 0x0ba8, 4],
    [0x0ba9, 0x0baa, 1],
    [0x0bae, 0x0bb9, 1],
    [0x0bd0, 0x0c05, 53],
    [0x0c06, 0x0c0c, 1],
    [0x0c0e, 0x0c10, 1],
    [0x0c12, 0x0c28, 1],
    [0x0c2a, 0x0c39, 1],
    [0x0c3d, 0x0c58, 27],
    [0x0c59, 0x0c5a, 1],
    [0x0c5d, 0x0c60, 3],
    [0x0c61, 0x0c80, 31],
    [0x0c85, 0x0c8c, 1],
    [0x0c8e, 0x0c90, 1],
    [0x0c92, 0x0ca8, 1],
    [0x0caa, 0x0cb3, 1],
    [0x0cb5, 0x0cb9, 1],
    [0x0cbd, 0x0cdd, 32],
    [0x0cde, 0x0ce0, 2],
    [0x0ce1, 0x0cf1, 16],
    [0x0cf2, 0x0d04, 18],
    [0x0d05, 0x0d0c, 1],
    [0x0d0e, 0x0d10, 1],
    [0x0d12, 0x0d3a, 1],
    [0x0d3d, 0x0d4e, 17],
    [0x0d54, 0x0d56, 1],
    [0x0d5f, 0x0d61, 1],
    [0x0d7a, 0x0d7f, 1],
    [0x0d85, 0x0d96, 1],
    [0x0d9a, 0x0db1, 1],
    [0x0db3, 0x0dbb, 1],
    [0x0dbd, 0x0dc0, 3],
    [0x0dc1, 0x0dc6, 1],
    [0x0e01, 0x0e30, 1],
    [0x0e32, 0x0e33, 1],
    [0x0e40, 0x0e46, 1],
    [0x0e81, 0x0e82, 1],
    [0x0e84, 0x0e86, 2],
    [0x0e87, 0x0e8a, 1],
    [0x0e8c, 0x0ea3, 1],
    [0x0ea5, 0x0ea7, 2],
    [0x0ea8, 0x0eb0, 1],
    [0x0eb2, 0x0eb3, 1],
    [0x0ebd, 0x0ec0, 3],
    [0x0ec1, 0x0ec4, 1],
    [0x0ec6, 0x0edc, 22],
    [0x0edd, 0x0edf, 1],
    [0x0f00, 0x0f40, 64],
    [0x0f41, 0x0f47, 1],
    [0x0f49, 0x0f6c, 1],
    [0x0f88, 0x0f8c, 1],
    [0x1000, 0x102a, 1],
    [0x103f, 0x1050, 17],
    [0x1051, 0x1055, 1],
    [0x105a, 0x105d, 1],
    [0x1061, 0x1065, 4],
    [0x1066, 0x106e, 8],
    [0x106f, 0x1070, 1],
    [0x1075, 0x1081, 1],
    [0x108e, 0x10a0, 18],
    [0x10a1, 0x10c5, 1],
    [0x10c7, 0x10cd, 6],
    [0x10d0, 0x10fa, 1],
    [0x10fc, 0x1248, 1],
    [0x124a, 0x124d, 1],
    [0x1250, 0x1256, 1],
    [0x1258, 0x125a, 2],
    [0x125b, 0x125d, 1],
    [0x1260, 0x1288, 1],
    [0x128a, 0x128d, 1],
    [0x1290, 0x12b0, 1],
    [0x12b2, 0x12b5, 1],
    [0x12b8, 0x12be, 1],
    [0x12c0, 0x12c2, 2],
    [0x12c3, 0x12c5, 1],
    [0x12c8, 0x12d6, 1],
    [0x12d8, 0x1310, 1],
    [0x1312, 0x1315, 1],
    [0x1318, 0x135a, 1],
    [0x1380, 0x138f, 1],
    [0x13a0, 0x13f5, 1],
    [0x13f8, 0x13fd, 1],
    [0x1401, 0x166c, 1],
    [0x166f, 0x167f, 1],
    [0x1681, 0x169a, 1],
    [0x16a0, 0x16ea, 1],
    [0x16f1, 0x16f8, 1],
    [0x1700, 0x1711, 1],
    [0x171f, 0x1731, 1],
    [0x1740, 0x1751, 1],
    [0x1760, 0x176c, 1],
    [0x176e, 0x1770, 1],
    [0x1780, 0x17b3, 1],
    [0x17d7, 0x17dc, 5],
    [0x1820, 0x1878, 1],
    [0x1880, 0x1884, 1],
    [0x1887, 0x18a8, 1],
    [0x18aa, 0x18b0, 6],
    [0x18b1, 0x18f5, 1],
    [0x1900, 0x191e, 1],
    [0x1950, 0x196d, 1],
    [0x1970, 0x1974, 1],
    [0x1980, 0x19ab, 1],
    [0x19b0, 0x19c9, 1],
    [0x1a00, 0x1a16, 1],
    [0x1a20, 0x1a54, 1],
    [0x1aa7, 0x1b05, 94],
    [0x1b06, 0x1b33, 1],
    [0x1b45, 0x1b4c, 1],
    [0x1b83, 0x1ba0, 1],
    [0x1bae, 0x1baf, 1],
    [0x1bba, 0x1be5, 1],
    [0x1c00, 0x1c23, 1],
    [0x1c4d, 0x1c4f, 1],
    [0x1c5a, 0x1c7d, 1],
    [0x1c80, 0x1c88, 1],
    [0x1c90, 0x1cba, 1],
    [0x1cbd, 0x1cbf, 1],
    [0x1ce9, 0x1cec, 1],
    [0x1cee, 0x1cf3, 1],
    [0x1cf5, 0x1cf6, 1],
    [0x1cfa, 0x1d00, 6],
    [0x1d01, 0x1dbf, 1],
    [0x1e00, 0x1f15, 1],
    [0x1f18, 0x1f1d, 1],
    [0x1f20, 0x1f45, 1],
    [0x1f48, 0x1f4d, 1],
    [0x1f50, 0x1f57, 1],
    [0x1f59, 0x1f5f, 2],
    [0x1f60, 0x1f7d, 1],
    [0x1f80, 0x1fb4, 1],
    [0x1fb6, 0x1fbc, 1],
    [0x1fbe, 0x1fc2, 4],
    [0x1fc3, 0x1fc4, 1],
    [0x1fc6, 0x1fcc, 1],
    [0x1fd0, 0x1fd3, 1],
    [0x1fd6, 0x1fdb, 1],
    [0x1fe0, 0x1fec, 1],
    [0x1ff2, 0x1ff4, 1],
    [0x1ff6, 0x1ffc, 1],
    [0x2071, 0x207f, 14],
    [0x2090, 0x209c, 1],
    [0x2102, 0x2107, 5],
    [0x210a, 0x2113, 1],
    [0x2115, 0x2119, 4],
    [0x211a, 0x211d, 1],
    [0x2124, 0x212a, 2],
    [0x212b, 0x212d, 1],
    [0x212f, 0x2139, 1],
    [0x213c, 0x213f, 1],
    [0x2145, 0x2149, 1],
    [0x214e, 0x2183, 53],
    [0x2184, 0x2c00, 2684],
    [0x2c01, 0x2ce4, 1],
    [0x2ceb, 0x2cee, 1],
    [0x2cf2, 0x2cf3, 1],
    [0x2d00, 0x2d25, 1],
    [0x2d27, 0x2d2d, 6],
    [0x2d30, 0x2d67, 1],
    [0x2d6f, 0x2d80, 17],
    [0x2d81, 0x2d96, 1],
    [0x2da0, 0x2da6, 1],
    [0x2da8, 0x2dae, 1],
    [0x2db0, 0x2db6, 1],
    [0x2db8, 0x2dbe, 1],
    [0x2dc0, 0x2dc6, 1],
    [0x2dc8, 0x2dce, 1],
    [0x2dd0, 0x2dd6, 1],
    [0x2dd8, 0x2dde, 1],
    [0x2e2f, 0x3005, 470],
    [0x3006, 0x3031, 43],
    [0x3032, 0x3035, 1],
    [0x303b, 0x303c, 1],
    [0x3041, 0x3096, 1],
    [0x309d, 0x309f, 1],
    [0x30a1, 0x30fa, 1],
    [0x30fc, 0x30ff, 1],
    [0x3105, 0x312f, 1],
    [0x3131, 0x318e, 1],
    [0x31a0, 0x31bf, 1],
    [0x31f0, 0x31ff, 1],
    [0x3400, 0x4dbf, 1],
    [0x4e00, 0xa48c, 1],
    [0xa4d0, 0xa4fd, 1],
    [0xa500, 0xa60c, 1],
    [0xa610, 0xa61f, 1],
    [0xa62a, 0xa62b, 1],
    [0xa640, 0xa66e, 1],
    [0xa67f, 0xa69d, 1],
    [0xa6a0, 0xa6e5, 1],
    [0xa717, 0xa71f, 1],
    [0xa722, 0xa788, 1],
    [0xa78b, 0xa7ca, 1],
    [0xa7d0, 0xa7d1, 1],
    [0xa7d3, 0xa7d5, 2],
    [0xa7d6, 0xa7d9, 1],
    [0xa7f2, 0xa801, 1],
    [0xa803, 0xa805, 1],
    [0xa807, 0xa80a, 1],
    [0xa80c, 0xa822, 1],
    [0xa840, 0xa873, 1],
    [0xa882, 0xa8b3, 1],
    [0xa8f2, 0xa8f7, 1],
    [0xa8fb, 0xa8fd, 2],
    [0xa8fe, 0xa90a, 12],
    [0xa90b, 0xa925, 1],
    [0xa930, 0xa946, 1],
    [0xa960, 0xa97c, 1],
    [0xa984, 0xa9b2, 1],
    [0xa9cf, 0xa9e0, 17],
    [0xa9e1, 0xa9e4, 1],
    [0xa9e6, 0xa9ef, 1],
    [0xa9fa, 0xa9fe, 1],
    [0xaa00, 0xaa28, 1],
    [0xaa40, 0xaa42, 1],
    [0xaa44, 0xaa4b, 1],
    [0xaa60, 0xaa76, 1],
    [0xaa7a, 0xaa7e, 4],
    [0xaa7f, 0xaaaf, 1],
    [0xaab1, 0xaab5, 4],
    [0xaab6, 0xaab9, 3],
    [0xaaba, 0xaabd, 1],
    [0xaac0, 0xaac2, 2],
    [0xaadb, 0xaadd, 1],
    [0xaae0, 0xaaea, 1],
    [0xaaf2, 0xaaf4, 1],
    [0xab01, 0xab06, 1],
    [0xab09, 0xab0e, 1],
    [0xab11, 0xab16, 1],
    [0xab20, 0xab26, 1],
    [0xab28, 0xab2e, 1],
    [0xab30, 0xab5a, 1],
    [0xab5c, 0xab69, 1],
    [0xab70, 0xabe2, 1],
    [0xac00, 0xd7a3, 1],
    [0xd7b0, 0xd7c6, 1],
    [0xd7cb, 0xd7fb, 1],
    [0xf900, 0xfa6d, 1],
    [0xfa70, 0xfad9, 1],
    [0xfb00, 0xfb06, 1],
    [0xfb13, 0xfb17, 1],
    [0xfb1d, 0xfb1f, 2],
    [0xfb20, 0xfb28, 1],
    [0xfb2a, 0xfb36, 1],
    [0xfb38, 0xfb3c, 1],
    [0xfb3e, 0xfb40, 2],
    [0xfb41, 0xfb43, 2],
    [0xfb44, 0xfb46, 2],
    [0xfb47, 0xfbb1, 1],
    [0xfbd3, 0xfd3d, 1],
    [0xfd50, 0xfd8f, 1],
    [0xfd92, 0xfdc7, 1],
    [0xfdf0, 0xfdfb, 1],
    [0xfe70, 0xfe74, 1],
    [0xfe76, 0xfefc, 1],
    [0xff21, 0xff3a, 1],
    [0xff41, 0xff5a, 1],
    [0xff66, 0xffbe, 1],
    [0xffc2, 0xffc7, 1],
    [0xffca, 0xffcf, 1],
    [0xffd2, 0xffd7, 1],
    [0xffda, 0xffdc, 1],
];

const R32 = [
    [0x10000, 0x1000b, 1],
    [0x1000d, 0x10026, 1],
    [0x10028, 0x1003a, 1],
    [0x1003c, 0x1003d, 1],
    [0x1003f, 0x1004d, 1],
    [0x10050, 0x1005d, 1],
    [0x10080, 0x100fa, 1],
    [0x10280, 0x1029c, 1],
    [0x102a0, 0x102d0, 1],
    [0x10300, 0x1031f, 1],
    [0x1032d, 0x10340, 1],
    [0x10342, 0x10349, 1],
    [0x10350, 0x10375, 1],
    [0x10380, 0x1039d, 1],
    [0x103a0, 0x103c3, 1],
    [0x103c8, 0x103cf, 1],
    [0x10400, 0x1049d, 1],
    [0x104b0, 0x104d3, 1],
    [0x104d8, 0x104fb, 1],
    [0x10500, 0x10527, 1],
    [0x10530, 0x10563, 1],
    [0x10570, 0x1057a, 1],
    [0x1057c, 0x1058a, 1],
    [0x1058c, 0x10592, 1],
    [0x10594, 0x10595, 1],
    [0x10597, 0x105a1, 1],
    [0x105a3, 0x105b1, 1],
    [0x105b3, 0x105b9, 1],
    [0x105bb, 0x105bc, 1],
    [0x10600, 0x10736, 1],
    [0x10740, 0x10755, 1],
    [0x10760, 0x10767, 1],
    [0x10780, 0x10785, 1],
    [0x10787, 0x107b0, 1],
    [0x107b2, 0x107ba, 1],
    [0x10800, 0x10805, 1],
    [0x10808, 0x1080a, 2],
    [0x1080b, 0x10835, 1],
    [0x10837, 0x10838, 1],
    [0x1083c, 0x1083f, 3],
    [0x10840, 0x10855, 1],
    [0x10860, 0x10876, 1],
    [0x10880, 0x1089e, 1],
    [0x108e0, 0x108f2, 1],
    [0x108f4, 0x108f5, 1],
    [0x10900, 0x10915, 1],
    [0x10920, 0x10939, 1],
    [0x10980, 0x109b7, 1],
    [0x109be, 0x109bf, 1],
    [0x10a00, 0x10a10, 16],
    [0x10a11, 0x10a13, 1],
    [0x10a15, 0x10a17, 1],
    [0x10a19, 0x10a35, 1],
    [0x10a60, 0x10a7c, 1],
    [0x10a80, 0x10a9c, 1],
    [0x10ac0, 0x10ac7, 1],
    [0x10ac9, 0x10ae4, 1],
    [0x10b00, 0x10b35, 1],
    [0x10b40, 0x10b55, 1],
    [0x10b60, 0x10b72, 1],
    [0x10b80, 0x10b91, 1],
    [0x10c00, 0x10c48, 1],
    [0x10c80, 0x10cb2, 1],
    [0x10cc0, 0x10cf2, 1],
    [0x10d00, 0x10d23, 1],
    [0x10e80, 0x10ea9, 1],
    [0x10eb0, 0x10eb1, 1],
    [0x10f00, 0x10f1c, 1],
    [0x10f27, 0x10f30, 9],
    [0x10f31, 0x10f45, 1],
    [0x10f70, 0x10f81, 1],
    [0x10fb0, 0x10fc4, 1],
    [0x10fe0, 0x10ff6, 1],
    [0x11003, 0x11037, 1],
    [0x11071, 0x11072, 1],
    [0x11075, 0x11083, 14],
    [0x11084, 0x110af, 1],
    [0x110d0, 0x110e8, 1],
    [0x11103, 0x11126, 1],
    [0x11144, 0x11147, 3],
    [0x11150, 0x11172, 1],
    [0x11176, 0x11183, 13],
    [0x11184, 0x111b2, 1],
    [0x111c1, 0x111c4, 1],
    [0x111da, 0x111dc, 2],
    [0x11200, 0x11211, 1],
    [0x11213, 0x1122b, 1],
    [0x1123f, 0x11240, 1],
    [0x11280, 0x11286, 1],
    [0x11288, 0x1128a, 2],
    [0x1128b, 0x1128d, 1],
    [0x1128f, 0x1129d, 1],
    [0x1129f, 0x112a8, 1],
    [0x112b0, 0x112de, 1],
    [0x11305, 0x1130c, 1],
    [0x1130f, 0x11310, 1],
    [0x11313, 0x11328, 1],
    [0x1132a, 0x11330, 1],
    [0x11332, 0x11333, 1],
    [0x11335, 0x11339, 1],
    [0x1133d, 0x11350, 19],
    [0x1135d, 0x11361, 1],
    [0x11400, 0x11434, 1],
    [0x11447, 0x1144a, 1],
    [0x1145f, 0x11461, 1],
    [0x11480, 0x114af, 1],
    [0x114c4, 0x114c5, 1],
    [0x114c7, 0x11580, 185],
    [0x11581, 0x115ae, 1],
    [0x115d8, 0x115db, 1],
    [0x11600, 0x1162f, 1],
    [0x11644, 0x11680, 60],
    [0x11681, 0x116aa, 1],
    [0x116b8, 0x11700, 72],
    [0x11701, 0x1171a, 1],
    [0x11740, 0x11746, 1],
    [0x11800, 0x1182b, 1],
    [0x118a0, 0x118df, 1],
    [0x118ff, 0x11906, 1],
    [0x11909, 0x1190c, 3],
    [0x1190d, 0x11913, 1],
    [0x11915, 0x11916, 1],
    [0x11918, 0x1192f, 1],
    [0x1193f, 0x11941, 2],
    [0x119a0, 0x119a7, 1],
    [0x119aa, 0x119d0, 1],
    [0x119e1, 0x119e3, 2],
    [0x11a00, 0x11a0b, 11],
    [0x11a0c, 0x11a32, 1],
    [0x11a3a, 0x11a50, 22],
    [0x11a5c, 0x11a89, 1],
    [0x11a9d, 0x11ab0, 19],
    [0x11ab1, 0x11af8, 1],
    [0x11c00, 0x11c08, 1],
    [0x11c0a, 0x11c2e, 1],
    [0x11c40, 0x11c72, 50],
    [0x11c73, 0x11c8f, 1],
    [0x11d00, 0x11d06, 1],
    [0x11d08, 0x11d09, 1],
    [0x11d0b, 0x11d30, 1],
    [0x11d46, 0x11d60, 26],
    [0x11d61, 0x11d65, 1],
    [0x11d67, 0x11d68, 1],
    [0x11d6a, 0x11d89, 1],
    [0x11d98, 0x11ee0, 328],
    [0x11ee1, 0x11ef2, 1],
    [0x11f02, 0x11f04, 2],
    [0x11f05, 0x11f10, 1],
    [0x11f12, 0x11f33, 1],
    [0x11fb0, 0x12000, 80],
    [0x12001, 0x12399, 1],
    [0x12480, 0x12543, 1],
    [0x12f90, 0x12ff0, 1],
    [0x13000, 0x1342f, 1],
    [0x13441, 0x13446, 1],
    [0x14400, 0x14646, 1],
    [0x16800, 0x16a38, 1],
    [0x16a40, 0x16a5e, 1],
    [0x16a70, 0x16abe, 1],
    [0x16ad0, 0x16aed, 1],
    [0x16b00, 0x16b2f, 1],
    [0x16b40, 0x16b43, 1],
    [0x16b63, 0x16b77, 1],
    [0x16b7d, 0x16b8f, 1],
    [0x16e40, 0x16e7f, 1],
    [0x16f00, 0x16f4a, 1],
    [0x16f50, 0x16f93, 67],
    [0x16f94, 0x16f9f, 1],
    [0x16fe0, 0x16fe1, 1],
    [0x16fe3, 0x17000, 29],
    [0x17001, 0x187f7, 1],
    [0x18800, 0x18cd5, 1],
    [0x18d00, 0x18d08, 1],
    [0x1aff0, 0x1aff3, 1],
    [0x1aff5, 0x1affb, 1],
    [0x1affd, 0x1affe, 1],
    [0x1b000, 0x1b122, 1],
    [0x1b132, 0x1b150, 30],
    [0x1b151, 0x1b152, 1],
    [0x1b155, 0x1b164, 15],
    [0x1b165, 0x1b167, 1],
    [0x1b170, 0x1b2fb, 1],
    [0x1bc00, 0x1bc6a, 1],
    [0x1bc70, 0x1bc7c, 1],
    [0x1bc80, 0x1bc88, 1],
    [0x1bc90, 0x1bc99, 1],
    [0x1d400, 0x1d454, 1],
    [0x1d456, 0x1d49c, 1],
    [0x1d49e, 0x1d49f, 1],
    [0x1d4a2, 0x1d4a5, 3],
    [0x1d4a6, 0x1d4a9, 3],
    [0x1d4aa, 0x1d4ac, 1],
    [0x1d4ae, 0x1d4b9, 1],
    [0x1d4bb, 0x1d4bd, 2],
    [0x1d4be, 0x1d4c3, 1],
    [0x1d4c5, 0x1d505, 1],
    [0x1d507, 0x1d50a, 1],
    [0x1d50d, 0x1d514, 1],
    [0x1d516, 0x1d51c, 1],
    [0x1d51e, 0x1d539, 1],
    [0x1d53b, 0x1d53e, 1],
    [0x1d540, 0x1d544, 1],
    [0x1d546, 0x1d54a, 4],
    [0x1d54b, 0x1d550, 1],
    [0x1d552, 0x1d6a5, 1],
    [0x1d6a8, 0x1d6c0, 1],
    [0x1d6c2, 0x1d6da, 1],
    [0x1d6dc, 0x1d6fa, 1],
    [0x1d6fc, 0x1d714, 1],
    [0x1d716, 0x1d734, 1],
    [0x1d736, 0x1d74e, 1],
    [0x1d750, 0x1d76e, 1],
    [0x1d770, 0x1d788, 1],
    [0x1d78a, 0x1d7a8, 1],
    [0x1d7aa, 0x1d7c2, 1],
    [0x1d7c4, 0x1d7cb, 1],
    [0x1df00, 0x1df1e, 1],
    [0x1df25, 0x1df2a, 1],
    [0x1e030, 0x1e06d, 1],
    [0x1e100, 0x1e12c, 1],
    [0x1e137, 0x1e13d, 1],
    [0x1e14e, 0x1e290, 322],
    [0x1e291, 0x1e2ad, 1],
    [0x1e2c0, 0x1e2eb, 1],
    [0x1e4d0, 0x1e4eb, 1],
    [0x1e7e0, 0x1e7e6, 1],
    [0x1e7e8, 0x1e7eb, 1],
    [0x1e7ed, 0x1e7ee, 1],
    [0x1e7f0, 0x1e7fe, 1],
    [0x1e800, 0x1e8c4, 1],
    [0x1e900, 0x1e943, 1],
    [0x1e94b, 0x1ee00, 1205],
    [0x1ee01, 0x1ee03, 1],
    [0x1ee05, 0x1ee1f, 1],
    [0x1ee21, 0x1ee22, 1],
    [0x1ee24, 0x1ee27, 3],
    [0x1ee29, 0x1ee32, 1],
    [0x1ee34, 0x1ee37, 1],
    [0x1ee39, 0x1ee3b, 2],
    [0x1ee42, 0x1ee47, 5],
    [0x1ee49, 0x1ee4d, 2],
    [0x1ee4e, 0x1ee4f, 1],
    [0x1ee51, 0x1ee52, 1],
    [0x1ee54, 0x1ee57, 3],
    [0x1ee59, 0x1ee61, 2],
    [0x1ee62, 0x1ee64, 2],
    [0x1ee67, 0x1ee6a, 1],
    [0x1ee6c, 0x1ee72, 1],
    [0x1ee74, 0x1ee77, 1],
    [0x1ee79, 0x1ee7c, 1],
    [0x1ee7e, 0x1ee80, 2],
    [0x1ee81, 0x1ee89, 1],
    [0x1ee8b, 0x1ee9b, 1],
    [0x1eea1, 0x1eea3, 1],
    [0x1eea5, 0x1eea9, 1],
    [0x1eeab, 0x1eebb, 1],
    [0x20000, 0x2a6df, 1],
    [0x2a700, 0x2b739, 1],
    [0x2b740, 0x2b81d, 1],
    [0x2b820, 0x2cea1, 1],
    [0x2ceb0, 0x2ebe0, 1],
    [0x2f800, 0x2fa1d, 1],
    [0x30000, 0x3134a, 1],
    [0x31350, 0x323af, 1],
];

const LatinOffset = 6;

export const L = { R16, R32, LatinOffset };
