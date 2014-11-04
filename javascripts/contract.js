// function createNotLaunch() // In bitvote_create.js generated by create_launcher_js.sh

var NameReg_addr = "0x50441127ea5b9dfd835a9aba4e1dc9c1257b58ca";

var bitvote_addr = null;

function bitvoteAddr(without_alert) {
    // TODO... use NameReg, also this is not robust enough if the bitvote
    //   contract ever changes name.
    // if(bitvote_addr == null) { 
    //   bitvote_addr = eth.stateAt(NameReg_addr, eth.fromAscii("BitVote")); }
    if(without_alert!=undefined && without_alert!=null && !without_alert &&
       bitvote_addr==null){
        alert("no addr: " + bitvote_addr + "\n" + without_alert);
    }
    return hexify(bitvote_addr);
}

function find_own_vote_address() {
    for( ; i < eth.keys.length ; i++) {
        addr = eth.secretToAddress(eth.keys[i]);
        state = registeredState(addr);
        //Got it. TODO handle more than one. (and have warning about it)
        if( state != "0x") { return addr; }
    }
    return null;
}

// Access storage elements from bitvote in particular.
function bvStateAt(_s) { return eth.stateAt(bitvoteAddr(), _s); }

// Which is the One Per ID according to bitvote.
function onePerID(){ return bvStateAt("0x00"); }
function onePerIDSet(){ return bvStateAt("0x20"); }

var TopicI = 0x40;
var TopicStartI = 0x60;
var TopicSz = 224;

// Asking stuff about topics.
function topicN() {
    i = eth.toDecimal(bvStateAt(TopicI)).valueOf();
    return (i - TopicStartI)/TopicSz;
}

function topicVotes(i) {  // Returns the amount of votes received.
    if(i<0 || i >= topicN()) { return null; }
    return bvStateAt(TopicStartI + TopicSz*i);
}
function topicString(i) {  // Returns the vote amount on a topic and the string.
    if(i<0 || i >= topicN()) { return null; }
    
    k = TopicStartI + TopicSz*i + 0x20;

    string = eth.toAscii(bvStateAt(k));
    k += 0x20;
    while(k < TopicSz) {
        string += eth.toAscii(bvStateAt(k));
        k += 0x20;
    }
    return string;
}

// Asking stuff about an account.
function registeredState(addr) {
    return bvStateAt(addr);
}

function stateRegisteredTime(state) {
    substr = state.substr(2,32);
    for(i= substr.length -1 ; i>=0 ; i-=1) { if(substr[i]!='0'){ i +=1; break; } }
    return "0x" + substr.substr(0, i); // First part.
}
function stateVoteTime(addr) {
    if(addr == null) { addr = myAddr() }
    return "0x" + state.substr(34); // Last part.
}
