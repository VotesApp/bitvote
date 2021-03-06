//  Copyright (C) 10-11-2014 Jasper den Ouden.
//
//  This is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

var safety = true;

function mayCreateNotLaunch(bitvote_fun, anyperid_fun) {
    var maybe_addr = bitvoteAddr();
    if(maybe_addr != '0x' && maybe_addr != null) {
        alert("Already created!");
        return;
    }
    createNotLaunch(launch_key, bitvote_fun, anyperid_fun);
}

// NOTE Non-serious of course, AnyPerID is a bad OnePerID, and user keeps
//  total control over it.

// Tells the bitvote contract which the OnePerID contract is.
function change(anyperid_addr, changer_addr, puppeteer_addr, fun) {
    var addr = bitvoteAddr();
    if(safety) {
        if(addr == "0x" || addr == null){ alert("No bitvote contract"); return; }
        if(anyperid_addr == "0x" || anyperid_addr == null){
            alert("No prospective anyperid contract."); return; 
        }
    }
    var changer_key = got_privkey(changer_addr); //TODO crap, this looks wrong.
    if(changer_key == null){ alert("You dont have the private key to launch it.");  return;}

    if(anAnyPerID_already_involved(anyperid_addr) != "0x") {
        if( eth.stateAt(anyperid_addr, "0x20") != "0x" ){
            alert("Inconsistent state AnyPerID!"); return;
        }
        eth.transact({"from":changer_key, "to":anyperid_addr, "value":0, "data":[addr]});
    }
  // First argument the new anyperid, and second keeping full control to set later,
    var data = [anyperid_addr, changer_addr, puppeteer_addr];
    eth.transact({"from":changer_key, "to":addr, "value":0, "data":data}, fun);
}

function registerAtOnePerID(addr, fun) {
    var addr = hexify(addr);
    if(safety && addr == changer()){
        alert("If the setter is the same as an bitvote account, the former cannot do anything. Prevented transaction."); return; }
    
    var priv = got_privkey(addr);
    if(priv == null){ alert("Dont have private key to do transaction."); return; }
    eth.transact({"from":priv, "to":onePerID(), "value":0}, fun);
}

function createTopic(string, priv, fun) {
    if( safety && eth.secretToAddress(priv) == changer() ){
        alert("The OnePerID setter cannot do anything outside role.\nLike creating topics.");
    }
    var data = [];
    for(var i = 0 ; i < string.length ; i+= 32 ){
        data.push(string.substr(i, i+32));
    }
    while( i/32 <= 3 ){ data.push(""); i+=32; }
    eth.transact({"from":priv, "to":bitvoteAddr(), "value":0, "data":data}); //TODO
}

function vote(vote_addr, index, amount) {
    if(safety && registeredState(vote_addr)=="0x") {
        alert("This doesnt look to be a registered account."); return;
    }
    var priv = got_privkey(vote_addr);
    if(priv == null){ alert("You dont have the private key of address.");  return;}
    
    var data = [eth.fromAscii("vote"), "0x" + index.toString(16), "0x" + amount.toString(16)];
    eth.transact({"from":priv, "to":bitvoteAddr(), "value":0, "data":data});
}

function puppetSend(to_addr, args) {
    var priv = got_privkey(puppeteer());
    if( priv == null ){ alert("Dont have privkey to puppet send."); return; }

    var data = [to_addr].concat(args);
    for(var i =0 ;i<data.length; i++){ alert(data[i]); }
    eth.transact({"from":priv, "to":bitvoteAddr(), "value":0, "data":data});
}
