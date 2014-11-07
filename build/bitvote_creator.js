maybe_creating = false;  // Whether maybe_creating already.
launch_key = eth.keys[1] // Second key is Bitvote launch key.

function createNotLaunch(launch_key, bitvote_fun, anyperid_fun) {
    if(maybe_creating){ alert("Already creating?"); }
    maybe_creating = true;
    transact_code(launch_key, "0x60006000546020602054604060405460e0606054606060805470010000000000000000000000000000000060a05467100000000000000060c0547350441127ea5b9dfd835a9aba4e1dc9c1257b58ca60e054600060005357336020535760805360405357610560806100726000396105d25860006000546020602054604060405460e0606054606060805470010000000000000000000000000000000060a05467100000000000000060c0547350441127ea5b9dfd835a9aba4e1dc9c1257b58ca60e05460005356330e0f6102045960c0536020350c0f61007f596a6c6f772061646472657373610100546020610100f26002602036040e0f610135596772656769737465726000350e0f6100eb596020355661012054610120530f6100cb5971616c72656164792072656769737465726564610140546020610140f24260a053024201602035576972656769737465726564610160546020610160f269646572656769737465726000350e0f61011c596000602035576b646572656769737465726564610180546020610180f26d4f6e6550657249442062616420316101a05460206101a0f26003602036040e0f61014e59636d6f76656000350e6101505860000f6101eb5960c0536040350c0f610177596a6c6f7720616464726573736101c05460206101c0f2604035560f61019f5973616c7265616479206578697374732074686572656101e05460206101e0f26020355661012054610120530f6101d2596101205360403557600060203557646d6f766564610200546020610200f26101eb586d646f6573206e6f74206578697374610220546020610220f26d4f6e655065724944206261642032610240546020610240f260205356330e0f610257596002602036040e0f0f610236596e4f6e65506572494453657420626164610260546020610260f26000356000535760203560205357676368616e67656421610280546020610280f26001602036040e0f6102a5596a746f7069635f636f756e746000350e0f61028e596060536080536040535603056102a05460206102a0f26b616e796f6e652062616420346102c05460206102c0f26002602036040e0f6103485969766f74655f636f756e746000350e0f610312596060536080536040535603056020350c0f0f6102fc5975746f70696320646f65736e74206578697374207965746102e05460206102e0f2606053602035026080530156610300546020610300f2666163636f756e746000350e0f6103315960203556610320546020610320f26b616e796f6e65206261642031610340546020610340f26003602036040e0f6104785963766f74656000350e0f610461596060536080536040535603056020350c0f0f61039f597b746f70696320646f65736e742065786973742079657428766f746529610360546020610360f23356610380546000610380530e0f6103d5597863616e7420766f74652c206e6f7420726567697374657265646103a05460206103a0f24260403560a0536103805305010d0f610412597e63616e6e6f74207370656e64206d6f7265207468616e20796f7520686176656103c05460206103c0f260403560a05361038053050160a0530260a05361038053070133576060536020350260805301566103e0546040356103e0530160605360203502608053015764766f746564610400546020610400f26b616e796f6e65206261642032610420546020610420f26003602036040d0f61054959602060605303602036040d0f6104b45974746f6f206c6f6e6720746f70696320737472696e67610440546020610440f26040535661046054602061046053016104805460006104a0546020602036040261046053016104c0546104c053610480530c0f6104fb5960006104a053602002350e0f6104fd5860000f610529596104a053602002356104805357602061048053016104805460016104a053016104a0546104dd5860605361046053016040535768746f706963207365746104e05460206104e0f26b616e796f6e65206261642033610500546020610500f26000f2", bitvote_fun);
    transact_code(launch_key, "0x60006000546020602054336000535761010b8061001d60003961012858600061017f556000600054602060205460005356330e0f610065596001602036040e0f0f610044596e696e697469616c697a65722062616460405460206040f261006558600035602053576000600053576a696e697469616c697a656460605460206060f2602053566080546080530f6100fd59608053330e0f6100a6597e626974766f74652063616e6e6f74206861766520616e206964656e7469747960a054602060a0f260405b905b016000905460e054677265676973746572600060e053015433602060e053015460e05360c0546020610120604060c05360006020535660645c03f150610120536101005461010053610140546020610140f260205356610160546020610160f26000f2", anyperid_fun);
}
