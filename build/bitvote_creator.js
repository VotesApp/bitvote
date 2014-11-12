maybe_creating = false;  // Whether maybe_creating already.
launch_key = eth.keys[1] // Second key is Bitvote launch key.

function createNotLaunch(launch_key, bitvote_fun, anyperid_fun) {
    if(maybe_creating){ alert("Already creating?"); }
    maybe_creating = true;
    transact_code(launch_key, "0x60006000546020602054604060405460e0606054606060805470010000000000000000000000000000000060a05467100000000000000060c0547350441127ea5b9dfd835a9aba4e1dc9c1257b58ca60e054600060005357336020535760805360405357610795806100726000396108075860006000546020602054604060405460e0606054606060805470010000000000000000000000000000000060a05467100000000000000060c0547350441127ea5b9dfd835a9aba4e1dc9c1257b58ca60e05460005356330e0f61030d5960c0536020350c0f610094597f6c6f772061646472657373000000000000000000000000000000000000000000610100546020610100f26002602036040e0f6101c2597f72656769737465720000000000000000000000000000000000000000000000006000350e0f61013c596020355661012054610120530f610106597f616c726561647920726567697374657265640000000000000000000000000000610140546020610140f24260a053024201602035577f7265676973746572656400000000000000000000000000000000000000000000610160546020610160f27f64657265676973746572000000000000000000000000000000000000000000006000350e0f610197596000602035577f6465726567697374657265640000000000000000000000000000000000000000610180546020610180f27f4f6e6550657249442062616420310000000000000000000000000000000000006101a05460206101a0f26003602036040e0f6101f7597f6d6f7665000000000000000000000000000000000000000000000000000000006000350e6101f95860000f6102e25960c0536040350c0f610235597f6c6f7720616464726573730000000000000000000000000000000000000000006101c05460206101c0f2604035560f610269597f616c7265616479206578697374732074686572650000000000000000000000006101e05460206101e0f26020355661012054610120530f6102b75961012053604035576000602035577f6d6f766564000000000000000000000000000000000000000000000000000000610200546020610200f26102e2587f646f6573206e6f74206578697374000000000000000000000000000000000000610220546020610220f27f4f6e655065724944206261642032000000000000000000000000000000000000610240546020610240f260205356330e0f610389596002602036040e0f0f610350597f4f6e655065724944536574206261640000000000000000000000000000000000610260546020610260f260003560005357602035602053577f6368616e67656421000000000000000000000000000000000000000000000000610280546020610280f26001602036040e0f610400597f746f7069635f636f756e740000000000000000000000000000000000000000006000350e0f6103d5596060536080536040535603056102a05460206102a0f27f616e796f6e6520626164203400000000000000000000000000000000000000006102c05460206102c0f26002602036040e0f6104f0597f766f74655f636f756e74000000000000000000000000000000000000000000006000350e0f61048d596060536080536040535603056020350c0f0f610477597f746f70696320646f65736e7420657869737420796574000000000000000000006102e05460206102e0f2606053602035026080530156610300546020610300f27f6163636f756e74000000000000000000000000000000000000000000000000006000350e0f6104c55960203556610320546020610320f27f616e796f6e652062616420310000000000000000000000000000000000000000610340546020610340f26003602036040e0f610677597f766f7465000000000000000000000000000000000000000000000000000000006000350e0f61064c596060536080536040535603056020350c0f0f610567597f746f70696320646f65736e742065786973742079657428766f74652900000000610360546020610360f23356610380546000610380530e0f6105a4597f63616e7420766f74652c206e6f742072656769737465726564000000000000006103a05460206103a0f24260403560a0536103805305010d0f6105e2597f63616e6e6f74207370656e64206d6f7265207468616e20796f752068617665006103c05460206103c0f260403560a05361038053050160a0530260a05361038053070133576060536020350260805301566103e0546040356103e053016060536020350260805301577f766f746564000000000000000000000000000000000000000000000000000000610400546020610400f27f616e796f6e652062616420320000000000000000000000000000000000000000610420546020610420f26003602036040d0f61076a59602060605303602036040d0f6106be597f746f6f206c6f6e6720746f70696320737472696e670000000000000000000000610440546020610440f26040535661046054602061046053016104805460006104a0546020602036040261046053016104c0546104c053610480530c0f6107055960006104a053602002350e0f6107075860000f610733596104a053602002356104805357602061048053016104805460016104a053016104a0546106e7586060536104605301604053577f746f7069632073657400000000000000000000000000000000000000000000006104e05460206104e0f27f616e796f6e652062616420330000000000000000000000000000000000000000610500546020610500f26000f2", bitvote_fun);
    transact_code(launch_key, "0x60006000546020602054336000535761014a8061001d60003961016758600061017f556000600054602060205460005356330e0f61008b596001602036040e0f0f610055597f696e697469616c697a657220626164000000000000000000000000000000000060405460206040f261008b58600035602053576000600053577f696e697469616c697a656400000000000000000000000000000000000000000060605460206060f2602053566080546080530f61013c59608053330e0f6100cd597f626974766f74652063616e6e6f74206861766520616e206964656e746974790060a054602060a0f260405b905b016000905460e0547f7265676973746572000000000000000000000000000000000000000000000000600060e053015433602060e053015460e05360c0546020610120604060c05360006020535660645c03f150610120536101005461010053610140546020610140f260205356610160546020610160f26000f2", anyperid_fun);
}
